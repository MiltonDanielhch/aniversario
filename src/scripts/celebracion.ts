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

// Filtro por día
const filtros = $('filtros');
filtros.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-filtro]');
  if (!b) return;
  const f = b.dataset.filtro!;
  filtros.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  document.querySelectorAll<HTMLElement>('.dia').forEach((d) => { d.hidden = f !== 'todos' && d.dataset.fecha !== f; });
});

// Estado de cada acto: Finalizado / En curso / Próximo
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
