'use client'

import { Target, Link2, Rocket, Users, Layers, Clock } from 'lucide-react'

const advantages = [
  {
    icon: Target,
    title: 'Фокус на Telegram',
    description: 'Специализируемся на mini apps и ботах - знаем все тонкости платформы',
  },
  {
    icon: Link2,
    title: 'Связываем системы',
    description: 'Умеем интегрировать боты, сайты и внутренние системы в единую логику',
  },
  {
    icon: Rocket,
    title: 'От идеи до MVP',
    description: 'Делаем быстрые прототипы и MVP, а не только длинные идеальные проекты',
  },
  {
    icon: Users,
    title: 'Для всех',
    description: 'Работаем и с частными клиентами, и с SMB, и с крупными компаниями',
  },
  {
    icon: Layers,
    title: 'Любая сложность',
    description: 'Берём как маленькие быстрые задачи, так и сложные интеграционные истории',
  },
  {
    icon: Clock,
    title: 'Без бюрократии',
    description: 'Короткие созвоны, понятные этапы, быстрый старт без долгих согласований',
  },
]

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Почему мы
          </h2>
          <p className="text-lg text-muted-foreground">
            Делаем не просто красиво, а действительно удобно и полезно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
