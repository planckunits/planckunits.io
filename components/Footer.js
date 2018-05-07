// @flow

const Footer = () => (
  <div>
    <footer>
      <p className="contact">お問い合わせ: info@planckunits.com</p>
      <p className="copy">&copy; {'2017-2018 PlanckUnits co.,ltd'}</p>
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
