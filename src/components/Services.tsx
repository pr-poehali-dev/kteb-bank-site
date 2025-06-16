import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Banknote",
      title: "Кредиты",
      description:
        "Потребительские, ипотечные, автокредиты и бизнес-кредиты с выгодными условиями",
      features: ["От 5.9% годовых", "До 5 млн рублей", "Решение за 1 день"],
    },
    {
      icon: "PiggyBank",
      title: "Депозиты",
      description:
        "Выгодные вклады и накопительные счета для сохранения и приумножения средств",
      features: ["До 8.5% годовых", "Гарантия АСВ", "Пополнение и снятие"],
    },
    {
      icon: "CreditCard",
      title: "Банковские карты",
      description:
        "Дебетовые и кредитные карты с кэшбэком, бонусами и специальными предложениями",
      features: ["Кэшбэк до 5%", "Без комиссий", "Премиум-сервис"],
    },
    {
      icon: "Building",
      title: "Корпоративные услуги",
      description:
        "Комплексное банковское обслуживание для бизнеса любого масштаба",
      features: ["Расчетные счета", "Валютные операции", "Документооборот"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр банковских услуг для частных лиц и корпоративных
            клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    className="w-8 h-8 text-primary"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
