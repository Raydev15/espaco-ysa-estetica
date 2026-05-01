import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const whatsappLink = 'https://wa.me/5511917511750?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/hero-banner-ysa-UEwxEDDtruB6icSMMhDXP5.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl">
        <div className="flex flex-col gap-6 md:gap-8 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium">Transforme sua autoestima</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transforme sua autoestima com resultados reais
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Procedimentos avançados, atendimento personalizado e ambiente aconchegante. Descubra a beleza que já existe em você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Agendar Agora
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
            >
              Conhecer Procedimentos
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
              <p className="text-white/80 text-sm">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">15+</p>
              <p className="text-white/80 text-sm">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">100%</p>
              <p className="text-white/80 text-sm">Equipamentos Profissionais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
