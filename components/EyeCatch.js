// @flow

const EyeCatch = () => (
  <section>
    <div className="image-wrap">
      <img src="static/logo-name.svg" alt="株式会社プランクユニッツ" />
    </div>
    <div>
      <p>IoTとクラウド技術でのオーダーメイド開発</p>
    </div>
    <style jsx>{`
      p {
        padding: 100px 0;
        font-size: 2em;
        text-align: center;
        background: #223740;
        color: white;
      }
      .image-wrap {
        align-items: center;
        width: 100%;
        display: flex;
      }
      img {
        width: 600px;
        height: 600px;
        margin: 0 auto;
      }
    `}</style>
  </section>
)
export default EyeCatch
