'use client'

import { Bot, Smartphone, Globe, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Smartphone,
    title: 'Telegram mini apps',
    description: 'Полноценные мини-приложения внутри Telegram с интерфейсами, личными кабинетами, каталогами и обучающими модулями.',
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    description: 'Боты для продаж, обучения, клиентской поддержки и автоматизации внутренних процессов компании.',
  },
  {
    icon: Globe,
    title: 'Сайты и веб-приложения',
    description: 'Лендинги, промо-страницы, личные кабинеты, панели управления и внутренние корпоративные системы.',
  },
  {
    icon: Zap,
    title: 'Интеграции и автоматизация',
    description: 'Связываем боты, mini apps, сайты с CRM, платёжными системами, таск-трекерами и внутренними сервисами.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Что мы делаем
          </h2>
          <p className="text-lg text-muted-foreground">
            Фокусируемся на Telegram-решениях и связываем их с вашими системами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
