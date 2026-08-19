<template>
	<div class="cv-wrapper">
		<div class="print-actions">
			<button class="print-btn" @click="printCV">Descargar PDF</button>
		</div>

		<div class="page">
			<aside class="sidebar">
				<div class="profile-photo">
					<img :src="profilePhoto" alt="Foto de perfil de Luis Enrique Cuéllar Velásquez" />
				</div>
				<div class="sidebar-name">
					<h1>Luis Enrique<br />Cuéllar Velásquez</h1>
					<div class="title">Técnico en Sistemas & Desarrollador Full Stack</div>
				</div>

				<div class="sidebar-section">
					<h3>Contacto</h3>
					<div class="contact-item">
						<span class="icon">📍</span>
						<span>Bogotá, D.C., Colombia</span>
					</div>
					<div class="contact-item">
						<span class="icon">📱</span>
						<a href="tel:+573222119815">+57 322 211 9815</a>
					</div>
					<div class="contact-item">
						<span class="icon">📞</span>
						<a href="tel:+573143184060">+57 314 318 4060</a>
					</div>
					<div class="contact-item">
						<span class="icon">✉️</span>
						<a href="mailto:luisenrique7837@hotmail.com">luisenrique7837@hotmail.com</a>
					</div>
				</div>

				<div class="sidebar-section">
					<h3>Habilidades Técnicas</h3>
					<div class="skill-tags">
						<span class="skill-tag">Active Directory</span>
						<span class="skill-tag">Microsoft 365</span>
						<span class="skill-tag">Azure</span>
						<span class="skill-tag">Google Workspace</span>
						<span class="skill-tag">GLPI</span>
						<span class="skill-tag">C# / .NET</span>
						<span class="skill-tag">PHP</span>
						<span class="skill-tag">Python</span>
						<span class="skill-tag">Java</span>
						<span class="skill-tag">HTML5 / CSS3</span>
						<span class="skill-tag">Bootstrap</span>
						<span class="skill-tag">Tailwind CSS</span>
						<span class="skill-tag">MySQL</span>
						<span class="skill-tag">PostgreSQL</span>
						<span class="skill-tag">Git</span>
						<span class="skill-tag">React</span>
						<span class="skill-tag">APIs REST</span>
						<span class="skill-tag">Spring Boot</span>
						<span class="skill-tag">Hardware</span>
					</div>
				</div>

				<div class="sidebar-section">
					<h3>Idiomas</h3>
					<div class="language-item">
						<span>Español</span>
						<div class="language-level">
							<div class="dot filled"></div>
							<div class="dot filled"></div>
							<div class="dot filled"></div>
							<div class="dot filled"></div>
							<div class="dot filled"></div>
						</div>
					</div>
					<div class="language-item">
						<span>Inglés</span>
						<div class="language-level">
							<div class="dot filled"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
						</div>
					</div>
				</div>

				<div class="sidebar-section">
					<h3>Habilidades Personales</h3>
					<ul class="soft-skill-list">
						<li>Trabajo en equipo</li>
						<li>Resolución de problemas</li>
						<li>Adaptabilidad</li>
						<li>Proactividad</li>
						<li>Responsabilidad</li>
						<li>Orientación al servicio</li>
						<li>Comunicación efectiva</li>
						<li>Aprendizaje continuo</li>
					</ul>
				</div>

				<div class="sidebar-section">
					<h3>Disponibilidad</h3>
					<div class="contact-item">
						<span class="icon">🕐</span>
						<span>Trabajo presencial u home office</span>
					</div>
					<div class="contact-item">
						<span class="icon">💼</span>
						<span>Disponible de inmediato</span>
					</div>
				</div>
			</aside>

			<main class="main">
				<div class="section">
					<div class="section-title"><span class="icon">👤</span> Perfil Profesional</div>
					<p class="profile-text">
						Técnico en Sistemas y Mantenimiento con más de 4 años de experiencia en soporte técnico
						especializado (remoto y presencial), resolución de incidencias críticas e implementación de
						soluciones tecnológicas en entornos corporativos. Experto en diagnóstico avanzado de hardware y
						software, administración de Active Directory, gestión de plataformas Microsoft 365 y
						configuración de ecosistemas Google Workspace. En formación continua como Tecnólogo en Análisis
						y Desarrollo de Software, expandiendo mi perfil hacia el desarrollo web Full Stack con
						conocimientos de tecnologías frontend (HTML5, CSS3, Bootstrap, Tailwind CSS, Vue.js, React) y
						lenguajes de programación (PHP, Java, C#, Python), además de administración de bases de datos
						(MySQL, PostgreSQL).
					</p>
				</div>

				<div class="section">
					<div class="section-title"><span class="icon">💼</span> Experiencia Profesional</div>

					<div class="exp-item">
						<div class="exp-header">
							<div>
								<div class="exp-role">
									Aprendiz de Tecnología — Desarrollo Full Stack
									<span class="highlight-badge">ACTUAL</span>
								</div>
								<div class="exp-company">Indigo Group</div>
							</div>
							<span class="exp-date">Abr 2025 — Actualidad</span>
						</div>
						<ul class="exp-desc">
							<li>Desarrollo y mantenimiento de aplicaciones web Full Stack con .NET y C#</li>
							<li>Implementación de APIs REST, desarrollo frontend y gestión de bases de datos</li>
							<li>Análisis, depuración y solución de errores de software</li>
							<li>Uso de Git para control de versiones y gestión de ramas</li>
							<li>Participación en análisis de requerimientos, pruebas, documentación y despliegue</li>
						</ul>
					</div>

					<div class="exp-item">
						<div class="exp-header">
							<div>
								<div class="exp-role">On Site Technical Support Analyst L2</div>
								<div class="exp-company">Stefanini Colombia</div>
							</div>
							<span class="exp-date">Ago 2025 — Marzo 2026</span>
						</div>
						<ul class="exp-desc">
							<li>
								Mantenimiento preventivo y correctivo de equipos informáticos con diagnóstico y optimización
								de rendimiento
							</li>
							<li>Administración de usuarios, grupos, permisos y políticas en Active Directory</li>
							<li>Soporte y configuración de Microsoft 365 (Outlook, OneDrive, Teams, SharePoint)</li>
							<li>Gestión y control de inventarios tecnológicos y activos de TI</li>
							<li>Restablecimiento de contraseñas y recuperación de cuentas corporativas</li>
							<li>
								Atención, diagnóstico y resolución de incidentes garantizando continuidad operativa
							</li>
						</ul>
					</div>

					<div class="exp-item">
						<div class="exp-header">
							<div>
								<div class="exp-role">Técnico en Soporte Tecnológico</div>
								<div class="exp-company">MAB Ingeniería de Valor</div>
							</div>
							<span class="exp-date">Ene 2025 — Jul 2025</span>
						</div>
						<ul class="exp-desc">
							<li>Administración de accesos y cuentas en Google Workspace</li>
							<li>
								Gestión, actualización y control de inventarios tecnológicos con coordinación de proveedores
							</li>
							<li>Administración de GLPI para registro, seguimiento y atención de incidentes</li>
							<li>Ejecución de mantenimiento preventivo y correctivo de equipos informáticos</li>
						</ul>
					</div>

					<div class="exp-item">
						<div class="exp-header">
							<div>
								<div class="exp-role">Asistente de Tecnología</div>
								<div class="exp-company">Sonepar Colombia SAS</div>
							</div>
							<span class="exp-date">Sep 2024 — Ene 2025</span>
						</div>
						<ul class="exp-desc">
							<li>
								Gestión del Directorio Activo: usuarios, grupos, permisos y políticas de seguridad
							</li>
							<li>
								Soporte y configuración de Microsoft 365 y administración de la plataforma Azure
							</li>
							<li>Restablecimiento de contraseñas y recuperación de cuentas de usuarios</li>
							<li>Mantenimiento preventivo y correctivo de equipos informáticos</li>
						</ul>
					</div>

					<div class="exp-item">
						<div class="exp-header">
							<div>
								<div class="exp-role">Auxiliar de Soporte Técnico</div>
								<div class="exp-company">INTER RAPIDÍSIMO</div>
							</div>
							<span class="exp-date">Sep 2022 — Sep 2024</span>
						</div>
						<ul class="exp-desc">
							<li>Mantenimiento preventivo y correctivo de equipos e impresoras Kyocera</li>
							<li>Instalación, configuración y formateo de sistemas operativos Windows</li>
							<li>Coordinación con proveedores para gestión de inventarios</li>
							<li>Gestión de herramientas corporativas: GLPI, Controller y Novasoft</li>
							<li>Atención al cliente con enfoque en resolución rápida de problemas</li>
						</ul>
					</div>
				</div>

				<div class="section">
					<div class="section-title"><span class="icon">🎓</span> Formación Académica</div>

					<div class="edu-item">
						<div class="edu-degree">Tecnólogo en Análisis y Desarrollo de Software</div>
						<div class="edu-school">Servicio Nacional de Aprendizaje (SENA)</div>
						<div class="edu-date">Abr 2024 — En curso</div>
					</div>

					<div class="edu-item">
						<div class="edu-degree">Técnico en Mantenimiento de Equipos de Cómputo y Dispositivos Móviles</div>
						<div class="edu-school">Servicio Nacional de Aprendizaje (SENA)</div>
						<div class="edu-date">Culminado — May 2023</div>
					</div>

					<div class="edu-item">
						<div class="edu-degree">Técnico en Sistemas</div>
						<div class="edu-school">Servicio Nacional de Aprendizaje (SENA)</div>
						<div class="edu-date">Culminado — Nov 2013</div>
					</div>

					<div class="edu-item">
						<div class="edu-degree">Bachiller Técnico</div>
						<div class="edu-school">Institución Educativa Central Saldaña (Tolima)</div>
						<div class="edu-date">Culminado — Dic 2013</div>
					</div>
				</div>

				<div class="section">
					<div class="section-title"><span class="icon">📜</span> Estudios Complementarios</div>
					<div class="cert-grid">
						<div class="cert-item">
							<div class="cert-name">Desarrollo Web con PHP</div>
							<div class="cert-org">SENA — Jul 2025</div>
						</div>
						<div class="cert-item">
							<div class="cert-name">Fundamentos de Python</div>
							<div class="cert-org">Cisco Networking Academy — Jun 2025</div>
						</div>
						<div class="cert-item">
							<div class="cert-name">Programar en Python</div>
							<div class="cert-org">META (Coursera) — May 2025</div>
						</div>
						<div class="cert-item">
							<div class="cert-name">Microsoft Office Básico</div>
							<div class="cert-org">SENA — Dic 2020</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
const profilePhoto = new URL('../assets/cv.jpg', import.meta.url).href;

function printCV() {
	window.print();
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.cv-wrapper {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
	background: #e2e8f0;
	color: var(--text);
	line-height: 1.6;
	min-height: 100vh;
	padding: 20px 0;
}

.print-actions {
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 10;
}

.print-btn {
	background: linear-gradient(135deg, var(--accent), var(--accent-light));
	color: #fff;
	border: none;
	border-radius: 999px;
	padding: 10px 18px;
	font-size: 12px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.print-btn:hover {
	transform: translateY(-1px);
	box-shadow: 0 14px 30px rgba(37, 99, 235, 0.3);
}

.page {
	width: 210mm;
	min-height: 297mm;
	margin: 20px auto;
	background: var(--surface);
	display: grid;
	grid-template-columns: 35% 65%;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	overflow: hidden;
}

.sidebar {
	background: var(--sidebar-bg);
	color: var(--sidebar-text);
	padding: 32px 24px;
	display: flex;
	flex-direction: column;
	gap: 28px;
}

.sidebar-section {
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	padding-bottom: 20px;
}

.sidebar-section:last-child {
	border-bottom: none;
}

.sidebar-section h3 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: var(--sidebar-accent);
	margin-bottom: 14px;
	font-weight: 600;
}

.profile-photo {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background: linear-gradient(135deg, var(--accent), var(--accent-light));
	margin: 0 auto 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border: 3px solid rgba(255, 255, 255, 0.15);
	box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.12);
}

.profile-photo img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	display: block;
	border-radius: 50%;
}

.sidebar-name {
	text-align: center;
	margin-bottom: 4px;
}

.sidebar-name h1 {
	font-size: 18px;
	font-weight: 700;
	color: #fff;
	line-height: 1.2;
}

.sidebar-name .title {
	font-size: 11px;
	color: var(--sidebar-accent);
	font-weight: 500;
	margin-top: 4px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.contact-item {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
	font-size: 12px;
	color: var(--sidebar-text);
}

.contact-item .icon {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	background: rgba(96, 165, 250, 0.15);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	flex-shrink: 0;
}

.contact-item a {
	color: var(--sidebar-text);
	text-decoration: none;
}

.contact-item a:hover {
	text-decoration: underline;
}

.skill-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.skill-tag {
	background: rgba(96, 165, 250, 0.12);
	color: var(--sidebar-accent);
	padding: 4px 10px;
	border-radius: 20px;
	font-size: 10.5px;
	font-weight: 500;
	border: 1px solid rgba(96, 165, 250, 0.2);
}

.language-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	font-size: 12.5px;
}

.language-level {
	display: flex;
	gap: 3px;
}

.language-level .dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.15);
}

.language-level .dot.filled {
	background: var(--sidebar-accent);
}

.soft-skill-list {
	list-style: none;
}

.soft-skill-list li {
	font-size: 12px;
	margin-bottom: 6px;
	padding-left: 14px;
	position: relative;
	color: var(--sidebar-text);
}

.soft-skill-list li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 7px;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--sidebar-accent);
}

.main {
	padding: 32px 32px 32px 28px;
}

.section {
	margin-bottom: 24px;
}

.section-title {
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	color: var(--accent);
	margin-bottom: 16px;
	padding-bottom: 8px;
	border-bottom: 2px solid var(--accent);
	display: flex;
	align-items: center;
	gap: 8px;
}

.section-title .icon {
	font-size: 16px;
}

.profile-text {
	font-size: 12.5px;
	color: var(--text-secondary);
	line-height: 1.7;
	text-align: justify;
}

.exp-item {
	position: relative;
	padding-left: 20px;
	padding-bottom: 20px;
	border-left: 2px solid var(--border);
	margin-left: 6px;
}

.exp-item:last-child {
	padding-bottom: 0;
	border-left-color: transparent;
}

.exp-item::before {
	content: '';
	position: absolute;
	left: -6px;
	top: 4px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: var(--accent);
	border: 2px solid var(--surface);
	box-shadow: 0 0 0 2px var(--accent);
}

.exp-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 6px;
	flex-wrap: wrap;
}

.exp-role {
	font-size: 13.5px;
	font-weight: 700;
	color: var(--primary);
	line-height: 1.3;
}

.exp-company {
	font-size: 12.5px;
	color: var(--accent);
	font-weight: 600;
}

.exp-date {
	font-size: 11px;
	color: var(--text-light);
	font-weight: 500;
	background: var(--surface-alt);
	padding: 2px 10px;
	border-radius: 20px;
	white-space: nowrap;
	border: 1px solid var(--border);
}

.exp-desc {
	list-style: none;
	margin-top: 8px;
}

.exp-desc li {
	font-size: 11.5px;
	color: var(--text-secondary);
	padding: 3px 0 3px 16px;
	position: relative;
	line-height: 1.5;
}

.exp-desc li::before {
	content: '▸';
	position: absolute;
	left: 0;
	color: var(--accent);
	font-weight: 700;
}

.edu-item {
	padding: 10px 14px;
	background: var(--surface-alt);
	border-radius: 8px;
	margin-bottom: 10px;
	border-left: 3px solid var(--accent);
}

.edu-degree {
	font-size: 12.5px;
	font-weight: 700;
	color: var(--primary);
}

.edu-school {
	font-size: 11.5px;
	color: var(--text-secondary);
}

.edu-date {
	font-size: 10.5px;
	color: var(--text-light);
	font-weight: 500;
}

.cert-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.cert-item {
	padding: 8px 12px;
	background: var(--surface-alt);
	border-radius: 6px;
	font-size: 11px;
	border: 1px solid var(--border);
}

.cert-item .cert-name {
	font-weight: 600;
	color: var(--primary);
}

.cert-item .cert-org {
	color: var(--text-light);
	font-size: 10px;
}

.highlight-badge {
	display: inline-block;
	background: linear-gradient(135deg, var(--accent), var(--accent-light));
	color: #fff;
	padding: 2px 8px;
	border-radius: 4px;
	font-size: 10px;
	font-weight: 600;
	vertical-align: middle;
	margin-left: 4px;
}

@media (max-width: 1024px) {
	.page {
		width: 100%;
		min-height: auto;
		margin: 0;
		grid-template-columns: 1fr;
		box-shadow: none;
	}

	.main {
		padding: 24px 18px 28px;
	}

	.sidebar {
		padding: 28px 18px;
	}

	.cert-grid {
		grid-template-columns: 1fr;
	}

	.print-actions {
		top: 10px;
		right: 10px;
	}
}

@media print {
	.cv-wrapper {
		background: #fff;
		padding: 0;
	}

	.print-actions {
		display: none !important;
	}

	.page {
		margin: 0;
		box-shadow: none;
		width: 210mm;
		min-height: 297mm;
		max-width: 210mm;
		page-break-inside: avoid;
		break-inside: avoid;
		grid-template-columns: 35% 65%;
	}

	.main,
	.sidebar,
	.section,
	.exp-item,
	.edu-item,
	.cert-item,
	.contact-item,
	.skill-tag,
	.language-item {
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
	--primary: #0f172a;
	--accent: #2563eb;
	--accent-light: #3b82f6;
	--accent-dark: #1d4ed8;
	--surface: #ffffff;
	--surface-alt: #f8fafc;
	--text: #1e293b;
	--text-secondary: #64748b;
	--text-light: #94a3b8;
	--border: #e2e8f0;
	--sidebar-bg: #0f172a;
	--sidebar-text: #e2e8f0;
	--sidebar-accent: #60a5fa;
	--green: #10b981;
	--amber: #f59e0b;
}

@media print {
	html,
	body {
		width: 210mm;
		height: 297mm;
		background: #fff;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}
}

@page {
	size: A4 portrait;
	margin: 0;
}
</style>