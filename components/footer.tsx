'use client'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              TgCode
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Студия разработки Telegram-решений, сайтов и веб-приложений
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Telegram-боты
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mini Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Веб-приложения
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Интеграции
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('cases')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Кейсы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Процесс
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Пакеты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@tg-code.ru"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  support@tg-code.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/TgCodeStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="tel:+79933598322"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +7 (993) 359-83-22
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TgCode Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
