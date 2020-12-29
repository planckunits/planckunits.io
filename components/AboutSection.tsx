import Section from './Section'

const akatsukiUrl =
  'https://www.google.co.jp/maps/place/%E5%89%B5%E6%A5%AD%E6%94%AF%E6%8F%B4%E6%96%BD%E8%A8%AD%E3%80%8C%E3%81%82%E3%81%8B%E3%81%A4%E3%81%8D%E3%80%8D/@35.7468485,139.8046201,16z/data=!4m8!1m2!2m1!1z44GC44GL44Gk44GN!3m4!1s0x0:0x4199ce092b95a3dd!8m2!3d35.7489634!4d139.8079669?hl=ja-jp'

const AboutSection = () => (
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
            <a href={akatsukiUrl} style={{ color: 'black' }}>
              〒120-0026 東京都足立区千住旭町11-7 足立成和信金あかつき401
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
        <tr>
          <th>主要取引先企業</th>
          <td>
            <ul>
              <li>株式会社リプロ様 </li>
              <li>株式会社エナジア様 </li>
              <li>タカヤ株式会社様</li>
              <li>株式会社 ベスト様</li>
              <li>月電工業株式会社</li>
              <li>カディンチェ株式会社</li>
              <li>株式会社フジタ様</li>
              <li>NPO法人 サルどこネット様</li>
              <li>株式会社 IT ヒーロー様</li>
              <li>細野ファーム様 </li>
              <li>学校法人東京電機大学</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>取引銀行</th>
          <td>
            <ul>
              <li>三菱UFJ銀行千住支店</li>
              <li>足立成和信用金庫旭町支店</li>
            </ul>
          </td>
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
      th {
        width: 100px;
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

export default AboutSection
