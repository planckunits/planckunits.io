import { useState } from 'react'
import Section from './Section'
import CategoryTabs from './CategoryTabs'
import WorkCard from './WorkCard'
import { works, Category } from '../data/works'

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredWorks =
    activeCategory === 'all'
      ? works
      : works.filter((work) => work.category === activeCategory)

  return (
    <Section name="Works" id="works">
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="works-grid">
        {filteredWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <style jsx>{`
        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        @media (max-width: 1024px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .works-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  )
}

export default WorksSection
