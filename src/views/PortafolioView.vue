<script setup>
// Script setup en Vue
import { computed, reactive, ref } from 'vue';

import {
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from 'simple-icons';

const isDark = ref(false);
const currentLanguage = ref('es');

const content = reactive({
  es: {
    name: 'Luis Enrique Cuellar Velasquez',
    role: 'Desarrollador Full Stack & Mobile',
    aboutMe: {
      title: 'Sobre Mí',
      description: 'Soy un desarrollador Full Stack apasionado por crear soluciones web y móviles innovadoras y eficientes. Con experiencia en tecnologías front-end, back-end y desarrollo móvil, me encanta transformar ideas en productos funcionales y atractivos. Siempre estoy buscando aprender nuevas herramientas y mejorar mis habilidades.'
    },
    skills: {
      title: 'Habilidades',
      list: ['JavaScript', 'TypeScript', 'Vue.js', 'React Native', 'Node.js', 'Express.js', 'Python', 'Django', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Docker', 'AWS']
    },
    experience: {
      title: 'Experiencia',
      list: [
        {
          title: 'Desarrollador Full Stack Senior',
          company: 'Tech Solutions Inc.',
          duration: 'Enero 2022 - Presente',
          description: 'Lideré el desarrollo de aplicaciones web escalables utilizando Vue.js y Node.js. Implementé nuevas funcionalidades y optimicé el rendimiento de la plataforma, además de participar en el desarrollo de APIs RESTful.'
        },
        {
          title: 'Desarrollador Frontend & Mobile',
          company: 'Creative Agency',
          duration: 'Julio 2019 - Diciembre 2021',
          description: 'Diseñé y desarrollé interfaces de usuario interactivas con React Native y Tailwind CSS para aplicaciones móviles, y con React para web. Colaboré estrechamente con equipos de diseño para asegurar la fidelidad visual y la experiencia de usuario.'
        }
      ]
    },
    projectsList: [
      {
        title: 'Landing Page "AntoJARTE"',
        description: 'La página web sirve como una vitrina digital para "AntoJARTE". Presenta la historia de la marca, su menú de donas de autor, testimonios de clientes satisfechos y la ubicación de su tienda física. El objetivo es atraer a nuevos clientes y proporcionar información esencial sobre sus productos y servicios.',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS S3'],
        demoLink: 'https://victorious-forest-05388c00f.7.azurestaticapps.net',
        repoLink: '#'
      },
      {
        title: 'Sistema de Gestión de Tareas Móvil',
        description: 'Aplicación móvil nativa para organizar y gestionar tareas personales y de equipo con funcionalidades de colaboración en tiempo real.',
        technologies: ['React Native', 'Express.js', 'PostgreSQL', 'Firebase'],
        demoLink: '#',
        repoLink: '#'
      },
      {
        title: 'Blog Personal con CMS',
        description: 'Un blog moderno y responsivo con un sistema de administración de contenido (CMS) personalizado, permitiendo una fácil publicación y gestión de artículos.',
        technologies: ['Nuxt.js', 'GraphQL', 'Strapi', 'Docker'],
        demoLink: '#',
        repoLink: '#'
      }
    ],
    projects: 'Proyectos',
    contact: 'Contacto',
    contactFormTitle: '¡Hablemos!',
    contactFormPlaceholderEmail: 'Tu Email',
    contactFormPlaceholderMessage: 'Tu Mensaje',
    contactFormSubmit: 'Enviar Mensaje',
    downloadCV: 'Descargar CV',
    footerText: '© 2024 Luis Enrique Cuellar Velasquez. Todos los derechos reservados.'
  },
  en: {
    name: 'Luis Enrique Cuellar Velasquez',
    role: 'Full Stack & Mobile Developer',
    aboutMe: {
      title: 'About Me',
      description: 'I am a Full Stack Developer passionate about creating innovative and efficient web and mobile solutions. With experience in front-end, back-end, and mobile development technologies, I love transforming ideas into functional and attractive products. I am always looking to learn new tools and improve my skills.'
    },
    skills: {
      title: 'Skills',
      list: ['JavaScript', 'TypeScript', 'Vue.js', 'React Native', 'Node.js', 'Express.js', 'Python', 'Django', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Docker', 'AWS']
    },
    experience: {
      title: 'Experience',
      list: [
        {
          title: 'Senior Full Stack Developer',
          company: 'Tech Solutions Inc.',
          duration: 'January 2022 - Present',
          description: 'Led the development of scalable web applications using Vue.js and Node.js. Implemented new features and optimized platform performance, and participated in RESTful API development.'
        },
        {
          title: 'Frontend & Mobile Developer',
          company: 'Creative Agency',
          duration: 'July 2019 - December 2021',
          description: 'Designed and developed interactive user interfaces with React Native and Tailwind CSS for mobile apps, and with React for web. Collaborated closely with design teams to ensure visual fidelity and user experience.'
        }
      ]
    },
    projectsList: [
      {
        title: 'E-commerce Platform',
        description: 'A complete e-commerce platform with product management, shopping cart, and payment gateway, developed with a focus on scalability and security.',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS S3'],
        demoLink: '#',
        repoLink: '#'
      },
      {
        title: 'Mobile Task Management System',
        description: 'Native mobile application to organize and manage personal and team tasks with real-time collaboration features.',
        technologies: ['React Native', 'Express.js', 'PostgreSQL', 'Firebase'],
        demoLink: '#',
        repoLink: '#'
      },
      {
        title: 'Personal Blog with CMS',
        description: 'A modern and responsive blog with a custom Content Management System (CMS), allowing easy publishing and article management.',
        technologies: ['Nuxt.js', 'GraphQL', 'Strapi', 'Docker'],
        demoLink: '#',
        repoLink: '#'
      }
    ],
    projects: 'Projects',
    contact: 'Contact',
    contactFormTitle: 'Let\'s Talk!',
    contactFormPlaceholderEmail: 'Your Email',
    contactFormPlaceholderMessage: 'Your Message',
    contactFormSubmit: 'Send Message',
    downloadCV: 'Download CV',
    footerText: '© 2024 Luis Enrique Cuellar Velasquez. All rights reserved.'
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
};

const submitForm = () => {
};

const skillIcons = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  'Vue.js': siVuedotjs,
  'React Native': siReact,
  'Node.js': siNodedotjs,
  'Express.js': siExpress,
  Python: siPython,
  Django: siDjango,
  SQL: siMysql,
  MongoDB: siMongodb,
  HTML: siHtml5,
  CSS: siCss,
  'Tailwind CSS': siTailwindcss,
  Git: siGit,
  Docker: siDocker,
  AWS: {
    path: 'M19.35 10.04A7.49 7.49 0 0 0 12 4a7.49 7.49 0 0 0-7.25 5.53A5.5 5.5 0 0 0 5.5 20h13a4.5 4.5 0 0 0 .85-8.96Z',
  },
};

const skillsWithIcons = computed(() =>
  content[currentLanguage.value].skills.list.map((name) => ({
    name,
    icon: skillIcons[name] ?? null,
  })),
);

const particlesOptions = computed(() => {
  const isDarkTheme = isDark.value;

  // Ajustes de color por tema (manteniendo el estilo del JSON: color + animación de hue).
  const baseParticleColor = isDarkTheme ? '#f97316' : '#ea580c';
  const baseTrailColor = isDarkTheme ? '#f97316' : '#ea580c';

  return {
    autoPlay: true,
    background: {
      color: { value: 'transparent' },
      opacity: 1,
    },
    clear: true,
    delay: 0,
    fullScreen: {
      enable: false,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onHover: {
          enable: true,
          mode: 'trail',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 0.005,
          pauseOnStop: true,
          quantity: 5,
          particles: {
            color: {
              value: baseTrailColor,
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
            },
            collisions: {
              enable: false,
            },
            links: {
              enable: false,
            },
            move: {
              outModes: {
                default: 'destroy',
              },
              speed: 2,
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 5,
                sync: true,
                startValue: 'min',
                destroy: 'max',
              },
            },
          },
        },
      },
    },
    particles: {
      collisions: {
        enable: false,
      },
      color: {
        value: baseParticleColor,
        animation: {
          h: {
            count: 0,
            enable: true,
            speed: 50,
            decay: 0,
            delay: 0,
            sync: false,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      links: {
        blink: false,
        color: {
          value: 'random',
        },
        consent: false,
        distance: 100,
        enable: true,
        frequency: 1,
        opacity: isDarkTheme ? 1 : 0.6,
        shadow: {
          blur: 5,
          color: {
            value: '#000',
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: 'percent',
          radius: 0,
        },
        decay: 0,
        direction: 'none',
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        random: false,
        size: false,
        speed: 2,
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        value: 100,
      },
      opacity: {
        value: {
          min: isDarkTheme ? 0.3 : 0.4,
          max: isDarkTheme ? 0.8 : 0.8,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    motion: {
      disable: true,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  };
});
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen font-sans">
      
      <!-- Navbar con controles -->
      <nav class="fixed w-full p-6 flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 z-50">
        <div class="font-bold text-xl tracking-tighter">Enrique DEVELOPER</div>
        <div class="flex gap-4">
          <button @click="currentLanguage = currentLanguage === 'es' ? 'en' : 'es'" class="hover:text-orange-500 transition">
            {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
          </button>
          <button @click="toggleTheme" class="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:ring-2 ring-orange-400 transition-all">
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>
      </nav>

      <!-- Hero Section con Animación -->
      <header class="relative overflow-hidden h-screen flex flex-col justify-center items-center text-center px-4">
        <vue-particles
          id="tsparticles"
          :options="particlesOptions"
          class="absolute inset-0 pointer-events-none z-0"
        />
        <h1 class="relative z-10 text-6xl md:text-8xl font-black mb-4 animate-bounce text-gradient-light dark:text-gradient-dark">
          {{ content[currentLanguage].name }}
        </h1>
        <p class="relative z-10 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-light">
          {{ content[currentLanguage].role }}
        </p>
        <a href="/cv.pdf" download class="relative z-10 mt-8 px-8 py-3 btn-warm text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
          {{ content[currentLanguage].downloadCV }}
        </a>
      </header>

      <!-- Sección Sobre Mí -->
      <section id="about" class="py-20 px-4 md:px-10 max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Contenedor de la Foto -->
          <div class="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div class="absolute inset-0 bg-orange-500 rounded-3xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-300"></div>
            <div class="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <img 
              src="../assets/portafolio.png" 
              alt="Foto de Perfil" 
              class="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white dark:border-slate-900"
            />
          </div>
          <!-- Contenedor del Texto -->
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-4xl font-bold mb-6">{{ content[currentLanguage].aboutMe.title }}</h2>
            <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ content[currentLanguage].aboutMe.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Sección Habilidades -->
      <section id="skills" class="py-20 px-4 md:px-10 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <h2 class="text-4xl font-bold mb-12 text-center">{{ content[currentLanguage].skills.title }}</h2>
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="(skill, index) in skillsWithIcons"
              :key="skill.name"
              class="skill-chip flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              :style="{ animationDelay: `${index * 80}ms` }"
            >
              <svg
                v-if="skill.icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="h-6 w-6"
                :style="{ color: `#${skill.icon.hex}` }"
              >
                <path :d="skill.icon.path" fill="currentColor" />
              </svg>
              <span class="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Experiencia -->
      <section id="experience" class="py-20 px-4 md:px-10 max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center">{{ content[currentLanguage].experience.title }}</h2>
        <div class="space-y-8">
          <div v-for="(job, index) in content[currentLanguage].experience.list" :key="index" class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all shadow-sm hover:shadow-xl">
            <h3 class="text-2xl font-bold">{{ job.title }}</h3>
            <p class="text-orange-600 dark:text-orange-400 text-lg font-semibold">{{ job.company }}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ job.duration }}</p>
            <p class="mt-4 text-slate-700 dark:text-slate-300 leading-snug">{{ job.description }}</p>
          </div>
        </div>
      </section>

      <!-- Apartado de Proyectos -->
      <section id="projects" class="py-20 px-4 md:px-10">
        <h2 class="text-4xl font-bold mb-12">{{ content[currentLanguage].projects }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in content[currentLanguage].projectsList"
            :key="index"
            class="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all flex flex-col group shadow-sm hover:shadow-xl"
          >
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="mt-2 text-sm opacity-70">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="mt-auto px-6 pb-6 flex justify-end gap-2">
              <a
                :href="project.demoLink"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-warm px-4 py-2 rounded-lg text-sm text-white transition font-medium"
              >
                Ver Demo
              </a>
              <a
                :href="project.repoLink"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-slate-800 dark:bg-slate-700 px-4 py-2 rounded-lg text-sm text-white hover:bg-slate-900 dark:hover:bg-slate-600 transition"
              >
                Repositorio
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Apartado de Contacto -->
      <section class="py-20 bg-slate-100 dark:bg-slate-900/50 text-center border-t border-slate-200 dark:border-slate-800">
        <h2 class="text-4xl font-bold mb-6">{{ content[currentLanguage].contact }}</h2>
        <h3 class="text-2xl mb-8 font-light text-slate-600 dark:text-slate-400">{{ content[currentLanguage].contactFormTitle }}</h3>
        <form class="max-w-md mx-auto flex flex-col gap-4 px-4" @submit.prevent="submitForm">
          <input type="email" :placeholder="content[currentLanguage].contactFormPlaceholderEmail" class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
          <textarea :placeholder="content[currentLanguage].contactFormPlaceholderMessage" class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" rows="5"></textarea>
          <button type="submit" class="btn-warm py-3 rounded-lg font-bold text-white shadow-lg shadow-orange-500/20 transition-all">
            {{ content[currentLanguage].contactFormSubmit }}
          </button>
        </form>
      </section>

      <!-- Footer -->
      <footer class="py-8 text-center text-stone-500 dark:text-stone-400 text-sm">
        <div class="card mb-4">
          <a class="socialContainer containerOne" href="#">
            <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
          </a>
          
          <a class="socialContainer containerTwo" href="#">
            <svg viewBox="0 0 16 16" class="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>
          </a>
            
          <a class="socialContainer containerThree" href="#">
            <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          </a>
          
          <a class="socialContainer containerFour" href="#">
            <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
          </a>
        </div>
        {{ content[currentLanguage].footerText }}
      </footer>
    </div>
  </div>
</template>

<style scoped>
.text-gradient-light {
  background: linear-gradient(to right, #f97316, #fb923c, #fb7185);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dark .text-gradient-dark {
  background: linear-gradient(to right, #fb923c, #fcd34d, #fda4af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-warm {
  background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
  transition: all 0.3s ease;
}

.btn-warm:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.skill-chip {
  animation: floatX 3.2s ease-in-out infinite;
}

@keyframes floatX {
  0% {
    transform: translateX(-8px);
  }
  50% {
    transform: translateX(8px);
  }
  100% {
    transform: translateX(-8px);
  }
}

.dark .bg-slate-950 {
  background: linear-gradient(-45deg, #020617, #0f172a, #020617);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #e2e8f0; /* bg-slate-200 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
}

.dark .socialContainer {
    background-color: #1e293b; /* bg-slate-800 */
}

/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: .3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: .3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: .3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128C7E;
  transition-duration: .3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: #0f172a; /* text-slate-900 */
}

.dark .socialSvg path {
    fill: #f1f5f9; /* text-slate-100 */
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.socialContainer:hover .socialSvg path {
  fill: #ffffff;
}
</style>
