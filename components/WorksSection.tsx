import Section from './Section'
import { useLocale } from '../i18n/useLocale'

const WorksSection = () => {
  const { t } = useLocale()

  return (
    <Section name="Works">
      <div>
        <ul>
          <li>{t.workKui}</li>
          <li>
            {t.workPf}
            <a href="https://pocketfarm.planckunits.io/houses/0">
              {t.workPfLink}
            </a>
          </li>
          <li>{t.workDosya}</li>
          <li>{t.workShifco}</li>
          <li>{t.workIoT}</li>
          <li>{t.workPlantIoT}</li>
          <li>{t.workMobility}</li>
          <li>{t.workCamera}</li>
          <li>{t.workQrKey}</li>
          <li>{t.workPanel}</li>
          <li>{t.workIndoorLocation}</li>
          <li></li>
        </ul>
      </div>
      <style jsx>{`
        .members {
          display: flex;
          justify-content: space-around;
        }
        @media (max-width: 600px) {
          .members {
            flex-direction: column;
          }
        }
        li {
          background: url(static/hex.svg) left 0px top 7px no-repeat;
          background-size: 0.8rem;
          padding-left: 1.2rem;
          list-style: none;
        }
        ul {
          padding-left: 1rem;
        }
      `}</style>
    </Section>
  )
}

export default WorksSection
