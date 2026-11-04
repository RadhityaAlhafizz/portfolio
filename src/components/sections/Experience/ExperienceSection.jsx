import { experiencesData } from '../../../data/experience';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Badge from '../../ui/Badge';

/**
 * Komponen Bagian: ExperienceSection (Tema Gelap + Aksen Oranye)
 */
export default function ExperienceSection() {
  return (
    <Section id="pengalaman" variant="muted">
      <SectionHeading
        tag="Rekam Jejak"
        title="Pengalaman &amp; Pelatihan"
      />

      <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="relative group">

            {/* Penanda Titik Garis Waktu */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors"></div>

            {/* Kotak Pengalaman */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 sm:p-6 shadow-xs hover:border-zinc-700 transition-colors">

              {/* Header: Judul, Organisasi, dan Periode */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-400">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <Badge variant="mono" size="sm">
                    {exp.period}
                  </Badge>
                  <span className="text-xs px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded border border-zinc-700/60 hidden sm:inline-block">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {exp.description}
              </p>

              {/* Tech / Skills Pills */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="mono" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}
