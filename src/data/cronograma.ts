// Cronograma oficial del 184 aniversario del Beni (fuente: láminas 1–9 del GAD Beni).
// Horas en hora de Bolivia (UTC-4, sin horario de verano).
// Normalizado: HH:MM con cero inicial, tildes de día, comillas curvas en “José Ballivián”.

export const ZONA = '-04:00';

/** Inicio y fin del día central: los fuegos artificiales se muestran en este intervalo. */
export const DIA_CENTRAL = {
  inicio: `2026-11-18T00:00:00${ZONA}`,
  fin: `2026-11-19T00:00:00${ZONA}`,
};

/** Duración supuesta de cada acto, para marcarlo como "En curso". Las láminas no indican horas de cierre. */
export const DURACION_MIN = 90;

export type Etapa = 'mes' | 'semana' | 'cierre';

export interface Acto {
  fecha: string;
  hora: string;
  acto: string;
  lugar: string;
  institucion: string;
  destacado?: boolean;   
}

export const DIAS: Record<string, { largo: string; corto: string; central?: boolean; etapa?: Etapa }> = {
  '2026-11-01': { largo: 'Domingo 1 de noviembre',  corto: 'Dom 1',  etapa: 'mes' },
  '2026-11-03': { largo: 'Martes 3 de noviembre',   corto: 'Mar 3',  etapa: 'mes' },
  '2026-11-04': { largo: 'Miércoles 4 de noviembre', corto: 'Mié 4', etapa: 'mes' },
  '2026-11-05': { largo: 'Jueves 5 de noviembre',   corto: 'Jue 5',  etapa: 'mes' },
  '2026-11-06': { largo: 'Viernes 6 de noviembre',  corto: 'Vie 6',  etapa: 'mes' },
  '2026-11-07': { largo: 'Sábado 7 de noviembre',   corto: 'Sáb 7',  etapa: 'mes' },
  '2026-11-08': { largo: 'Domingo 8 de noviembre',  corto: 'Dom 8',  etapa: 'mes' },
  '2026-11-09': { largo: 'Lunes 9 de noviembre',    corto: 'Lun 9',  etapa: 'semana' },
  '2026-11-10': { largo: 'Martes 10 de noviembre',  corto: 'Mar 10', etapa: 'semana' },
  '2026-11-11': { largo: 'Miércoles 11 de noviembre', corto: 'Mié 11', etapa: 'semana' },
  '2026-11-12': { largo: 'Jueves 12 de noviembre',  corto: 'Jue 12', etapa: 'semana' },
  '2026-11-13': { largo: 'Viernes 13 de noviembre', corto: 'Vie 13', etapa: 'semana' },
  '2026-11-14': { largo: 'Sábado 14 de noviembre',  corto: 'Sáb 14', etapa: 'semana' },
  '2026-11-15': { largo: 'Domingo 15 de noviembre', corto: 'Dom 15', etapa: 'semana' },
  '2026-11-16': { largo: 'Lunes 16 de noviembre',   corto: 'Lun 16', etapa: 'semana' },
  '2026-11-17': { largo: 'Martes 17 de noviembre',  corto: 'Mar 17', etapa: 'semana' },
  '2026-11-18': { largo: 'Miércoles 18 de noviembre', corto: 'Mié 18', central: true, etapa: 'semana' },
  '2026-11-20': { largo: 'Viernes 20 de noviembre', corto: 'Vie 20', etapa: 'cierre' },
  '2026-11-21': { largo: 'Sábado 21 de noviembre',  corto: 'Sáb 21', etapa: 'cierre' },
  '2026-11-23': { largo: 'Lunes 23 de noviembre',   corto: 'Lun 23', etapa: 'cierre' },
  '2026-11-24': { largo: 'Martes 24 de noviembre',  corto: 'Mar 24', etapa: 'cierre' },
  '2026-11-26': { largo: 'Jueves 26 de noviembre',  corto: 'Jue 26', etapa: 'cierre' },
  '2026-11-28': { largo: 'Sábado 28 de noviembre',  corto: 'Sáb 28', etapa: 'cierre' },
};

/* ── Constantes de lugar/institución que se repiten ── */
const PLAZA   = 'Plaza Principal “Mcal. José Ballivián y Segurola”';
const GAD     = 'Gobierno Autónomo Departamental del Beni';
const GAM     = 'Gobierno Autónomo Municipal de Trinidad';
const UAB     = 'Universidad Autónoma del Beni “José Ballivián”';
const REMATES = 'Centro de Remates “Guillermo Tineo Leigue”';
const FEXPO   = 'FEXPO Beni';
const SEDEG_L = 'Instalaciones del SEDEGES Beni';
const SEDEG_I = 'Dirección Dptal. del Servicio de Gestión Social SEDEGES';
const RIB     = 'Riberalta';
const BANCO   = 'Banco de Sangre Dptal. del Beni';
const BANDERA = 'Salón Bandera GAD Beni';
const UNIV_L  = 'Salón Auditorio UNIVALLE';
const UNIV_I  = 'Universidad del Valle';
const BICENT  = 'Salón Bicentenario UABJB';
const PAITITI = 'Av. Gran Paitití, casi esq. c/ Mamoré';
const MOXOS_I = 'Moxos Import Export';

export const ACTOS: Acto[] = [
  // ── Domingo 1 ──
  { fecha: '2026-11-01', hora: '00:00', acto: 'Día de embanderamiento departamental', lugar: 'Instituciones públicas y privadas', institucion: `${GAD} – Secretaría Dptal. de Justicia` },
  // ── Martes 3 ──
  { fecha: '2026-11-03', hora: '07:00', acto: 'Iza de bandera en homenaje al Mes Aniversario', lugar: PLAZA, institucion: `${GAD} – FF. AA.` },
  // ── Miércoles 4 ──
  { fecha: '2026-11-04', hora: '08:00', acto: 'Reunión de coordinación con los Institutos Tecnológicos del Beni', lugar: 'Auditorio de Facultad Ciencias Económicas UABJB', institucion: 'Ministerio de Educación y Gobernación del Beni' },
  // ── Jueves 5 ──
  { fecha: '2026-11-05', hora: '10:00', acto: 'Presentación oficial de la primera edición del texto educativo “Melodías Moxeñas”', lugar: BANDERA, institucion: 'Dirección Dptal. de Educación y Cultura GAD-Beni' },
  { fecha: '2026-11-05', hora: '16:00', acto: 'Reunión de coordinación con los alcaldes', lugar: 'Salón Mi Residencia', institucion: 'Viceministerio de Coordinación y Movimientos Sociales y Gobernación del Beni' },
  // ── Viernes 6 ──
  { fecha: '2026-11-06', hora: '08:00', acto: 'Reunión de coordinación con los alcaldes', lugar: 'Salón Mi Residencia', institucion: 'Viceministerio de Coordinación y Movimientos Sociales y Gobernación del Beni' },
  // ── Sábado 7 ──
  { fecha: '2026-11-07', hora: '08:00', acto: 'Festival del Desayuno Benianazo', lugar: 'Plaza Mitos y Leyendas', institucion: `${GAM}, Señora de Acero y Danir Metal Construcciones` },
  { fecha: '2026-11-07', hora: '12:00', acto: 'I Festival BARACE 2026', lugar: 'Campo Ferial UABJB', institucion: `${GAD}, ${GAM}, ${UAB}, Fundación 1 Boliviano contra el Cáncer, Kalimán y otras instituciones/empresas` },
  // ── Domingo 8 ──
  { fecha: '2026-11-08', hora: '20:00', acto: 'Festival de Danzas', lugar: 'Plaza Mitos y Leyendas', institucion: `${GAM} y Academia de Danza Estelar del Beni` },
  // ── Lunes 9 ──
  { fecha: '2026-11-09', hora: '08:00', acto: 'Desfile de Bosque de Banderas', lugar: 'Av. 27 de Mayo, Monumento Madre Trinitaria hasta Plaza Principal', institucion: 'Dirección Distrital de Educación Trinidad' },
  { fecha: '2026-11-09', hora: '08:00', acto: 'Feria de los Artesanos del Beni', lugar: 'Plazuela El Tamarindo', institucion: `${GAM} y FEARTRI` },
  { fecha: '2026-11-09', hora: '09:00', acto: 'Feria de Artesanía Típicas', lugar: SEDEG_L, institucion: 'Dirección Dptal. del Servicio de Gestión Social' },
  { fecha: '2026-11-09', hora: '14:30', acto: 'XIX Gran Entrada Folclórica E.S.F.M. Clara Parada de Pinto', lugar: 'Monumento Pedro Ignacio Muiba hasta Plaza Principal', institucion: 'E.S.F.M. Clara Parada de Pinto' },
  // ── Martes 10 ──
  { fecha: '2026-11-10', hora: '07:30', acto: 'Ofrenda floral y homenaje a los héroes indígenas mojeños, cacique Pedro Ignacio Muiba, José Bopi y Gregorio Gonzales, gesta libertaria de 1810', lugar: 'Monumento a Pedro Ignacio Muiba', institucion: GAD },
  // ── Miércoles 11 ──
  { fecha: '2026-11-11', hora: '09:00', acto: 'Colecta de donación de sangre', lugar: RIB, institucion: BANCO },
  // ── Jueves 12 ──
  { fecha: '2026-11-12', hora: '09:00', acto: 'Feria de Comidas Típicas y Elección de Raetona GAD Beni 2027', lugar: SEDEG_L, institucion: SEDEG_I },
  { fecha: '2026-11-12', hora: '09:00', acto: 'Colecta de donación de sangre', lugar: RIB, institucion: BANCO },
  // ── Viernes 13 ──
  { fecha: '2026-11-13', hora: '08:00', acto: 'Feria de los Artesanos del Beni', lugar: 'Plaza Principal', institucion: `${GAM} y FEARTRI` },
  { fecha: '2026-11-13', hora: '09:00', acto: 'Feria de Artesanía Típicas', lugar: SEDEG_L, institucion: SEDEG_I },
  { fecha: '2026-11-13', hora: '09:00', acto: 'Entrega de la valla de la nueva ruta turística de aviturismo Trinidad–Loreto', lugar: 'Monumento de la Paraba', institucion: `Dirección Dptal. de Turismo GAD-Beni, ${GAM}, Fundación CLB y UABJB` },
  { fecha: '2026-11-13', hora: '09:00', acto: 'Distinción al Mérito Profesional Beniano 2026', lugar: 'Salón Colegio Médico del Beni', institucion: 'Federación de Profesionales del Beni' },
  { fecha: '2026-11-13', hora: '10:00', acto: 'Entrega de equipamiento e insumos médicos para Hospital Germán Bush y Materno Infantil', lugar: 'Salón SEDES Beni', institucion: 'SEDES-Beni' },
  { fecha: '2026-11-13', hora: '19:00', acto: 'Elección de la Ñusta y Moperita Universitaria 2026', lugar: 'Cancha Vieja Platillo Volador', institucion: UAB },
  { fecha: '2026-11-13', hora: '20:00', acto: 'Remate Taj Mahal y El Álamo', lugar: REMATES, institucion: 'Cabaña Taj Mahal y El Álamo – FEGABENI' },
  // ── Sábado 14 ──
  { fecha: '2026-11-14', hora: '09:00', acto: 'XIII Entrada Folclórica Universitaria Nacional – Trinidad 2026', lugar: 'Inicia Av. Roger Becerra hasta la Plaza Principal Mcal. José Ballivián y Segurola', institucion: UAB },
  { fecha: '2026-11-14', hora: '20:00', acto: 'Remate CERMA', lugar: REMATES, institucion: 'CERMA – FEGABENI' },
  { fecha: '2026-11-14', hora: '20:00', acto: 'Apertura de la FEXPO Beni 2026', lugar: FEXPO, institucion: UAB },
  // ── Domingo 15 ──
  { fecha: '2026-11-15', hora: '10:30', acto: 'Carreras de Caballos', lugar: 'Las Palquitas', institucion: 'Stud Los Compadres, Asociación de Carrereros de Cercado y Marbán CCM' },
  { fecha: '2026-11-15', hora: '19:00', acto: 'Inauguración del stand SEDEGES Beni en la FEXPO Beni', lugar: FEXPO, institucion: 'Dirección del Servicio Dptal. de Gestión Social SEDEGES' },
  { fecha: '2026-11-15', hora: '20:00', acto: 'Inauguración de la FEXPO Beni 2026', lugar: FEXPO, institucion: UAB },
  { fecha: '2026-11-15', hora: '20:00', acto: 'Remate Taj Mahal y La Francisca', lugar: 'Club Social 18 de Noviembre', institucion: 'Taj Mahal y La Francisca – FEGABENI' },
  // ── Lunes 16 ──
  { fecha: '2026-11-16', hora: '08:00', acto: 'Inauguración del III Foro Económico del Beni', lugar: UNIV_L, institucion: UNIV_I },
  { fecha: '2026-11-16', hora: '09:00', acto: 'Congreso Nacional de las Universidades – Sede de Docentes', lugar: 'Sede de Docentes', institucion: UAB },
  { fecha: '2026-11-16', hora: '09:30', acto: '1.ª Sesión de Honor de la Brigada Parlamentaria del Beni', lugar: 'Salón Auditorio del Corregimiento de Trinidad', institucion: 'Brigada Parlamentaria del Beni – Asamblea Legislativa Plurinacional' },
  { fecha: '2026-11-16', hora: '10:00', acto: 'Visión Mundial Riberalta', lugar: `Instalaciones del Hogar Transitorio “Angélica”, ${RIB}`, institucion: SEDEG_I },
  { fecha: '2026-11-16', hora: '19:00', acto: 'Procesión e inauguración del stand cultural GAMT en la FEXPO Beni', lugar: FEXPO, institucion: GAM },
  { fecha: '2026-11-16', hora: '19:30', acto: 'Acto de apertura Expo Moxos', lugar: PAITITI, institucion: MOXOS_I },
  { fecha: '2026-11-16', hora: '20:00', acto: 'Remate Cabaña Mucarzel', lugar: REMATES, institucion: 'Cabaña Mucarzel – FEGABENI' },
  // ── Martes 17 ──
  { fecha: '2026-11-17', hora: '08:00', acto: 'Acto cívico y desfile cívico estudiantil, Distrito Educativo de Trinidad', lugar: PLAZA, institucion: 'Dirección Distrital de Educación Trinidad' },
  { fecha: '2026-11-17', hora: '08:30', acto: 'Acto de colación de grado y toma de juramento profesional', lugar: BICENT, institucion: UAB },
  { fecha: '2026-11-17', hora: '10:00', acto: 'Solemne Sesión de Honor', lugar: 'Centro de Convenciones Trinidad', institucion: 'Asamblea Legislativa Departamental del Beni' },
  { fecha: '2026-11-17', hora: '19:00', acto: 'Clausura del III Foro Económico del Beni', lugar: UNIV_L, institucion: UNIV_I },
  { fecha: '2026-11-17', hora: '19:00', acto: `Aniversario ${UAB}`, lugar: BICENT, institucion: UAB },
  { fecha: '2026-11-17', hora: '19:30', acto: 'Show folclórico en honor a la Serenata al Beni – Expo Moxos', lugar: PAITITI, institucion: MOXOS_I },
  { fecha: '2026-11-17', hora: '20:00', acto: 'Remate Cabaña Sausalito', lugar: REMATES, institucion: 'Cabaña Sausalito – FEGABENI' },
  { fecha: '2026-11-17', hora: '22:00', acto: 'Gran Serenata al Beni en sus 184 años de creación', lugar: FEXPO, institucion: `${GAD}, ${GAM} y UAB Mcal. José Ballivián` },
  // ── Miércoles 18 · DÍA CENTRAL ──
  { fecha: '2026-11-18', hora: '05:30', acto: 'Diana de salutación', lugar: 'Diferentes sectores de la ciudad de Trinidad', institucion: 'Fuerza Aérea Boliviana “Quinta Brigada”' },
  { fecha: '2026-11-18', hora: '07:00', acto: 'Ofrenda floral al pie del monumento del “Mariscal José Ballivián y Segurola” e iza del Pabellón Tricolor, Bandera del Departamento del Beni y entonación del Himno Nacional', lugar: PLAZA, institucion: GAD },
  { fecha: '2026-11-18', hora: '08:00', acto: 'Solemne Te Deum', lugar: 'Catedral “Santísima Trinidad”', institucion: GAD },
  { fecha: '2026-11-18', hora: '09:00', acto: 'Acto en homenaje a los 184 años de creación del Departamento del Beni – sujeto a programa oficial', lugar: PLAZA, institucion: 'Gobernación del Beni' },
  { fecha: '2026-11-18', hora: '09:30', acto: 'Desfile cívico, institucional y militar', lugar: PLAZA, institucion: GAD },
  { fecha: '2026-11-18', hora: '12:00', acto: 'Entonación de las Sagradas Notas del Himno Nacional, coro general al conmemorarse los 181 años que fue escuchado por primera vez', lugar: PLAZA, institucion: '5.ª Brigada – Fuerzas Armadas de Bolivia' },
  { fecha: '2026-11-18', hora: '13:00', acto: 'Vuelo inaugural TAMep', lugar: 'Aeropuerto Jorge Henrich Arauz', institucion: 'NAABOL' },
  { fecha: '2026-11-18', hora: '20:00', acto: 'Clausura de la FEXPO Beni', lugar: FEXPO, institucion: UAB },
  // ── Viernes 20 ──
  { fecha: '2026-11-20', hora: '10:00', acto: 'Entrega de equipamiento para los centros de acogida Maná, Esperanza, Chetequije y Hogar de Niño/Niña', lugar: 'Centro de Rehabilitación Social Chetequije', institucion: SEDEG_I },
  // ── Sábado 21 ──
  { fecha: '2026-11-21', hora: '19:00', acto: 'Presentación de las Soberanas del Folklore Trinitario 2027', lugar: 'Casa de la Cultura del Beni', institucion: 'Casa de la Cultura del Beni' },
  // ── Lunes 23 ──
  { fecha: '2026-11-23', hora: '08:00', acto: 'Encuentro Departamental del Sistema Plurinacional de Prevención Integral de Niña, Niño y Adolescente – SIPROINA', lugar: BANDERA, institucion: 'SEDEGES Beni – Fundación Ayuda en Acción – Viceministerio de Igualdad de Oportunidad' },
  { fecha: '2026-11-23', hora: '11:00', acto: 'Presentación del video del Himno a Trinidad', lugar: 'Salón Prof. José Natusch Velasco del GAMT', institucion: `${GAM}, Instituto de Arte de la UABJB y el Coro de La Salle` },
  // ── Martes 24 ──
  { fecha: '2026-11-24', hora: '08:00', acto: 'Conversatorio sobre prevención de embarazos en adolescente', lugar: BANDERA, institucion: 'SEDEGES Beni – Fundación Ayuda en Acción – Viceministerio de Igualdad de Oportunidad' },
  // ── Jueves 26 ──
  { fecha: '2026-11-26', hora: '09:00', acto: 'Colecta de donación de sangre', lugar: 'Edificio Central GAD-Beni', institucion: BANCO },
  // ── Sábado 28 ──
  { fecha: '2026-11-28', hora: '08:00', acto: 'Feria Fest “Barba Azul”', lugar: FEXPO, institucion: 'Dirección Dptal. de Turismo GAD-Beni, Fundación CLB, UABJB' },
  { fecha: '2026-11-28', hora: '16:00', acto: 'Festival del Taquirari y Feria del Taquirari', lugar: 'Plaza Héroes Benianos de la Guerra del Chaco', institucion: GAM },
  { fecha: '2026-11-28', hora: '19:00', acto: 'Festival y Concierto del Taquirari', lugar: 'Plaza Héroes Benianos de la Guerra del Chaco', institucion: GAM },
];

/* <<<< NUEVO: actos ancla para escaneo rápido */
const IMPERDIBLES = new Set([
  'Iza de bandera en homenaje al Mes Aniversario',
  'Festival del Desayuno Benianazo',
  'I Festival BARACE 2026',
  'XIX Gran Entrada Folclórica E.S.F.M. Clara Parada de Pinto',
  'Ofrenda floral y homenaje a los héroes indígenas mojeños, cacique Pedro Ignacio Muiba, José Bopi y Gregorio Gonzales, gesta libertaria de 1810',
  'XIII Entrada Folclórica Universitaria Nacional – Trinidad 2026',
  'Inauguración de la FEXPO Beni 2026',
  'Acto cívico y desfile cívico estudiantil, Distrito Educativo de Trinidad',
  'Gran Serenata al Beni en sus 184 años de creación',
  'Diana de salutación',
  'Desfile cívico, institucional y militar',
  'Entonación de las Sagradas Notas del Himno Nacional, coro general al conmemorarse los 181 años que fue escuchado por primera vez',
  'Festival y Concierto del Taquirari',
]);
for (const a of ACTOS) if (IMPERDIBLES.has(a.acto)) a.destacado = true;

export const PROVINCIAS = ['Cercado', 'Vaca Díez', 'José Ballivián', 'Yacuma', 'Moxos', 'Marbán', 'Mamoré', 'Iténez'];

export const marcaDeTiempo = (a: Acto) => Date.parse(`${a.fecha}T${a.hora}:00${ZONA}`);

/* ══════════ NUEVO: etapas, feriado y días sin acto ══════════ */

export const ETAPAS: { id: Etapa; nombre: string; rango: string; desc: string }[] = [
  { id: 'mes',    nombre: 'Mes aniversario',   rango: '1 – 8 nov',  desc: 'Embanderamiento, iza de bandera y actos de coordinación que abren el noviembre beniano.' },
  { id: 'semana', nombre: 'Semana grande',     rango: '9 – 18 nov', desc: 'Ferias, entradas, foros, la Gran Serenata y el día central del 18.' },
  { id: 'cierre', nombre: 'Cierre de noviembre', rango: '19 – 28 nov', desc: 'Homenajes, cultura, salud y el Festival del Taquirari para despedir el mes aniversario.' },
];

/** Días señalados en el afiche sin acto (feriado). */
export const FERIADOS: Record<string, { largo: string; corto: string; etapa: Etapa; texto: string }> = {
  '2026-11-02': { largo: 'Lunes 2 de noviembre', corto: 'Lun 2', etapa: 'mes', texto: 'Feriado de Todos los Santos' },
};

/** Días dentro del rango 1–28 que el afiche no programa con acto. */
export const LIBRES: Record<string, { largo: string; corto: string; etapa: Etapa }> = {
  '2026-11-19': { largo: 'Jueves 19 de noviembre', corto: 'Jue 19', etapa: 'cierre' },
  '2026-11-22': { largo: 'Domingo 22 de noviembre', corto: 'Dom 22', etapa: 'cierre' },
  '2026-11-25': { largo: 'Miércoles 25 de noviembre', corto: 'Mié 25', etapa: 'cierre' },
  '2026-11-27': { largo: 'Viernes 27 de noviembre', corto: 'Vie 27', etapa: 'cierre' },
};

/** Todas las fechas (con acto + feriado + libres) de una etapa, ordenadas. */
export function fechasDeEtapa(id: Etapa): string[] {
  const set = new Set<string>();
  for (const [f, d] of Object.entries(DIAS)) if (d.etapa === id) set.add(f);
  for (const [f, d] of Object.entries(FERIADOS)) if (d.etapa === id) set.add(f);
  for (const [f, d] of Object.entries(LIBRES)) if (d.etapa === id) set.add(f);
  return [...set].sort();
}