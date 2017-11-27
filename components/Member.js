type Props = { name: string, image: string }
const Member = ({ name, image }: Props) => (
  <div>
    <div className="member">
      <div className="image-wrap">
        <img src={image} alt={`プランクユニッツ ${name}`} />
      </div>
      <h3>{name}</h3>
    </div>
    <style jsx>{`
      .image-wrap {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }

      img {
        width: 100%;
        border-radius: 50%;
      }
      .member {
        width: 250px;
      }

      h3 {
        text-align: center;
      }
    `}</style>
  </div>
)
export default Member
