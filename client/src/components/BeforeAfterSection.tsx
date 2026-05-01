import { MessageCircle } from 'lucide-react';

const beforeAfterGallery = [
  {
    id: 1,
    title: 'Rejuvenescimento Facial',
    procedure: 'Carboxiterapia + Criofrequência',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/before-after-showcase-K9DXqkjqBz2AeY9EoAAPk9.webp',
  },
  {
    id: 2,
    title: 'Redução de Medidas',
    procedure: 'Criolipólise + Corrente Russa',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/before-after-showcase-K9DXqkjqBz2AeY9EoAAPk9.webp',
  },
  {
    id: 3,
    title: 'Firmeza e Tonificação',
    procedure: 'HECCUS + Modelatta',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/before-after-showcase-K9DXqkjqBz2AeY9EoAAPk9.webp',
  },
  {
    id: 4,
    title: 'Desinchaço e Drenagem',
    procedure: 'Drenagem Linfática + Carboxiterapia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/before-after-showcase-K9DXqkjqBz2AeY9EoAAPk9.webp',
  },
];

export default function BeforeAfterSection() {
  const whatsappLink = 'https://wa.me/5511987654321?text=Quero%20agendar%20meu%20atendimento%20no%20Espa%C3%A7o%20Ysa%20Est%C3%A9tica';

  return (
    <section id="resultados" className="py-20 md:py-32 bg-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Resultados Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja as transformações de nossos clientes. Resultados que falam por si só.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {beforeAfterGallery.map((item) => (
            <div key={item.id} className="group">
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium text-accent mb-1">Procedimento</p>
                    <p className="text-lg font-semibold">{item.procedure}</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.procedure}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Quer alcançar resultados como esses?
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Agende sua Consulta
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Os resultados podem variar de acordo com cada pessoa. Consulte um especialista para saber mais.
        </p>
      </div>
    </section>
  );
}
