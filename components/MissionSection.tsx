import Section from './Section'
import { useLocale } from '../locales/useLocale'

const MissionSection = () => {
  const { t } = useLocale()

  return (
    <Section name="Missions">
      <p>1. {t.mission1}</p>
      <p>2. {t.mission2}</p>
      <p>3. {t.mission3}</p>
      <p>4. {t.mission4}</p>
    </Section>
  )
}

export default MissionSection
