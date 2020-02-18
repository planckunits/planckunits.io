import Section from './Section'
import Member from './Member'

type Props = { name?: string }

const MemberSection = ({ name = 'Section' }: Props) => (
  <Section name="Members">
    <div className="image-wrap">
      <img src={'static/pu-member.jpg'} alt={`プランクユニッツ ${name}`} />
    </div>
    <div className="members">
      <Member
        name="野中 直樹"
        role="代表取締役・CEO"
        url={undefined}
        description="IoT開発全般、Raspberry Pi、ESP32、ソラコムモジュール、 Arduino 互換機開発、
        制御システム全般、組み込み機器開発、3Dプリンティング、レーザーカッター、回路設計、デザイン"
      />
      <Member
        name="高橋 洸人"
        role="取締役・CTO"
        url="https://elzup.com"
        description="Webアプリケーション開発、Ruby on Rails、nodejs、React、Redux、AWS、Firebase、PWA、Heroku、SPA、WebSocket、MQTT"
      />
    </div>

    <style jsx>{`
      .members {
        display: flex;
        justify-content: space-around;
      }

      img {
        width: 50%;
      }
      .image-wrap {
        text-align: center;
      }
      @media (max-width: 600px) {
        .members {
          flex-direction: column;
        }
      }
    `}</style>
  </Section>
)

export default MemberSection
