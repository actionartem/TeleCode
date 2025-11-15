'use client'

import { MessageSquare, Target, Lightbulb, Code, TestTube, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Заявка',
    description: 'Вы оставляете заявку или пишете нам в Telegram',
  },
  {
    icon: Target,
    number: '02',
    title: 'Обсуждение',
    description: 'Короткий созвон или переписка: разбираемся в задаче и бюджете',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Формат',
    description: 'Предлагаем подходящий пакет или кастомную разработку',
  },
  {
    icon: Code,
    number: '04',
    title: 'Прототип',
    description: 'Создаём структуру и прототип, согласовываем с вами',
  },
  {
    icon: TestTube,
    number: '05',
    title: 'Разработка',
    description: 'Пишем код, тестируем, показываем промежуточные результаты',
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Запуск',
    description: 'Деплоим проект и помогаем с поддержкой по мере необходимости',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-muted-foreground">
            Простой и понятный процесс без бюрократии
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-xs font-mono text-primary mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Важно:</span> Мы работаем итерациями 
              и показываем промежуточные результаты, чтобы вы видели прогресс и могли вносить правки по ходу.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
