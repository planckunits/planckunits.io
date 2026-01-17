import { useLocale } from '../i18n/useLocale'
import Section from './Section'

const officeUrl =
  'https://www.google.com/maps/dir/35.7494819,139.8057887/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92120-0026+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E6%97%AD%E7%94%BA%EF%BC%91%EF%BC%99%E2%88%92%EF%BC%95+%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF%E3%83%A6%E3%83%8B%E3%83%83%E3%83%84/@35.7482983,139.8068292,18z/data=!4m14!4m13!1m5!3m4!1m2!1d139.8090665!2d35.7491183!3s0x60188e5207581cb5:0xc49d122a9f01d7e2!1m5!1m1!1s0x60188f28756b1519:0x6bb6799c3d6e4cf1!2m2!1d139.8096286!2d35.7478225!3e2?entry=ttu'

// Icons
const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0113 0" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const AboutSection = () => {
  const { t } = useLocale()

  const infoItems = [
    { icon: <BuildingIcon />, label: t.companyName, value: t.planckUnits },
    { icon: <UserIcon />, label: t.CEO, value: t.nonaka },
    { icon: <CalendarIcon />, label: t.established, value: t.established201711 },
    {
      icon: <MapPinIcon />,
      label: t.office,
      value: t.puAddress,
      link: officeUrl,
    },
    {
      icon: <BriefcaseIcon />,
      label: t.buisiness,
      value: t.buisinessConst.join(' / '),
    },
    { icon: <UsersIcon />, label: t.noEmployees, value: t.noEmployeesConst },
  ]

  return (
    <Section name="About" id="about">
      <div className="about-grid">
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
            <div className="icon-wrapper">{item.icon}</div>
            <div className="info-content">
              <span className="label">{item.label}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="value link"
                >
                  {item.value}
                </a>
              ) : (
                <span className="value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="clients-section">
        <h3>
          {t.clients.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </h3>
        <div className="clients-grid">
          {t.clientsConst.map((client, i) => (
            <span key={i} className="client-badge">
              {client}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-12);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          padding: var(--space-5);
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .icon-wrapper {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-neutral-100);
          border-radius: var(--radius-md);
          color: var(--color-primary-700);
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        .label {
          font-size: var(--text-sm);
          color: var(--color-neutral-500);
        }

        .value {
          font-size: var(--text-base);
          color: var(--color-neutral-900);
          font-weight: 500;
        }

        .value.link {
          color: var(--color-primary-700);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .value.link:hover {
          color: var(--color-accent-teal);
        }

        .clients-section {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          box-shadow: var(--shadow-sm);
        }

        .clients-section h3 {
          font-size: var(--text-lg);
          color: var(--color-neutral-700);
          margin: 0 0 var(--space-5);
          text-align: center;
        }

        .clients-section h3 span {
          margin-right: var(--space-2);
        }

        .clients-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          justify-content: center;
        }

        .client-badge {
          padding: var(--space-2) var(--space-4);
          background: var(--color-neutral-100);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          color: var(--color-neutral-700);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .clients-section {
            padding: var(--space-6);
          }
        }
      `}</style>
    </Section>
  )
}

export default AboutSection
