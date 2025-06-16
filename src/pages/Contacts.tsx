import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const offices = [
    {
      city: "Москва",
      address: "ул. Тверская, 15, стр. 1",
      phone: "+7 (495) 123-45-67",
      hours: "Пн-Пт: 9:00-20:00, Сб: 10:00-18:00",
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 85",
      phone: "+7 (812) 234-56-78",
      hours: "Пн-Пт: 9:00-19:00, Сб: 10:00-17:00",
    },
    {
      city: "Екатеринбург",
      address: "ул. Ленина, 32А",
      phone: "+7 (343) 345-67-89",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
    },
  ];

  const contacts = [
    {
      icon: "Phone",
      title: "Горячая линия",
      info: "8 (800) 555-00-00",
      description: "Бесплатно по России, круглосуточно",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@kteb.ru",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "MessageCircle",
      title: "Онлайн-чат",
      info: "На сайте",
      description: "Поддержка 24/7",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl mb-8">Мы всегда готовы помочь вам</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Способы связи
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={contact.icon as any}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <CardTitle>{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {contact.info}
                  </div>
                  <p className="text-gray-600">{contact.description}</p>
                  <Button className="mt-4" variant="outline">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши офисы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MapPin" className="w-5 h-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="Navigation"
                      className="w-4 h-4 text-gray-500 mt-1"
                    />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Clock" className="w-4 h-4 text-gray-500 mt-1" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Icon name="Map" className="w-16 h-16 mx-auto mb-4" />
              <p>Интерактивная карта офисов</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
