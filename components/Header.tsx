import Logo from './Logo'

const Header = () => (
  <header>
    <nav>
      <h1>
        <div className="brand">
          <Logo />
          <span>PlanckUnits</span>
        </div>
      </h1>
    </nav>
    <style jsx>{`
      h1 {
        margin: 0;
      }
      .brand {
        display: flex;
      }
      span {
        line-height: 44px;
      }
      nav {
        padding: 10px;
        display: flex;
      }
    `}</style>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        font-family: 'Exo 2', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}</style>
  </header>
)

export default Header
