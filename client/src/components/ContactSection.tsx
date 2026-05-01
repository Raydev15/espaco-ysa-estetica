import { MessageCircle, MapPin, Phone, Instagram, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const whatsappLink = 'https://wa.me/5511917511750?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  return (
    <section id="contato" className="py-20 md:py-32 bg-primary text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Estamos prontos para tirar suas dúvidas e agendar sua consulta.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center group"
          >
            <div className="flex justify-center mb-4">
              <MessageCircle size={32} className="text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">WhatsApp</h3>
            <p className="text-white/80 text-sm">(11) 91751-1750</p>
            <p className="text-white/60 text-xs mt-2">Resposta rápida</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+551133334444"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center group"
          >
            <div className="flex justify-center mb-4">
              <Phone size={32} className="text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Telefone</h3>
            <p className="text-white/80 text-sm">(11) 3456-7890</p>
            <p className="text-white/60 text-xs mt-2">Seg-Sex 9h-18h</p>
          </a>

          {/* Email */}
          <a
            href="mailto:atendimento@espacoysa.com.br"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center group"
          >
            <div className="flex justify-center mb-4">
              <Mail size={32} className="text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Email</h3>
            <p className="text-white/80 text-sm">atendimento@espacoysa.com.br</p>
            <p className="text-white/60 text-xs mt-2">Resposta em 24h</p>
          </a>

          {/* Horário */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock size={32} className="text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Horário</h3>
            <p className="text-white/80 text-sm">Seg-Sex: 9h-18h</p>
            <p className="text-white/80 text-sm">Sábado: 9h-14h</p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 md:mt-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Address */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Localização</h3>
                  <p className="text-white/80 text-sm">São Paulo - SP<br />
                    Ambiente sofisticado e aconchegante<br />
                    Estacionamento disponível
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <Instagram size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Siga-nos</h3>
                  <a
                    href="https://instagram.com/espacoysa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    @espacoysa
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/5 rounded-lg h-64 md:h-auto flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-accent mx-auto mb-4 opacity-50" />
                <p className="text-white/60">Mapa interativo</p>
                <p className="text-white/40 text-sm mt-2">Rua das Flores, 123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Agende sua Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
