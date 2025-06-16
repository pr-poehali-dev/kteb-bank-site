import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Bank Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Building2" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">КТЭБ</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надежный банковский партнер для вашего финансового успеха
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" className="w-5 h-5 text-gray-400" />
              <Icon name="Mail" className="w-5 h-5 text-gray-400" />
              <Icon name="MapPin" className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/credits"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Кредиты
                </a>
              </li>
              <li>
                <a
                  href="/deposits"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Депозиты
                </a>
              </li>
              <li>
                <a
                  href="/cards"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Банковские карты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Онлайн-банк
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О банке
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Лицензии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Новости
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">info@kteb.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">
                  Москва, ул. Банковская, 15
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Банк КТЭБ. Все права защищены. Лицензия Банка России № 1234
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
