/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../i18n/useLocale'

const EyeCatch = () => {
  const { t } = useLocale()
  return (
    <section>
      <div className="image-wrap">
        <img src="static/logo-name.svg" alt="株式会社プランクユニッツ" />
      </div>
      <div>
        <p>{t.missionMain}</p>
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
        @media (max-width: 600px) {
          p {
            padding: 40px 30px;
          }
          img {
            width: 100%;
            height: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default EyeCatch
