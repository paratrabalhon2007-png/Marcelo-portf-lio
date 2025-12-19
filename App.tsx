
import React, { useState } from 'react';
import { 
  CheckCircle, 
  MessageCircle, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Clock, 
  Instagram, 
  MapPin, 
  ChevronRight,
  X
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5575998163205&text=Ol%C3%A1%21+Vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+um+or%C3%A7amento+para+cria%C3%A7%C3%A3o+de+site+profissional+para+minha+cl%C3%ADnica.&type=phone_number&app_absent=0";

const IMAGES = {
  hero: "https://i.imgur.com/krWpAoN.png",
  authority: "https://i.imgur.com/xUUMVUF.png",
  proofs: [
    "https://i.imgur.com/yGIW98V.png",
    "https://i.imgur.com/SIZOcum.png",
    "https://i.imgur.com/gAerEqv.png",
    "https://i.imgur.com/YL8htdJ.png"
  ],
  behindScenes: [
    "https://i.imgur.com/xUUMVUF.png",
    "https://i.imgur.com/yGIW98V.png"
  ]
};

// --- Components ---

const CTAButton: React.FC<{ className?: string; text?: string }> = ({ 
  className = "", 
  text = "Agendar primeira consulta gratuita no WhatsApp" 
}) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 text-center text-lg md:text-xl w-full md:w-auto justify-center"
    >
      <MessageCircle className="w-6 h-6" />
      {text}
    </a>
    <span className="text-xs text-slate-500 font-medium tracking-wide">
      RESPOSTA RÁPIDA • SEM COMPROMISSO
    </span>
  </div>
);

const Lightbox: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => (
  <div 
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
    onClick={onClose}
  >
    <button className="absolute top-6 right-6 text-white hover:text-emerald-400">
      <X size={40} />
    </button>
    <img src={image} alt="Resultado" className="max-w-full max-h-full rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
      {children}
    </h2>
    {subtitle && <p className={`max-w-2xl mx-auto ${light ? 'text-slate-200' : 'text-slate-600'}`}>{subtitle}</p>}
    <div className="w-20 h-1 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Main App ---

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Lightbox */}
      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-emerald-700 font-bold tracking-widest text-sm mb-4 block uppercase">
              Transformando Sorrisos, Renovando Vidas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 leading-tight mb-6">
              Eu sou o Marcelo, <br />
              <span className="text-emerald-800">Especialista em Implantes e Estética.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Recupere a segurança de sorrir e mastigar com tratamentos modernos, sem dor e focados na sua autoestima natural.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
               <img 
                src={IMAGES.authority} 
                alt="Marcelo no atendimento" 
                className="w-full rounded-2xl shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl hidden md:block shadow-lg">
                <p className="font-bold text-2xl">+1000</p>
                <p className="text-xs uppercase tracking-wider opacity-90">Sorrisos Transformados</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 leading-snug">
                Muito além de dentes, eu cuido da sua <span className="text-emerald-700 italic">segurança</span>.
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Minha missão é devolver a você a alegria de expressar seus sentimentos através de um sorriso saudável e harmonioso. Com anos de dedicação em <strong>Implantes</strong> e <strong>Estética Dental</strong>, foco em resultados que respeitam sua identidade única.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Especialista em Implantes",
                    "Expert em Lentes de Resina",
                    "Cirurgia Oral e Sisos",
                    "Harmonização Facial"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Veja as transformações reais realizadas em nossa clínica.">
            Resultados Reais
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGES.proofs.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold border-2 border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Ver Imagem
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Por que confiar em mim?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-emerald-600" />,
                title: "Atendimento Humanizado",
                desc: "Aqui você não é apenas um prontuário. Faço questão de ouvir suas dores e medos."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                title: "Avaliação Honesta",
                desc: "Transparência total sobre o que você realmente precisa, sem tratamentos desnecessários."
              },
              {
                icon: <Clock className="w-8 h-8 text-emerald-600" />,
                title: "Tecnologia de Ponta",
                desc: "Uso as melhores técnicas e materiais para garantir longevidade e zero dor."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
                title: "Foco em Estética Natural",
                desc: "Dentes brancos e perfeitos que não parecem artificiais. Harmonia é a chave."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
                title: "Suporte Total",
                desc: "Estou disponível para tirar todas as suas dúvidas antes e depois do procedimento."
              },
              {
                icon: <Calendar className="w-8 h-8 text-emerald-600" />,
                title: "Agilidade e Precisão",
                desc: "Planejamento inteligente para que você tenha seu sorriso novo no menor tempo possível."
              }
            ].map((card, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all group">
                <div className="mb-6 transform group-hover:-translate-y-1 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif text-slate-800 mb-6">Pronto para dar o primeiro passo?</h3>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="container mx-auto px-6">
          <SectionTitle light subtitle="Um processo simples para você ter clareza total.">
            Sua Jornada para o Novo Sorriso
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-emerald-800"></div>
            {[
              {
                step: "01",
                title: "WhatsApp",
                desc: "Clique no botão e envie uma mensagem. Nossa equipe agendará seu horário rapidamente."
              },
              {
                step: "02",
                title: "Avaliação",
                desc: "Conversamos sobre seus objetivos e faço um exame clínico detalhado."
              },
              {
                step: "03",
                title: "Planejamento",
                desc: "Apresento o plano ideal para você, com prazos e valores transparentes."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/50">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-emerald-100/80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-emerald-400 font-bold text-lg mb-8 uppercase tracking-widest">Lembrando: A primeira consulta é 100% gratuita.</p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* 6. MAIS PROVAS / BASTIDORES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Transparência e profissionalismo em cada detalhe.">
            Expertise & Bastidores
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl group">
              <img src={IMAGES.authority} alt="Bastidores 1" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" /> Atendimento Personalizado
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img src={IMAGES.proofs[0]} alt="Bastidores 2" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" /> Tecnologia Avançada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
              Pare de esconder o seu <span className="text-emerald-700 underline underline-offset-8">sorriso</span> do mundo.
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Você merece a confiança de sorrir em qualquer lugar. Agende agora sua consulta gratuita e descubra o caminho para sua melhor versão.
            </p>
            <CTAButton text="Sim, quero agendar minha consulta gratuita" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-serif text-emerald-400 mb-6 uppercase tracking-tighter">Marcelo</h4>
              <p className="text-slate-400 mb-4 max-w-xs mx-auto md:mx-0">
                Especialista em Implantes e Estética Dental. Transformando vidas através de sorrisos únicos.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6 text-slate-200">Localização</h5>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-emerald-500" />
                  📍 Localização, xxxxxx
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-emerald-500" />
                  📌 Endereço, xxxxxx
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6 text-slate-200">Horário</h5>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Clock size={18} className="text-emerald-500" />
                  Segunda a sexta-feira
                </li>
                <li className="font-medium text-slate-300 ml-7">09:00 às 17:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Marcelo | Especialista em Implantes e Estética. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
