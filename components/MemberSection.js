// @flow

import Section from './Section'
import Member from './Member'

type Props = { name?: string }

const Layout = ({ name = 'Section' }: Props) => (
  <Section name="Members">
    <div className="members">
      <Member name="野中 直樹" image="static/nonaka.jpg" />
      <Member name="高橋 洸人" image="static/takahashi.jpg" />
      <Member name="岩井 将行" image="static/iwai.jpg" />
    </div>

    <style jsx>{`
      .members {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </Section>
)

export default Layout
