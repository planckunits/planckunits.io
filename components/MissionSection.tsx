import Section from './Section'
import { useLocale } from '../i18n/useLocale'

const MissionSection = () => {
  const { t } = useLocale()

  const missions = [
    { id: 1, text: t.mission1, color: '#3b82f6' },
    { id: 2, text: t.mission2, color: '#0ea5e9' },
    { id: 3, text: t.mission3, color: '#06b6d4' },
    { id: 4, text: t.mission4, color: '#6366f1' },
  ]

  return (
    <Section name="Our Missions" id="missions">
      <div className="missions-container">
        <div className="missions-grid">
          {missions.map((mission) => (
            <article key={mission.id} className="mission-card">
              <div className="mission-number" style={{ backgroundColor: mission.color }}>
                {mission.id}
              </div>
              <p className="mission-text">{mission.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .missions-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .missions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }

        .mission-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all var(--transition-normal);
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .mission-number {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          font-size: var(--text-2xl);
          font-weight: 700;
        }

        .mission-text {
          flex: 1;
          font-size: var(--text-base);
          line-height: 1.7;
          color: #4a5568;
          margin: 0;
          padding-top: 4px;
        }

        @media (max-width: 768px) {
          .missions-grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }

          .mission-card {
            padding: var(--space-5);
          }

          .mission-number {
            width: 40px;
            height: 40px;
            font-size: var(--text-xl);
          }

          .mission-text {
            font-size: var(--text-sm);
          }
        }

        @media (max-width: 640px) {
          .mission-card {
            padding: var(--space-4);
            gap: var(--space-3);
          }

          .mission-number {
            width: 36px;
            height: 36px;
            font-size: var(--text-lg);
          }
        }
      `}</style>
    </Section>
  )
}

export default MissionSection
