// All page content lives here, so sections can be edited without touching markup.

const post = (name) => `/images/posts/sebenarnya-fc-${name}.jpg`;

const agency = {
  kpm: 'KPM (Kementerian Pendidikan Malaysia)',
  pdrm: 'PDRM (Polis Diraja Malaysia)',
  jbpm: 'JBPM (Jabatan Bomba dan Penyelamat Malaysia)',
  jpj: 'JPJ (Jabatan Pengangkutan Jalan Malaysia)',
  mcmc: 'MCMC (Suruhanjaya Komunikasi dan Multimedia Malaysia)',
  kkmm: 'KKMM (Kementerian Komunikasi dan Multimedia Malaysia)',
  kpdn: 'KPDN (Kementerian Perdagangan Dalam Negeri)',
  met: 'METMalaysia (Jabatan Meteorologi Malaysia)',
  jpa: 'JPA (Jabatan Perkhidmatan Awam)',
};

/* Header */
export const navLinks = [
  { label: 'Main', href: '/' },
  { label: 'Check Fact', href: '/article/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Submit Claim', href: '/submit-claim/' },
];

/* Stories carousel (announcements & activities) */
export const stories = [
  {
    title: 'AIFA: Semakan Pintar 24/7 Lindungi Rakyat Dari Penipuan Digital',
    summary: 'Pembantu maya AI rasmi Sebenarnya.my membantu mengesan pautan pancingan data dan tuntutan tular dalam beberapa saat.',
    href: '/tag/aifa/',
    image: '/images/carousel/human-aifa-assistant.jpg',
    alt: 'AIFA Smart Verification Assistant',
    badge: 'AIFA Assistant',
    readTime: '2 Min Read',
    date: 'Nov 05, 2026',
    openLabel: 'Buka Cerita AIFA',
  },
  {
    title: 'Waspada Pautan Palsu Sumbangan Tunai Rahmah & e-Wallet',
    summary: 'Kementerian Kewangan mengingatkan orang ramai agar tidak menekan pautan SMS mencurigakan berkaitan penebusan tunai.',
    href: '/tag/kewangan/',
    image: '/images/carousel/human-scam-alert.jpg',
    alt: 'Semakan Pautan Palsu & Penipuan e-Wallet',
    badge: 'Tular Peka',
    alert: true,
    readTime: '3 Min Read',
    date: 'Nov 04, 2026',
    openLabel: 'Buka Cerita Bantuan Palsu',
  },
  {
    title: "Ancaman 'Voice Cloning' AI: Cara Kenal Pasti Suara Palsu Kenalan",
    summary: 'Teknologi penjanaan suara semakin canggih. Pelajari langkah semakan pantas sebelum memindahkan wang kepada pemanggil cemas.',
    href: '/tag/keselamatan-siber/',
    image: '/images/carousel/human-audio-check.jpg',
    alt: 'Deepfake Audio & Semakan Suara AI',
    badge: 'Keselamatan Siber',
    readTime: '4 Min Read',
    date: 'Nov 03, 2026',
    openLabel: 'Buka Cerita Voice Clone',
  },
  {
    title: 'Jangan Kongsi Sebelum Sah: Etika Perkongsian Maklumat Kumpulan Chat',
    summary: "Semak sumber asal kenyataan rasmi agensi kerajaan sebelum menyebarkan mesej 'forwarded many times'.",
    href: '/tag/panduan/',
    image: '/images/carousel/human-group-sharing.jpg',
    alt: 'Etika Perkongsian Maklumat Kumpulan Chat',
    badge: 'Panduan Fakta',
    readTime: '3 Min Read',
    date: 'Nov 02, 2026',
    openLabel: 'Buka Cerita Panduan Kongsi',
  },
  {
    title: 'Membina Imuniti Digital Bersama: Peranan Belia & Warga Emas',
    summary: 'Inisiatif semakan kejiranan membantu warga emas mengesahkan berita sebelum terpedaya sindiket pelaburan palsu.',
    href: '/tag/komuniti/',
    image: '/images/carousel/human-community-senior.jpg',
    alt: 'Literasi Digital Warga Emas & Komuniti',
    badge: 'Komuniti Madani',
    readTime: '2 Min Read',
    date: 'Nov 01, 2026',
    openLabel: 'Buka Cerita Komuniti',
  },
  {
    title: 'Salurkan Maklumat Palsu: Saluran Terus MCMC & Pasukan Analisis',
    summary: 'Ketahui bagaimana aduan orang awam diproses dan disahkan bersama 28 kementerian dan agensi berwibawa di Malaysia.',
    href: '/salur/',
    image: '/images/carousel/human-official-desk.jpg',
    alt: 'Saluran Terus Aduan & Bantuan MCMC',
    badge: 'Saluran Rasmi',
    readTime: '3 Min Read',
    date: 'Oct 31, 2026',
    openLabel: 'Buka Cerita Salur Maklumat',
  },
];

/* Footer */
export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Fact-Checks', href: '/check-fact/' },
      { label: 'News and Updates', href: '/viral/' },
      { label: 'Videos', href: '/video/' },
      { label: 'Viral Claims', href: '/viral/' },
    ],
  },
  {
    title: 'Tools & Services',
    links: [
      { label: 'AIFA', href: '/aifa/' },
      { label: 'Submit a Claim', href: '/submit-claim/' },
      { label: 'How We Check', href: '/check-fact/' },
      { label: 'Media Literacy', href: '/about-us/' },
    ],
  },
  {
    title: 'Sebenarnya.my',
    links: [
      { label: 'About Us', href: '/about-us/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Official Agencies', href: '/about-us/' },
      { label: 'Login', href: '/signin/' },
    ],
  },
];

// Hero carousel (components/Carousel.js)
// `slug` = article in `articles` below; the slide links to /article/<slug>
// `image` = optional override (defaults to the article's image)
// `position` = image focus point on a dark slide, `wide` = image sits on the right 74%
export const heroSlides = [
  {
    slug: 'pembaharuan-lesen-memandu-dalam-talian',
    image: '/images/carousel/hero-lesen.jpg',
    position: '72% 50%',
    eyebrow: 'Makluman | JPJ',
    title: 'Perbaharui lesen',
    titleEm: 'terus dalam talian.',
    text: 'Pembaharuan lesen memandu hanya melalui portal rasmi JPJ, bukan pautan dalam mesej.',
    cta: 'Baca makluman',
  },
  {
    slug: 'pautan-bantuan-tunai-whatsapp-palsu',
    eyebrow: 'Palsu | MCMC',
    title: 'Pautan bantuan tunai',
    titleEm: 'di WhatsApp itu palsu.',
    text: 'Laman tiruan itu meminta butiran kad pengenalan dan akaun bank anda. Jangan isi.',
    cta: 'Baca semakan',
  },
  {
    slug: 'amaran-hujan-lebat-pantai-timur-november',
    image: '/images/carousel/hero-cuaca.jpg',
    eyebrow: 'Makluman | METMalaysia',
    title: 'Hujan lebat tiga hari',
    titleEm: 'di Pantai Timur.',
    text: 'Amaran hujan lebat dari 12 hingga 14 November 2026. Ikuti kemas kini rasmi.',
    cta: 'Baca amaran',
  },
  {
    slug: 'harga-petrol-ron95-naik-20-sen-palsu',
    eyebrow: 'Palsu | KPDN',
    title: 'RON95 tidak naik',
    titleEm: '20 sen esok.',
    text: 'Mesej yang tular itu palsu. Harga bahan api diumumkan secara rasmi setiap minggu.',
    cta: 'Baca semakan',
  },
  {
    slug: 'gambar-kebakaran-hutan-pahang-gambar-lama',
    eyebrow: 'Palsu | JBPM',
    title: 'Gambar kebakaran hutan',
    titleEm: 'itu gambar lama.',
    text: 'Gambar yang tular bukan dari Pahang minggu ini. Semak sebelum anda berkongsi.',
    cta: 'Baca semakan',
  },
];

// Viewership stats (components/Viewership.js)
// `sep` = show a thousands separator (1,016)
export const viewershipStats = [
  { value: 275, unit: 'juta+', text: 'Lawatan ke portal sejak dilancarkan pada 14 Mac 2017 (sehingga September 2021).' },
  { value: 1016, sep: true, text: 'Artikel semakan diterbitkan dari Januari 2022 hingga Mei 2026.' },
  { value: 200, unit: 'ribu', text: 'Hampir 200,000 mesej diproses oleh Aifa, pembantu semakan fakta AI, sejak Januari 2025.' },
];

// Collaborators ticker (components/Collaborators.js)
const partnerLogo = (name) => `/images/logo/partners/${name}.png`;

export const partners = [
  { name: 'Kementerian Kewangan Malaysia', logo: partnerLogo('mof') },
  { name: 'Jabatan Meteorologi Malaysia', logo: partnerLogo('met') },
  { name: 'Jabatan Pengangkutan Jalan Malaysia', logo: partnerLogo('jpj') },
  { name: 'Keretapi Tanah Melayu Berhad', logo: partnerLogo('ktmb') },
  { name: 'Jabatan Agama Islam Selangor', logo: partnerLogo('jais') },
  { name: 'Jabatan Pendidikan Wilayah Persekutuan Kuala Lumpur', logo: partnerLogo('jpwpkl') },
  { name: 'Jabatan Pendidikan Negeri Pulau Pinang', logo: partnerLogo('jpnpp') },
  { name: 'Jabatan Pendidikan Negeri Selangor', logo: partnerLogo('jpn') },
  { name: 'Caltex Malaysia', logo: partnerLogo('caltex') },
  { name: 'Kesultanan Pahang', logo: partnerLogo('pahang') },
];

/* Articles page (app/article/page.js) */

// Filter bar, in display order. `dot` = coloured dot shown in the chip.
export const articleCategories = [
  { id: 'palsu', label: 'Palsu', dot: '#e51c23' },
  { id: 'penjelasan', label: 'Penjelasan', dot: '#314bff' },
  { id: 'waspada', label: 'Waspada', dot: '#f56300' },
  { id: 'bencana', label: 'Bencana' },
  { id: 'ekonomi', label: 'Ekonomi' },
  { id: 'keselamatan', label: 'Keselamatan' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'pengangkutan', label: 'Pengangkutan' },
  { id: 'urus-tadbir', label: 'Urus Tadbir' },
  { id: 'integriti-pilihan-raya', label: 'Integriti Pilihan Raya' },
  { id: 'agama', label: 'Agama' },
  { id: 'jenayah', label: 'Jenayah' },
  { id: 'kesihatan', label: 'Kesihatan' },
  { id: 'kepenggunaan', label: 'Kepenggunaan' },
];

// Tag shown on each card
export const articleStatus = {
  palsu: { label: 'Palsu', color: '#e51c23' },
  makluman: { label: 'Makluman', color: '#0071e3' },
  benar: { label: 'Benar', color: '#1d8a4e' },
};

const agencyLogo = (name) => `/images/authors/agency-${name}.webp`;

// `status` = card tag (palsu / makluman / benar)
// `categories` = filter-bar ids this article also appears under
// `date` = YYYY-MM-DD
// `slug` = page address (/article/<slug>); `lead` + `explanation` = article body
// optional `actions` = [{ title, text }] to replace the default "Apa Yang Perlu Anda Buat" list
export const articles = [
  {
    title: 'Mesej pautan pendaftaran bantuan tunai di WhatsApp adalah palsu',
    slug: 'pautan-bantuan-tunai-whatsapp-palsu',
    lead: 'Satu mesej yang tular di WhatsApp mendakwa orang ramai boleh mendaftar untuk bantuan tunai melalui pautan yang dikongsi. Suruhanjaya Komunikasi dan Multimedia Malaysia (MCMC) mengesahkan mesej tersebut adalah palsu.',
    explanation: 'Pautan dalam mesej itu membawa kepada laman tiruan yang meminta nombor kad pengenalan dan butiran akaun bank. Pendaftaran bantuan kerajaan hanya dibuat melalui portal rasmi dan tidak pernah dihantar melalui mesej berantai.',
    image: post('phone-sharing'),
    alt: 'Dua orang menyemak mesej di telefon',
    status: 'palsu',
    categories: ['jenayah', 'kepenggunaan'],
    date: '2026-11-09',
    agency: { name: agency.mcmc, image: agencyLogo('mcmc') },
  },
  {
    title: 'Amaran hujan lebat di Pantai Timur dari 12 hingga 14 November',
    slug: 'amaran-hujan-lebat-pantai-timur-november',
    lead: 'Jabatan Meteorologi Malaysia (METMalaysia) mengeluarkan amaran hujan lebat yang dijangka melanda beberapa kawasan di Pantai Timur dari 12 hingga 14 November 2026.',
    explanation: 'Kawasan yang terlibat termasuk Kelantan, Terengganu dan utara Pahang. Orang ramai dinasihatkan untuk sentiasa merujuk saluran rasmi METMalaysia bagi kemas kini terkini dan tidak bergantung pada mesej yang dikongsi semula.',
    image: post('urban-road'),
    alt: 'Jalan bandar dan penunggang basikal',
    status: 'makluman',
    categories: ['waspada', 'bencana'],
    date: '2026-11-05',
    agency: { name: agency.met, image: agencyLogo('met') },
  },
  {
    title: 'Sekolah di Selangor beroperasi seperti biasa minggu ini',
    slug: 'sekolah-selangor-beroperasi-seperti-biasa',
    lead: 'Kementerian Pendidikan Malaysia (KPM) mengesahkan semua sekolah di Selangor beroperasi seperti biasa minggu ini, berikutan mesej tular yang mendakwa sekolah akan ditutup.',
    explanation: 'Sebarang penutupan sekolah akan diumumkan secara rasmi oleh KPM atau Jabatan Pendidikan Negeri. Ibu bapa dinasihatkan untuk merujuk pengumuman rasmi sekolah dan tidak mempercayai mesej yang tidak bersumber.',
    image: post('community-lounge'),
    alt: 'Ibu bapa menunggu di ruang legar',
    status: 'benar',
    categories: ['penjelasan', 'pendidikan'],
    date: '2026-10-30',
    agency: { name: agency.kpm, image: agencyLogo('kpm') },
  },
  {
    title: 'Video vaksin baharu menyebabkan penyakit kulit adalah tidak benar',
    slug: 'video-vaksin-penyakit-kulit-tidak-benar',
    lead: 'Sebuah video yang tular mendakwa vaksin baharu menyebabkan penyakit kulit. Kementerian Kesihatan Malaysia (KKM) mengesahkan dakwaan tersebut adalah tidak benar.',
    explanation: 'Video itu menggunakan rakaman lama yang tidak berkaitan dengan sebarang program vaksinasi. Semua vaksin yang digunakan di Malaysia telah melalui penilaian keselamatan oleh pihak berkuasa kesihatan.',
    image: post('audio-explainer'),
    alt: 'Penyampai merakam video penerangan',
    status: 'palsu',
    categories: ['kesihatan'],
    date: '2026-10-28',
    agency: { name: 'KKM (Kementerian Kesihatan Malaysia)', image: agencyLogo('kkm') },
  },
  {
    title: 'Pembaharuan lesen memandu kini boleh dibuat secara dalam talian',
    slug: 'pembaharuan-lesen-memandu-dalam-talian',
    lead: 'Jabatan Pengangkutan Jalan Malaysia (JPJ) memaklumkan bahawa pembaharuan lesen memandu kini boleh dibuat secara dalam talian melalui portal rasmi JPJ.',
    explanation: 'Pemohon hanya perlu log masuk ke portal rasmi JPJ dan membuat bayaran secara dalam talian. JPJ tidak menggunakan pihak ketiga atau pautan yang dihantar melalui mesej untuk urusan pembaharuan lesen.',
    image: post('service-desk'),
    alt: 'Kaunter perkhidmatan awam',
    status: 'makluman',
    categories: ['pengangkutan'],
    date: '2026-10-22',
    agency: { name: agency.jpj, image: agencyLogo('jpj') },
  },
  {
    title: 'Dakwaan harga petrol RON95 naik 20 sen esok adalah palsu',
    slug: 'harga-petrol-ron95-naik-20-sen-palsu',
    lead: 'Satu mesej tular mendakwa harga petrol RON95 akan naik 20 sen seliter bermula esok. Kementerian Perdagangan Dalam Negeri (KPDN) mengesahkan dakwaan tersebut adalah palsu.',
    explanation: 'Harga bahan api diumumkan secara rasmi setiap minggu oleh kerajaan. Orang ramai tidak perlu beratur panjang di stesen minyak berdasarkan mesej yang tidak disahkan.',
    image: post('payment-check'),
    alt: 'Terminal pembayaran tanpa tunai',
    status: 'palsu',
    categories: ['ekonomi', 'kepenggunaan'],
    date: '2026-10-14',
    agency: { name: agency.kpdn, image: agencyLogo('kpdn') },
  },
  {
    title: 'Penjelasan JPA berhubung tarikh pembayaran gaji penjawat awam',
    slug: 'penjelasan-jpa-tarikh-gaji-penjawat-awam',
    lead: 'Jabatan Perkhidmatan Awam (JPA) memberi penjelasan berhubung tarikh pembayaran gaji penjawat awam bagi bulan ini, susulan pertanyaan orang ramai di media sosial.',
    explanation: 'Gaji penjawat awam akan dibayar mengikut jadual biasa yang telah diumumkan. Sebarang perubahan tarikh pembayaran hanya akan dimaklumkan melalui pekeliling dan saluran rasmi JPA.',
    image: post('digital-desk'),
    alt: 'Telefon pintar dan buku nota di atas meja',
    status: 'benar',
    categories: ['penjelasan', 'urus-tadbir'],
    date: '2026-09-20',
    agency: { name: agency.jpa, image: agencyLogo('jpa') },
  },
  {
    title: 'Waspada panggilan telefon menyamar sebagai pegawai polis',
    slug: 'waspada-panggilan-menyamar-pegawai-polis',
    lead: 'Polis Diraja Malaysia (PDRM) mengingatkan orang ramai supaya berwaspada terhadap panggilan telefon daripada individu yang menyamar sebagai pegawai polis.',
    explanation: 'Penipu biasanya mendakwa mangsa terlibat dalam kes jenayah dan meminta wang dipindahkan ke akaun tertentu. PDRM tidak pernah meminta orang ramai memindahkan wang melalui panggilan telefon.',
    image: post('kopitiam'),
    alt: 'Menyemak telefon di kedai kopi',
    status: 'makluman',
    categories: ['waspada', 'keselamatan', 'jenayah'],
    date: '2026-08-12',
    agency: { name: agency.pdrm, image: agencyLogo('pdrm') },
  },
  {
    title: 'Dakwaan undi pos boleh dibuat melalui aplikasi mesej adalah palsu',
    slug: 'undi-pos-aplikasi-mesej-palsu',
    lead: 'Satu hantaran tular mendakwa pengundi boleh membuang undi pos melalui aplikasi mesej. Dakwaan ini disahkan palsu.',
    explanation: 'Undi pos hanya boleh dibuat mengikut prosedur rasmi Suruhanjaya Pilihan Raya (SPR). Tiada sebarang aplikasi mesej digunakan untuk membuang undi, dan pengundi tidak perlu berkongsi maklumat peribadi melalui pautan.',
    image: post('cafe-talk'),
    alt: 'Perbualan di kedai kopi',
    status: 'palsu',
    categories: ['integriti-pilihan-raya', 'urus-tadbir'],
    date: '2026-06-03',
    agency: { name: agency.kkmm, image: agencyLogo('kkmm') },
  },
  {
    title: 'Penjelasan rasmi berhubung kutipan zakat secara dalam talian',
    slug: 'penjelasan-kutipan-zakat-dalam-talian',
    lead: 'Jabatan Penerangan Malaysia (JAPEN) memberi penjelasan berhubung kutipan zakat secara dalam talian yang dibincangkan secara meluas di media sosial.',
    explanation: 'Bayaran zakat secara dalam talian adalah sah apabila dibuat melalui portal rasmi pusat zakat negeri. Orang ramai dinasihatkan agar tidak membuat bayaran melalui akaun peribadi atau pautan yang tidak disahkan.',
    image: post('senior-dialogue'),
    alt: 'Warga emas berbual di ruang komuniti',
    status: 'benar',
    categories: ['penjelasan', 'agama'],
    date: '2026-03-18',
    agency: { name: 'JAPEN (Jabatan Penerangan Malaysia)', image: agencyLogo('japen') },
  },
  {
    title: 'Gambar kebakaran hutan di Pahang yang tular adalah gambar lama',
    slug: 'gambar-kebakaran-hutan-pahang-gambar-lama',
    lead: 'Gambar kebakaran hutan yang didakwa berlaku di Pahang minggu ini telah tular di media sosial. Jabatan Bomba dan Penyelamat Malaysia (JBPM) mengesahkan gambar tersebut adalah gambar lama.',
    explanation: 'Gambar itu dirakam beberapa tahun lalu di lokasi lain dan tidak berkaitan dengan sebarang kejadian semasa. Tiada laporan kebakaran hutan besar di Pahang bagi tempoh tersebut.',
    image: '/images/posts/sebenarnya-kopitiam-phone.jpg',
    alt: 'Menyemak gambar tular di telefon',
    status: 'palsu',
    categories: ['bencana', 'keselamatan'],
    date: '2026-11-07',
    agency: { name: agency.jbpm, image: agencyLogo('bomba') },
  },
  {
    title: 'Pemeriksaan kesihatan percuma di klinik kesihatan sepanjang Disember',
    slug: 'pemeriksaan-kesihatan-percuma-disember',
    lead: 'Kementerian Kesihatan Malaysia (KKM) memaklumkan pemeriksaan kesihatan percuma akan ditawarkan di klinik kesihatan terpilih sepanjang Disember 2026.',
    explanation: 'Pemeriksaan merangkumi tekanan darah, gula dalam darah dan kolesterol. Senarai klinik yang terlibat boleh disemak di laman web rasmi KKM, dan tiada sebarang pendaftaran melalui pautan pihak ketiga.',
    image: post('public-waiting'),
    alt: 'Ruang menunggu klinik kesihatan',
    status: 'makluman',
    categories: ['kesihatan', 'kepenggunaan'],
    date: '2026-07-15',
    agency: { name: 'KKM (Kementerian Kesihatan Malaysia)', image: agencyLogo('kkm') },
  },
];
