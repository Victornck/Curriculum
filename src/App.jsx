import React, { useState, useEffect } from "react";
import {
  Code,
  Laptop,
  Briefcase,
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Phone,
  Rocket,
  Zap,
  Target,
  Palette,
} from "lucide-react";
import FotoPerfil from "./assets/foto-perfil.jpg";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const fullName = "Victor Berlinck";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const technologies = [
    { name: "Java", icon: Code },
    { name: "Spring Boot", icon: Laptop },
    { name: "JavaScript", icon: Code },
    { name: "Node.js", icon: Laptop },
    { name: "React", icon: Code },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Palette },
    { name: "VS Code", icon: Code },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <div className="font-bold text-lg text-white">
                VICTOR BERLINCK
              </div>
              <div className="text-xs text-purple-400">DEVELOPER</div>
            </div>
          </div>
          <div className="flex gap-8">
            {[
              { id: "inicio", label: "INÍCIO" },
              { id: "sobre", label: "SOBRE" },
              { id: "tecnologias", label: "TECNOLOGIAS" },
              { id: "experiencias", label: "EXPERIÊNCIA" },
              { id: "projetos", label: "PROJETOS" },
              { id: "contato", label: "CONTATO" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hidden md:block hover:text-purple-400 transition-colors text-sm font-medium tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-light text-gray-200">
                Olá! Eu sou
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                {typedText}
                <span
                  className={`${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity text-purple-400`}
                >
                  |
                </span>
              </h1>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-white">
                Desenvolvedor Full Stack & Estudante de{" "}
                <span className="text-purple-400 font-semibold">
                  Sistemas de Informação
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                title="Instagram"
              >
                <MessageSquare className="w-6 h-6" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                title="Discord"
              >
                <MessageSquare className="w-6 h-6" />
              </button>
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2">
              Baixar Currículo
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-1 shadow-2xl shadow-purple-500/50 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden border-2 border-purple-500/20">
                  <img
                    src={FotoPerfil}
                    alt="Foto de perfil de Victor Berlinck"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 animate-bounce">
                <Zap className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 animate-bounce delay-300">
                <Rocket className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-12 rounded-full"></div>

          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 shadow-xl hover:shadow-purple-500/30 transition-all hover:border-purple-500/50">
            <p className="text-gray-200 leading-relaxed text-lg mb-6">
              Tenho 20 anos e atualmente curso o 7º semestre de{" "}
              <span className="text-purple-400 font-semibold">
                Sistemas de Informação
              </span>{" "}
              no Centro Universitário Inta - UNINTA.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">
              Gosto de explorar novas tecnologias e criar soluções práticas,
              eficientes e bem estruturadas que realmente ajudam pessoas e
              empresas no dia a dia. Atuo no desenvolvimento web com{" "}
              <span className="text-purple-400 font-semibold">
                HTML, CSS e JavaScript
              </span>
              , e também construo soluções robustas em{" "}
              <span className="text-purple-400 font-semibold">
                Java/Spring Boot
              </span>
              , com foco em me consolidar como full-stack.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Gosto de trabalhar em projetos que priorizam a boa experiência do
              usuário, eficiência e código bem estruturado. Tenho facilidade em
              me comunicar, sou proativo e gosto de colaborar com outras
              pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="tecnologias"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/40 transition-all cursor-pointer hover:-translate-y-2"
                >
                  <IconComponent
                    className="w-16 h-16 text-purple-400 group-hover:scale-125 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-white font-semibold text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencias"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Experiências
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-12 rounded-full"></div>

          <div className="space-y-6">
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">
                    Desenvolvedor Full Stack
                  </h3>
                  <p className="text-gray-400 mb-4 text-lg">Em formação</p>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    Desenvolvimento de aplicações web completas utilizando
                    tecnologias modernas como React, Node.js, Java e Spring
                    Boot. Foco em criar soluções eficientes e escaláveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projetos"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Palette, color: "from-purple-500 to-purple-700" },
              { icon: Rocket, color: "from-purple-600 to-purple-800" },
              { icon: Zap, color: "from-purple-500 to-indigo-600" },
              { icon: Target, color: "from-indigo-600 to-purple-700" },
            ].map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/40 transition-all cursor-pointer hover:-translate-y-2"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-purple-500/30`}
                  >
                    <IconComponent
                      className="w-24 h-24 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">
                    Projeto {index + 1}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Descrição do projeto em desenvolvimento...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/5588981821934"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/50">
                <Phone className="w-10 h-10" />
              </div>
              <span className="text-white font-bold text-xl">WhatsApp</span>
              <span className="text-gray-400">(88) 98182-1934</span>
            </a>

            <a
              href="https://www.linkedin.com/in/victor-berlinck-61bba1273/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                <Linkedin className="w-10 h-10" />
              </div>
              <span className="text-white font-bold text-xl">LinkedIn</span>
              <span className="text-gray-400 text-center">Victor Berlinck</span>
            </a>

            <a
              href="mailto:victorgabrielberlinck@gmail.com"
              className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                <Mail className="w-10 h-10" />
              </div>
              <span className="text-white font-bold text-xl">Email</span>
              <span className="text-gray-400 text-sm text-center break-all px-2">
                victorgabrielberlinck@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-purple-500/30 py-8 text-center">
        <p className="text-gray-400">
          &copy; 2025 Victor Berlinck. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-2">Desenvolvido com React</p>
      </footer>
    </div>
  );
};

export default App;
