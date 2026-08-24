// ─────────────────────────────────────────
// Datos del evento de graduación: Carla Mishel Gutierrez Veliz
// ─────────────────────────────────────────

const getAssetUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const baseUrl = import.meta.env.BASE_URL || '/'
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`
}

export const carlaEventData = {
  // ── Anfitrión ──────────────────────────
  host: 'La Sra. Elvira Veliz de Mamani',
  hostMessage:
    'Tiene el honor de invitar a usted y a su distinguida familia a compartir la celebración por la graduación de su hija:',
  hostHeader: 'INVITACIÓN DE HONOR',
  hostSubtitle: 'DE SU HIJA',

  // ── Evento ─────────────────────────────
  eventDate: '2026-09-04T17:00:00-04:00', // Bolivia UTC-4
  eventDateDisplay: 'Viernes, 4 de Septiembre de 2026',
  eventTime: '17:00 hrs.',
  eventType: 'Recepción y Brindis de Honor',
  venue: 'Salón de Eventos La Florida',
  address: 'Calle Arueta #110 entre Zambrana y Meriles',
  city: 'Potosí, Bolivia',

  // ── Ubicación ──────────────────────────
  googleMapsEmbed:
    'https://maps.google.com/maps?q=-19.5830685,-65.7620382&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsUrl:
    'https://maps.app.goo.gl/ffC9zvC6nZeqCjdq9',

  // ── Frases y citas ─────────────────────
  heroQuote:
    'ACOMPÁÑENNOS EN ESTE DÍA TAN ESPECIAL, DONDE CULMINA UNA ETAPA DE ESFUERZO Y DEDICACIÓN, Y COMIENZA UN NUEVO CAMINO DE SERVICIO Y COMPROMISO CON LA SALUD',
  closingLine1: 'Un nuevo comienzo, fruto de años de dedicación y perseverancia.',
  closingLine2: 'Su grata presencia hará de este día un recuerdo inolvidable.',

  // ── Graduada ───────────────────────────
  graduate: {
    id: 'carla',
    name: 'Carla Mishel',
    lastName: 'Gutierrez Veliz',
    fullName: 'Carla Mishel Gutierrez Veliz',
    degree: 'Licenciada en Odontología',
    degreeField: 'ODONTOLOGÍA',
    university: 'Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca',
    universityShort: 'U.S.F.X.CH. • Odontología',
    logo: getAssetUrl('logos/escudo_odontologia.webp'),
    frontis: getAssetUrl('images/cmgv/frontis_usxch_fo.webp'),
    monumento: getAssetUrl('images/cmgv/frontis_usxch_fo.webp'),
    photo: getAssetUrl('images/cmgv/perfil_cmgv.webp'),
    gallery: [
      {
        url: getAssetUrl('images/cmgv/perfil_cmgv.webp'),
        caption: 'Dra. Carla Mishel Gutierrez Veliz — Odontología',
      },
    ],
  },
}
