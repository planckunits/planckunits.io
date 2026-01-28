import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}) => {
  const Component = href ? 'a' : 'button'
  const classes = ['btn', `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(' ')

  return (
    <>
      <Component
        href={href}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Component>

      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn:focus-visible {
          outline: 2px solid #91C2D6;
          outline-offset: 2px;
        }

        /* Sizes */
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-md {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        }

        .btn-lg {
          padding: 0.875rem 2rem;
          font-size: 1.125rem;
        }

        /* Variants */
        .btn-primary {
          background: #91C2D6;
          color: white;
        }

        .btn-primary:hover {
          background: #116D93;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(125, 191, 217, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #91C2D6;
          border: 2px solid #91C2D6;
        }

        .btn-secondary:hover {
          background: rgba(145, 194, 214, 0.1);
          transform: translateY(-2px);
        }

        .btn-ghost {
          background: transparent;
          color: #6b7280;
        }

        .btn-ghost:hover {
          background: rgba(0, 0, 0, 0.05);
          color: #111827;
        }
      `}</style>
    </>
  )
}

export default Button
