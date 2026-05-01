import { MessageCircle, Check } from 'lucide-react';

const procedures = [
  {
    id: 1,
    name: 'Drenagem Linfática',
    description: 'Técnica que estimula o sistema linfático, reduzindo inchaço e melhorando a circulação.',
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Desintoxica'],
    icon: '💧',
  },
  {
    id: 2,
    name: 'Carboxiterapia',
    description: 'Injeção de CO2 medicinal que revitaliza a pele, reduzindo rugas e flacidez.',
    benefits: ['Rejuvenesce a pele', 'Reduz rugas', 'Melhora textura'],
    icon: '✨',
  },
  {
    id: 3,
    name: 'Criofrequência',
    description: 'Tecnologia que combina frio e radiofrequência para firmar e tonificar a pele.',
    benefits: ['Firma a pele', 'Reduz flacidez', 'Tonifica'],
    icon: '❄️',
  },
  {
    id: 4,
    name: 'HECCUS',
    description: 'Eletroestimulação que tonifica músculos faciais e corporais sem dor.',
    benefits: ['Tonifica músculos', 'Sem dor', 'Resultados visíveis'],
    icon: '⚡',
  },
  {
    id: 5,
    name: 'Criolipólise',
    description: 'Congelamento de gordura localizada, eliminando células adiposas de forma segura.',
    benefits: ['Elimina gordura', 'Sem cirurgia', 'Seguro'],
    icon: '🧊',
  },
  {
    id: 6,
    name: 'Corrente Russa',
    description: 'Estimulação elétrica que tonifica e fortalece a musculatura corporal.',
    benefits: ['Tonifica músculos', 'Fortalece', 'Resultados rápidos'],
    icon: '💪',
  },
  {
    id: 7,
    name: 'Modelatta',
    description: 'Massagem modeladora que esculpe o corpo, reduzindo medidas e melhorando contornos.',
    benefits: ['Reduz medidas', 'Esculpe o corpo', 'Melhora contornos'],
    icon: '🎨',
  },
];

export default function ProceduresSection() {
  const whatsappLink = 'https://wa.me/5511987654321?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  return (
    <section id="procedimentos" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Procedimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia avançada e técnicas comprovadas para transformar sua aparência e elevar sua autoestima.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className="group bg-white border border-secondary rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-accent"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{procedure.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                {procedure.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {procedure.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {procedure.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-sm group-hover:bg-accent"
              >
                <MessageCircle size={16} />
                Agendar
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Dúvidas sobre qual procedimento é ideal para você?
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Consulte um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
