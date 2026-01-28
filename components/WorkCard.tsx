import { useLocale } from '../i18n/useLocale'
import { Work, categoryLabels, categoryColors } from '../data/works'
import TechIcons from './TechIcons'

type Props = {
  work: Work
}

// Category icons
const IoTIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const WebIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

const ConsultingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const categoryIcons = {
  iot: <IoTIcon />,
  web: <WebIcon />,
  consulting: <ConsultingIcon />,
}

const WorkCard: React.FC<Props> = ({ work }) => {
  const { locale } = useLocale()

  const title = locale === 'ja' ? work.titleJa : work.titleEn
  const description = locale === 'ja' ? work.descriptionJa : work.descriptionEn
  const categoryLabel = categoryLabels[work.category][locale as 'ja' | 'en']

  const CardWrapper = work.link ? 'a' : 'article'
  const cardProps = work.link
    ? { href: work.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <>
      <CardWrapper className="card" {...cardProps}>
        <div
          className="thumbnail"
          style={{ background: categoryColors[work.category] }}
        >
          <div className="category-icon">{categoryIcons[work.category]}</div>
          {/* 技術アイコン（一旦非表示）
          {work.technologies && work.technologies.length > 0 && (
            <div className="tech-icons-wrapper">
              <TechIcons technologies={work.technologies} />
            </div>
          )}
          */}
        </div>
        <div className="content">
          <div className="header">
            <h3>{title}</h3>
            <span
              className="category-badge"
              style={{
                background: categoryColors[work.category],
              }}
            >
              {categoryLabel}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </CardWrapper>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          background: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
            0 1px 2px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          color: inherit;
          border: 1px solid var(--color-neutral-200);
        }

        a.card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.06);
          border-color: var(--color-neutral-300);
        }

        .thumbnail {
          aspect-ratio: 16 / 9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--space-6);
          color: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .thumbnail::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 30% 50%,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .category-icon {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.95;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          transition: all var(--transition-normal);
        }

        a.card:hover .category-icon {
          transform: scale(1.05);
          opacity: 1;
        }

        .tech-icons-wrapper {
          position: absolute;
          bottom: var(--space-3);
          left: var(--space-3);
          right: var(--space-3);
          display: flex;
          justify-content: center;
        }

        .content {
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        h3 {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-neutral-900);
          margin: 0;
          line-height: 1.4;
          letter-spacing: -0.01em;
          flex: 1;
        }

        p {
          font-size: var(--text-sm);
          color: var(--color-neutral-600);
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        .category-badge {
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-white);
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          h3 {
            font-size: var(--text-base);
          }

          p {
            font-size: var(--text-sm);
          }

          .header {
            flex-direction: column;
            gap: var(--space-2);
          }
        }
      `}</style>
    </>
  )
}

export default WorkCard
