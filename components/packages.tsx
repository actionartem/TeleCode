'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Zap, Rocket, Globe, Building2 } from 'lucide-react'

const packages = [
  {
    icon: Zap,
    name: 'Быстрый бот',
    description: 'Запустите бота без долгих согласований',
    forWhom: 'Для частных предпринимателей, экспертов, малого бизнеса',
    includes: [
      'Вы описываете задачу — мы берём на себя структуру и тексты',
      '1-2 основных сценария (например, заявки + FAQ)',
      'Готовность за 1-2 недели',
      'Фиксированная стоимость',
    ],
    timeline: 'Обычно 1-2 недели',
    highlight: false,
  },
  {
    icon: Rocket,
    name: 'MVP Telegram mini app',
    description: 'Проверьте продуктовую идею быстро',
    forWhom: 'Для стартапов и продуктовых команд',
    includes: [
      'Базовый личный кабинет с авторизацией',
      '1-2 ключевых сценария вашего продукта',
      'Быстрый вывод MVP для проверки спроса',
      'Возможность дальнейшего развития',
    ],
    timeline: 'Обычно 2-4 недели',
    highlight: true,
  },
  {
    icon: Globe,
    name: 'Бот + сайт',
    description: 'Полноценная связка для воронок',
    forWhom: 'Для онлайн-школ, курсов, экспертов, сервисов',
    includes: [
      'Лендинг или промо-страница под трафик',
      'Бот для сопровождения, контента или заявок',
      'Интеграция бота и сайта между собой',
      'Удобно для воронок и обучения',
    ],
    timeline: 'Обычно 3-5 недель',
    highlight: false,
  },
  {
    icon: Building2,
    name: 'Корпоративный пакет',
    description: 'Для внутренних задач компании',
    forWhom: 'Для компаний с командой от 10+ человек',
    includes: [
      'HR-боты, внутренние заявки, процессы',
      'Интеграции с CRM, таск-трекерами, системами учёта',
      'Mini apps для сотрудников',
      'Поэтапная реализация с учётом ваших процессов',
    ],
    timeline: 'От 4 недель',
    highlight: false,
  },
]

export function Packages() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Пакеты и форматы
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий формат сотрудничества
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${
                pkg.highlight
                  ? 'border-primary/50 shadow-lg shadow-primary/10'
                  : 'hover:border-primary/30'
              } transition-all`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <pkg.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-primary mb-2">{pkg.forWhom}</p>
                </div>

                <div className="space-y-3">
                  {pkg.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Сроки: </span>
                    {pkg.timeline}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Стоимость обсуждается индивидуально
                  </p>
                  <Button
                    onClick={scrollToContact}
                    variant={pkg.highlight ? 'default' : 'outline'}
                    className="w-full"
                  >
                    Обсудить проект
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
