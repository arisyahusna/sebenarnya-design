// All page content lives here, so sections can be edited without touching markup.

import { withBase } from '@/lib/basePath';

const post = (file) => withBase(`/images/posts/${file}`);

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
  { label: 'Utama', href: '/' },
  { label: 'Semak Fakta', href: '/article/' },
  { label: 'Tentang Kami', href: '/about-us/' },
  { label: 'Logo', href: '/logo/' },
  { label: 'Salur Kepada Kami', href: '/submit-claim/' },
];

/* Stories carousel (latest social media posts) */
// `platform` = id in `socialLinks` (sets the icon, label and card colour)
// `href` = the post. The card shows one of: `video` (+ `poster`) = a local copy of the clip,
// `embed` = the platform's official player, `image` = for photo posts
export const stories = [
  {
    platform: 'instagram',
    title: 'Haa sebelum share, tanya AIFA dulu!',
    summary: 'WhatsApp AIFA di 03-8688 7997 atau layari Sebenarnya.my. AIFA akan semak dan jawab guna sumber yang sahih.',
    date: '7 Ogo 2025',
    href: 'https://www.instagram.com/reel/DNCUauizeUu/',
    video: withBase('/images/stories/instagram-aifa.mp4'),
    poster: withBase('/images/stories/instagram-aifa.jpg'),
  },
  {
    platform: 'threads',
    title: 'Selamat Hari Malaysia!',
    summary: 'Bersama kita raikan perpaduan, pelihara kepercayaan dan utamakan kebenaran. Semak dahulu di portal Sebenarnya.my sebelum kongsi.',
    date: '15 Sep 2026',
    href: 'https://www.threads.com/@sebenarnya.myofficial/post/DdTV7PQlCdu',
    embed: 'https://www.threads.com/@sebenarnya.myofficial/post/DdTV7PQlCdu/embed',
  },
  {
    platform: 'x',
    title: 'Cara semak maklumat dengan AIFA',
    summary: 'Terima kandungan yang meragukan? Jangan panik, jangan sebarkan. Semak melalui AIFA di portal Sebenarnya.my atau imbas kod QR.',
    date: '12 Jun 2025',
    href: 'https://x.com/sebenarnyaMY/status/1933107075279966676',
    image: withBase('/images/stories/x-aifa.jpg'),
    alt: 'Infografik empat langkah semak maklumat dengan AIFA melalui WhatsApp 03-8688 7997',
  },
  {
    platform: 'tiktok',
    title: 'Tonton di TikTok Sebenarnya.my',
    summary: 'Video terkini daripada @sebenarnyamy. Tidak pasti, jangan kongsi.',
    date: '14 Sep 2025',
    href: 'https://www.tiktok.com/@sebenarnyamy/video/7549728480137596167',
    embed: 'https://www.tiktok.com/player/v1/7549728480137596167?description=0&music_info=0&rel=0&loop=1',
  },
];

/* Social media (footer links + story card icons) */
// `href` = profile page; `icon` = Simple Icons path (24x24 viewBox)
export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1HB1gmU1o8/?mibextid=wwXIfr',
    icon: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/sebenarnya.myofficial?mdxt=MTUyYjZxMW85b3A4NA==',
    icon: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  },
  {
    id: 'threads',
    label: 'Threads',
    href: 'https://www.threads.com/@sebenarnya.myofficial?igshid=NTc4MTIwNjQ2YQ==',
    icon: 'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/sebenarnyamy?s=11&t=q1rdZJ8gebZLKyWQ4h2kYA',
    icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@sebenarnyamy?_r=1&_t=ZS-9BKgyXbbDaJ',
    icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
];

/* Footer */
export const footerColumns = [
  {
    title: 'Teroka',
    links: [
      { label: 'Semak Fakta', href: '/article/' },
      { label: 'AIFA', href: '/aifa/' },
      { label: 'Salur Kepada Kami', href: '/submit-claim/' },
    ],
  },

  {
    title: 'Sebenarnya.my',
    links: [
      { label: 'Tentang Kami', href: '/about-us/' },
      { label: 'Hubungi Kami', href: '/contact/' },
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
    image: withBase('/images/carousel/license.png'),
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
    image: withBase('/images/carousel/hero-cuaca.jpg'),
    eyebrow: 'Waspada | METMalaysia',
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
const partnerLogo = (name) => withBase(`/images/logo/partners/${name}.png`);

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
  { id: 'benar', label: 'Benar', dot: '#1d8a4e' },
  { id: 'makluman', label: 'Makluman', dot: '#0071e3' },
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
  waspada: { label: 'Waspada', color: '#f56300' },
  benar: { label: 'Benar', color: '#1d8a4e' },
};

const agencyLogo = (name) => withBase(`/images/authors/agency-${name}.webp`);

// `status` = card tag (palsu / makluman / benar / waspada)
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
    image: post('fakechat.jpg'),
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
    image: post('rain.jpg'),
    alt: 'Jalan bandar dan penunggang basikal',
    status: 'waspada',
    categories: ['bencana'],
    date: '2026-11-05',
    agency: { name: agency.met, image: agencyLogo('met') },
  },
  {
    title: 'Sekolah di Selangor beroperasi seperti biasa minggu ini',
    slug: 'sekolah-selangor-beroperasi-seperti-biasa',
    lead: 'Kementerian Pendidikan Malaysia (KPM) mengesahkan semua sekolah di Selangor beroperasi seperti biasa minggu ini, berikutan mesej tular yang mendakwa sekolah akan ditutup.',
    explanation: 'Sebarang penutupan sekolah akan diumumkan secara rasmi oleh KPM atau Jabatan Pendidikan Negeri. Ibu bapa dinasihatkan untuk merujuk pengumuman rasmi sekolah dan tidak mempercayai mesej yang tidak bersumber.',
    image: post('school2.jpg'),
    alt: 'Ibu bapa menunggu di ruang legar',
    status: 'benar',
    categories: ['pendidikan'],
    date: '2026-10-30',
    agency: { name: agency.kpm, image: agencyLogo('kpm') },
  },
  {
    title: 'Video vaksin baharu menyebabkan penyakit kulit adalah tidak benar',
    slug: 'video-vaksin-penyakit-kulit-tidak-benar',
    lead: 'Sebuah video yang tular mendakwa vaksin baharu menyebabkan penyakit kulit. Kementerian Kesihatan Malaysia (KKM) mengesahkan dakwaan tersebut adalah tidak benar.',
    explanation: 'Video itu menggunakan rakaman lama yang tidak berkaitan dengan sebarang program vaksinasi. Semua vaksin yang digunakan di Malaysia telah melalui penilaian keselamatan oleh pihak berkuasa kesihatan.',
    image: post('vaccine.jpg'),
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
    image: post('license.jpg'),
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
    image: post('budimadani.jpg'),
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
    image: post('sebenarnya-fc-digital-desk.jpg'),
    alt: 'Telefon pintar dan buku nota di atas meja',
    status: 'benar',
    categories: ['urus-tadbir'],
    date: '2026-09-20',
    agency: { name: agency.jpa, image: agencyLogo('jpa') },
  },
  {
    title: 'Waspada panggilan telefon menyamar sebagai pegawai polis',
    slug: 'waspada-panggilan-menyamar-pegawai-polis',
    lead: 'Polis Diraja Malaysia (PDRM) mengingatkan orang ramai supaya berwaspada terhadap panggilan telefon daripada individu yang menyamar sebagai pegawai polis.',
    explanation: 'Penipu biasanya mendakwa mangsa terlibat dalam kes jenayah dan meminta wang dipindahkan ke akaun tertentu. PDRM tidak pernah meminta orang ramai memindahkan wang melalui panggilan telefon.',
    image: post('call.jpg'),
    alt: 'Menyemak telefon di kedai kopi',
    status: 'waspada',
    categories: ['keselamatan', 'jenayah'],
    date: '2026-08-12',
    agency: { name: agency.pdrm, image: agencyLogo('pdrm') },
  },
  {
    title: 'Dakwaan undi pos boleh dibuat melalui aplikasi mesej adalah palsu',
    slug: 'undi-pos-aplikasi-mesej-palsu',
    lead: 'Satu hantaran tular mendakwa pengundi boleh membuang undi pos melalui aplikasi mesej. Dakwaan ini disahkan palsu.',
    explanation: 'Undi pos hanya boleh dibuat mengikut prosedur rasmi Suruhanjaya Pilihan Raya (SPR). Tiada sebarang aplikasi mesej digunakan untuk membuang undi, dan pengundi tidak perlu berkongsi maklumat peribadi melalui pautan.',
    image: post('chat.jpg'),
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
    image: post('sebenarnya-fc-senior-dialogue.jpg'),
    alt: 'Warga emas berbual di ruang komuniti',
    status: 'benar',
    categories: ['agama'],
    date: '2026-03-18',
    agency: { name: 'JAPEN (Jabatan Penerangan Malaysia)', image: agencyLogo('japen') },
  },
  {
    title: 'Gambar kebakaran hutan di Pahang yang tular adalah gambar lama',
    slug: 'gambar-kebakaran-hutan-pahang-gambar-lama',
    lead: 'Gambar kebakaran hutan yang didakwa berlaku di Pahang minggu ini telah tular di media sosial. Jabatan Bomba dan Penyelamat Malaysia (JBPM) mengesahkan gambar tersebut adalah gambar lama.',
    explanation: 'Gambar itu dirakam beberapa tahun lalu di lokasi lain dan tidak berkaitan dengan sebarang kejadian semasa. Tiada laporan kebakaran hutan besar di Pahang bagi tempoh tersebut.',
    image: post('terbakar.jpg'),
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
    image: post('clinic.jpg'),
    alt: 'Ruang menunggu klinik kesihatan',
    status: 'makluman',
    categories: ['kesihatan', 'kepenggunaan'],
    date: '2026-07-15',
    agency: { name: 'KKM (Kementerian Kesihatan Malaysia)', image: agencyLogo('kkm') },
  },
];
