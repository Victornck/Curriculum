import React, { useState, useEffect } from "react";
import {
  Code,
  Laptop,
  Briefcase,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Zap,
  Target,
  Palette,
  MessageCircle,
  Users,
  Search,
  Shuffle,
  Shield,
  GraduationCap,
  Calendar,
  Code2,
  FileDown,
  Award,
  X,
} from "lucide-react";

import FotoPerfil from "./assets/foto-perfil.jpg";
import { motion } from "framer-motion";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const fullName = "Victor Berlinck";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCertificados, setShowCertificados] = useState(false);

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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const [activeSection, setActiveSection] = useState("home");
  const sections = [
    "inicio",
    "sobre",
    "tecnologias",
    "experiencias",
    "projetos",
    "contato",
  ];
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 h-16 ${
          scrolled
            ? "bg-black/90 shadow-lg shadow-purple-500/20"
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

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white text-2xl relative z-[1000]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8">
            {[
              { id: "inicio", label: "INÍCIO" },
              { id: "sobre", label: "SOBRE" },
              { id: "tecnologias", label: "TECNOLOGIAS" },
              { id: "experiencias", label: "EXPERIÊNCIA" },
              { id: "projetos", label: "PROJETOS" },
              { id: "contato", label: "CONTATO" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wider relative"
                initial="rest"
                animate={activeSection === item.id ? "active" : "rest"}
                whileHover="hover"
              >
                <span
                  className={`transition-colors ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-white/80 hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </span>

                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                    active: { width: "100%" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-purple-500"
                />
              </motion.button>
            ))}
          </div>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur z-[999]"
            >
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
                  onClick={() => {
                    scrollToSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full px-6 py-4 text-left text-sm tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-white/80 hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="
          min-h-screen
          sm:min-h-[90vh]
          flex
          items-center
          justify-center
          px-6
          pt-24
          md:pt-20
          relative
          overflow-hidden
        "
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
              <a
                href="https://www.instagram.com/victornck_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/victor-berlinck-61bba1273/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/30"
                title="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Victornck"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-gray-500/30"
                title="GitHub"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-1 shadow-2xl shadow-purple-500/50">
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
                <Code className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="sobre"
        className="
    py-20
    mt-8
    md:py-32
    md:mt-20
  "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* TÍTULO */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2 text-center">
              {" "}
              {/* mb-4 → mb-2 */}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              {" "}
              {/* Adicionei mb-8 */}
              Conheça um pouco da minha trajetória, valores e paixão por
              tecnologia.
            </p>
          </div>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-10 md:mb-20 rounded-full"></div>

          {/* GRID 40% / 60% */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
            {/* ESQUERDA — BADGES + BOTÕES */}
            <div className="flex flex-col gap-12">
              {/* BOTÕES */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <a
                    href="/CURRÍCULO VICTOR GABRIEL BERLINCK.docx.pdf"
                    download
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    <FileDown className="w-5 h-5" />
                    Baixar Currículo
                  </a>
                </div>
              </div>
            </div>

            {/* DIREITA — SOBRE MIM + SOFT SKILLS */}
            <div className="flex flex-col gap-16">
              {/* CARD SOBRE MIM */}
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
                  eficientes e bem estruturadas. Atuo no desenvolvimento web com{" "}
                  <span className="text-purple-400 font-semibold">
                    HTML, CSS e JavaScript
                  </span>{" "}
                  e também construo soluções robustas em{" "}
                  <span className="text-purple-400 font-semibold">
                    Java/Spring Boot
                  </span>
                  , com foco em me consolidar como full-stack.
                </p>

                <p className="text-gray-200 leading-relaxed text-lg">
                  Gosto de trabalhar em projetos que priorizam a boa experiência
                  do usuário, eficiência e código bem estruturado. Sou
                  comunicativo, proativo e colaborativo.
                </p>
              </div>

              {/* CARD SOFT SKILLS */}
              <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 shadow-xl hover:shadow-purple-500/30 transition-all hover:border-purple-500/50">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Soft Skills
                  </span>
                </h3>
                <p className="text-gray-400 mb-8">Habilidades interpessoais</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Comunicativo",
                      icon: MessageCircle,
                      color: "text-blue-400",
                    },
                    {
                      name: "Colaborativo",
                      icon: Users,
                      color: "text-cyan-400",
                    },
                    {
                      name: "Proativo",
                      icon: Rocket,
                      color: "text-orange-400",
                    },
                    { name: "Curioso", icon: Search, color: "text-green-400" },
                    {
                      name: "Adaptável",
                      icon: Shuffle,
                      color: "text-purple-400",
                    },
                    { name: "Resiliente", icon: Shield, color: "text-red-400" },
                  ].map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
                      >
                        <div className="mb-3 flex justify-center">
                          <IconComponent
                            className={`w-9 h-9 ${skill.color} transform group-hover:scale-110 transition-transform`}
                          />
                        </div>
                        <h4 className="font-semibold text-white">
                          {skill.name}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL CERTIFICADOS */}
        {showCertificados && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-8 py-6 border-b">
                <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Meus Certificados
                </h3>

                <button
                  onClick={() => setShowCertificados(false)}
                  className="p-2 rounded-full hover:bg-black/10 transition"
                >
                  <X className="w-6 h-6 text-blue-600" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto max-h-[75vh]">
                {/* AQUI você coloca seus cards de certificados */}
              </div>
            </div>
          </div>
        )}
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        id="tecnologias"
        className="min-h-screen flex items-center justify-center px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl w-full">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Tecnologias
              </span>
            </h2>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              Ferramentas e linguagens que domino para criar soluções
              inovadoras.
            </p>
          </div>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-10 md:mb-20 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                  <p className="text-sm text-gray-400">Interface & UX</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-blue-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">HTML</span>
                </div>
                <div className="bg-black/40 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-blue-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">CSS3</span>
                </div>
                <div className="bg-black/40 border border-yellow-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-yellow-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">
                    JavaScript
                  </span>
                </div>
                <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-cyan-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.407-.135.663-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">React</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Laptop className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                  <p className="text-sm text-gray-400">Lógica & Dados</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-red-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-red-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">Java</span>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-green-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.732 2.210-.426 4.744-1.948 5.86-4.039-.887 3.07-2.969 4.556-5.572 5.429-1.9.638-5.588.851-5.591.851.121-.007 1.226-.168 1.517-.21 2.514-.362 4.756-1.121 6.956-2.424 3.269-1.935 5.923-5.798 5.923-5.798.043.062 1.154 3.018-.002 6.941-1.056 3.582-3.218 5.688-5.756 7.379-1.785 1.186-5.063 1.956-5.063 1.956-.168.01-.338.019-.509.022-1.962.034-3.924-.402-5.321-1.568-1.573-1.313-1.901-3.514-.555-5.246 1.011-1.302 2.603-2.089 4.251-2.386 1.667-.302 3.247-.126 4.829.193-1.827-.475-3.82-.76-5.679-.374-2.003.414-3.741 1.608-4.532 3.534-1.134 2.765.111 5.809 2.744 7.021 1.721.792 3.611 1.072 5.527.943 1.823-.122 3.606-.65 5.311-1.349 2.657-1.092 5.095-2.72 6.967-4.822 1.728-1.938 2.954-4.27 3.346-6.932.385-2.602-.279-5.213-1.652-7.434.071.115.155.244.271.428z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">
                    Spring Boot
                  </span>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-green-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            {/* Ferramentas */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ferramentas</h3>
                  <p className="text-sm text-gray-400">Dev & Ops</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-blue-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">
                    VS Code
                  </span>
                </div>
                <div className="bg-black/40 border border-orange-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-orange-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experiencias"
        className="min-h-screen flex items-center justify-center px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl w-full">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Experiências
              </span>
            </h2>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              Minha jornada de aprendizado através de projetos pessoais e
              desafios reais.
            </p>
          </div>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-10 md:mb-20 rounded-full"></div>

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
      </motion.section>

      {/* Projects Section */}
      <section
        id="projetos"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Projetos
              </span>
            </h2>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              Principais projetos que desenvolvi aplicando tecnologias modernas.
            </p>
          </div>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-10 md:mb-20 rounded-full"></div>

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
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              Grandes projetos começam com uma conversa. Vamos começar a nossa?
            </p>
          </div>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-10 md:mb-20 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/5588981821934"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/50">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
                <a
                  href="https://www.linkedin.com/in/victor-berlinck-61bba1273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/30"
                  title="LinkedIn"
                >
                  <svg
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <span className="text-white font-bold text-xl">LinkedIn</span>
              <span className="text-gray-400 text-center">Victor Berlinck</span>
            </a>

            <a
              href="https://github.com/Victornck"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-gray-400 hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-gray-500/50">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">GitHub</span>
              <span className="text-gray-400 text-sm text-center break-all px-2">
                Victornck
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
