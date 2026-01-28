import React, { ReactNode } from 'react'
import clsx from 'clsx'

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

  return (
    <>
      <Component
        href={href}
        onClick={onClick}
        className={clsx('btn', `btn-${variant}`, `btn-${size}`, className)}
      >
        {children}
      </Component>

      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn:focus-visible {
          outline: 2px solid var(--color-accent-teal);
          outline-offset: 2px;
        }

        /* Sizes */
        .btn-sm {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
        }

        .btn-md {
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-base);
        }

        .btn-lg {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
        }

        /* Variants */
        .btn-primary {
          background: var(--gradient-cyber);
          color: var(--color-white);
          box-shadow: var(--shadow-neon-cyan);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-neon-cyan), 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary {
          background: rgba(10, 14, 39, 0.5);
          backdrop-filter: blur(10px);
          color: var(--color-accent-cyan);
          border: 2px solid var(--color-accent-cyan);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--color-accent-pink);
          color: var(--color-accent-pink);
          box-shadow: var(--shadow-neon-pink);
          transform: translateY(-3px);
        }

        .btn-ghost {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-accent-cyan);
        }
      `}</style>
    </>
  )
}

export default Button
