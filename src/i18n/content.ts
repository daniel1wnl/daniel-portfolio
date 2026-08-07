import type { Locale } from './translations';

const projectTranslations: Record<string, Record<string, unknown>> = {
  'iGrafx Release Dashboard': {
    category: 'Universidad',
    type: 'Proyecto final en equipo',
    dates: 'enero–junio de 2023',
    status: 'Completado',
    description: 'Proyecto final de un equipo de seis personas que unificó tareas de Jira, métricas de calidad de SonarQube y datos de ramas y pipelines de GitLab. Desarrollé las páginas con la lista general de proyectos y los proyectos específicos de cada usuario, y contribuí con pruebas unitarias y documentación.',
  },
  'Football Data Dashboard': {
    title: 'Panel de datos de fútbol',
    category: 'Personal',
    type: 'Aplicación web',
    dates: 'octubre–diciembre de 2022',
    status: 'Completado; ejecución local',
    description: 'Panel desarrollado con Flask que transforma datos anidados de una API de fútbol en tablas de ligas, grupos de torneos y eliminatorias de importantes competiciones nacionales e internacionales.',
  },
  ProjectGo: {
    category: 'Universidad',
    type: 'Juego de escritorio',
    dates: 'enero–marzo de 2023',
    status: 'Completado',
    description: 'Implementación gráfica del juego Go en Haskell con partidas interactivas para dos jugadores, capturas, validación de movimientos, regla de Ko, pases, cálculo de territorio y puntuación. Desarrollé casi toda la funcionalidad de la aplicación.',
  },
  'riotLeaderboards-cloudRun': {
    category: 'Universidad',
    type: 'Aplicación web',
    dates: 'septiembre–diciembre de 2022',
    status: 'Completado; anteriormente desplegado en Cloud Run',
    description: 'Aplicación independiente desarrollada con Flask que transforma datos en vivo de la API de Riot Games en clasificaciones de Valorant y League of Legends, empaquetada con Docker y desplegada mediante Google Cloud Run.',
  },
  'Riot Leaderboards — Self-Hosted': {
    title: 'Riot Leaderboards — Autohospedado',
    category: 'Personal',
    type: 'Aplicación web',
    dates: 'diciembre de 2022',
    status: 'Completado; ejecución local o privada',
    description: 'Adaptación local de mi aplicación de clasificaciones en la nube, configurada mediante variables de entorno para un autohospedaje sencillo y seguro, manteniendo datos en vivo de Valorant y League of Legends.',
  },
  'The ChocAn Simulator': {
    category: 'Universidad',
    type: 'Aplicación de terminal en equipo',
    dates: 'septiembre–diciembre de 2022',
    status: 'Completado',
    description: 'Simulación de gestión sanitaria desarrollada por un equipo de seis personas para administrar registros de miembros y proveedores, facturación de servicios, validación, directorios e informes semanales. Lideré el registro de servicios, las pruebas y la documentación.',
  },
  YTdownloader: {
    category: 'Personal',
    type: 'Aplicación web autohospedada',
    dates: 'octubre–noviembre de 2023',
    status: 'Mantenido en un laboratorio doméstico privado',
    description: 'Interfaz web multiplataforma para preparar descargas permitidas de contenido multimedia en MP3, MP4 o MKV. Reorganicé la aplicación de escritorio original para separar el procesamiento, facilitar el despliegue en contenedores y permitir el autohospedaje privado.',
  },
};

const caseStudyTranslations: Record<string, Record<string, unknown>> = {
  SafetyCheck: {
    type: 'Aplicación web interna',
    visibility: 'Resumen público seguro',
    dates: '2025–2026',
    status: 'En producción / uso activo',
    description: 'Aplicación móvil para inspeccionar equipos de protección contra caídas que reemplaza registros en papel con datos validados, consultables y almacenados en la nube, además de búsqueda de equipos mediante códigos de barras.',
    impact: 'Creó un flujo de trabajo uniforme para campo, visibilidad inmediata de aprobaciones y fallas, mejor validación y registros auditables, reduciendo la captura repetida y el riesgo de formularios perdidos o ilegibles.',
  },
  'Mobile SOP and Training Acknowledgement Portal': {
    title: 'Portal móvil de procedimientos y confirmación de capacitación',
    type: 'Aplicación interna de intranet',
    visibility: 'Resumen público seguro',
    dates: 'mayo–junio de 2026',
    status: 'Aplicación principal desplegada o en fase piloto',
    description: 'Aplicación de intranet optimizada para tabletas y alojada internamente mediante IIS. Permite que empleados de manufactura escaneen el código QR de una máquina o ingresen un identificador, consulten el procedimiento correcto y envíen una confirmación estructurada.',
    impact: 'Reemplazó un proceso fragmentado de búsqueda con un único flujo móvil, redujo el riesgo de seleccionar el documento incorrecto y creó registros estructurados de confirmación.',
  },
  'Warehouse Inventory Tracking App': {
    title: 'Aplicación de seguimiento de inventario de almacén',
    type: 'Herramienta interna / TI y desarrollo',
    visibility: 'Resumen público seguro',
    dates: 'septiembre–octubre de 2024; mantenimiento desde 2025',
    status: 'Completado y en uso activo',
    description: 'Diseñé, desarrollé, probé, desplegué y mantengo de forma independiente una aplicación interna sin costo que ofrece a un pequeño equipo de envíos y recepción registros consultables, ubicaciones estructuradas, imágenes de artículos e historial de inventario.',
    impact: 'Redujo el tiempo habitual para localizar envíos y materiales de aproximadamente 25–30 minutos a 5–10 minutos, sustituyendo el seguimiento informal por un flujo digital uniforme.',
  },
  'IT Operations Automation': {
    title: 'Automatización de operaciones de TI',
    type: 'PowerShell / Ingeniería de endpoints',
    visibility: 'Resumen público seguro',
    dates: 'septiembre de 2025–julio de 2026',
    status: 'Combinación de herramientas funcionales, pilotos y prototipos identificados',
    description: 'Colección de automatizaciones de TI orientadas a la seguridad para preparar estaciones de trabajo, gestionar el ciclo de vida de empleados, inventariar equipos, realizar actualizaciones, aplicar parches, ejecutar respaldos y estandarizar tareas de soporte.',
    impact: 'Transformó procedimientos manuales en flujos guiados, registrados y capaces de reanudarse, con validación, configuraciones más seguras, modos de simulación y resolución de problemas más reproducible.',
  },
  'Zendesk Support Operations Improvements': {
    title: 'Mejoras de operaciones de soporte en Zendesk',
    type: 'Gestión de servicios de TI',
    visibility: 'Vista previa pública segura',
    dates: 'junio de 2026–presente',
    status: 'En curso',
    description: 'Estoy mejorando el entorno actual de Zendesk mediante formularios de soporte más claros, categorías uniformes, flujos más eficientes, informes operativos y un centro de ayuda interno protegido con SSO donde los empleados pueden consultar recursos y su historial de solicitudes.',
    impact: 'Busca mejorar la recepción de solicitudes y la calidad de los datos, además de ofrecer a TI, gerentes y dirección informes más claros sobre volumen, problemas recurrentes y tendencias de soporte por departamento.',
  },
  'Role-Aware Intranet Hub': {
    title: 'Centro de intranet basado en roles',
    type: 'Ecosistema interno de intranet',
    visibility: 'Vista previa pública segura',
    dates: 'junio de 2026–presente',
    status: 'Desarrollo exploratorio',
    description: 'Estoy creando un prototipo de ecosistema interno que reúne recursos frecuentes e integraciones de servicios en una experiencia central, con contenido adaptado al acceso autorizado y las responsabilidades de cada empleado.',
    impact: 'El objetivo a largo plazo es reducir el tiempo dedicado a buscar herramientas e información internas mediante un único centro seguro que muestre enlaces y recursos relevantes según el rol.',
  },
};

export function localizeProject<T extends { title: string }>(data: T, locale: Locale): T {
  if (locale === 'en') return data;
  return { ...data, ...(projectTranslations[data.title] ?? {}) } as T;
}

export function localizeCaseStudy<T extends { title: string }>(data: T, locale: Locale): T {
  if (locale === 'en') return data;
  return { ...data, ...(caseStudyTranslations[data.title] ?? {}) } as T;
}
