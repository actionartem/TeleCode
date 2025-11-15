'use client'

import { Badge } from '@/components/ui/badge'

const technologies = [
  {
    category: 'Telegram',
    items: ['Telegram Bot API', 'Telegram Mini Apps', 'TON Connect'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'REST API', 'GraphQL'],
  },
  {
    category: 'Базы данных',
    items: ['PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    category: 'Инфраструктура',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Services'],
  },
  {
    category: 'Интеграции',
    items: ['CRM', 'Платёжные системы', 'Очереди сообщений', 'External API'],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Технологии
          </h2>
          <p className="text-lg text-muted-foreground">
            Современный стек для надёжных и масштабируемых решений
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{tech.category}</h3>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item, itemIndex) => (
                  <Badge
                    key={itemIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Этот стек позволяет нам создавать быстрые, надёжные и масштабируемые решения. 
            Мы выбираем технологии под конкретную задачу, а не используем один молоток для всех гвоздей.
          </p>
        </div>
      </div>
    </section>
  )
}
