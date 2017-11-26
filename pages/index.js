// @flow
import React from 'react'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <main>
      <section>
        <h1>This section is server-side rendered.</h1>
      </section>

      <style jsx>{`
        section {
          align-items: center;
          display: flex;
          height: 50vh;
          justify-content: center;
        }
      `}</style>
    </main>
  </Layout>
)

export default Index
