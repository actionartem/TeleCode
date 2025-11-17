'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Mail, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    phone: '',
    message: '',
    preferTelegram: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const description = formData.preferTelegram
        ? `${formData.message}\nПредпочитает общение в Telegram`
        : formData.message

      const response = await fetch('https://ibn-lab.ru/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          telegram: formData.telegram,
          description,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send notification')
      }

      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          telegram: '',
          phone: '',
          message: '',
          preferTelegram: false,
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Оставить заявку
          </h2>
          <p className="text-lg text-muted-foreground">
            Расскажите о вашей задаче — мы свяжемся в ближайшее время
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Form */}
            <Card>
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Спасибо за вашу заявку!</h3>
                    <p className="text-muted-foreground">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Как к вам обращаться?"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telegram">Telegram</Label>
                        <Input
                          id="telegram"
                          name="telegram"
                          value={formData.telegram}
                          onChange={handleChange}
                          placeholder="@username"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон (опционально)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Расскажите, что вам нужно *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Опишите вашу задачу, идею или проект..."
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="preferTelegram"
                        checked={formData.preferTelegram}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, preferTelegram: checked as boolean })
                        }
                      />
                      <label
                        htmlFor="preferTelegram"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Мне проще сначала пообщаться в Telegram
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      Отправить заявку
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Контакты</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:support@tg-code.ru"
                        className="text-primary hover:underline"
                      >
                        support@tg-code.ru
                      </a>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Telegram</p>
                      <a
                        href="https://t.me/TgCodeStudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @TgCodeStudio
                      </a>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Телефон</p>
                      <a href="tel:+79933598322" className="text-primary hover:underline">
                        +7 (993) 359-83-22
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Быстрый старт: </span>
                    Напишите нам в Telegram и мы очень быстро вам ответим!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
