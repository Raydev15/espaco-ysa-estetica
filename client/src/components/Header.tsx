import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = 'https://wa.me/5511917511750?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-secondary shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Espaço Ysa</h1>
              <p className="text-xs text-muted-foreground">Estética Luxuosa</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão WhatsApp Desktop */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-semibold"
            >
              <MessageCircle size={18} />
              Agendar
            </a>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-secondary">
            <nav className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-semibold w-full"
              >
                <MessageCircle size={18} />
                Agendar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Botão WhatsApp Flutuante */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 md:hidden"
        title="Agendar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
