/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../i18n/useLocale'
import Member from './Member'
import Section from './Section'

const MemberSection = () => {
  const { t } = useLocale()

  return (
    <Section name="Members" id="members">
      <div className="image-wrap">
        <img src="static/pu-member.jpg" alt="PlanckUnits Team" />
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
        .image-wrap {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .image-wrap img {
          width: 100%;
          max-width: 500px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .members {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }

        @media (max-width: 768px) {
          .members {
            grid-template-columns: 1fr;
          }

          .image-wrap img {
            max-width: 100%;
          }
        }
      `}</style>
    </Section>
  )
}

export default MemberSection
