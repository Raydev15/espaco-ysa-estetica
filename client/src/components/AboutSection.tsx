import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Profissionalismo',
    description: 'Equipe certificada e especializada em estética avançada',
  },
  {
    icon: Zap,
    title: 'Tecnologia',
    description: 'Equipamentos de última geração importados',
  },
  {
    icon: Users,
    title: 'Personalização',
    description: 'Atendimento individualizado para cada cliente',
  },
  {
    icon: CheckCircle,
    title: 'Resultados',
    description: 'Comprovados e visíveis desde a primeira sessão',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-br from-white via-secondary/10 to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503515997/idpRYqKeaVrTVCF7WH9qdK/procedures-collage-56aX4z2L3eDDn35ZT9viUz.webp"
              alt="Espaço Ysa Estética"
              className="rounded-xl shadow-xl w-full h-96 md:h-full object-cover"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-xl p-6 shadow-lg">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm font-medium">Anos de Excelência</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre o Espaço Ysa Estética
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos, o Espaço Ysa Estética é referência em procedimentos estéticos avançados. Nossa missão é transformar vidas através de tratamentos inovadores, seguros e com resultados comprovados.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acreditamos que a beleza verdadeira vem da confiança. Por isso, oferecemos um ambiente aconchegante, profissionais especializados e equipamentos de ponta para garantir sua satisfação total.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-secondary">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Clientes Felizes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Procedimentos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
