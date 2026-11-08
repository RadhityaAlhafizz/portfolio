import { PROFILE } from '../../../data/profile';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Button from '../../ui/Button';
import { Icon } from '../../ui/Icons';
import FaultyTerminal from '../../../component/FaultyTerminal';

const PHONE = '0895364312369';
const PHONE_INTL = PHONE.replace(/^0/, '62'); // untuk link WhatsApp

const PhoneIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CONTACTS = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: <Icon.Mail className="w-5 h-5" />,
  },
  {
    label: 'Telepon / WhatsApp',
    value: PHONE,
    href: `https://wa.me/${PHONE_INTL}`,
    icon: <PhoneIcon className="w-5 h-5" />,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: PROFILE.fullName,
    href: PROFILE.socials.linkedin,
    icon: <Icon.LinkedIn className="w-5 h-5" />,
    external: true,
  },
];

export default function ContactSection() {
  const { isCopied, copy } = useCopyToClipboard(2500);

  return (
    <div id="kontak" className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background FaultyTerminal */}
      <div className="absolute inset-0">
        <FaultyTerminal
          tint="#f97316"
          glyphs="blocks"
          scale={1.5}
          digitSize={1.2}
          timeScale={0.5}
          brightness={0.9}
          glow={0.6}
          persistence={0.5}
          mouseStrength={0.5}
          mouseGlow={0.6}
          curvature={0.1}
          vignette={0.25}
          clickEffect="glitch"
          scramble={0.5}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.85}
          chromaticAberration={0}
          mouseReact
          pageLoadAnimation
          pause={false}
          lightMode={false}
        />
      </div>

      {/* Konten Utama di atas canvas, terpusat di tengah layar */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-4xl mx-auto bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <SectionHeading
            tag="Komunikasi &amp; Peluang"
            title="Mari Terhubung"
            className="text-center max-w-xl mx-auto mb-8"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-3 rounded-lg border border-zinc-700/60 bg-zinc-900/60 backdrop-blur-xs p-5 transition-all hover:border-orange-500/50 hover:bg-zinc-800/80"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:scale-105 transition-transform">
                  {c.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-zinc-100 break-words group-hover:text-orange-400 transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                href={`mailto:${PROFILE.email}`}
                variant="primary"
                size="md"
                icon={<Icon.Mail className="text-zinc-950 w-4 h-4" />}
                className="flex-1 sm:flex-initial"
              >
                Kirim Email
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => copy(PROFILE.email)}
                title="Salin alamat email ke clipboard"
                icon={
                  isCopied ? (
                    <Icon.Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Icon.Copy className="w-4 h-4 text-zinc-400" />
                  )
                }
              >
                {isCopied ? 'Tersalin!' : 'Salin'}
              </Button>
            </div>

            <Button
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={<Icon.Download className="text-zinc-400 w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Unduh CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}