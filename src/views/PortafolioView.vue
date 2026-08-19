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
        technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        demoLink: 'https://victorious-forest-05388c00f.7.azurestaticapps.net',
        repoLink: 'https://github.com/Enrike3596/Landing--antoJARTE.git'
      },
      {
        title: 'Landing Page "Urbansys"',
        description: 'Diseño y desarrollo de una landing page profesional para Urbansys, una solución tecnológica todo-en-uno que digitaliza y automatiza la gestión de comunidades residenciales. La plataforma integra procesos administrativos, control de acceso, gestión de residentes, comunicación interna, reservas de espacios comunes y seguimiento de activos, proporcionando una experiencia eficiente, segura y centralizada para administradores y residentes.',
        technologies: ['Vue 3', 'TailwindCSS 3', 'Vite 7', 'ESLint + Oxlint'],
        demoLink: 'https://lemon-desert-0138e820f.7.azurestaticapps.net',
        repoLink: 'https://github.com/Enrike3596/Landing--Urbansys.git'
      },
      {
        title: 'Landing Page para Clínica Odontológica',
        description: 'Desarrollo de una landing page moderna y responsiva para una clínica odontológica, diseñada para presentar servicios, especialidades y el equipo médico de manera profesional. La solución facilita la reserva de citas mediante formularios de contacto, mejora la experiencia de los usuarios y fortalece la presencia digital de la clínica, contribuyendo a la captación de nuevos pacientes.',
        technologies: ['Vue 3', 'Vite', 'Bootstrap 5', 'WOW.js + Animate.css'],
        demoLink: 'https://lemon-pond-0de0b710f.7.azurestaticapps.net',
        repoLink: 'https://github.com/Enrike3596/Landing--Odontologia.git'
      }
    ],
    projects: 'Proyectos',
    contact: 'Contacto',
    contactFormTitle: '¡Hablemos!',
    contactFormName: 'Nombre Completo',
    contactFormEmail: 'Correo Electrónico',
    contactFormPhone: 'Teléfono',
    contactFormService: 'Selecciona un Servicio',
    contactFormMessage: 'Escribe tu Mensaje',
    contactFormSubmit: 'Enviar Mensaje',
    downloadCV: 'Ver Hoja de Vida',
    contactEmail: 'enrique@example.com',
    contactPhone: '+52 (123) 456-7890',
    contactLocation: 'Ciudad de México, MX',
    contactLocationLabel: 'Ubicación',
    contactFormSubject: 'Asunto',
    contactInfoTitle: 'Información de Contacto',
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
          /* Lines 102-105 omitted */
          description: 'Led the development of scalable web applications using Vue.js and Node.js. Implemented new features and optimized platform performance, and participated in RESTful API development.'
        },
        {/* Lines 108-112 omitted */}
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
    contactFormName: 'Full Name',
    contactFormEmail: 'Email',
    contactFormPhone: 'Phone',
    contactFormService: 'Select a Service',
    contactFormMessage: 'Your Message',
    contactFormSubmit: 'Send Message',
    downloadCV: 'View Resume',
    contactEmail: 'enrique@example.com',
    contactPhone: '+52 (123) 456-7890',
    contactLocation: 'Mexico City, MX',
    contactLocationLabel: 'Location',
    contactFormSubject: 'Subject',
    contactInfoTitle: 'Contact Information',
    contactSocialTitle: 'Social Networks',
    footerText: '© 2024 Luis Enrique Cuellar Velasquez. All rights reserved.'
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
};

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  const { name, email, subject, message } = formData;
  if (!name || !email || !message) return;
  const mailto = `mailto:enrique@example.com?subject=${encodeURIComponent(subject || 'Contacto')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailto;
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
        <RouterLink to="/hoja-de-vida" class="relative z-10 mt-8 px-8 py-3 btn-warm text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
          {{ content[currentLanguage].downloadCV }}
        </RouterLink>
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
      <section id="contact" class="py-20 md:py-28 px-4 md:px-10 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ content[currentLanguage].contact }}</h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">{{ content[currentLanguage].contactFormTitle }}</p>
            <div class="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <!-- Left: Contact Info -->
            <div class="lg:col-span-2 space-y-6">
              <div class="contact-card">
                <h3 class="text-xl font-semibold mb-6 flex items-center gap-2">
                  <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  {{ content[currentLanguage].contactInfoTitle }}
                </h3>

                <!-- Email -->
                <div class="contact-info-item">
                  <div class="contact-icon-box">
                    <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="contact-info-label">{{ content[currentLanguage].contactFormEmail }}</h4>
                    <p class="contact-info-value">{{ content[currentLanguage].contactEmail }}</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="contact-info-item">
                  <div class="contact-icon-box">
                    <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="contact-info-label">{{ content[currentLanguage].contactFormPhone }}</h4>
                    <p class="contact-info-value">{{ content[currentLanguage].contactPhone }}</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="contact-info-item">
                  <div class="contact-icon-box">
                    <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="contact-info-label">{{ content[currentLanguage].contactLocationLabel }}</h4>
                    <p class="contact-info-value">{{ content[currentLanguage].contactLocation }}</p>
                  </div>
                </div>
              </div>

              <!-- Social -->
              <div class="contact-card">
                <ul class="social-list">
                  <li class="icon-content">
                    <a data-social="whatsapp" aria-label="WhatsApp" href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                      <div class="filled"></div>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                    <div class="tooltip">WhatsApp</div>
                  </li>
                  <li class="icon-content">
                    <a data-social="github" aria-label="GitHub" href="https://github.com/Enrike3596" target="_blank" rel="noopener noreferrer">
                      <div class="filled"></div>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <div class="tooltip">GitHub</div>
                  </li>
                  <li class="icon-content">
                    <a data-social="linkedin" aria-label="LinkedIn" href="https://linkedin.com/in/enrike3596" target="_blank" rel="noopener noreferrer">
                      <div class="filled"></div>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <div class="tooltip">LinkedIn</div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right: Form -->
            <div class="lg:col-span-3">
              <div class="contact-card">
                <form @submit.prevent="submitForm" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label">{{ content[currentLanguage].contactFormName }}</label>
                      <input
                        v-model="formData.name"
                        type="text"
                        :placeholder="content[currentLanguage].contactFormName"
                        class="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">{{ content[currentLanguage].contactFormEmail }}</label>
                      <input
                        v-model="formData.email"
                        type="email"
                        :placeholder="content[currentLanguage].contactFormEmail"
                        class="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label class="form-label">{{ content[currentLanguage].contactFormSubject }}</label>
                    <input
                      v-model="formData.subject"
                      type="text"
                      :placeholder="content[currentLanguage].contactFormSubject"
                      class="form-input"
                    />
                  </div>
                  <div>
                    <label class="form-label">{{ content[currentLanguage].contactFormMessage }}</label>
                    <textarea
                      v-model="formData.message"
                      :placeholder="content[currentLanguage].contactFormMessage"
                      class="form-input min-h-[140px] resize-y"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn-submit">
                    <span class="btn-submit-text">{{ content[currentLanguage].contactFormSubmit }}</span>
                    <span class="btn-submit-icon">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20px" aria-hidden="true">
                        <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 text-center text-stone-500 dark:text-stone-400 text-sm border-t border-slate-200 dark:border-slate-800">
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

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  border-radius: 36px;
  font-weight: 700;
  height: 54px;
  font-size: 16px;
  padding-inline: 20px;
  background-color: transparent;
  color: #f97316;
  text-transform: uppercase;
  overflow: hidden;
  text-align: center;
  transition: all .25s ease-in-out;
  z-index: 1;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.2);
}
.dark .btn-submit {
  color: #fff;
}
.btn-submit:is(:hover, :focus) {
  color: #fff;
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.35);
}
.btn-submit::after {
  content: '';
  position: absolute;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  border: 1px solid #f97316;
  border-radius: 36px;
  z-index: 2;
  pointer-events: none;
}
.btn-submit::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
  z-index: 1;
  left: -2px;
  transform: translateX(92%);
  transition: all .35s ease-out;
  border-radius: 36px;
}
.btn-submit:is(:hover, :focus)::before {
  transform: translateX(0%);
}
.btn-submit-text {
  white-space: nowrap;
  line-height: 1.2;
  padding-inline-end: 50px;
  z-index: 2;
  position: relative;
}
.btn-submit-icon {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
  z-index: 2;
}
.btn-submit-icon svg {
  color: #fff;
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

.contact-card {
  background: white;
  border: 1px solid theme('colors.slate.200');
  border-radius: 1rem;
  padding: 1.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}
.dark .contact-card {
  background: rgba(15, 23, 42, 0.8);
  border-color: theme('colors.slate.800');
  backdrop-filter: blur(8px);
}
.contact-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}
.dark .contact-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem 0;
}
.contact-info-item:not(:last-child) {
  border-bottom: 1px solid theme('colors.slate.100');
}
.dark .contact-info-item:not(:last-child) {
  border-bottom-color: theme('colors.slate.800');
}

.contact-icon-box {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: rgba(249, 115, 22, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dark .contact-icon-box {
  background: rgba(249, 115, 22, 0.15);
}

.contact-info-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: theme('colors.slate.500');
  margin-bottom: 0.125rem;
}
.dark .contact-info-label {
  color: theme('colors.slate.400');
}

.contact-info-value {
  font-size: 0.9375rem;
  font-weight: 500;
  color: theme('colors.slate.800');
}
.dark .contact-info-value {
  color: theme('colors.slate.200');
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: theme('colors.slate.700');
  margin-bottom: 0.5rem;
}
.dark .form-label {
  color: theme('colors.slate.300');
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: theme('colors.slate.50');
  border: 1px solid theme('colors.slate.200');
  color: theme('colors.slate.900');
  transition: all 0.2s ease;
  outline: none;
}
.dark .form-input {
  background: theme('colors.slate.800');
  border-color: theme('colors.slate.700');
  color: theme('colors.slate.100');
}
.form-input:focus {
  border-color: theme('colors.orange.500');
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
}
.dark .form-input:focus {
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
}
.form-input::placeholder {
  color: theme('colors.slate.400');
}
.dark .form-input::placeholder {
  color: theme('colors.slate.500');
}

.social-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
.icon-content {
  margin: 0 10px;
  position: relative;
}
.icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 15px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 20%;
  color: #475569;
  background: linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02));
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  transition: all 0.35s ease-in-out;
  box-shadow: inset 0 -1px 3px rgba(0,0,0,0.08), 0 6px 16px rgba(0,0,0,0.08);
  text-decoration: none;
}
.dark .icon-content a {
  color: #fff;
  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.45), inset 0 -2px 6px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.22);
}
.icon-content a[data-social="whatsapp"] {
  border: 1px solid rgba(37, 211, 102, 0.6);
  box-shadow: inset 0 0 6px rgba(37, 211, 102, 0.4), 0 0 10px rgba(37, 211, 102, 0.5), 0 6px 16px rgba(0,0,0,0.25);
}
.icon-content a[data-social="github"] {
  border: 1px solid rgba(110, 118, 129, 0.6);
  box-shadow: inset 0 0 6px rgba(110, 118, 129, 0.4), 0 0 10px rgba(110, 118, 129, 0.5), 0 6px 16px rgba(0,0,0,0.25);
}
.icon-content a[data-social="linkedin"] {
  border: 1px solid rgba(10, 102, 194, 0.6);
  box-shadow: inset 0 0 6px rgba(10, 102, 194, 0.4), 0 0 10px rgba(10, 102, 194, 0.5), 0 6px 16px rgba(0,0,0,0.25);
}
.icon-content a::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(120deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0) 70%);
  transform: rotate(25deg) translateX(-100%);
  transition: transform 0.8s ease;
  z-index: 1;
  pointer-events: none;
}
.dark .icon-content a::before {
  background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%);
}
.icon-content a:hover::before {
  transform: rotate(25deg) translateX(100%);
}
.icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
}
.icon-content a svg {
  position: relative;
  z-index: 2;
  width: 28px;
  height: 28px;
}
.icon-content a:hover {
  color: white;
}
.icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 20%;
}
.icon-content a:hover .filled {
  height: 100%;
}
.icon-content a[data-social="whatsapp"] .filled,
.icon-content a[data-social="whatsapp"] ~ .tooltip {
  background: linear-gradient(135deg, #0d2916, #146b35, #25d366, #0d2916);
  background-size: 400% 400%;
  animation: socialGradient 6s ease infinite;
}
.icon-content a[data-social="github"] .filled,
.icon-content a[data-social="github"] ~ .tooltip {
  background: linear-gradient(135deg, #1a1a1a, #333, #6e7681, #1a1a1a);
  background-size: 400% 400%;
  animation: socialGradient 6s ease infinite;
}
.icon-content a[data-social="linkedin"] .filled,
.icon-content a[data-social="linkedin"] ~ .tooltip {
  background: linear-gradient(135deg, #0a1f3d, #0a4d8c, #0a66c2, #0a1f3d);
  background-size: 400% 400%;
  animation: socialGradient 6s ease infinite;
}
@keyframes socialGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
