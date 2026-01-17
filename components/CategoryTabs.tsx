import { useLocale } from '../i18n/useLocale'
import { Category, categoryLabels } from '../data/works'

type Props = {
  active: Category
  onChange: (category: Category) => void
}

const categories: Category[] = ['all', 'iot', 'web', 'consulting']

const CategoryTabs: React.FC<Props> = ({ active, onChange }) => {
  const { locale } = useLocale()

  return (
    <div className="tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab ${active === category ? 'active' : ''}`}
          onClick={() => onChange(category)}
          aria-pressed={active === category}
        >
          {categoryLabels[category][locale as 'ja' | 'en']}
        </button>
      ))}

      <style jsx>{`
        .tabs {
          display: flex;
          gap: var(--space-2);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-10);
        }

        .tab {
          padding: var(--space-2) var(--space-5);
          border: 2px solid var(--color-neutral-300);
          border-radius: var(--radius-full);
          background: transparent;
          color: var(--color-neutral-700);
          font-size: var(--text-sm);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab:hover {
          border-color: var(--color-primary-500);
          color: var(--color-primary-500);
        }

        .tab.active {
          background: var(--color-primary-700);
          border-color: var(--color-primary-700);
          color: var(--color-white);
        }

        .tab:focus-visible {
          outline: 2px solid var(--color-accent-teal);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}

export default CategoryTabs
