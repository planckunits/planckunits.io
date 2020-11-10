import React from 'react'

type Props = { name?: string }

const Section: React.FC<Props> = ({ children, name = 'Section' }) => (
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

export default Section
