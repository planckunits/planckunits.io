import { NextPage } from 'next'
import Layout from '../components/Layout'
import EyeCatch from '../components/EyeCatch'
import StrengthsSection from '../components/StrengthsSection'
import MissionSection from '../components/MissionSection'
import WorksSection from '../components/WorksSection'
import AboutSection from '../components/AboutSection'
import MemberSection from '../components/MemberSection'
import AwardsSection from '../components/AwardsSection'
import TechStackDemoSection from '../components/TechStackDemoSection'

const Index: NextPage = () => (
  <Layout>
    <main>
      <EyeCatch />
      <MissionSection />
      <StrengthsSection />
      <WorksSection />
      <AboutSection />
      <MemberSection />
      <AwardsSection />
      {process.env.NODE_ENV === 'development' && <TechStackDemoSection />}
    </main>
  </Layout>
)

export default Index
