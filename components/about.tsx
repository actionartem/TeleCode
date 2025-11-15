'use client'

import { Code2, Layers, Zap } from 'lucide-react'

export function About() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              О студии
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — студия разработки Telegram-решений, сайтов и веб-сервисов. 
              Специализируемся на создании ботов и mini apps, которые действительно удобны в использовании.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Технологичность</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Используем современный стек и лучшие практики разработки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Интеграции</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Умеем связывать разные системы в единое целое
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Скорость</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Быстрый старт проектов и итеративная разработка
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-center text-muted-foreground leading-relaxed">
              Наш подход: делать не просто «работающий код», 
              а решения, которыми приятно пользоваться каждый день. 
              Мы фокусируемся на пользовательском опыте и деталях, 
              которые делают продукт удобным.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
