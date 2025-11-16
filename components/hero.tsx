'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Telegram-решения для бизнеса
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance animate-fade-in animation-delay-200">
            Делаем умных{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Telegram-ботов
            </span>{' '}
            и mini apps
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in animation-delay-400">
            Разрабатываем ботов, мини-приложения, сайты и веб-сервисы, которые приятно использовать.
            Работаем с частными клиентами и компаниями - от быстрых MVP до сложных интеграций.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Оставить заявку
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('cases')}
            >
              Посмотреть кейсы
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
