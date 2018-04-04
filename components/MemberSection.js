// @flow

import Section from './Section'
import Member from './Member'

type Props = { name?: string }

const Layout = ({ name = 'Section' }: Props) => (
  <Section name="Members">
    <div className="members">
      <Member
        name="野中 直樹"
        image="static/nonaka.jpg"
        role="代表取締役・CEO"
        url="https://www.cps.im.dendai.ac.jp/index.php?Members%2Fnaoki"
      />
      <Member
        name="高橋 洸人"
        image="static/takahashi.jpg"
        role="取締役・CTO"
        url="https://elzup.com"
      />
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
    `}</style>
  </Section>
)

export default Layout
