type Props = { name: string; description: string; role: string; url?: string }
const Member = ({ name, role, url, description }: Props) => (
  <div className="root">
    <div className="work">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{description}</p>
      {url && <a href={url}>more</a>}
    </div>
    <style jsx>{`
      .root {
        flex: 1;
        padding: 5px;
      }
      a {
        text-decoration: none;
      }

      h3 {
        margin-bottom: 0;
      }
      p {
        padding: 0;
        margin-top: 0;
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
