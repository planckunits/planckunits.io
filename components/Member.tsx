type Props = {
  name: string
  description: string
  role: string
  url?: string
}

const Member = ({ name, role, url, description }: Props) => (
  <div className="member-card">
    <h3>{name}</h3>
    <p className="role">{role}</p>
    <p className="description">{description}</p>
    {url && (
      <a href={url} target="_blank" rel="noopener noreferrer" className="link">
        more
      </a>
    )}

    <style jsx>{`
      .member-card {
        flex: 1;
        padding: var(--space-6);
        background: var(--color-white);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
      }

      h3 {
        font-size: var(--text-xl);
        font-weight: 600;
        color: var(--color-neutral-900);
        margin: 0 0 var(--space-1);
      }

      .role {
        font-size: var(--text-sm);
        color: var(--color-primary-700);
        font-weight: 500;
        margin: 0 0 var(--space-4);
      }

      .description {
        font-size: var(--text-sm);
        color: var(--color-neutral-700);
        line-height: 1.6;
        margin: 0 0 var(--space-4);
      }

      .link {
        display: inline-block;
        font-size: var(--text-sm);
        color: var(--color-accent-teal);
        text-decoration: none;
        font-weight: 500;
        transition: color var(--transition-fast);
      }

      .link:hover {
        color: var(--color-primary-700);
      }
    `}</style>
  </div>
)

export default Member
