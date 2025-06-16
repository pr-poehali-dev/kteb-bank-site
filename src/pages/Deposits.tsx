import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Deposits = () => {
  const depositProducts = [
    {
      title: "Накопительный",
      rate: "до 8.5%",
      term: "от 91 дня",
      minAmount: "от 10 000 ₽",
      features: ["Пополнение", "Частичное снятие", "Капитализация"],
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
    },
    {
      title: "Срочный",
      rate: "до 9.2%",
      term: "от 3 месяцев",
      minAmount: "от 50 000 ₽",
      features: ["Высокая ставка", "Фиксированный доход", "Страхование"],
      image:
        "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=400&h=300&fit=crop",
    },
    {
      title: "Пенсионный",
      rate: "до 9.8%",
      term: "от 1 года",
      minAmount: "от 1 000 ₽",
      features: ["Льготные условия", "Повышенная ставка", "Без комиссий"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Депозиты КТЭБ</h1>
          <p className="text-xl mb-8">
            Надежное сбережение и приумножение ваших средств
          </p>
          <Button size="lg" variant="secondary">
            Рассчитать доходность
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {depositProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.rate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Минимум:</span>
                      <span className="font-semibold">{product.minAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-semibold">{product.term}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">Открыть депозит</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Deposits;
