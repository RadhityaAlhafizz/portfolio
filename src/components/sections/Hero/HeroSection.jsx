import { PROFILE } from '../../../data/profile';
import Section from '../../ui/Section';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import { Icon } from '../../ui/Icons';
import CRTWarp from '../../../component/CRTWarp';
import BlurText from "../../../component/BlurText";

/**
 * Komponen Bagian: HeroSection (Tema Gelap + Aksen Oranye)
 */
export default function HeroSection() {
  // Handler dipindah ke sini — di luar return(), di dalam fungsi komponen
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className='absolute inset-0'>
        <CRTWarp
          color="#f97316"
          backgroundColor="#120f17"
          mask="aperture"
          curvature={0.25}
          persistence={0.4}
          lightMode={false}
          speed={0.35}
          variation={0}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          levels={3}
          columns={80}
          corners={0.5}
          scanlineStrength={0.6}
          scanlineFrequency={200}
          maskStrength={0.3}
          bloom={1.5}
          bloomRadius={1}
          rgbShift={0.003}
          noise={0.1}

          flicker={0.15}
          interference={0.2}
          vignette={0.3}
          brightness={1}
          intro
          mouseReact
          mouseStrength={0.5}
          changeOnClick
          dpr={2}
          paused={false}
        />
      </div>
      {/* Konten di tengah */}
      <div className="relative z-10 flex min-h-screen items-end justify-start px-6 pb-16 md:px-12 md:pb-20">
        <div className="max-w-3xl text-left">
          <BlurText
            text="Halo, Saya Radhitya"
            effect="focus"
            animateBy="words"
            direction="bottom"
            staggerFrom="start"
            trigger="click"
            delay={200}
            stepDuration={0.35}
            blur={10}
            distance={50}
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight"
            loop={true}
            loopDelay={2}
            focusOnHover={true}
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<Icon.Download className="text-zinc-400 w-4 h-4" />}
            >
              Unduh CV
            </Button>

            <Button
              href={PROFILE.socials.github}
              variant="outline"
              icon={<Icon.GitHub className="w-4 h-4 text-zinc-300" />}
              aria-label="GitHub Radit"
            >
              GitHub
            </Button>

            <Button
              href={PROFILE.socials.linkedin}
              variant="outline"
              icon={<Icon.LinkedIn className="w-4 h-4 text-zinc-300" />}
              aria-label="LinkedIn Radit"
            >
              LinkedIn
            </Button>
          </div>

        </div>
      </div>

    </div>
  );
}
