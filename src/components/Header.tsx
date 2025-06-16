import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Building2" className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">КТЭБ</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="/credits"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Кредиты
            </a>
            <a
              href="/deposits"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Депозиты
            </a>
            <a
              href="/cards"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Карты
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О банке
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Phone" className="w-4 h-4" />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </div>
            <Button variant="outline" size="sm">
              Онлайн-банк
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
