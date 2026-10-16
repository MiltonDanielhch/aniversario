// Fuegos artificiales en canvas, sin dependencias.
const COLORES = ['#E8A33A', '#D46F17', '#2FBF6B', '#1F78B4', '#F4D35E', '#FF5D5D', '#FFFFFF'];
const CLAVE = 'beni184-fuegos';

interface Cohete { x: number; y: number; vx: number; vy: number; c: string; meta: number }
interface Chispa { x: number; y: number; vx: number; vy: number; vida: number; d: number; c: string }

const azar = (a: number, b: number) => a + Math.random() * (b - a);
const color = () => COLORES[Math.floor(Math.random() * COLORES.length)];

export function crearFuegos(cv: HTMLCanvasElement, btn: HTMLButtonElement, txt: HTMLElement) {
  const cx = cv.getContext('2d')!;
  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let preferencia: string | null = null;
  try { preferencia = localStorage.getItem(CLAVE); } catch {}
  let encendido = preferencia ? preferencia === 'on' : !reducido;
  let permitido = false;
  let raf = 0, w = 0, h = 0, ultimoLanz = 0;
  const cohetes: Cohete[] = [];
  const chispas: Chispa[] = [];

  function medir() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener('resize', medir);
  medir();

  function lanzar() {
    cohetes.push({ x: azar(w * 0.12, w * 0.88), y: h + 10, vx: azar(-0.6, 0.6), vy: -azar(h * 0.0105 + 6, h * 0.0125 + 8), c: color(), meta: azar(h * 0.12, h * 0.45) });
  }

  function estallar(r: Cohete) {
    const n = w < 600 ? 55 : 90;
    const c2 = color();
    const anillo = Math.random() < 0.3;
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n;
      const v = anillo ? 4.2 : azar(1.2, 5.2);
      chispas.push({ x: r.x, y: r.y, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v, vida: 1, d: azar(0.01, 0.018), c: i % 3 ? r.c : c2 });
    }
  }

  function cuadro(t: number) {
    raf = requestAnimationFrame(cuadro);
    if (t - ultimoLanz > (w < 600 ? 900 : 650)) {
      ultimoLanz = t;
      lanzar();
      if (Math.random() < 0.35) lanzar();
    }
    // Desvanece el cuadro anterior manteniendo el canvas transparente.
    cx.globalCompositeOperation = 'destination-out';
    cx.fillStyle = 'rgba(0,0,0,.22)';
    cx.fillRect(0, 0, w, h);
    cx.globalCompositeOperation = 'source-over';

    for (let i = cohetes.length - 1; i >= 0; i--) {
      const r = cohetes[i];
      r.x += r.vx; r.y += r.vy; r.vy += 0.12;
      cx.fillStyle = r.c;
      cx.beginPath(); cx.arc(r.x, r.y, 2.2, 0, 7); cx.fill();
      if (r.y <= r.meta || r.vy >= 0) { estallar(r); cohetes.splice(i, 1); }
    }
    for (let i = chispas.length - 1; i >= 0; i--) {
      const p = chispas[i];
      p.vx *= 0.985; p.vy = p.vy * 0.985 + 0.045;
      p.x += p.vx; p.y += p.vy; p.vida -= p.d;
      if (p.vida <= 0) { chispas.splice(i, 1); continue; }
      cx.globalAlpha = p.vida;
      cx.fillStyle = p.c;
      cx.beginPath(); cx.arc(p.x, p.y, 2, 0, 7); cx.fill();
    }
    cx.globalAlpha = 1;
  }

  function actualizar() {
    const activo = permitido && encendido && !document.hidden;
    btn.setAttribute('aria-pressed', String(encendido));
    txt.textContent = encendido ? 'Apagar fuegos' : 'Animar fuegos';
    if (activo && !raf) raf = requestAnimationFrame(cuadro);
    if (!activo && raf) {
      cancelAnimationFrame(raf); raf = 0;
      cohetes.length = 0; chispas.length = 0;
      cx.clearRect(0, 0, w, h);
    }
  }

  btn.addEventListener('click', () => {
    encendido = !encendido;
    try { localStorage.setItem(CLAVE, encendido ? 'on' : 'off'); } catch {}
    actualizar();
  });
  document.addEventListener('visibilitychange', actualizar);
  actualizar();

  return {
    /** Habilita los fuegos solo durante el día central. */
    permitir(v: boolean) { if (v !== permitido) { permitido = v; actualizar(); } },
  };
}
