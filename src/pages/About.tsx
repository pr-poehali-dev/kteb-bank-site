import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "25+", label: "лет на рынке" },
    { number: "500+", label: "отделений" },
    { number: "2М+", label: "клиентов" },
    { number: "₽150М", label: "активы банка" },
  ];

  const values = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "Стабильность и безопасность ваших средств",
    },
    {
      icon: "Users",
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому клиенту",
    },
    {
      icon: "Zap",
      title: "Инновации",
      description: "Современные технологии и удобные сервисы",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">О банке КТЭБ</h1>
              <p className="text-xl mb-8">
                Кредитно-Технологический Экономический Банк — ваш надежный
                финансовый партнер с 1998 года. Мы предоставляем полный спектр
                банковских услуг для физических и юридических лиц.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Офис банка"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={value.icon as any}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="История банка"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Банк КТЭБ был основан в 1998 году группой опытных финансистов
                  с целью создания современного технологичного банка.
                </p>
                <p>
                  За годы работы мы стали одним из ведущих частных банков
                  России, предоставляя качественные услуги миллионам клиентов.
                </p>
                <p>
                  Сегодня КТЭБ — это современная финансовая экосистема,
                  объединяющая традиционные банковские услуги и инновационные
                  технологии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
