/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../locales/useLocale'
import Member from './Member'
import Section from './Section'

type Props = { name?: string }

const MemberSection = ({ name = 'Section' }: Props) => {
  const { t } = useLocale()
  return (
    <Section name="Members">
      <div className="image-wrap">
        <img src={'static/pu-member.jpg'} alt={`プランクユニッツ ${name}`} />
      </div>
      <div className="members">
        <Member
          name={t.nonaka}
          role={t.nonakaRole}
          url={undefined}
          description={t.nonakaDescription}
        />
        <Member
          name={t.takahashi}
          role={t.takahashiRole}
          url="https://elzup.com"
          description={t.takahashiDescription}
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
}

export default MemberSection
