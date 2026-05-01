import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marina Silva',
    procedure: 'Carboxiterapia',
    rating: 5,
    text: 'Adorei o resultado! A pele ficou muito mais luminosa e as rugas diminuíram bastante. O atendimento foi impecável!',
    avatar: '👩‍🦰',
  },
  {
    id: 2,
    name: 'Juliana Costa',
    procedure: 'Criolipólise',
    rating: 5,
    text: 'Excelente procedimento! Reduzi medidas sem dor e sem cirurgia. Recomendo muito o Espaço Ysa!',
    avatar: '👩‍🦱',
  },
  {
    id: 3,
    name: 'Fernanda Oliveira',
    procedure: 'Drenagem Linfática',
    rating: 5,
    text: 'Saí do inchaço completamente! Sinto-me muito melhor e mais leve. Voltarei com certeza!',
    avatar: '👩',
  },
  {
    id: 4,
    name: 'Beatriz Santos',
    procedure: 'HECCUS + Modelatta',
    rating: 5,
    text: 'Tonificou muito bem! Já vejo diferença na roupa e na confiança. Muito bom mesmo!',
    avatar: '👩‍🦳',
  },
  {
    id: 5,
    name: 'Camila Rodrigues',
    procedure: 'Criofrequência',
    rating: 5,
    text: 'Pele muito mais firme e bonita! Já fiz 3 sessões e os resultados são visíveis. Amei!',
    avatar: '👩‍🦲',
  },
  {
    id: 6,
    name: 'Patrícia Mendes',
    procedure: 'Corrente Russa',
    rating: 5,
    text: 'Músculos tonificados sem dor! Resultado rápido e duradouro. Super recomendo!',
    avatar: '👱‍♀️',
  },
];

export default function TestimonialsSection() {
  const whatsappLink = 'https://wa.me/5511917511750?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação. Veja por que nossos clientes nos amam.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-secondary rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.procedure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para sua própria história de transformação?
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
}
