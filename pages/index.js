// @flow
import React from 'react'
import Layout from '../components/Layout'
import EyeCatch from '../components/EyeCatch'
import MissionsSection from '../components/MissionSection'
import AboutSection from '../components/AboutSection'

const Index = () => (
  <Layout>
    <main>
      <EyeCatch />
      <MissionsSection />
      <AboutSection />
    </main>
  </Layout>
)

export default Index
