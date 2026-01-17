import { useLocale } from '../i18n/useLocale'
import { Work, categoryLabels, categoryColors } from '../data/works'

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
          style={{ backgroundColor: categoryColors[work.category] }}
        >
          {categoryIcons[work.category]}
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="footer">
            <span
              className="category-badge"
              style={{
                backgroundColor: categoryColors[work.category],
              }}
            >
              {categoryLabel}
            </span>
            {work.client && <span className="client">{work.client}</span>}
          </div>
        </div>
      </CardWrapper>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          background: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          text-decoration: none;
          color: inherit;
        }

        a.card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .thumbnail {
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          opacity: 0.9;
        }

        .content {
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--color-neutral-900);
          margin: 0 0 var(--space-2);
          line-height: 1.3;
        }

        p {
          font-size: var(--text-sm);
          color: var(--color-neutral-700);
          line-height: 1.5;
          margin: 0 0 var(--space-4);
          flex: 1;
        }

        .footer {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .category-badge {
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-white);
        }

        .client {
          font-size: var(--text-xs);
          color: var(--color-neutral-500);
        }

        @media (max-width: 640px) {
          h3 {
            font-size: var(--text-base);
          }

          p {
            font-size: var(--text-sm);
          }
        }
      `}</style>
    </>
  )
}

export default WorkCard
