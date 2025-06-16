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

const Cards = () => {
  const cardProducts = [
    {
      title: "КТЭБ Классик",
      type: "Дебетовая",
      cashback: "до 3%",
      fee: "0 ₽/год",
      features: [
        "Бесплатное обслуживание",
        "Снятие без комиссии",
        "Apple Pay, Google Pay",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      title: "КТЭБ Премиум",
      type: "Дебетовая",
      cashback: "до 5%",
      fee: "1 990 ₽/год",
      features: ["Повышенный кэшбэк", "Консьерж-сервис", "Lounge-залы"],
      image:
        "https://images.unsplash.com/photo-1609902726285-00668009f004?w=400&h=300&fit=crop",
    },
    {
      title: "КТЭБ Кредитная",
      type: "Кредитная",
      cashback: "до 2%",
      fee: "от 0 ₽/год",
      features: [
        "Льготный период 55 дней",
        "Кэшбэк за покупки",
        "Снятие наличных",
      ],
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Банковские карты КТЭБ</h1>
          <p className="text-xl mb-8">Современные решения для ваших финансов</p>
          <Button size="lg" variant="secondary">
            Заказать карту
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {cardProducts.map((product, index) => (
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
                  <CardDescription className="text-lg text-primary">
                    {product.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Кэшбэк:</span>
                      <span className="font-semibold text-green-600">
                        {product.cashback}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Обслуживание:</span>
                      <span className="font-semibold">{product.fee}</span>
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

                  <Button className="w-full">Оформить карту</Button>
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

export default Cards;
