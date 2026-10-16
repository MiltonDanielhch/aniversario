// Cronograma oficial del 184 aniversario del Beni (fuente: láminas del GAD Beni).
// Horas en hora de Bolivia (UTC-4, sin horario de verano).

export const ZONA = '-04:00';

/** Inicio y fin del día central: los fuegos artificiales se muestran en este intervalo. */
export const DIA_CENTRAL = {
  inicio: `2026-11-18T00:00:00${ZONA}`,
  fin: `2026-11-19T00:00:00${ZONA}`,
};

/** Duración supuesta de cada acto, para marcarlo como "En curso". Las láminas no indican horas de cierre. */
export const DURACION_MIN = 90;

export interface Acto {
  fecha: string;
  hora: string;
  acto: string;
  lugar: string;
  institucion: string;
}

export const DIAS: Record<string, { largo: string; corto: string; central?: boolean }> = {
  '2026-11-14': { largo: 'Sábado 14 de noviembre', corto: 'Sáb 14' },
  '2026-11-16': { largo: 'Lunes 16 de noviembre', corto: 'Lun 16' },
  '2026-11-17': { largo: 'Martes 17 de noviembre', corto: 'Mar 17' },
  '2026-11-18': { largo: 'Miércoles 18 de noviembre', corto: 'Mié 18', central: true },
};

const PLAZA = 'Plaza Principal “Mcal. José Ballivián y Segurola”';
const GAD = 'Gobierno Autónomo Departamental del Beni';
const UAB = 'Universidad Autónoma del Beni “José Ballivián”';
const FORO = 'Foro Económico Empresarial del Beni “Desarrollo Sostenible para el Norte de Bolivia, riqueza que vive”';

export const ACTOS: Acto[] = [
  { fecha: '2026-11-14', hora: '08:00', acto: 'XIII Entrada Folclórica Universitaria Nacional – Trinidad 2026', lugar: 'Desde el Estadio Gran Mamoré hasta la Plaza Principal Mcal. José Ballivián y Segurola', institucion: UAB },

  { fecha: '2026-11-16', hora: '08:00', acto: FORO, lugar: 'Salón auditorio UNIVALLE', institucion: 'Universidad del Valle' },
  { fecha: '2026-11-16', hora: '09:30', acto: '1.ª Sesión de Honor de la Brigada Parlamentaria del Beni', lugar: 'Salón Bicentenario de la UAB “José Ballivián”', institucion: 'Brigada Parlamentaria del Beni · Asamblea Legislativa Plurinacional' },

  { fecha: '2026-11-17', hora: '08:00', acto: 'Desfile Cívico Estudiantil, Distrito Educativo de Trinidad', lugar: PLAZA, institucion: 'Dirección Distrital de Educación Trinidad' },
  // TODO: confirmar con el GAD si el foro se repite el 17 o es un error de la lámina.
  { fecha: '2026-11-17', hora: '08:00', acto: FORO, lugar: 'Salón auditorio UNIVALLE', institucion: 'Universidad del Valle' },
  { fecha: '2026-11-17', hora: '10:00', acto: 'Sesión de Honor y entrega de distinciones y condecoraciones de la Asamblea Legislativa Departamental del Beni', lugar: 'Centro de Convenciones Trinidad', institucion: 'Asamblea Legislativa Departamental del Beni' },
  // La segunda lámina no indica fecha para estos dos actos; están antes del "Miércoles 18", por eso se asumen el 17.
  { fecha: '2026-11-17', hora: '19:00', acto: `Aniversario de la ${UAB}`, lugar: 'Salón Bicentenario UAB-JB', institucion: UAB },
  { fecha: '2026-11-17', hora: '22:00', acto: 'Gran Serenata al Beni en sus 184 años de creación', lugar: 'Campus Ferial FEXPO Beni', institucion: `${GAD}, Gobierno Autónomo Municipal de la Santísima Trinidad y UAB “Mcal. José Ballivián”` },

  { fecha: '2026-11-18', hora: '07:00', acto: 'Ofrenda floral al pie del monumento del Mariscal José Ballivián y Segurola, izado del Pabellón Tricolor y de la Bandera del Departamento del Beni, y entonación del Himno Nacional', lugar: PLAZA, institucion: GAD },
  { fecha: '2026-11-18', hora: '08:30', acto: 'Solemne Te Deum', lugar: 'Catedral “Santísima Trinidad”', institucion: GAD },
  { fecha: '2026-11-18', hora: '09:30', acto: 'Desfile Cívico Institucional, Militar y de la Ciudadanía en General', lugar: PLAZA, institucion: GAD },
  { fecha: '2026-11-18', hora: '12:00', acto: 'Entonación de las Sagradas Notas del Himno Nacional por un coro general, a 181 años de su primera interpretación', lugar: PLAZA, institucion: 'Fuerzas Armadas de Bolivia' },
];

export const PROVINCIAS = ['Cercado', 'Vaca Díez', 'José Ballivián', 'Yacuma', 'Moxos', 'Marbán', 'Mamoré', 'Iténez'];

export const marcaDeTiempo = (a: Acto) => Date.parse(`${a.fecha}T${a.hora}:00${ZONA}`);
