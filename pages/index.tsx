import { NextPage } from 'next'
import Layout from '../components/Layout'
import EyeCatch from '../components/EyeCatch'
import StrengthsSection from '../components/StrengthsSection'
import WorksSection from '../components/WorksSection'
import AboutSection from '../components/AboutSection'
import MemberSection from '../components/MemberSection'
import AwardsSection from '../components/AwardsSection'

const Index: NextPage = () => (
  <Layout>
    <main>
      <EyeCatch />
      <StrengthsSection />
      <WorksSection />
      <AboutSection />
      <MemberSection />
      <AwardsSection />
    </main>
  </Layout>
)

export default Index
