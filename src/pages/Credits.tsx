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

const Credits = () => {
  const creditProducts = [
    {
      title: "Потребительский кредит",
      rate: "от 11.9%",
      amount: "до 3 млн ₽",
      term: "до 7 лет",
      features: ["Без залога", "Быстрое решение", "Досрочное погашение"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      title: "Ипотека",
      rate: "от 7.5%",
      amount: "до 30 млн ₽",
      term: "до 30 лет",
      features: ["Господдержка", "Рефинансирование", "Материнский капитал"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    },
    {
      title: "Автокредит",
      rate: "от 9.9%",
      amount: "до 5 млн ₽",
      term: "до 5 лет",
      features: ["Новые и б/у авто", "КАСКО в подарок", "Трейд-ин"],
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Кредиты КТЭБ</h1>
          <p className="text-xl mb-8">
            Выгодные условия кредитования для ваших целей
          </p>
          <Button size="lg" variant="secondary">
            Рассчитать кредит
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {creditProducts.map((product, index) => (
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
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-semibold">{product.amount}</span>
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

                  <Button className="w-full">Подать заявку</Button>
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

export default Credits;
