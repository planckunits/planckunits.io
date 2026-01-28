import { useLocale } from '../i18n/useLocale'
import Section from './Section'

const officeUrl =
  'https://www.google.com/maps/dir/35.7494819,139.8057887/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92120-0026+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E6%97%AD%E7%94%BA%EF%BC%91%EF%BC%99%E2%88%92%EF%BC%95+%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF%E3%83%A6%E3%83%8B%E3%83%83%E3%83%84/@35.7482983,139.8068292,18z/data=!4m14!4m13!1m5!3m4!1m2!1d139.8090665!2d35.7491183!3s0x60188e5207581cb5:0xc49d122a9f01d7e2!1m5!1m1!1s0x60188f28756b1519:0x6bb6799c3d6e4cf1!2m2!1d139.8096286!2d35.7478225!3e2?entry=ttu'

const AboutSection = () => {
  const { t } = useLocale()

  const infoItems = [
    { label: t.companyName, value: t.planckUnits },
    { label: t.CEO, value: t.nonaka },
    { label: t.established, value: t.established201711 },
    {
      label: t.office,
      value: t.puAddress,
      link: officeUrl,
    },
    {
      label: t.buisiness,
      value: t.buisinessConst.join(' / '),
    },
    { label: t.noEmployees, value: t.noEmployeesConst },
  ]

  return (
    <Section name="About" id="about">
      <div className="about-grid">
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
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
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-item {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .info-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 600;
        }

        .value {
          font-size: 1rem;
          color: #111827;
          font-weight: 500;
        }

        .value.link {
          color: #667eea;
          text-decoration: none;
          transition: color 0.2s;
        }

        .value.link:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .clients-section {
          background: #f9fafb;
          border-radius: 0.75rem;
          padding: 2.5rem;
          border: 1px solid #e5e7eb;
        }

        .clients-section h3 {
          font-size: 1.5rem;
          margin: 0 0 2rem;
          text-align: center;
          font-weight: 700;
          color: #111827;
        }

        .clients-section h3 span {
          margin-right: 0.5rem;
        }

        .clients-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .client-badge {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          color: #374151;
          font-weight: 500;
          background: white;
          border: 1px solid #d1d5db;
          transition: all 0.2s;
        }

        .client-badge:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .clients-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Section>
  )
}

export default AboutSection
