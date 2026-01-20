
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Gauge, 
  Settings, 
  ShieldCheck, 
  Microscope, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Cpu,
  Search,
  MessageSquare
} from 'lucide-react';

// --- Types ---
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Brand {
  name: string;
  logo: string;
}

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'DNA Modena', href: '#dna' },
    { name: 'Showroom', href: '#showroom' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-rosso-corsa flex items-center justify-center skew-x-[-15deg] transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-heading text-xl skew-x-[15deg]">M</span>
          </div>
          <span className="font-heading text-xl tracking-tighter uppercase italic">Modena <span className="text-rosso-corsa">Performance</span></span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest hover:text-rosso-corsa transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 bg-rosso-corsa hover:bg-[#B30000] text-white text-xs font-heading uppercase tracking-widest transition-all skew-x-[-15deg]">
            <span className="block skew-x-[15deg]">Agendar</span>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-heading uppercase text-white hover:text-rosso-corsa"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Sports Car Engine" 
          className="w-full h-full object-cover grayscale-[0.5] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-in slide-in-from-left duration-700">
            <span className="h-px w-12 bg-rosso-corsa"></span>
            <span className="text-rosso-corsa uppercase tracking-[0.3em] font-bold text-xs">Sorocaba • High Performance</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-heading uppercase leading-[0.9] mb-8 animate-in slide-in-from-left duration-1000">
            Engenharia de <br />
            <span className="relative inline-block outline-text precision-animated">Precisão</span> <br />
            <span className="text-white">Absoluta</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-in slide-in-from-left duration-1200">
            Elevamos o patamar da performance automotiva em Sorocaba. Técnicas italianas aplicadas aos motores mais potentes do mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-10 py-5 bg-rosso-corsa text-white font-heading uppercase tracking-widest text-sm overflow-hidden skew-x-[-15deg]">
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-3 skew-x-[15deg]">
                Iniciar Projeto <ArrowRight size={18} />
              </span>
            </button>
            <button className="px-10 py-5 border border-white/20 hover:border-rosso-corsa text-white font-heading uppercase tracking-widest text-sm transition-all skew-x-[-15deg]">
              <span className="block skew-x-[15deg]">Conheça o Lab</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 hidden lg:block text-right animate-in fade-in duration-1000">
        <div className="mb-6">
          <p className="text-5xl font-heading text-white">0.2s</p>
          <p className="text-rosso-corsa text-xs uppercase tracking-widest">Tempo de Resposta</p>
        </div>
        <div>
          <p className="text-5xl font-heading text-white">+1000hp</p>
          <p className="text-rosso-corsa text-xs uppercase tracking-widest">Capacidade Tuning</p>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Tuning & Remap",
      description: "Otimização eletrônica de nível Stage 1, 2 e 3 para extração máxima de torque e potência sem comprometer a longevidade.",
      icon: Gauge,
    },
    {
      id: 2,
      title: "Manutenção Supercars",
      description: "Cuidado especializado para Porsche, Ferrari e Lamborghini. Peças originais e padrões de fábrica europeus.",
      icon: Settings,
    },
    {
      id: 3,
      title: "Detalhamento Técnico",
      description: "Estética de precisão com foco em preservação de pintura e higienização técnica de motores e chassis.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Diagnóstico Avançado",
      description: "Sistemas de telemetria e análise computadorizada de última geração para identificar falhas imperceptíveis.",
      icon: Microscope,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm text-rosso-corsa uppercase font-bold tracking-[0.3em] mb-4">Core Expertise</h2>
          <p className="text-4xl md:text-5xl font-heading uppercase italic tracking-tighter">Serviços <span className="text-rosso-corsa">Elite</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group p-8 glass-card border-white/5 hover:border-rosso-corsa/30 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 mb-8 flex items-center justify-center bg-white/5 group-hover:bg-rosso-corsa transition-colors duration-500 rounded-sm">
                  <Icon size={32} className="text-white transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-heading uppercase mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-rosso-corsa font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba Mais <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DNA: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffset(rect.top * 0.15);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { title: "Precisão", icon: Cpu, desc: "Instrumentação laser e tolerância zero a erros." },
    { title: "Paixão", icon: Settings, desc: "Tratamos cada veículo como uma obra de arte única." },
    { title: "Tecnologia", icon: Search, desc: "Acesso aos mesmos softwares das fábricas italianas." }
  ];

  return (
    <section id="dna" ref={sectionRef} className="py-24 relative overflow-hidden bg-black">
      <div 
        className="absolute left-0 top-0 w-full h-[140%] opacity-20 pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical Background" 
          className="w-full h-full object-cover scale-110" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm text-rosso-corsa uppercase font-bold tracking-[0.3em] mb-6">Manifesto</h2>
            <h3 className="text-4xl md:text-6xl font-heading uppercase leading-tight mb-8 text-white">
              DNA <span className="text-rosso-corsa italic">Italiano</span> <br />
              Performance Global
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Nossa oficina não é apenas um local de reparos; é um laboratório de engenharia. Inspirados pela herança automotiva de Modena, trouxemos para Sorocaba o que há de mais avançado em tecnologia de alta performance.
            </p>
            <div className="space-y-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-rosso-corsa/10 flex items-center justify-center shrink-0">
                      <Icon className="text-rosso-corsa" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading uppercase text-white mb-1 tracking-widest">{v.title}</h4>
                      <p className="text-slate-400 text-sm">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-rosso-corsa/30 group-hover:border-rosso-corsa transition-colors duration-500 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1493238507129-15510bfad775?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Workshop" 
              className="relative z-10 w-full grayscale group-hover:grayscale-0 transition-all duration-700 h-[600px] object-cover"
            />
            <div className="absolute bottom-10 left-10 z-20 bg-rosso-corsa px-6 py-4 skew-x-[-15deg]">
              <p className="skew-x-[15deg] font-heading uppercase text-white text-lg">Estética & Função</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Showroom: React.FC = () => {
  const brands: Brand[] = [
    { name: "Porsche", logo: "PORSCHE" },
    { name: "Ferrari", logo: "FERRARI" },
    { name: "Lamborghini", logo: "LAMBORGHINI" },
    { name: "BMW M", logo: "M POWER" },
    { name: "Audi RS", logo: "QUATTRO" },
    { name: "McLaren", logo: "MCLAREN" },
  ];

  const galleryItems = [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="showroom" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-sm text-rosso-corsa uppercase font-bold tracking-[0.3em] mb-4">Exclusividade</h2>
            <h3 className="text-4xl md:text-5xl font-heading uppercase italic tracking-tighter text-white">Nosso <span className="text-rosso-corsa">Showroom</span></h3>
          </div>
          <p className="text-slate-500 max-w-sm text-right">
            Marcas icônicas, cuidados meticulosos. Referência no atendimento de superesportivos em todo o interior de São Paulo.
          </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden py-10">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center px-12 py-8 bg-white/5 border border-white/5 rounded-sm grayscale hover:grayscale-0 transition-all hover:bg-rosso-corsa/10 hover:border-rosso-corsa/30 group">
              <span className="text-3xl font-heading text-white/20 group-hover:text-white transition-colors uppercase italic tracking-tighter">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {galleryItems.map((img, i) => (
          <div key={i} className="group relative overflow-hidden h-80">
            <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm text-rosso-corsa uppercase font-bold tracking-[0.3em] mb-6">Visite-nos</h2>
            <h3 className="text-4xl md:text-5xl font-heading uppercase leading-tight mb-10 text-white">O Paddock de <br /><span className="text-rosso-corsa italic">Sua Máquina</span></h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-rosso-corsa transition-colors">
                  <MapPin className="text-rosso-corsa" />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500 tracking-widest font-bold mb-1">Localização</p>
                  <p className="text-white text-lg">Av. Gisele Constantino, Sorocaba - SP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-rosso-corsa transition-colors">
                  <Phone className="text-rosso-corsa" />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500 tracking-widest font-bold mb-1">Fale Conosco</p>
                  <p className="text-white text-lg">(15) 99123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-rosso-corsa transition-colors">
                  <Mail className="text-rosso-corsa" />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500 tracking-widest font-bold mb-1">Email Técnico</p>
                  <p className="text-white text-lg">box@modenaperformance.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-rosso-corsa transition-colors border border-white/10">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="h-[500px] w-full relative grayscale invert opacity-80 brightness-75 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117070.76707324301!2d-47.52495360699052!3d-23.515949174526563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f9f38f427f7b%3A0x6334690623d9061c!2sSorocaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 80% of hero is scrolled
      setShowFloatingButton(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-rosso-corsa selection:text-white bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Services />
      <DNA />
      <Showroom />
      <Contact />
      
      <footer className="py-12 bg-[#050505] border-t border-white/5 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-rosso-corsa flex items-center justify-center skew-x-[-15deg]">
                <span className="text-white font-heading text-xs skew-x-[15deg]">M</span>
              </div>
              <span className="font-heading text-sm uppercase italic">Modena <span className="text-rosso-corsa">Performance</span></span>
            </div>
            <p className="text-slate-600 text-xs uppercase tracking-widest">
              © 2024 Modena Performance Lab. Sorocaba, São Paulo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button - Appears past Hero */}
      <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${showFloatingButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-75 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5515991234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-rosso-corsa text-white shadow-[0_0_20px_rgba(212,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,0,0,0.7)] transition-all skew-x-[-15deg]"
        >
          <div className="skew-x-[15deg] flex items-center justify-center">
            <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
          </div>
          <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-heading uppercase py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity skew-x-[15deg] pointer-events-none border-l-4 border-rosso-corsa">
            Agendar Box
          </span>
        </a>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes precision-glow {
          0%, 100% { 
            -webkit-text-stroke: 1px rgba(212, 0, 0, 0.3);
            text-shadow: 0 0 10px rgba(212, 0, 0, 0);
          }
          50% { 
            -webkit-text-stroke: 1px rgba(212, 0, 0, 1);
            text-shadow: 0 0 20px rgba(212, 0, 0, 0.5);
          }
        }
        @keyframes precision-reveal {
          0% { width: 0; border-right: 2px solid #D40000; }
          40% { width: 100%; border-right: 2px solid #D40000; }
          50% { width: 100%; border-right: 0px solid transparent; }
          90% { width: 100%; border-right: 0px solid transparent; }
          100% { width: 0; border-right: 0px solid transparent; }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
        .precision-animated {
          animation: precision-glow 4s ease-in-out infinite;
        }
        .precision-animated::after {
          content: 'Precisão';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          color: #D40000;
          overflow: hidden;
          white-space: nowrap;
          animation: precision-reveal 8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          -webkit-text-stroke: 0;
        }
      ` }} />
    </div>
  );
};

// --- Render ---

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
