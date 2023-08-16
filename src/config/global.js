export default {
  global: {
    componenteFormativo: 'Plan Integral de Cuidado en la Primera Infancia',
    descripcionCurso:
      'Los resultados obtenidos mediante la Escala Abreviada de Desarrollo EAD-3, son un instrumento de valoración del desarrollo en niños y niñas permite identificar los factores de riesgo presentes en las distintas etapas del crecimiento y desarrollo durante la primera infancia. Además, esta herramienta facilita la búsqueda de estrategias para fortalecer el desempeño de los profesionales de salud en el ámbito del talento humano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Análisis de los hallazgos de la valoración integral en salud y desarrollo infantil',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Establecimiento del Plan Integral de cuidado para el niño o la niña y la familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Prácticas de higiene',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Prácticas de descanso y buen trato',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Medidas para la promoción del desarrollo adecuado y las buenas prácticas de crianza',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cuidado sensible y cariñoso para promover el desarrollo',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110291_CF03_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Análisis de los hallazgos encontrados de la valoración integral en salud y la valoración del desarrollo infantil.',
      referencia:
        'ICBF. (2017). <i>Escala de Valoración Cualitativa del Desarrollo Infantil –Revisada</i>.',
      tipo: 'PDF',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/manual_tecnico_escal_de_valoracion_cualitativa.pdf',
    },
    {
      tema:
        'Establecimiento del Plan Integral de Cuidado para el niño o la niña y la familia',
      referencia:
        'Educación Inicial Tolima. (2018). <i>Prácticas de Cuidado</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OhZJZcuD-BI',
    },
    {
      tema:
        'Establecimiento del Plan Integral de Cuidado para el niño o la niña y la familia',
      referencia: 'MinSalud. (2017). <i>Cuadros de procedimientos</i>.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/cuadro-procedimientos-atencion-integrada-enfermedades-prevalentes-infancia.pdf',
    },
    {
      tema:
        'Establecimiento del Plan Integral de Cuidado para el niño o la niña y la familia',
      referencia:
        'INSK Kellogg. (2017). <i>Buenos hábitos de alimentación para niños</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ERSZmGBSGec',
    },
    {
      tema: 'Prácticas de descanso y buen trato',
      referencia:
        'Sistema Escolar USA. (2020). <i>Cual debería ser la rutina de sueño para niños</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aotqGGV5cXY',
    },
    {
      tema: 'Prácticas de descanso y buen trato',
      referencia:
        'Recursitos PK. (2021). <i>LA MAGIA DEL BUEN TRATO</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=33bCAlncUFc',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover, mantener la salud.',
    },
    {
      termino: 'AIEPI',
      significado:
        'enfoque integrado de la salud infantil que se centra en el bienestar general del niño. Su finalidad es reducir la mortalidad, la morbilidad y la discapacidad en los niños menores de cinco años, así como promover su mejor crecimiento y desarrollo.',
    },
    {
      termino: 'Bajo peso',
      significado:
        'se denomina bajo peso al nacer a todo neonato que en el momento de su nacimiento tenga un peso menor de 2 500 g, cualquiera que sea la causa y sin tener en cuenta la duración de la gestación. El peso valora el crecimiento, y la edad gestacional la madurez del feto.',
    },
    {
      termino: 'Calostro',
      significado:
        'compuesto complejo y de pequeño volumen, alta densidad, elevado en proteínas, minerales, inmunoglobulinas, lactoferrina y leucocitos, facilita el crecimiento de <i>lactobacillus bifidusen</i> en el aparato intestinal del Recién Nacido, lo que favorece la eliminación del meconio. Está presente en el último trimestre de la gestación.',
    },
    {
      termino: 'Crecimiento',
      significado:
        'incremento de talla en un determinado periodo de tiempo, tiene variaciones significativas según edad, sexo y estaciones de año.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'adquisición progresiva de las capacidades motoras y cognoscitivas durante la infancia.',
    },
    {
      termino: 'Infancia',
      significado:
        'etapa de la vida del hombre comprendida desde el nacimiento hasta la pubertad.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'se refiere a la presentación de una enfermedad o síntoma de una enfermedad, o a la proporción de la enfermedad en una población.',
    },
    {
      termino: 'Mortalidad',
      significado:
        'estudia la frecuencia del número de defunciones ocurridas en una población, área geográfica y periodo determinado.',
    },
    {
      termino: 'Pediatría',
      significado: 'estudia al niño y sus enfermedades.',
    },
    {
      termino: 'Puericultura',
      significado:
        'disciplina médica y actividad que se ocupa de prestar cuidados a los niños para su mejor desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gobierno de Colombia. (2016). <i>Escala Abreviada de Desarrollo</i> – 3.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Escala-abreviada-de-desarrollo-3.pdf',
    },
    {
      referencia:
        'Hormiga, C., Camargo, D., y Orozco, L. (2008). Reproducibilidad y validez convergente de la Escala Abreviada del Desarrollo y una traducción al español del instrumento Neurosensory Motor Development Assessment. <i>Biomédica, 28</i>(3), p. 327-346.',
      link: 'https://revistabiomedica.org/index.php/biomedica/article/view/73',
    },
    {
      referencia:
        'ICBF. (2020).  <i>Guía Técnica del componente de alimentación y nutrición para los programas y proyectos misionales del ICBF</i>.',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g6.pp_guia_tecnica_del_componente_de_alimentacion_nutricion_icbf_v5.pdf',
    },
    {
      referencia:
        'Ley 1804 del 2016. Por la cual se establece la política de Estado para el desarrollo integral de la Primera Infancia de Cero a Siempre y se dictan otras disposiciones. Agosto 2 de 2016.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1804_2016.htm',
    },
    {
      referencia:
        'Ministerio de Salud y Ministerio de Salud y Protección Social – Colciencias. (2014). <i>Guía de práctica clínica para la promoción del crecimiento, la detección temprana y el enfoque inicial de alteraciones del crecimiento en niños menores de 10 años en Colombia y la promoción del desarrollo, detección temprana y enfoque inicial de las alteraciones del desarrollo en niños menores de 5 años</i> - Guía No. 24.',
    },
    {
      referencia:
        'Redes.colombiaaprende. (2018). <i>Practicas de cuidado y crianza</i>.',
      link:
        'https://redes.colombiaaprende.edu.co/ntg/men/pdf/Practicas_de_Cuidado.pdf',
    },
    {
      referencia:
        'The Lancet. (2016). <i>Apoyando el desarrollo en la primera infancia</i>. UNICEF.',
      link:
        'https://www.unicef.org/peru/informes/apoyando-el-desarrollo-en-la-primera-infancia',
    },
    {
      referencia:
        'Torrado, Bedregal, Pedraza, Bedregal, Corredor. (2014). <i>Informe Final del Estudio Piloto de Valoración del Desarrollo Infantil en Diversos Grupos Poblacionales de Colombia</i>.',
      link:
        'https://vdocumento.com/informe-final-del-estudio-piloto-de-valoracin-del-informe-final-del-estudio.html?page=1',
    },
    {
      referencia:
        'Unisalud. (2020). <i>Atención en Salud por Pediatría, Medicina General o Familiar, y Enfermería para la Primera Infancia</i>. Unicauca.',
      link:
        'https://unisalud.unicauca.edu.co/unisalud/sites/default/files/atencion_en_salud_primera_infancia.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital-  Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodógo para formación virtual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
