import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Банк <span className="text-blue-200">КТЭБ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Надежное банковское партнерство для вашего успеха
          </p>
          <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
            Более 25 лет опыта в банковской сфере. Индивидуальный подход к
            каждому клиенту, современные технологии и полный спектр финансовых
            услуг.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Icon name="CreditCard" className="w-5 h-5 mr-2" />
              Открыть счет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="Calculator" className="w-5 h-5 mr-2" />
              Рассчитать кредит
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
