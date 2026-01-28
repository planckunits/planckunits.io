type Props = {
  name: string
  description: string
  role: string
  url?: string
}

const Member = ({ name, role, url, description }: Props) => (
  <div className="member-card">
    <div className="member-avatar">
      {name.charAt(0)}
    </div>
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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.05);
        transition: all var(--transition-normal);
      }

      .member-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
      }

      .member-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 48px;
        font-weight: 700;
        margin: 0 auto var(--space-5);
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
      }

      h3 {
        font-size: var(--text-xl);
        font-weight: 700;
        color: #1a202c;
        margin: 0 0 var(--space-1);
      }

      .role {
        font-size: var(--text-sm);
        color: #667eea;
        font-weight: 600;
        margin: 0 0 var(--space-4);
      }

      .description {
        font-size: var(--text-sm);
        color: #4a5568;
        line-height: 1.6;
        margin: 0 0 var(--space-4);
      }

      .link {
        display: inline-block;
        font-size: var(--text-sm);
        color: #667eea;
        text-decoration: none;
        font-weight: 600;
        transition: color var(--transition-fast);
      }

      .link:hover {
        color: #764ba2;
      }
    `}</style>
  </div>
)

export default Member
