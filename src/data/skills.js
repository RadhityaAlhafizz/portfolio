/**
 * Data Keahlian Radit
 * Dikelompokkan secara terstruktur sesuai PRD Bagian 7.5.
 * Hanya mencantumkan teknologi dan konsep yang benar-benar dikuasai dan dipelajari.
 */
export const skillsData = [
  {
    category: 'Pengembangan Web',
    description: 'Fokus utama pada logika backend, pengelolaan basis data, dan antarmuka web modern.',
    items: [
      { name: 'PHP', note: 'Backend & OOP' },
      { name: 'Laravel', note: 'Framework MVC' },
      { name: 'MySQL', note: 'Relational Database & Query' },
      { name: 'Filament', note: 'Admin Panel & CRUD' },
      { name: 'Tailwind CSS', note: 'Utility-first Styling' },
      { name: 'JavaScript', note: 'DOM & Fetch API' },
      { name: 'React', note: 'Frontend Framework' },
      { name: 'HTML5 & CSS3', note: 'Struktur & Semantik' },
    ],
  },
  {
    category: 'Jaringan & Infrastruktur',
    description: 'Nilai tambah berupa pemahaman topologi jaringan, routing dinamis, dan komputasi awan.',
    items: [
      { name: 'VLAN & Inter-VLAN', note: 'Segmentasi Jaringan' },
      { name: 'Routing (OSPF, BGP)', note: 'Dynamic Routing Protocol' },
      { name: 'NAT / PAT', note: 'Translasi Alamat Jaringan' },
      { name: 'Cisco Packet Tracer', note: 'Simulasi Lab Jaringan' },
      { name: 'Troubleshooting Jaringan', note: 'Analisis & Debug Paket' },
      { name: 'Dasar AWS Cloud', note: 'AWS re/Start Foundations' },
    ],
  },
  {
    category: 'Bahasa Pemrograman Lain',
    description: 'Bahasa yang dipelajari dalam konteks akademik dan pemrosesan data dasar.',
    items: [
      { name: 'Java', note: 'Desktop (Swing & JDBC)' },
      { name: 'Python', note: 'Dasar scripting & data' },
    ],
  },
  {
    category: 'Alat & Metodologi',
    description: 'Perangkat penunjang pengembangan perangkat lunak dan kolaborasi.',
    items: [
      { name: 'Git & GitHub', note: 'Version Control' },
      { name: 'UML Modeling', note: 'Use Case, Class, Sequence' },
      { name: 'Postman', note: 'API Testing' },
      { name: 'VS Code', note: 'Editor Utama' },
      { name: 'Linux CLI', note: 'Perintah Terminal Dasar' },
    ],
  },
];

