// @flow
import React from 'react'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'
import MissionsSection from '../components/MissionSection'

const Index = () => (
  <Layout>
    <main>
      <MissionsSection />
      <AboutSection />
    </main>
  </Layout>
)

export default Index
