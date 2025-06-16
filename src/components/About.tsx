import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "25+", label: "лет на рынке" },
    { number: "150+", label: "отделений" },
    { number: "500K+", label: "клиентов" },
    { number: "₽50 млрд", label: "активы банка" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О банке КТЭБ
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Банк КТЭБ — это надежная финансовая организация с богатой историей
              и стремлением к инновациям. Мы предоставляем качественные
              банковские услуги, основанные на доверии, профессионализме и
              индивидуальном подходе к каждому клиенту.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наша миссия — быть надежным финансовым партнером для частных лиц и
              бизнеса, помогая достигать финансовых целей и способствуя
              экономическому развитию региона.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Член системы АСВ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Лауреат премий</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  Социальная ответственность
                </span>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Наши достижения
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
