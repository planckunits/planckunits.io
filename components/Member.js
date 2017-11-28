// @flow

type Props = { name: string, image: string, role: string, url: string }
const Member = ({ name, image, role, url }: Props) => (
  <div>
    <div className="member">
      <div className="image-wrap">
        <img src={image} alt={`プランクユニッツ ${name}`} />
      </div>
      <h3>
        <a href={url}>{name}</a>
      </h3>
      <p>{role}</p>
    </div>
    <style jsx>{`
      a {
        color: black;
        text-decoration: none;
      }
      .image-wrap {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }

      h3 {
        margin-bottom: 0;
      }
      p {
        padding: 0;
        margin-top: 0;
      }

      img {
        width: 100%;
        border-radius: 50%;
      }
      .member {
        width: 250px;
        text-align: center;
        margin-bottom: 30px;
      }

      @media (max-width: 600px) {
        .member {
          margin: 0 auto;
        }
      }
    `}</style>
  </div>
)
export default Member
