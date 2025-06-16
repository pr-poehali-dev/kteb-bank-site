import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Building2" className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">КТЭБ</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/credits"
              className={`transition-colors ${
                isActive("/credits")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Кредиты
            </Link>
            <Link
              to="/deposits"
              className={`transition-colors ${
                isActive("/deposits")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Депозиты
            </Link>
            <Link
              to="/cards"
              className={`transition-colors ${
                isActive("/cards")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Карты
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              О банке
            </Link>
            <Link
              to="/contacts"
              className={`transition-colors ${
                isActive("/contacts")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Контакты
            </Link>
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
