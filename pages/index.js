// @flow
import React from 'react'
import Layout from '../components/Layout'
import EyeCatch from '../components/EyeCatch'
import MissionsSection from '../components/MissionSection'
import AboutSection from '../components/AboutSection'
import MemberSection from '../components/MemberSection'
import WorksSection from '../components/WorksSection'

const Index = () => (
  <Layout>
    <main>
      <EyeCatch />
      <MissionsSection />
      <AboutSection />
      <MemberSection />
      <WorksSection />
    </main>
  </Layout>
)

export default Index
