import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
  color?: string
}

const StrengthCard: React.FC<Props> = ({
  icon,
  title,
  description,
  color = 'var(--color-primary-700)',
}) => (
  <article className="card">
    <div className="icon-wrapper" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>

    <style jsx>{`
      .card {
        background: var(--color-white);
        border-radius: var(--radius-lg);
        padding: var(--space-8);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition: all var(--transition-normal);
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }

      .card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
      }

      .icon-wrapper {
        width: 64px;
        height: 64px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--space-5);
        color: var(--color-white);
        font-size: 28px;
      }

      h3 {
        font-size: var(--text-xl);
        font-weight: 700;
        color: #1a202c;
        margin: 0 0 var(--space-3);
      }

      p {
        font-size: var(--text-base);
        color: #4a5568;
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 768px) {
        .card {
          padding: var(--space-6);
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          font-size: 24px;
        }

        h3 {
          font-size: var(--text-lg);
        }

        p {
          font-size: var(--text-sm);
        }
      }
    `}</style>
  </article>
)

export default StrengthCard
