'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    title: 'Бот для составления рациона',
    category: 'Telegram mini app',
    description: 'Подбор персонального меню, трекинг питания, генерация списка покупок',
    challenge: 'Пользователи бросают дневники питания из-за сложности ведения',
    solution: 'Создали бота с простым интерфейсом подбора рациона, напоминаниями и синхронизацией с веб-панелью',
    result: 'Средняя длительность использования увеличилась с 3 до 14 дней',
    tags: ['Telegram Bot', 'Mini App', 'Web Dashboard'],
  },
  {
    title: 'Платформа для изучения языков',
    category: 'Обучение',
    description: 'Бот с уровнями, карточками слов, мини-уроками и квизами',
    challenge: 'Преподаватели тратили много времени на ручную проверку и отслеживание прогресса',
    solution: 'Разработали обучающего бота с автоматической проверкой и веб-кабинет для преподавателей',
    result: 'Преподаватели экономят до 10 часов в неделю, вовлечённость студентов выросла на 40%',
    tags: ['Telegram Bot', 'Web Platform', 'API'],
  },
  {
    title: 'Планировщик путешествий',
    category: 'Сервис',
    description: 'Составление маршрутов, подбор мест, интерактивная карта',
    challenge: 'Туристы тратят часы на планирование маршрута по новому городу',
    solution: 'Бот собирает предпочтения и автоматически формирует маршрут на каждый день с картой',
    result: 'Более 5000 маршрутов создано за первые 2 месяца после запуска',
    tags: ['Telegram Mini App', 'Maps API'],
  },
  {
    title: 'Task-трекер с диаграммой Ганта',
    category: 'Корпоративное решение',
    description: 'Управление проектами через веб-приложение + бот для команды',
    challenge: 'Команда забывала проверять таск-трекер и пропускала дедлайны',
    solution: 'Создали веб-приложение с визуализацией и Telegram-бот для уведомлений и быстрых действий',
    result: 'Синхронизация данных в реальном времени между ботом и веб-версией',
    tags: ['Web App', 'Telegram Bot', 'Real-time'],
  },
  {
    title: 'HR-бот для онбординга',
    category: 'Корпоративное решение',
    description: 'Автоматизация процесса адаптации новых сотрудников',
    challenge: 'HR-менеджеры вручную отправляли информацию каждому новичку',
    solution: 'Бот автоматически проводит онбординг: документы, FAQ, знакомство с командой, обратная связь',
    result: 'Время HR на онбординг одного сотрудника сократилось с 8 часов до 1 часа',
    tags: ['Telegram Bot', 'Integration', 'HR Tech'],
  },
  {
    title: 'Бот для интернет-магазина',
    category: 'E-commerce',
    description: 'Каталог товаров, корзина, оформление заказа через Telegram',
    challenge: 'Клиенты не хотели устанавливать отдельное приложение для заказов',
    solution: 'Mini app с каталогом, поиском, корзиной и оплатой + синхронизация с админкой магазина',
    result: 'Конверсия в заказ выросла на 25% по сравнению с обычным сайтом',
    tags: ['Telegram Mini App', 'Payment', 'CRM'],
  },
]

export function Cases() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Кейсы и примеры
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные проекты с конкретными результатами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {caseItem.category}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseItem.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Задача:</p>
                    <p className="text-sm">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Решение:</p>
                    <p className="text-sm">{caseItem.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">Результат:</p>
                    <p className="text-sm font-medium">{caseItem.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
