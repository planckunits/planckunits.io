import Section from './Section'
import { useLocale } from '../i18n/useLocale'

const awards = [
  {
    time: '2021年09月',
    title:
      '第6回産学公金交流会にて講演を行いました | 研究推進社会連携センター｜東京電機大学',
    link: 'https://www.dendai.ac.jp/crc/tlo/news/20210922-01.html',
  },
  {
    time: '2020年01月',
    title:
      '足立区創業プランコンテスト 優秀賞／瀧野川信用金庫賞／東京東信用金庫賞',
    link: 'https://www.dendai.ac.jp/dendai-people/20200120-01.html',
    text: '卒業生の野中さん、高橋さんが「足立区創業プランコンテスト」にて受賞',
  },
  {
    time: '2018年12月',
    title:
      'Vol.5 WEB INTERVIEW -活躍する在学生- 野中 直樹さん - 情報メディア学科 - 東京電機大学',
    link: 'https://www.im.dendai.ac.jp/student/05/',
  },
]

const AwardsSection = () => {
  const { t } = useLocale()

  return (
    <Section name={t.awards} id="awards">
      <div className="timeline">
        {awards.map((award, i) => (
          <article key={i} className="award">
            <div className="time-badge">{award.time}</div>
            <div className="content">
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                {award.title}
              </a>
              {award.text && <p className="description">{award.text}</p>}
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .award {
          display: flex;
          gap: var(--space-5);
          padding: var(--space-5);
          background: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--color-accent-teal);
        }

        .time-badge {
          flex-shrink: 0;
          padding: var(--space-2) var(--space-3);
          background: var(--color-neutral-100);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-neutral-700);
          height: fit-content;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .title {
          font-size: var(--text-base);
          color: var(--color-neutral-900);
          text-decoration: none;
          line-height: 1.5;
          transition: color var(--transition-fast);
        }

        .title:hover {
          color: var(--color-primary-700);
        }

        .description {
          font-size: var(--text-sm);
          color: var(--color-neutral-500);
          margin: 0;
        }

        @media (max-width: 640px) {
          .award {
            flex-direction: column;
            gap: var(--space-3);
          }

          .time-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </Section>
  )
}

export default AwardsSection
