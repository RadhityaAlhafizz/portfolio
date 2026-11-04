import { skillsData } from '../../../data/skills';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';

/**
 * Komponen Bagian: SkillsSection (Tema Gelap + Aksen Oranye)
 */
export default function SkillsSection() {
  return (
    <Section id="keahlian" variant="white">
      <SectionHeading
        tag="Kompetensi Teknis"
        title="Keahlian &amp; Alat"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="border border-zinc-800 rounded-lg p-5 sm:p-6 bg-zinc-900 hover:border-zinc-700 transition-colors shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-bold text-zinc-100 tracking-tight">
                {group.category}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 mb-4">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isLearning = item.note.toLowerCase().includes('dipelajari');
                  return (
                    <div
                      key={item.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs ${isLearning
                          ? 'bg-orange-950/40 border-orange-800/60 text-orange-300'
                          : 'bg-zinc-800/80 border-zinc-700/60 text-zinc-200'
                        }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.note && (
                        <span className={`text-[10px] ${isLearning ? 'text-orange-400' : 'text-zinc-400'}`}>
                          &bull; {item.note}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}
