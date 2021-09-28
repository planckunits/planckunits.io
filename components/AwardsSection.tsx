import Section from './Section'

type Props = {}
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

const AwardsSection = ({}: Props) => (
  <Section name="受賞歴・記事">
    <div>
      <ul>
        {awards.map((award, i) => (
          <li key={i} className="award">
            <p>{award.time}</p>
            <a href={award.link}>{award.title}</a>
            <p>{award.text}</p>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      ul {
        padding-left: 4px;
      }
      .award {
        list-style: none;
        border-left: solid 2px black;
        padding-left: 16px;
      }
    `}</style>
  </Section>
)

export default AwardsSection
