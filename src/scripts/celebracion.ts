import { ACTOS, DIAS, DIA_CENTRAL, DURACION_MIN, marcaDeTiempo } from '../data/cronograma';
import { crearFuegos } from './fuegos';

const INICIO = Date.parse(DIA_CENTRAL.inicio);
const FIN = Date.parse(DIA_CENTRAL.fin);
const DURACION = DURACION_MIN * 60e3;

// Para probar: ?simular=2026-11-17T23:59:50 (hora de Bolivia) arranca el reloj en ese instante.
const simular = new URLSearchParams(location.search).get('simular');
const desfase = simular && !Number.isNaN(Date.parse(simular + '-04:00')) ? Date.parse(simular + '-04:00') - Date.now() : 0;
const ahora = () => Date.now() + desfase;

const $ = (id: string) => document.getElementById(id)!;
const dos = (v: number) => String(v).padStart(2, '0');

const fuegos = crearFuegos($('fuegos') as HTMLCanvasElement, $('toggle-fuegos') as HTMLButtonElement, $('toggle-txt'));

/* ── Filtros (día + etapa) y colapso de etapas ─────────────────────────────── */
const filtrosDias = $('filtros');
const filtrosEtapas = document.getElementById('etapas');

// Estado de la vista. 'semana' arranca expandida; las otras, plegadas.
let diaActivo = 'todos';
let etapaActiva = 'todas';
const expandidas = new Set<string>(['semana']);

function refrescar() {
  const hayFiltro = diaActivo !== 'todos' || etapaActiva !== 'todas';

  // 1) Cada día: pasa filtro de día AND filtro de etapa AND (hay filtro O su etapa está expandida).
  document.querySelectorAll<HTMLElement>('.dia').forEach((d) => {
    const okDia = diaActivo === 'todos' || d.dataset.fecha === diaActivo;
    const okEtapa = etapaActiva === 'todas' || d.dataset.etapa === etapaActiva;
    const abierta = expandidas.has(d.dataset.etapa!);
    d.hidden = !(okDia && okEtapa && (hayFiltro || abierta));
  });

  // 2) La etapa se oculta ENTERA solo si el filtro de etapa la excluye
  //    (el colapso NO oculta la cabecera: deja ver el botón "Ver N actos").
  document.querySelectorAll<HTMLElement>('.etapa').forEach((sec) => {
    const excluida = etapaActiva !== 'todas' && sec.dataset.etapa !== etapaActiva;
    sec.hidden = excluida;
    const btn = sec.querySelector<HTMLButtonElement>('.etapa-toggle');
    if (btn) {
      btn.setAttribute('aria-expanded', String(expandidas.has(sec.dataset.etapa!)));
      btn.hidden = hayFiltro; // el toggle solo manda en vista "Todo"
    }
  });
}

filtrosDias.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-filtro]');
  if (!b) return;
  diaActivo = b.dataset.filtro!;
  filtrosDias.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  refrescar();
  // Si elegiste un día concreto, llevá la vista hasta él (respeta scroll-padding-top del header).
  if (diaActivo !== 'todos') {
    requestAnimationFrame(() => {
      document.querySelector<HTMLElement>(`.dia[data-fecha="${diaActivo}"]`)
        ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }
});

filtrosEtapas?.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-etapa]');
  if (!b) return;
  etapaActiva = b.dataset.etapa!;
  filtrosEtapas.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  // Si el día activo no pertenece a la nueva etapa, volver a "Todos".
  if (diaActivo !== 'todos') {
    const d = document.querySelector<HTMLElement>(`.dia[data-fecha="${diaActivo}"]`);
    if (!d || d.dataset.etapa !== etapaActiva) {
      diaActivo = 'todos';
      filtrosDias.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.filtro === 'todos')));
    }
  }
  refrescar();
});

// Toggle de etapa (delegación): abre/cierra solo en vista "Todo".
document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLButtonElement>('.etapa-toggle');
  if (!t || t.hidden) return;
  if (diaActivo !== 'todos' || etapaActiva !== 'todas') return;
  const et = t.closest<HTMLElement>('.etapa')!.dataset.etapa!;
  if (expandidas.has(et)) expandidas.delete(et); else expandidas.add(et);
  refrescar();
});

refrescar(); // estado inicial: semana grande abierta, resto plegado

/* ── Estado de cada acto: Finalizado / En curso / Próximo (SIN CAMBIOS) ─────── */
const actos = [...document.querySelectorAll<HTMLElement>('.acto')];
function pintarEstados(n: number) {
  const prox = actos.find((a) => Number(a.dataset.t) > n);
  for (const a of actos) {
    const t = Number(a.dataset.t);
    const pill = a.querySelector<HTMLElement>('.estado')!;
    let cls = '', txt = '';
    if (n >= t + DURACION) { cls = 'pasado'; txt = 'Finalizado'; }
    else if (n >= t) { cls = 'en-curso'; txt = 'En curso'; }
    else if (a === prox) { cls = 'proximo'; txt = 'Próximo'; }
    a.classList.toggle('pasado', cls === 'pasado');
    pill.className = `estado ${cls}`;
    pill.textContent = txt;
    pill.hidden = !txt;
  }
}

let ultimoMinuto = -1;
function tick() {
  const n = ahora();
  const falta = INICIO - n;
  if (falta > 0) {
    const s = Math.floor(falta / 1000);
    $('cd-d').textContent = String(Math.floor(s / 86400));
    $('cd-h').textContent = dos(Math.floor((s % 86400) / 3600));
    $('cd-m').textContent = dos(Math.floor((s % 3600) / 60));
    $('cd-s').textContent = dos(s % 60);
  } else if (n >= FIN) {
    $('fiesta-titulo').textContent = '¡Gracias, Beni!';
    $('fiesta-texto').textContent = 'Celebramos juntos los 184 años de nuestro departamento.';
  }
  document.documentElement.classList.toggle('es-dia', n >= INICIO);
  document.documentElement.classList.toggle('es-pasado', n >= FIN);
  fuegos.permitir(n >= INICIO && n < FIN);

  const p = ACTOS.find((a) => marcaDeTiempo(a) > n);
  $('prox').hidden = !p;
  if (p) {
    $('prox-h').textContent = `${DIAS[p.fecha].corto} · ${p.hora}`;
    $('prox-t').textContent = p.acto;
  }
  const m = Math.floor(n / 60e3);
  if (m !== ultimoMinuto) { ultimoMinuto = m; pintarEstados(n); }
}

tick();
setInterval(tick, 1000);