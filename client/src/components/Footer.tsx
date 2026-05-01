import { MessageCircle, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const whatsappLink = 'https://wa.me/5511987654321?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">Y</span>
              </div>
              <div>
                <h3 className="font-bold">Espaço Ysa</h3>
                <p className="text-xs text-white/60">Estética Luxuosa</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformando vidas através de procedimentos estéticos avançados há mais de 15 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Procedimentos', 'Resultados', 'Depoimentos', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="font-semibold mb-4">Procedimentos</h4>
            <ul className="space-y-2">
              {['Drenagem Linfática', 'Carboxiterapia', 'Criofrequência', 'HECCUS', 'Criolipólise'].map((proc) => (
                <li key={proc}>
                  <a
                    href="#procedimentos"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {proc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <MessageCircle size={16} />
                (11) 98765-4321
              </a>
              <a
                href="tel:+551133334444"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Phone size={16} />
                (11) 3456-7890
              </a>
              <a
                href="mailto:atendimento@espacoysa.com.br"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                atendimento@espacoysa.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">
          © {currentYear} Espaço Ysa Estética. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/espacoysa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="bg-black/20 py-4">
        <div className="container text-center text-white/50 text-xs">
          <p>
            Aviso: Os resultados podem variar. Consulte um especialista antes de realizar qualquer procedimento.
          </p>
        </div>
      </div>
    </footer>
  );
}
