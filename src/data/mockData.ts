import type { Center, Lab } from '../types';

export const researchCenters: Center[] = [
  {
    id: 'c1',
    name: 'Centro de Biología Molecular',
    description: 'Centro especializado en investigación genética y biología molecular aplicada a la medicina.',
    logo: 'microscope',
    history: 'Fundado en 1985, el Centro de Biología Molecular ha sido pionero en investigaciones sobre terapias génicas en América Latina. Desde sus inicios, ha colaborado con instituciones internacionales de prestigio y ha formado a más de 200 investigadores.',
    mission: 'Nuestra misión es desarrollar investigación de excelencia en biología molecular, contribuyendo al avance científico y a la formación de nuevos investigadores comprometidos con el desarrollo sostenible y la salud pública.',
    usefulInfo: 'Horario de atención: Lunes a Viernes, 8:00 - 17:00. Visitas programadas previa coordinación. Disponibilidad de equipamiento de alta tecnología para colaboraciones externas.',
    publications: [
      {
        title: 'Edición génica CRISPR en enfermedades hereditarias: perspectivas latinoamericanas',
        authors: 'García, M., Rodríguez, L., Silva, P.',
        year: 2023,
        journal: 'Nature Genetics'
      },
      {
        title: 'Expresión génica en células madre: nuevos biomarcadores',
        authors: 'Fernández, A., Castro, J.',
        year: 2022,
        journal: 'Cell Biology International'
      },
      {
        title: 'Terapias moleculares para enfermedades neurodegenerativas',
        authors: 'Morales, R., López, C., Vega, T.',
        year: 2023,
        journal: 'Journal of Molecular Medicine'
      }
    ],
    contact: {
      phone: '+56 2 2978 4500',
      email: 'biologia.molecular@universidad.edu',
      address: 'Av. Libertador Bernardo O\'Higgins 1234, Santiago'
    },
    popularity: 95
  },
  {
    id: 'c2',
    name: 'Centro de Estudios Climáticos y Resiliencia',
    description: 'Investigación interdisciplinaria sobre cambio climático y adaptación de ecosistemas.',
    logo: 'cloud-sun',
    history: 'Establecido en 2010 en respuesta a la creciente necesidad de comprender los efectos del cambio climático en la región. Ha liderado proyectos de alcance nacional e internacional, convirtiéndose en referente para políticas públicas ambientales.',
    mission: 'Generar conocimiento científico de alto impacto sobre el cambio climático, sus efectos en los ecosistemas locales y las estrategias de adaptación necesarias para construir comunidades resilientes.',
    usefulInfo: 'Cuenta con estaciones de monitoreo en 15 ubicaciones geográficas. Ofrece programas de capacitación para profesionales y comunidades. Base de datos climatológicos disponible para investigadores.',
    publications: [
      {
        title: 'Impacto del cambio climático en glaciares andinos: proyecciones 2050',
        authors: 'Sánchez, E., Torres, M., Gutiérrez, D.',
        year: 2023,
        journal: 'Climate Dynamics'
      },
      {
        title: 'Resiliencia urbana frente a eventos climáticos extremos',
        authors: 'Muñoz, P., Ramírez, V.',
        year: 2022,
        journal: 'Urban Climate'
      },
      {
        title: 'Modelos predictivos de sequía en zonas semiáridas',
        authors: 'Contreras, L., Ávila, S., Rojas, F.',
        year: 2023,
        journal: 'Journal of Hydrology'
      }
    ],
    contact: {
      phone: '+56 2 2978 4600',
      email: 'clima.resiliencia@universidad.edu',
      address: 'Av. Vicuña Mackenna 4860, Santiago'
    },
    popularity: 88
  },
  {
    id: 'c3',
    name: 'Centro de Inteligencia Artificial y Robótica',
    description: 'Desarrollo de sistemas inteligentes y automatización avanzada para la industria 4.0.',
    logo: 'cpu',
    history: 'Inaugurado en 2015, nació de la convergencia entre las facultades de Ingeniería e Informática. Ha desarrollado soluciones tecnológicas implementadas en sectores productivos clave como minería, agricultura de precisión y salud digital.',
    mission: 'Investigar, desarrollar e implementar soluciones basadas en inteligencia artificial y robótica que aporten a la transformación digital del país, formando profesionales de excelencia y generando conocimiento de frontera.',
    usefulInfo: 'Laboratorios equipados con sistemas de visión computacional, brazos robóticos colaborativos y clusters de computación de alto rendimiento. Programas de vinculación con la industria.',
    publications: [
      {
        title: 'Deep learning para diagnóstico médico asistido por imágenes',
        authors: 'Campos, R., Núñez, K., Parra, H.',
        year: 2023,
        journal: 'IEEE Transactions on Medical Imaging'
      },
      {
        title: 'Robótica colaborativa en minería subterránea',
        authors: 'Valdés, J., Ortiz, M.',
        year: 2022,
        journal: 'Robotics and Autonomous Systems'
      },
      {
        title: 'Procesamiento de lenguaje natural para idiomas originarios',
        authors: 'Herrera, A., Silva, N., Bravo, C.',
        year: 2023,
        journal: 'Computational Linguistics'
      }
    ],
    contact: {
      phone: '+56 2 2978 4700',
      email: 'ia.robotica@universidad.edu',
      address: 'Av. República 779, Santiago'
    },
    popularity: 92
  },
  {
    id: 'c4',
    name: 'Centro de Neurociencia Cognitiva',
    description: 'Estudio de procesos cognitivos, aprendizaje y funcionamiento cerebral.',
    logo: 'brain',
    history: 'Fundado en 2005, el Centro de Neurociencia Cognitiva ha consolidado una línea de investigación en los mecanismos neurales del aprendizaje y la memoria. Sus estudios han contribuido significativamente a entender trastornos del neurodesarrollo.',
    mission: 'Avanzar en la comprensión de los procesos cognitivos humanos mediante investigación científica rigurosa, promoviendo aplicaciones en educación, salud mental y diseño de tecnologías cognitivas.',
    usefulInfo: 'Equipamiento: EEG de 64 canales, eye-tracking, resonancia magnética funcional (colaboración externa). Participa en estudios clínicos. Abierto a colaboraciones interdisciplinarias.',
    publications: [
      {
        title: 'Plasticidad neuronal en aprendizaje de segunda lengua en adultos',
        authors: 'Ibáñez, S., Mendoza, F., Reyes, L.',
        year: 2023,
        journal: 'NeuroImage'
      },
      {
        title: 'Correlatos neuronales de la creatividad musical',
        authors: 'Bustamante, G., Cáceres, P.',
        year: 2022,
        journal: 'Brain and Cognition'
      },
      {
        title: 'Déficits atencionales en trastornos del espectro autista',
        authors: 'Martínez, V., Fuentes, R., Salazar, T.',
        year: 2023,
        journal: 'Journal of Autism and Developmental Disorders'
      }
    ],
    contact: {
      phone: '+56 2 2978 4800',
      email: 'neurociencia@universidad.edu',
      address: 'Av. Presidente Errázuriz 3485, Santiago'
    },
    popularity: 85
  }
];

export const laboratories: Lab[] = [
  {
    id: 'l1',
    name: 'Laboratorio de Materiales Avanzados',
    description: 'Investigación en nanomateriales y materiales funcionales para aplicaciones tecnológicas.',
    logo: 'atom',
    history: 'Creado en 2008 como parte del programa de fortalecimiento de las ciencias de materiales. Ha establecido colaboraciones con centros de investigación europeos y asiáticos, especializándose en materiales para energía renovable.',
    mission: 'Desarrollar y caracterizar materiales avanzados que respondan a desafíos tecnológicos actuales, especialmente en áreas de energía sostenible, electrónica y biomedicina.',
    usefulInfo: 'Capacidad de síntesis de nanomateriales, microscopía electrónica de transmisión y barrido, espectroscopía avanzada. Servicios analíticos disponibles para terceros.',
    publications: [
      {
        title: 'Nanoestructuras de grafeno para almacenamiento de energía',
        authors: 'Pérez, M., González, J., Soto, L.',
        year: 2023,
        journal: 'Advanced Materials'
      },
      {
        title: 'Recubrimientos antimicrobianos basados en nanopartículas de plata',
        authors: 'Vargas, C., Díaz, R.',
        year: 2022,
        journal: 'ACS Applied Materials & Interfaces'
      },
      {
        title: 'Materiales termoeléctricos para recuperación de calor residual',
        authors: 'Navarro, E., Flores, A., Medina, P.',
        year: 2023,
        journal: 'Energy & Environmental Science'
      }
    ],
    contact: {
      phone: '+56 2 2978 4900',
      email: 'materiales.avanzados@universidad.edu',
      address: 'Av. Tupper 2007, Santiago'
    },
    popularity: 87
  },
  {
    id: 'l2',
    name: 'Laboratorio de Biotecnología Vegetal',
    description: 'Mejoramiento genético de cultivos y desarrollo de plantas resistentes al estrés.',
    logo: 'leaf',
    history: 'Fundado en 2000, este laboratorio ha trabajado en colaboración con el sector agrícola nacional para desarrollar variedades mejoradas de cultivos estratégicos. Sus investigaciones han contribuido a la seguridad alimentaria del país.',
    mission: 'Aplicar biotecnología vegetal para mejorar la productividad y sostenibilidad agrícola, desarrollando cultivos resistentes a condiciones ambientales adversas y con mayor valor nutricional.',
    usefulInfo: 'Instalaciones de cultivo in vitro, cámaras de crecimiento controlado, invernaderos experimentales. Asesoría técnica disponible para productores agrícolas.',
    publications: [
      {
        title: 'Tolerancia a sequía en variedades nativas de papa mediante edición génica',
        authors: 'Castro, L., Rojas, M., Vidal, S.',
        year: 2023,
        journal: 'Plant Biotechnology Journal'
      },
      {
        title: 'Biofortificación de trigo con zinc y hierro',
        authors: 'Espinoza, F., Carrasco, P.',
        year: 2022,
        journal: 'Journal of Experimental Botany'
      },
      {
        title: 'Resistencia a patógenos en cultivos de exportación',
        authors: 'Alarcón, D., Benavides, J., Moreno, K.',
        year: 2023,
        journal: 'Plant Pathology'
      }
    ],
    contact: {
      phone: '+56 2 2978 5000',
      email: 'biotec.vegetal@universidad.edu',
      address: 'Camino Santa Rosa 11315, La Pintana'
    },
    popularity: 82
  },
  {
    id: 'l3',
    name: 'Laboratorio de Química Computacional',
    description: 'Modelamiento molecular y simulaciones computacionales de sistemas químicos complejos.',
    logo: 'flask-conical',
    history: 'Establecido en 2012, el laboratorio se ha especializado en el uso de métodos computacionales avanzados para predecir propiedades moleculares y diseñar nuevos compuestos. Ha contribuido al desarrollo de fármacos y catalizadores.',
    mission: 'Utilizar herramientas computacionales de vanguardia para resolver problemas químicos fundamentales y aplicados, acelerando el descubrimiento de nuevas moléculas y materiales.',
    usefulInfo: 'Acceso a supercomputación nacional. Software especializado: Gaussian, VASP, GROMACS. Colaboraciones con industria farmacéutica y química.',
    publications: [
      {
        title: 'Diseño racional de inhibidores enzimáticos mediante docking molecular',
        authors: 'Guzmán, R., Tapia, V., Cifuentes, M.',
        year: 2023,
        journal: 'Journal of Chemical Information and Modeling'
      },
      {
        title: 'Mecanismos de catálisis en reacciones de acoplamiento C-C',
        authors: 'Ortega, H., Lagos, N.',
        year: 2022,
        journal: 'ACS Catalysis'
      },
      {
        title: 'Simulaciones de dinámica molecular en membranas biológicas',
        authors: 'Pinto, A., Durán, F., Sandoval, L.',
        year: 2023,
        journal: 'Biophysical Journal'
      }
    ],
    contact: {
      phone: '+56 2 2978 5100',
      email: 'quimica.computacional@universidad.edu',
      address: 'Av. Libertador Bernardo O\'Higgins 1234, Santiago'
    },
    popularity: 79
  },
  {
    id: 'l4',
    name: 'Laboratorio de Física de Plasmas',
    description: 'Estudio experimental y teórico de plasmas para fusión nuclear y aplicaciones industriales.',
    logo: 'zap',
    history: 'Inaugurado en 2007, este laboratorio es único en su tipo en la región. Ha participado en proyectos internacionales de fusión nuclear y desarrollado aplicaciones de plasmas para tratamiento de materiales y medicina.',
    mission: 'Investigar fenómenos físicos en plasmas, contribuyendo al desarrollo de energía de fusión nuclear y aplicaciones tecnológicas de plasmas en diversos sectores industriales.',
    usefulInfo: 'Equipamiento: Tokamak experimental, generadores de plasma de radiofrecuencia, sistemas de diagnóstico espectroscópico. Programas de doctorado con becas disponibles.',
    publications: [
      {
        title: 'Confinamiento de plasma en configuraciones de campo magnético invertido',
        authors: 'Bravo, C., Sepúlveda, I., Montoya, G.',
        year: 2023,
        journal: 'Nuclear Fusion'
      },
      {
        title: 'Tratamiento superficial de polímeros mediante plasma atmosférico',
        authors: 'Valenzuela, S., Cortés, O.',
        year: 2022,
        journal: 'Plasma Processes and Polymers'
      },
      {
        title: 'Diagnóstico de turbulencia en plasmas magnetizados',
        authors: 'Araya, P., Uribe, M., León, J.',
        year: 2023,
        journal: 'Physics of Plasmas'
      }
    ],
    contact: {
      phone: '+56 2 2978 5200',
      email: 'fisica.plasmas@universidad.edu',
      address: 'Av. Ecuador 3493, Santiago'
    },
    popularity: 76
  }
];
