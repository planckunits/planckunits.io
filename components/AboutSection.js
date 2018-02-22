// @flow

import Section from './Section'

type Props = { name?: string }

const kakehashiUrl =
  'https://www.google.co.jp/maps/place/%E6%9D%B1%E4%BA%AC%E9%9B%BB%E6%A9%9F%E5%A4%A7%E5%AD%A6%E5%89%B5%E6%A5%AD%E6%94%AF%E6%8F%B4%E6%96%BD%E8%A8%AD%E3%80%8C%E3%81%8B%E3%81%91%E3%81%AF%E3%81%97%E3%80%8D/@35.7509605,139.8052767,17z/data=!3m1!4b1!4m5!3m4!1s0x60188e4e8a3aaaab:0x77965e31b66ea8c4!8m2!3d35.7509605!4d139.8074654?hl=ja-jp'

const Layout = ({ name = 'Section' }: Props) => (
  <Section name="About">
    <table>
      <tbody>
        <tr>
          <th>社名</th>
          <td>株式会社 PlanckUnits (プランクユニッツ)</td>
        </tr>
        <tr>
          <th>代表取締役</th>
          <td>野中 直樹</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>2017年11月</td>
        </tr>
        <tr>
          <th>オフィス</th>
          <td>
            〒120-0034 東京都足立区千住3-6ツォード千住壱番館<br />
            2018年4月1日 東京電機大学創業支援施設「かけはし 」に移転予定 <br />
            <a href={kakehashiUrl}>
              〒120-0026 東京都足立区千住旭町３８−１
              創業支援施設かけはし足立区連携事業
            </a>
          </td>
        </tr>
        <tr>
          <th>事業内容</th>
          <td>
            <ul>
              <li>IoT開発</li>
              <li>Webシステム・アプリケーション開発</li>
              <li>コンサルティング・教育</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>資本金</th>
          <td>7,500,000円</td>
        </tr>
        <tr>
          <th>従業員数</th>
          <td>3人</td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th,
      td {
        padding: 20px 5px;
        text-align: left;
        border-bottom: solid 1px black;
        font-weight: normal;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      @media (max-width: 600px) {
        th {
          width: 95px;
        }
      }
    `}</style>
  </Section>
)

export default Layout
