// @flow

const Footer = () => (
  <div>
    <footer>
      <p className="contact">お問い合わせ: pu@cps.im.dendai.ac.jp</p>
      <p className="copy">&copy; {'2017 PlanckUnits co.,ltd'}</p>
    </footer>
    <style jsx>{`
      footer {
        padding: 20px;
      }
      .contact {
        text-align: center;
      }
      .copy {
        text-align: right;
      }
    `}</style>
  </div>
)
export default Footer
