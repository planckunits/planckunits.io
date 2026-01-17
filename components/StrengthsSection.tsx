import { useLocale } from '../i18n/useLocale'
import Section from './Section'
import StrengthCard from './StrengthCard'

// Simple SVG icons to avoid react-icons type compatibility issues
const PuzzleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 4h-5L9 2H7L5.5 4h-2a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-2L16 2h-2l-.5 2z" />
    <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
  </svg>
)

const ChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LightningIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChipIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
)

const StrengthsSection = () => {
  const { t } = useLocale()

  const strengths = [
    {
      icon: <PuzzleIcon />,
      titleKey: 'strengthCustomTitle',
      descKey: 'strengthCustomDesc',
      color: 'var(--color-accent-coral)',
    },
    {
      icon: <ChartIcon />,
      titleKey: 'strengthAnalyticsTitle',
      descKey: 'strengthAnalyticsDesc',
      color: 'var(--color-accent-teal)',
    },
    {
      icon: <LightningIcon />,
      titleKey: 'strengthAdaptTitle',
      descKey: 'strengthAdaptDesc',
      color: 'var(--color-primary-600)',
    },
    {
      icon: <ChipIcon />,
      titleKey: 'strengthFullstackTitle',
      descKey: 'strengthFullstackDesc',
      color: 'var(--color-category-iot)',
    },
  ]

  return (
    <Section name={t.strengthsTitle} id="strengths">
      <div className="strengths-grid">
        {strengths.map((strength) => (
          <StrengthCard
            key={strength.titleKey}
            icon={strength.icon}
            title={t[strength.titleKey as keyof typeof t] as string}
            description={t[strength.descKey as keyof typeof t] as string}
            color={strength.color}
          />
        ))}
      </div>

      <style jsx>{`
        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        @media (max-width: 1024px) {
          .strengths-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .strengths-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  )
}

export default StrengthsSection
