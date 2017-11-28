// @flow

type Props = { children?: any, name?: string }

const Layout = ({ children, name = 'Section' }: Props) => (
  <div>
    <section>
      <div>
        <h2>{name}</h2>
        {children}
      </div>
    </section>

    <style jsx>{`
      h2 {
        text-align: center;
        font-size: 33px;
      }
      section {
        width: 800px;
        margin: 100px auto;
        font-size: 18px;
      }
      @media (max-width: 600px) {
        section {
          width: 92%;
          padding: 0 4%;
        }
      }
    `}</style>
  </div>
)

export default Layout
