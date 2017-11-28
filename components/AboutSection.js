// @flow

import Section from './Section'

type Props = { name?: string }

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
          <td>〒120-0034 東京都足立区千住3-6ツォード千住壱番館</td>
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
