import { useLocale } from '../i18n/useLocale'
import Section from './Section'

const officeUrl =
  'https://www.google.com/maps/dir/35.7494819,139.8057887/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92120-0026+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E6%97%AD%E7%94%BA%EF%BC%91%EF%BC%99%E2%88%92%EF%BC%95+%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF%E3%83%A6%E3%83%8B%E3%83%83%E3%83%84/@35.7482983,139.8068292,18z/data=!4m14!4m13!1m5!3m4!1m2!1d139.8090665!2d35.7491183!3s0x60188e5207581cb5:0xc49d122a9f01d7e2!1m5!1m1!1s0x60188f28756b1519:0x6bb6799c3d6e4cf1!2m2!1d139.8096286!2d35.7478225!3e2?entry=ttu'

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
