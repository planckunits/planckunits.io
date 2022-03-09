import { useLocale } from '../i18n/useLocale'
import Section from './Section'

const officeUrl = 'https://www.google.com/maps?q=35.7478271,139.800753'

const AboutSection = () => {
  const { t } = useLocale()
  return (
    <Section name="About">
      <table>
        <tbody>
          <tr>
            <th>{t.companyName}</th>
            <td>{t.planckUnits}</td>
          </tr>
          <tr>
            <th>{t.CEO}</th>
            <td>{t.nonaka}</td>
          </tr>
          <tr>
            <th>{t.established}</th>
            <td>{t.established201711}</td>
          </tr>
          <tr>
            <th>{t.office}</th>
            <td>
              <a href={officeUrl} style={{ color: 'black' }}>
                {t.puAddress}
              </a>
            </td>
          </tr>
          <tr>
            <th>{t.buisiness}</th>
            <td>
              <ul>
                {t.buisinessConst.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>{t.capital}</th>
            <td>{t.capitalConst}</td>
          </tr>
          <tr>
            <th>{t.noEmployees}</th>
            <td>{t.noEmployeesConst}</td>
          </tr>
          <tr>
            <th>{t.clients}</th>
            <td>
              <ul className="">
                {t.clientsConst.map((client, i) => (
                  <li key={i}>{client}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>{t.banks}</th>
            <td>
              <ul>
                <li>{t.banksConst[0]}</li>
                <li>{t.banksConst[1]}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          padding: 20px 5px;
          text-align: left;
          border-bottom: solid 1px black;
          font-weight: normal;
        }
        th {
          width: 100px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 600px) {
          th {
            width: 95px;
          }
        }
      `}</style>
    </Section>
  )
}

export default AboutSection
