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
          background: var(--color-primary-700);
          color: var(--color-white);
        }

        .btn-primary:hover {
          background: var(--color-primary-600);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        .btn-secondary {
          background: transparent;
          color: var(--color-primary-700);
          border: 2px solid var(--color-primary-700);
        }

        .btn-secondary:hover {
          background: var(--color-primary-700);
          color: var(--color-white);
        }

        .btn-ghost {
          background: transparent;
          color: var(--color-primary-700);
        }

        .btn-ghost:hover {
          background: var(--color-neutral-100);
        }
      `}</style>
    </>
  )
}

export default Button
