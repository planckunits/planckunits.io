import Section from './Section'

const WorksSection = () => (
  <Section name="Works">
    <div>
      <ul>
        <li>
          情報管理システム(株式会社ベスト様,
          株式会社エナジア様、タカヤ株式会社様)
        </li>
        <li>
          環境制御装置ポケットファーム (株式会社細野ファーム様)
          <a href="https://pocketfarm.planckunits.io/houses/0">
            デモサイトはこちら
          </a>
        </li>
        <li>土地情報管理システム、土砂災害検知システム(株式会社リプロ様)</li>
        <li>シフト管理システム</li>
        <li>IoT ソリューション・コンサルティング</li>
        <li></li>
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
      li {
        background: url(static/hex.svg) left 0px top 7px no-repeat;
        background-size: 0.8rem;
        padding-left: 1.2rem;
        list-style: none;
      }
      ul {
        padding-left: 1rem;
      }
    `}</style>
  </Section>
)

export default WorksSection
