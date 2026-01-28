/* eslint-disable @next/next/no-img-element */
const Logo = () => (
  <div>
    <img src="static/logo.svg" alt="株式会社プランクユニッツ" />
    <style jsx>{`
      img {
        width: 56px;
        height: 56px;
        transition: all var(--transition-normal);
      }

      @media (max-width: 1024px) {
        img {
          width: 48px;
          height: 48px;
        }
      }

      @media (max-width: 768px) {
        img {
          width: 40px;
          height: 40px;
        }
      }

      @media (max-width: 640px) {
        img {
          width: 36px;
          height: 36px;
        }
      }
    `}</style>
  </div>
)

export default Logo
