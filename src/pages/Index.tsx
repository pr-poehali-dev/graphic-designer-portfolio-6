import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'Бренд кофейни',
      category: 'Фирменный стиль',
      description: 'Логотип и айдентика для локальной кофейни',
      image: 'https://cdn.poehali.dev/projects/3aa064f3-6bff-46d2-bb31-bf58dd0fe097/files/297ab7ae-e033-448a-a8c2-3dd400d3ca88.jpg'
    },
    {
      id: 2,
      title: 'Tech стартап',
      category: 'Логотип',
      description: 'Минималистичный лого для IT-компании',
      image: 'https://cdn.poehali.dev/projects/3aa064f3-6bff-46d2-bb31-bf58dd0fe097/files/c8ece8d2-26dc-473c-9a9d-847bc0fdd326.jpg'
    },
    {
      id: 3,
      title: 'Эко-бренд',
      category: 'Фирменный стиль',
      description: 'Полный брендбук для экологичной косметики',
      image: 'https://cdn.poehali.dev/projects/3aa064f3-6bff-46d2-bb31-bf58dd0fe097/files/e222228f-6aa2-48ff-8b46-ea1a47412959.jpg'
    },
    {
      id: 4,
      title: 'Спортивный клуб',
      category: 'Логотип',
      description: 'Динамичный логотип для фитнес-центра'
    },
    {
      id: 5,
      title: 'Ресторан',
      category: 'Фирменный стиль',
      description: 'Элегантная айдентика для ресторана высокой кухни'
    },
    {
      id: 6,
      title: 'Fashion бренд',
      category: 'Логотип',
      description: 'Стильный лого для одежды'
    }
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Разработка логотипа',
      description: 'Создаю уникальный логотип, который передаст суть вашего бренда'
    },
    {
      icon: 'Layout',
      title: 'Фирменный стиль',
      description: 'Полный брендбук с гайдлайнами для всех носителей'
    },
    {
      icon: 'Sparkles',
      title: 'Ребрендинг',
      description: 'Обновление и модернизация существующего бренда'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ДизайнПро
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">✨ Графический дизайнер</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Создаю{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              визуальную
            </span>
            <br />
            магию брендов
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Разрабатываю логотипы и фирменные стили, которые выделяют ваш бизнес среди конкурентов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="hover-scale">
              <a href="#portfolio">Смотреть портфолио</a>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              <a href="#contacts">Связаться</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Избранные работы по созданию логотипов и фирменных стилей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover-scale cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Image" size={64} className="text-muted-foreground group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Icon name="Eye" size={48} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">Что я могу сделать для вашего бренда</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover-scale bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Готовы начать проект? Напишите мне!</p>
          </div>
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" size="lg" className="w-full hover-scale">
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 ДизайнПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;