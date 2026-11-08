import { PROFILE } from '../../../data/profile';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Badge from '../../ui/Badge';
import HoloCard from '../../../component/HoloCard';
import card from '../../../assets/Foto_Radhitya Arrayyan Alhafizhh.webp';
/**
 * Komponen Bagian: AboutSection (Tema Gelap)
 */
export default function AboutSection() {
  return (
    <Section id="tentang" variant="muted">
      <SectionHeading
        tag="Profil Singkat"
        title="Tentang Saya"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Kolom Fakta Cepat */}
        <div className="p-5 shadow-xs space-y-4 ">
          <HoloCard image={card} alt="Radhitya" preset="gold"
            foilColor="#e2e6ec"
            intensity={0.25}
            scale={0.5}
            edgeSparkle={0.3}
            frame={2}
            glare={0.5}
            tiltMax={14}
            hoverScale={1.04}
            radius={14}
            width={320}
            idle
            shadow
          />
        </div>

        {/* Kolom Narasi */}
        <div className="md:col-span-2 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p>
            Saya adalah lulusan <strong className="text-zinc-100">{PROFILE.education.degree} dari {PROFILE.education.institution}</strong>.
            Sejak awal perkuliahan, fokus utama saya terarah pada logika aplikasi backend, pemodelan relasional database MySQL,
            serta cara menghubungkan dan mengamankan sistem melalui protokol jaringan.
          </p>
          <p>
            Saya menganut cara belajar <strong className="text-zinc-100">hands-on melalui pembuatan proyek nyata</strong>.
            Projek skripsi saya (SIPATIN) mengembangkan sistem pakar diagnosis berbasis aturan pohon keputusan,
            sementara pengalaman magang di Nethome.id melatih saya memproduksi aplikasi operasional lengkap
            dengan dokumentasi UML formal.
          </p>
          <p>
            Fondasi jaringan Cisco dan pelatihan cloud computing AWS re/Start melengkapi pemahaman saya,
            sehingga saya mampu melihat sistem dari sisi kode aplikasi maupun dari sudut pandang infrastruktur deployment.
          </p>
          <p className="font-semibold text-zinc-100 pt-2">
            Saya Terbuka untuk kesempatan magang ataupun Fulltime, posisi kerja junior Web Developer atau Networking.
          </p>
        </div>



      </div>
    </Section>
  );
}
