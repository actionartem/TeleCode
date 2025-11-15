'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

type SolutionType = 'bot' | 'miniapp' | 'website' | 'integrations'

const solutions = {
  bot: {
    title: 'Telegram-бот',
    description: 'Автоматизация коммуникации и процессов через привычный мессенджер',
    forWhom: 'Для бизнеса, экспертов, онлайн-школ, сервисов поддержки',
    benefits: [
      'Сбор заявок и обработка запросов 24/7',
      'Автоматические напоминания и рассылки',
      'FAQ и база знаний для клиентов',
      'Интеграция с вашими системами',
    ],
    example: 'Например: HR-бот для онбординга сотрудников или бот-помощник для клиентов магазина',
  },
  miniapp: {
    title: 'Telegram mini app',
    description: 'Полноценное приложение внутри Telegram без установки',
    forWhom: 'Для стартапов, продуктовых команд, образовательных проектов',
    benefits: [
      'Не нужно устанавливать — работает в Telegram',
      'Личный кабинет и сложная логика',
      'Каталоги, курсы, задачи, маршруты',
      'Быстрая проверка гипотез и MVP',
    ],
    example: 'Например: каталог товаров с корзиной или обучающая платформа с прогрессом',
  },
  website: {
    title: 'Сайт / веб-приложение',
    description: 'Полноценный веб-проект под ваши задачи',
    forWhom: 'Для компаний, брендов, сервисов с широкой аудиторией',
    benefits: [
      'Лендинги и промо-страницы для трафика',
      'Личные кабинеты и панели управления',
      'SEO-оптимизация для поиска',
      'Интеграция с CRM и аналитикой',
    ],
    example: 'Например: промо-сайт с формами лидогенерации + админка для управления',
  },
  integrations: {
    title: 'Интеграции',
    description: 'Связываем разные системы в единое целое',
    forWhom: 'Для компаний с несколькими системами и процессами',
    benefits: [
      'Синхронизация данных между системами',
      'Автоматизация рутинных задач',
      'API для связи с внешними сервисами',
      'Уведомления и триггеры',
    ],
    example: 'Например: бот получает данные из CRM, отправляет в таск-трекер и уведомляет команду',
  },
}

export function InteractiveSelector() {
  const [selected, setSelected] = useState<SolutionType>('bot')
  const currentSolution = solutions[selected]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Что вам нужно?
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите тип решения и узнайте подробности
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto">
          {/* Selector */}
          <div className="space-y-2">
            <Button
              variant={selected === 'bot' ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelected('bot')}
            >
              Telegram-бот
            </Button>
            <Button
              variant={selected === 'miniapp' ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelected('miniapp')}
            >
              Telegram mini app
            </Button>
            <Button
              variant={selected === 'website' ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelected('website')}
            >
              Сайт / веб-приложение
            </Button>
            <Button
              variant={selected === 'integrations' ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelected('integrations')}
            >
              Интеграции
            </Button>
          </div>

          {/* Content */}
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">{currentSolution.title}</h3>
              <p className="text-muted-foreground mb-4">{currentSolution.description}</p>
              
              <div className="mb-6">
                <p className="text-sm font-medium text-primary mb-2">{currentSolution.forWhom}</p>
              </div>

              <div className="space-y-3 mb-6">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Пример: </span>
                  {currentSolution.example}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
