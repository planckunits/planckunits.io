/* eslint-disable @next/next/no-img-element */
const Logo = () => (
  <div>
    <img src="static/logo.svg" alt="株式会社プランクユニッツ" />
    <style jsx>{`
      img {
        width: 40px;
        height: 40px;
        transition: all var(--transition-normal);
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))
                drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))
                drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }

      img:hover {
        filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.9))
                drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))
                drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
        transform: scale(1.05);
      }

      @media (max-width: 1024px) {
        img {
          width: 36px;
          height: 36px;
        }
      }

      @media (max-width: 768px) {
        img {
          width: 32px;
          height: 32px;
        }
      }

      @media (max-width: 640px) {
        img {
          width: 28px;
          height: 28px;
        }
      }
    `}</style>
  </div>
)

export default Logo
