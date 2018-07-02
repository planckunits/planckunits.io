// @flow

import Section from './Section'
import Member from './Member'

type Props = { name?: string }

const Layout = ({ name = 'Section' }: Props) => (
  <Section name="Works">
    <div>
      <ul>
        <li>
          情報管理システム(株式会社ベスト様,
          株式会社エナジア様、タカヤ株式会社様)
        </li>
        <li>遠隔制御装置(株式会社ITヒーロー様、細野ファーム様)</li>
        <li>土地情報管理システム、土砂災害検知システム(株式会社リプロ様)</li>
        <li>シフト管理システム</li>
        <li>IoT ソリューション・コンサルティング</li>
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
    `}</style>
  </Section>
)

export default Layout
