// ─────────────────────────────────────────
// Datos configurables del evento
// ─────────────────────────────────────────

// Helper para resolver assets estáticos respetando el base path de Vite (GitHub Pages / subcarpetas)
const getAssetUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const baseUrl = import.meta.env.BASE_URL || '/'
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`
}

export const eventData = {
  // ── Anfitrión ──────────────────────────
  host: 'El Sr. Constantino Veliz Laura y la Sra. Lucinda Benavides de Veliz (+)',
  hostMessage:
    'Tienen el honor de invitar a usted y a su apreciable familia a compartir la',

  // ── Evento ─────────────────────────────
  eventDate: '2026-08-15T19:00:00-04:00', // Bolivia UTC-4
  eventDateDisplay: 'Sábado, 15 de Agosto de 2026',
  eventTime: '19:00 hrs.',
  eventType: 'Recepción y Cena',
  venue: 'Salón de Eventos La Florida',
  address: 'Calle Arrueta #110 entre Zambrana y Meriles',
  city: 'La Paz, Bolivia',

  // ── Ubicación ──────────────────────────
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Calle%20arrueta%20110%20entre%20Zambrana%20y%20Meriles&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsUrl:
    'https://maps.app.goo.gl/NJsm8cuhr3JscLVD9?g_st=aw',

  // ── Frases y citas ─────────────────────
  heroQuote:
    'A PASO INVENCIBLE, CON LA ESPADA Y LA CIENCIA POR ARMAS, SE CONQUISTA LA META',
  closingLine1: 'Hoy celebramos el esfuerzo.',
  closingLine2: 'Su presencia hará de este día un recuerdo inolvidable',

  // ── Graduado ───────────────────────────
  graduate: {
    id: 'samuel',
    name: 'Samuel Antonio',
    lastName: 'Veliz Benavides',
    fullName: 'Samuel Antonio Veliz Benavides',
    degree: 'Sbtt. Res. Ingeniero de Sistemas',
    university: 'Escuela Militar de Ingeniería',
    universityShort: 'EMI',
    logo: getAssetUrl('logos/emi_logo.webp'),
    frontis: getAssetUrl('images/emi_frontis.webp'),
    monumento: getAssetUrl('images/monumentoAJS.webp'),
    photo: getAssetUrl('images/foto_savb_uniforme_militar.webp'),
    gallery: [
      {
        url: getAssetUrl('images/foto_savb_uniforme_militar.webp'),
        caption: 'Sbtt. Res. Samuel Antonio Veliz Benavides',
      },
      {
        url: getAssetUrl('images/foto_antes.webp'),
        caption: 'Recuerdo',
      },
    ],
  },
}
