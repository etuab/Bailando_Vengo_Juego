
// ============================================================
// 📝 PREGUNTAS PARA "¡A QUE LO SABES!"
// ============================================================
const PREGUNTAS = [
    {
        id: 501,
        pregunta: "¿A partir de qué fecha comienza el análisis de la Indumentaria tradicional en Canarias?",
        opciones: ["S. V antes de Cristo", "Con Cristóbal Colón", "A partir del siglo XVIII"],
        correcta: 2,
        explicacion: "El análisis de la indumentaria tradicional en Canarias comienza a partir del siglo XVIII."
    },
    {
        id: 502,
        pregunta: "¿En qué se basa el estudio de la Indumentaria Tradicional?",
        opciones: ["Datos/archivos/grabados", "Prendas testigo", "Testamentos", "Todas son correctas"],
        correcta: 3,
        explicacion: "El estudio de la indumentaria tradicional se basa en datos/archivos/grabados, prendas testigo y testamentos."
    },
    {
        id: 503,
        pregunta: "¿Cuántas épocas se distinguen estudiando la indumentaria en Canarias?",
        opciones: ["1", "2", "3"],
        correcta: 1,
        explicacion: "Se distinguen 2 épocas en el estudio de la indumentaria en Canarias."
    },
    {
        id: 504,
        pregunta: "¿Cuáles son las épocas estudiadas en la indumentaria?",
        opciones: [
            "S. XVIII, primera mitad S. XIX y segunda mitad S. XIX hasta años 50 del siglo XX",
            "S. X hasta S. XV",
            "Antes de la Colonización y después de Cristóbal Colón"
        ],
        correcta: 0,
        explicacion: "Las épocas estudiadas son: S. XVIII, primera mitad S. XIX y segunda mitad S. XIX hasta años 50 del siglo XX."
    },
    {
        id: 505,
        pregunta: "¿Cómo se llama la época intermedia entre las épocas de la indumentaria?",
        opciones: ["De paso", "De transición", "De rodaje"],
        correcta: 1,
        explicacion: "La época intermedia se llama 'De transición'."
    },
    {
        id: 506,
        pregunta: "¿Cómo se llama la única prenda prehispánica conocida en las Islas Canarias?",
        opciones: ["Chupa", "Traje", "Tamarco", "Teguaco"],
        correcta: 2,
        explicacion: "La única prenda prehispánica conocida es el Tamarco."
    },
    {
        id: 507,
        pregunta: "¿Qué género musical canario tiene origen en el fandango andaluz?",
        opciones: ["La isa", "La malagueña", "La folía", "El romance"],
        correcta: 1,
        explicacion: "La malagueña tiene origen en el fandango andaluz."
    },
    {
        id: 508,
        pregunta: "¿Qué aspecto diferencia al sorondongo canario de otros géneros musicales tradicionales?",
        opciones: [
            "Su origen exclusivamente religioso",
            "Su estructura basada en coplas improvisadas",
            "Su ritmo lento y carácter solemne",
            "Su interpretación exclusivamente instrumental"
        ],
        correcta: 2,
        explicacion: "El sorondongo se diferencia por su ritmo lento y carácter solemne."
    },
    {
        id: 509,
        pregunta: "¿Qué nombre recibe el calzado que usaban los antiguos aborígenes?",
        opciones: ["Majos", "Cholas", "Esclavas", "Botas"],
        correcta: 0,
        explicacion: "El calzado aborigen se llamaba 'Majos'."
    },
    {
        id: 510,
        pregunta: "¿Cómo se llama el primer cronista historiador que describió la indumentaria de las islas tras la colonización?",
        opciones: ["Fray Albino", "Fray Alonso de Espinosa", "Fray Escoba"],
        correcta: 1,
        explicacion: "El primer cronista fue Fray Alonso de Espinosa."
    },
    {
        id: 511,
        pregunta: "¿Qué siglo fue el más importante para la indumentaria tradicional de todo occidente?",
        opciones: ["S. XVI", "S. XVIII", "S. XV", "S. XIX"],
        correcta: 1,
        explicacion: "El siglo XVIII fue el más importante para la indumentaria tradicional de todo occidente."
    },
    {
        id: 512,
        pregunta: "Los Uniformes militares son...",
        opciones: ["Trajes típicos", "Trajes de carnaval", "Trajes regionales", "Trajes de faena"],
        correcta: 2,
        explicacion: "Los uniformes militares son trajes regionales."
    },
    {
        id: 513,
        pregunta: "¿Cuando hablamos de trajes tradicionales, hablamos de?",
        opciones: [
            "Los que usaron las clases cultas",
            "Los que usaron las clases de alta sociedad",
            "Los que usaron las clases populares"
        ],
        correcta: 2,
        explicacion: "Los trajes tradicionales son los que usaron las clases populares."
    },
    {
        id: 514,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de NTRA. SRA del Carmen",
            "Hábito de NTRA. SRA de las Nieves",
            "Hábito de San Antonio",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 0,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA del Carmen.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1381"
    },
    {
        id: 515,
        pregunta: "La época de transición es...",
        opciones: [
            "Cuando se usaron prendas de las dos épocas",
            "Cuando se introducen nuevos materiales, fibras, telas, etc.",
            "Cuando conviven prendas de la época más antigua y la más cercana",
            "Todas son correctas"
        ],
        correcta: 3,
        explicacion: "La época de transición es cuando conviven prendas de ambas épocas y se introducen nuevos materiales."
    },
    {
        id: 516,
        pregunta: "¿El uniforme de la Policía Canaria es un traje regional?",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El uniforme de la Policía Canaria es considerado un traje regional."
    },
    {
        id: 517,
        pregunta: "¿El calzado aborigen se llama Maho, Majo o Maxo?",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El calzado aborigen se llama Maho, Majo o Maxo."
    },
    {
        id: 518,
        pregunta: "¿Las Tapadas son?",
        opciones: ["Un traje regional", "Un traje de semana santa", "Un traje de faena"],
        correcta: 0,
        explicacion: "Las Tapadas son un traje regional."
    },
    {
        id: 519,
        pregunta: "Los Cercos son...",
        opciones: ["Un corral", "Un sombrero", "Un calzado aborigen"],
        correcta: 2,
        explicacion: "Los Cercos son un calzado aborigen."
    },
    {
        id: 520,
        pregunta: "La indumentaria prehispánica en las islas estaba elaborada a partir de casi un único material...",
        opciones: ["Pelo", "Lino", "Lana", "Piel"],
        correcta: 3,
        explicacion: "La indumentaria prehispánica se elaboraba principalmente con piel."
    },
    {
        id: 521,
        pregunta: "Los trajes que más representan a los pueblos y regiones son los trajes típicos",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los trajes típicos son los que más representan a los pueblos y regiones."
    },
    {
        id: 522,
        pregunta: "¿Qué prendas de la Indumentaria tradicional son las más antiguas?",
        opciones: [
            "El gorro de marinero y las peinetas",
            "Los calzoncillos y pololos",
            "Las fajas y cintas"
        ],
        correcta: 0,
        explicacion: "Las prendas más antiguas son el gorro de marinero y las peinetas."
    },
    {
        id: 523,
        pregunta: "Todas las prendas de la indumentaria tradicional canaria fueron introducidas en las islas tras la colonización",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Todas las prendas fueron introducidas tras la colonización."
    },
    {
        id: 524,
        pregunta: "¿En Canarias se usaron las peinetas?",
        opciones: [
            "Nunca",
            "Si, pero solo mujeres peninsulares que vinieron a las islas",
            "Si, por mujeres de varios estamentos sociales"
        ],
        correcta: 2,
        explicacion: "Las peinetas fueron usadas por mujeres de varios estamentos sociales en Canarias."
    },
    {
        id: 525,
        pregunta: "Las capas y capotes nunca se usaron en las Islas Canarias",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "Las capas y capotes sí se usaron en las Islas Canarias."
    },
    {
        id: 526,
        pregunta: "En la indumentaria tradicional de las Islas Canarias existen prendas de origen árabe que perduraron hasta principios del siglo XX",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Existen prendas de origen árabe que perduraron hasta principios del siglo XX."
    },
    {
        id: 527,
        pregunta: "Las camisas tradicionales tenían formas...",
        opciones: ["Curvas", "Ovaladas", "Rectas", "De pico"],
        correcta: 2,
        explicacion: "Las camisas tradicionales tenían formas rectas."
    },
    {
        id: 528,
        pregunta: "Los calzoncillos o nagiietas son prendas de interior y en ocasiones se usaban de exterior",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los calzoncillos o nagiietas se usaban tanto de interior como de exterior."
    },
    {
        id: 529,
        pregunta: "¿Las Tocas son?",
        opciones: ["Instrumentos aborígenes", "Prendas de cabeza", "Las medias", "Los sombreros"],
        correcta: 1,
        explicacion: "Las Tocas son prendas de cabeza."
    },
    {
        id: 530,
        pregunta: "¿Qué prenda de cabeza no puede faltar en la indumentaria femenina de las campesinas?",
        opciones: ["El sombrero", "La mantilla", "El pañuelo"],
        correcta: 2,
        explicacion: "El pañuelo es la prenda de cabeza que no puede faltar en la indumentaria femenina de las campesinas."
    },
    {
        id: 531,
        pregunta: "La mantilla es una prenda...",
        opciones: ["De abrigo", "De recato", "De ambas cosas"],
        correcta: 2,
        explicacion: "La mantilla es una prenda de abrigo y de recato."
    },
    {
        id: 532,
        pregunta: "Las fajas o bandas fueron usadas no solo por hombres, sino que en algunas épocas fueron usadas también por mujeres",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las fajas o bandas fueron usadas por hombres y también por mujeres."
    },
    {
        id: 533,
        pregunta: "Los sombreros de fieltro...",
        opciones: [
            "Los usaban los hombres",
            "Los usaban las mujeres",
            "Los usaban tanto hombres como mujeres"
        ],
        correcta: 2,
        explicacion: "Los sombreros de fieltro los usaban tanto hombres como mujeres."
    },
    {
        id: 534,
        pregunta: "Los sombreros de fibras vegetales son los más antiguos",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los sombreros de fibras vegetales son los más antiguos."
    },
    {
        id: 535,
        pregunta: "Las polainas se hacían...",
        opciones: ["De cuero", "De lana", "a y b son correctas", "Ninguna es correcta"],
        correcta: 2,
        explicacion: "Las polainas se hacían de cuero y de lana."
    },
    {
        id: 536,
        pregunta: "La saya es...",
        opciones: ["Una camisa", "Una navaja", "Una mantilla", "Una falda"],
        correcta: 3,
        explicacion: "La saya es una falda."
    },
    {
        id: 537,
        pregunta: "Los abantales son...",
        opciones: ["Abanicos", "Botones", "Delantales", "Collares"],
        correcta: 2,
        explicacion: "Los abantales son delantales."
    },
    {
        id: 538,
        pregunta: "Los Chalecos son piezas que usan...",
        opciones: ["Las mujeres", "Los hombres", "Ambos"],
        correcta: 1,
        explicacion: "Los chalecos son piezas que usan los hombres."
    },
    {
        id: 539,
        pregunta: "Los chalecos se hacían exclusivamente de lana",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "Los chalecos no se hacían exclusivamente de lana."
    },
    {
        id: 540,
        pregunta: "El calzón y el calzoncillo son la misma prenda",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "El calzón y el calzoncillo no son la misma prenda."
    },
    {
        id: 541,
        pregunta: "¿Cómo se llaman las prendas que van debajo de la falda o saya?",
        opciones: ["Enaguas", "Naguas", "Ambas son correctas"],
        correcta: 2,
        explicacion: "Las prendas que van debajo de la falda se llaman enaguas o naguas."
    },
    {
        id: 542,
        pregunta: "¿En qué siglo se produce el auge de los trajes tradicionales en toda Europa?",
        opciones: ["Finales del siglo XIII", "En el siglo XX", "En el siglo XVII"],
        correcta: 0,
        explicacion: "El auge de los trajes tradicionales en toda Europa se produce a finales del siglo XIII."
    },
    {
        id: 543,
        pregunta: "En cuántos periodos se puede dividir la indumentaria popular de Canarias en el siglo XVI?",
        opciones: ["1", "4", "2", "3"],
        correcta: 2,
        explicacion: "La indumentaria popular de Canarias en el siglo XVI se divide en 2 periodos."
    },
    {
        id: 544,
        pregunta: "Los cambios en la moda se producen poco a poco y no de golpe",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los cambios en la moda se producen gradualmente."
    },
    {
        id: 545,
        pregunta: "¿A qué se llama época de Transición en la indumentaria canaria?",
        opciones: [
            "Cuando se mezclan piezas de una isla y de otras",
            "Cuando conviven piezas de indumentaria antigua y piezas modernas",
            "Ninguna es correcta"
        ],
        correcta: 1,
        explicacion: "La época de Transición es cuando conviven piezas antiguas y modernas."
    },
    {
        id: 546,
        pregunta: "¿Cuántas modalidades de indumentaria existen en el vestir del siglo XVIII en las islas?",
        opciones: ["2", "4", "3"],
        correcta: 2,
        explicacion: "En el siglo XVIII existen 3 modalidades de indumentaria en las islas."
    },
    {
        id: 547,
        pregunta: "Las modalidades de indumentaria del siglo XVIII en Canarias son: de diario, de trabajo, de domingo o fiestas y de gala u ocasiones especiales",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las modalidades son: de diario, de trabajo, de domingo o fiestas y de gala u ocasiones especiales."
    },
    {
        id: 548,
        pregunta: "Las sayas de lana listadas más usuales eran...",
        opciones: ["Las rojas y blancas", "Las verdes y negras", "Las azules y blancas"],
        correcta: 0,
        explicacion: "Las sayas de lana listadas más usuales eran las rojas y blancas."
    },
    {
        id: 549,
        pregunta: "En la indumentaria femenina el uso de las polainas era frecuente",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El uso de polainas era frecuente en la indumentaria femenina."
    },
    {
        id: 550,
        pregunta: "En la segunda época de la indumentaria solo se diferenciaban entre islas por las prendas de cabeza",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "En la segunda época solo se diferenciaban por las prendas de cabeza."
    },
    {
        id: 551,
        pregunta: "Las mantillas siguieron en uso hasta bien entrado el siglo XX",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las mantillas siguieron en uso hasta bien entrado el siglo XX."
    },
    {
        id: 552,
        pregunta: "Los sobre todos se usaban...",
        opciones: ["En épocas frías", "En ocasiones especiales", "Para ir a la iglesia", "Todas son correctas"],
        correcta: 3,
        explicacion: "Los sobre todos se usaban en épocas frías, ocasiones especiales y para ir a la iglesia."
    },
    {
        id: 553,
        pregunta: "En Canarias el cambio de 'moda' en la población campesina empezó en el último cuarto del siglo XIX",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El cambio de moda en la población campesina empezó en el último cuarto del siglo XIX."
    },
    {
        id: 554,
        pregunta: "El hombre adopta la corbata como pieza fundamental en su indumentaria...",
        opciones: [
            "Solo los campesinos",
            "Solo los de las clases más pudientes",
            "Todas las clases sociales"
        ],
        correcta: 2,
        explicacion: "La corbata fue adoptada por todas las clases sociales."
    },
    {
        id: 555,
        pregunta: "Las mujeres asumieron las nuevas tendencias antes que los hombres",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las mujeres asumieron las nuevas tendencias antes que los hombres."
    },
    {
        id: 556,
        pregunta: "Por qué desaparecieron las antiguas formas de vestir en el siglo XX?",
        opciones: [
            "Porque entraron géneros de importación más baratos y variados",
            "Porque la producción de géneros propios cada vez era más escasa",
            "Por el perfeccionamiento de las máquinas de coser",
            "Todas son correctas"
        ],
        correcta: 3,
        explicacion: "Desaparecieron por la entrada de géneros de importación, la escasez de producción propia y el perfeccionamiento de las máquinas de coser."
    },
    {
        id: 557,
        pregunta: "¿Qué prenda de indumentaria femenina aparece con identidad propia en Tenerife?",
        opciones: ["Las botas de maga", "El sombrero de maga", "El delantal", "Los pañuelos"],
        correcta: 1,
        explicacion: "El sombrero de maga aparece con identidad propia en Tenerife."
    },
    {
        id: 558,
        pregunta: "¿Qué calzado usaban las mujeres a principios del siglo XX?",
        opciones: [
            "Botas de botones",
            "Botas de cordón",
            "Zapatos de cordón",
            "Alpargatas",
            "Lonas",
            "Todas son correctas"
        ],
        correcta: 5,
        explicacion: "Las mujeres usaban botas de botones, botas de cordón, zapatos de cordón, alpargatas y lonas."
    },
    {
        id: 559,
        pregunta: "¿Qué prenda de indumentaria femenina aparece con identidad propia en Tenerife?",
        opciones: ["Las botas de maga", "El sombrero de maga", "El delantal", "Los pañuelos"],
        correcta: 1,
        explicacion: "El sombrero de maga aparece con identidad propia en Tenerife."
    },
    {
        id: 560,
        pregunta: "¿Qué es el refajo?",
        opciones: [
            "Una faja de lana",
            "Un lazo en el sombrero",
            "Un delantal",
            "Una prenda interior y de abrigo"
        ],
        correcta: 2,
        explicacion: "El refajo es un delantal."
    },
    {
        id: 561,
        pregunta: "¿Qué es un cuello de cabezón?",
        opciones: [
            "Un cuello de talla grande",
            "Un cuello ancho",
            "Un cuello que se dobla a la mitad"
        ],
        correcta: 2,
        explicacion: "El cuello de cabezón es un cuello que se dobla a la mitad."
    },
    {
        id: 562,
        pregunta: "¿Cómo se llama la prenda masculina que se usa a la cintura?",
        opciones: ["Faja", "Fajín", "Ceñidor", "Todas son correctas"],
        correcta: 3,
        explicacion: "La prenda masculina que se usa a la cintura se llama faja, fajín o ceñidor."
    },
    {
        id: 563,
        pregunta: "Todos los trajes típicos tienen el mismo origen en toda España",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "No todos los trajes típicos tienen el mismo origen en toda España."
    },
    {
        id: 564,
        pregunta: "Desde su aparición los trajes típicos no han seguido evolucionando",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "Los trajes típicos han seguido evolucionando desde su aparición."
    },
    {
        id: 565,
        pregunta: "En Canarias el origen de los trajes típicos es...",
        opciones: ["El mismo", "Cada isla tiene el suyo", "Diferentes"],
        correcta: 2,
        explicacion: "En Canarias, el origen de los trajes típicos es diferente en cada isla."
    },
    {
        id: 566,
        pregunta: "La evolución de los trajes típicos se debe a...",
        opciones: [
            "Las modas de cada momento",
            "Las circunstancias económico-sociales",
            "Ambas son correctas",
            "Ninguna es correcta"
        ],
        correcta: 0,
        explicacion: "La evolución de los trajes típicos se debe a las modas y a las circunstancias económico-sociales."
    },
    {
        id: 567,
        pregunta: "Se puede convertir un traje tradicional en típico",
        opciones: ["Sí", "No"],
        correcta: 0,
        explicacion: "Un traje tradicional puede convertirse en típico."
    },
    {
        id: 568,
        pregunta: "El pueblo asume un traje como identificativo y lo convierte en traje típico",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El pueblo asume un traje como identificativo y lo convierte en típico."
    },
    {
        id: 569,
        pregunta: "En Tenerife el traje típico que más identifica la isla es el traje típico de La Orotava",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El traje típico de La Orotava es el que más identifica a Tenerife."
    },
    {
        id: 570,
        pregunta: "¿Cuántos trajes típicos existen en Tenerife?",
        opciones: ["2, el de la Orotava y el de Santa Cruz", "3, el de la Orotava, el de La Laguna y el de Adeje", "1, el de la Orotava", "4"],
        correcta: 3,
        explicacion: "Existen 4 trajes típicos en Tenerife."
    },
    {
        id: 571,
        pregunta: "En La Palma las labores textiles...",
        opciones: [
            "Se han mantenido vivas",
            "Están presentes en su indumentaria tradicional",
            "Siguen manteniéndose en sus trajes típicos",
            "Todas son correctas"
        ],
        correcta: 3,
        explicacion: "Las labores textiles en La Palma se han mantenido vivas y están presentes en su indumentaria."
    },
    {
        id: 572,
        pregunta: "En La Palma los bordados de 'punto de cruz' siempre han existido en camisas, calzoncillos y delantales",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los bordados de 'punto de cruz' en La Palma han existido siempre en camisas, calzoncillos y delantales."
    },
    {
        id: 573,
        pregunta: "En La Gomera el traje típico de la mujer puede tener su origen...",
        opciones: [
            "En un traje de transición de finales del siglo XIX",
            "En un traje del siglo XX",
            "En una creación de Dña. Lili Ascanio"
        ],
        correcta: 2,
        explicacion: "El traje típico de la mujer en La Gomera puede tener su origen en una creación de Dña. Lili Ascanio."
    },
    {
        id: 574,
        pregunta: "En el traje típico del hombre de La Gomera las piezas más antiguas son...",
        opciones: ["Las chaquetillas", "Las camisas de lino", "Ninguna es correcta", "Ambas son correctas"],
        correcta: 0,
        explicacion: "Las piezas más antiguas en el traje típico del hombre de La Gomera son las chaquetillas."
    },
    {
        id: 575,
        pregunta: "En el traje típico masculino de El Hierro, la prenda que más ha sufrido los cambios ha sido la montera",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "La montera es la prenda que más ha sufrido los cambios en el traje típico masculino de El Hierro."
    },
    {
        id: 576,
        pregunta: "El traje típico femenino de El Hierro...",
        opciones: [
            "Es el que menos variaciones ha tenido hasta nuestros días",
            "Es el que más color mantiene en sus prendas",
            "Es el que más tela lleva"
        ],
        correcta: 0,
        explicacion: "El traje típico femenino de El Hierro es el que menos variaciones ha tenido."
    },
    {
        id: 577,
        pregunta: "En Gran Canaria los trajes típicos son una creación del año 1934",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los trajes típicos de Gran Canaria son una creación de 1934."
    },
    {
        id: 578,
        pregunta: "El traje típico femenino de Gran Canaria, aún siendo una creación...",
        opciones: [
            "Ha seguido sufriendo alteraciones",
            "Ha sido aceptado como tal por la generalidad de la población",
            "a y b son correctas",
            "Ninguna es válida"
        ],
        correcta: 1,
        explicacion: "El traje típico femenino de Gran Canaria ha sido aceptado por la generalidad de la población."
    },
    {
        id: 579,
        pregunta: "En Fuerteventura los trajes típicos son evolución de los trajes tradicionales de la isla",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Los trajes típicos de Fuerteventura son evolución de los trajes tradicionales."
    },
    {
        id: 580,
        pregunta: "El tocado del traje típico de la mujer de Fuerteventura...",
        opciones: [
            "Está inspirado en el de las mujeres del Rif (Marruecos)",
            "Es original de Betancuria",
            "Está cosido a máquina"
        ],
        correcta: 0,
        explicacion: "El tocado del traje típico de la mujer de Fuerteventura está inspirado en el de las mujeres del Rif."
    },
    {
        id: 581,
        pregunta: "En los trajes típicos de Lanzarote se han conservado piezas de los trajes tradicionales como...",
        opciones: [
            "Las monteras y las soletas",
            "Los justillos con lentejuelas",
            "Los grandes pompones sobre las medias de los hombres"
        ],
        correcta: 0,
        explicacion: "En Lanzarote se han conservado las monteras y las soletas."
    },
    {
        id: 582,
        pregunta: "En Lanzarote se hacían los calados de los calzoncillos en la indumentaria más antigua",
        opciones: ["Verdadero", "Falso"],
        correcta: 2,
        explicacion: "En Lanzarote se hacían los calados de los calzoncillos en la indumentaria más antigua."
    },
    {
        id: 583,
        pregunta: "El sombrero de maga es...",
        opciones: [
            "El sombrero de un disfraz",
            "Un sombrero para ir al campo",
            "Un sombrero que se usó desde principios del siglo XX en Tenerife",
            "Un sombrero de gala"
        ],
        correcta: 2,
        explicacion: "El sombrero de maga se usó desde principios del siglo XX en Tenerife."
    },
    {
        id: 584,
        pregunta: "Las primeras alusiones al sombrero de maga se sitúan...",
        opciones: [
            "En el último cuarto del siglo XIX",
            "A principios del S.XX",
            "A principios del S.XIX",
            "En los años 60 del S.XX"
        ],
        correcta: 0,
        explicacion: "Las primeras alusiones al sombrero de maga se sitúan en el último cuarto del siglo XIX."
    },
    {
        id: 585,
        pregunta: "Entre los usos funcionales del sombrero de maga está el soportar la carga",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El sombrero de maga se usaba también para soportar carga."
    },
    {
        id: 586,
        pregunta: "El sombrero de maga se adorna generalmente con cintas de terciopelo negro",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "El sombrero de maga no se adorna generalmente con cintas de terciopelo negro."
    },
    {
        id: 587,
        pregunta: "Qué material se usa para confeccionar un sombrero de maga",
        opciones: ["Colmo", "Palma", "Platanera", "Mimbre"],
        correcta: 0,
        explicacion: "El sombrero de maga se confecciona con colmo."
    },
    {
        id: 588,
        pregunta: "Las formas y variaciones de los sombreros de maga definían claramente cuáles eran las procedencias de sus portadoras",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las formas del sombrero de maga definían la procedencia de sus portadoras."
    },
    {
        id: 589,
        pregunta: "Los sombreros de maga más antiguos son...",
        opciones: [
            "De copa baja y ala ancha",
            "De copa alta y ala ancha",
            "De copa baja y ala estrecha"
        ],
        correcta: 2,
        explicacion: "Los sombreros de maga más antiguos son de copa baja y ala estrecha."
    },
    {
        id: 590,
        pregunta: "El sombrero de maga es identificativo y exclusivo de las mujeres de...",
        opciones: ["Gran Canaria", "La Palma", "Tenerife", "La Gomera"],
        correcta: 2,
        explicacion: "El sombrero de maga es exclusivo de las mujeres de Tenerife."
    },
    {
        id: 591,
        pregunta: "¿Por qué es único en todo el territorio español el sombrero de maga?",
        opciones: [
            "Porque es bonito",
            "Porque está hecho de palma y adornado con terciopelo negro",
            "Porque su diámetro no alcanza nunca el diámetro de la cabeza",
            "Porque es de origen inglés"
        ],
        correcta: 2,
        explicacion: "El sombrero de maga es único porque su diámetro no alcanza nunca el diámetro de la cabeza."
    },
    {
        id: 592,
        pregunta: "Los trajes rituales son...",
        opciones: [
            "Los que se usan en actos religiosos",
            "Los que se usan en actos festivos",
            "Ambas son correctas",
            "Ninguna es correcta"
        ],
        correcta: 0,
        explicacion: "Los trajes rituales se usan en actos religiosos."
    },
    {
        id: 593,
        pregunta: "Los trajes rituales se usan para pagar una promesa a una advocación religiosa",
        opciones: ["Verdadero", "Falso"],
        correcta: 2,
        explicacion: "Los trajes rituales se usan para pagar una promesa a una advocación religiosa."
    },
    {
        id: 594,
        pregunta: "La 'Hopa' es...",
        opciones: ["Un traje de fiesta", "Un traje típico", "Un traje ritual", "Un traje de faena"],
        correcta: 0,
        explicacion: "La 'Hopa' es un traje de fiesta."
    },
    {
        id: 595,
        pregunta: "La Indumentaria que usan las hermandades religiosas tienen su origen en la baja edad media",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "La indumentaria de las hermandades religiosas no tiene su origen en la baja edad media."
    },
    {
        id: 596,
        pregunta: "Los trajes rituales están en desuso y ya no se ven en las procesiones de las islas Canarias",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "Los trajes rituales no están en desuso y aún se ven en procesiones."
    },
    {
        id: 597,
        pregunta: "Las libreas son...",
        opciones: [
            "Una representación religiosa",
            "Una compañía de teatro",
            "Una danza ritual",
            "Una comparsa"
        ],
        correcta: 2,
        explicacion: "Las libreas son una danza ritual."
    },
    {
        id: 598,
        pregunta: "De entre los bailarines de Danzas Rituales uno de los tocados usados se llama turbante, y se usa en...",
        opciones: [
            "La Danza de los Enanos",
            "La Danza de Flores de Guamasa",
            "La Danza de San Pedro de Güímar",
            "Las Libreas de Tegueste"
        ],
        correcta: 2,
        explicacion: "El turbante se usa en la Danza de San Pedro de Güímar."
    },
    {
        id: 599,
        pregunta: "Vestirse de Guanche de Candelaria se considera vestirse con un traje ritual",
        opciones: ["Verdadero", "Falso"],
        correcta: 2,
        explicacion: "Vestirse de Guanche de Candelaria se considera un traje ritual."
    },
    {
        id: 600,
        pregunta: "Una de las danzas rituales que conserva piezas de la indumentaria tradicional es...",
        opciones: [
            "La Danza de Chimiche",
            "La Danza de las Vegas",
            "La Danza de Pastores de Breña Alta"
        ],
        correcta: 0,
        explicacion: "La Danza de Chimiche conserva piezas de la indumentaria tradicional."
    },
    {
        id: 601,
        pregunta: "Los Caballos Fufos y los Caballos Fuscos son...",
        opciones: ["Danzas rituales", "Grupos de Carnaval", "Danzas teatrales", "Danzas religiosas"],
        correcta: 0,
        explicacion: "Los Caballos Fufos y Fuscos son danzas rituales."
    },
    {
        id: 602,
        pregunta: "En La Danza de los Enanos de Santa Cruz de La Palma, se lucen dos indumentarias diferentes en sus representaciones",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "En la Danza de los Enanos se lucen dos indumentarias diferentes."
    },
    {
        id: 603,
        pregunta: "¿Se pueden usar zaleas de animales en trajes rituales en época de carnaval?",
        opciones: ["Sí", "No"],
        correcta: 2,
        explicacion: "Se pueden usar zaleas de animales en trajes rituales en época de carnaval."
    },
    {
        id: 604,
        pregunta: "La indumentaria de los luchadores en las Islas Canarias...",
        opciones: [
            "Es un traje tradicional",
            "Es un traje ritual",
            "Usa prendas con hechura tradicional",
            "Es un traje típico"
        ],
        correcta: 0,
        explicacion: "La indumentaria de los luchadores es un traje tradicional."
    },
    {
        id: 605,
        pregunta: "¿Qué piezas de indumentaria se usan en la lucha canaria?",
        opciones: [
            "Un calzoncillo y una camisa con hechuras rectas",
            "Un pantalón y una camisa de campesino",
            "Un terno completo del siglo XX"
        ],
        correcta: 0,
        explicacion: "En la lucha canaria se usa un calzoncillo y una camisa con hechuras rectas."
    },
    {
        id: 606,
        pregunta: "Según donde los localicemos, podemos llamar 'Nagiietas' a los calzoncillos",
        opciones: ["Verdadero", "Falso"],
        correcta: 2,
        explicacion: "En algunas zonas se llaman 'Nagiietas' a los calzoncillos."
    },
    {
        id: 607,
        pregunta: "El patronaje de la indumentaria de los luchadores es...",
        opciones: ["Industrial", "Manual", "Tradicional", "Actual"],
        correcta: 1,
        explicacion: "El patronaje de la indumentaria de los luchadores es manual."
    },
    {
        id: 608,
        pregunta: "La indumentaria de los luchadores se llama también...",
        opciones: ["Ropa de deporte", "Ropa de brega", "Ropa interior", "Uniforme de lucha"],
        correcta: 0,
        explicacion: "La indumentaria de los luchadores se llama también ropa de brega."
    },
    {
        id: 609,
        pregunta: "¿Qué es un 'ruedo'?",
        opciones: ["Una blusa", "Un cinto", "Un paño enrollado", "Una mantilla"],
        correcta: 2,
        explicacion: "Un 'ruedo' es un paño enrollado."
    },
    {
        id: 610,
        pregunta: "¿Qué es la empleita?",
        opciones: ["Una lona", "Un cesto", "Esterilla de palma", "La hoja de la palmera"],
        correcta: 0,
        explicacion: "La empleita es una esterilla de palma."
    },
    {
        id: 611,
        pregunta: "El sombrero de maga se usó hasta bien entrado el siglo XX en Tenerife, llegando una de sus últimas portadoras a usarlo hasta principios de los años 80",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "El sombrero de maga se usó hasta principios de los años 80 en Tenerife."
    },
    {
        id: 612,
        pregunta: "Las mantas se usan en las islas desde tiempos remotos y cercanos a los primeros años de la colonización",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las mantas se usan en las islas desde tiempos remotos."
    },
    {
        id: 613,
        pregunta: "Desde 1800 ya hay constancias gráficas del uso generalizado de la manta",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "No hay constancias gráficas del uso generalizado de la manta desde 1800."
    },
    {
        id: 614,
        pregunta: "Las mantas eran de uso de los hombres y nunca de las mujeres",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        explicacion: "Las mantas también eran usadas por mujeres."
    },
    {
        id: 615,
        pregunta: "La manta es patrimonio exclusivo de Tenerife, y más concretamente del municipio de La Esperanza, de ahí su nombre",
        opciones: ["Verdadero", "Falso"],
        correcta: 3,
        explicacion: "La manta no es patrimonio exclusivo de Tenerife."
    },
    {
        id: 616,
        pregunta: "Los zarcillos más comunes en Canarias son...",
        opciones: [
            "Los aretes de la ese",
            "Las argollas canarias",
            "Las cubanas o criollas",
            "a, b y c son correctas",
            "Ninguna es correcta"
        ],
        correcta: 3,
        explicacion: "Los zarcillos más comunes son los aretes de la ese, las argollas canarias y las cubanas o criollas."
    },
    {
        id: 617,
        pregunta: "Todos los aretes tienen la 'ese' en su interior",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Todos los aretes tienen la 'ese' en su interior."
    },
    {
        id: 618,
        pregunta: "Los otros zarcillos tradicionales de uso en las Islas Canarias son...",
        opciones: [
            "Los de perla",
            "Los de botón",
            "Los de dos cuerpos articulados",
            "Los de cierre catalán"
        ],
        correcta: 2,
        explicacion: "Los zarcillos tradicionales también incluyen los de dos cuerpos articulados."
    },
    {
        id: 619,
        pregunta: "¿Dónde y cuándo se data el origen de los aretes canarios?",
        opciones: [
            "En las mujeres de Castellón del siglo XV",
            "En las mujeres africanas del Siglo XVII",
            "En las mujeres sumerias en el 2,500 ac",
            "En las mujeres portuguesas del siglo XVI"
        ],
        correcta: 2,
        explicacion: "El origen de los aretes canarios se data en las mujeres sumerias en el 2,500 ac."
    },
    {
        id: 620,
        pregunta: "Las 'Danzas de Caballitos' se consideran danzas rituales",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "Las Danzas de Caballitos se consideran danzas rituales."
    },
    {
        id: 621,
        pregunta: "En la mayoría de danzas rituales se usa un palo con cintas multicolores que coge cada danzante",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        explicacion: "En la mayoría de danzas rituales se usa un palo con cintas multicolores."
    },
    {
        id: 622,
        pregunta: "Según 'Nuestro Folclore', la 'Polca' llegó a Fuerteventura en el S. XIX y es el género más utilizado para mostrar la...",
        opciones: [
            "Melancolía de los marineros",
            "Fe religiosa de los majoreros",
            "Jocosidad y el humor del majorero",
            "Destreza de los bailadores"
        ],
        correcta: 2,
        explicacion: "La Polca se utiliza para mostrar la jocosidad y el humor del majorero."
    },
    {
        id: 623,
        pregunta: "La malagueña canaria se caracteriza por...",
        opciones: [
            "Su tono triste y cadencioso",
            "Ser muy rápida y festiva",
            "No tener canto",
            "Usar solo percusión"
        ],
        correcta: 0,
        explicacion: "La malagueña canaria se caracteriza por su tono triste y cadencioso."
    },
    {
        id: 624,
        pregunta: "El serinoque es un baile típico de...",
        opciones: ["Tenerife", "Fuerteventura", "La Palma", "Lanzarote"],
        correcta: 2,
        explicacion: "El serinoque es un baile típico de La Palma."
    },
    {
        id: 625,
        pregunta: "¿Qué tipo de baile folclórico es especialmente común en romerías?",
        opciones: ["Isa", "Tango herreño", "Sorondongo", "Malagueña"],
        correcta: 0,
        explicacion: "La Isa es especialmente común en romerías."
    },
    {
        id: 626,
        pregunta: "El folclore canario es el resultado de la mezcla de varias influencias. ¿Cuál de las siguientes NO es una de las raíces principales?",
        opciones: [
            "Cultura aborigen",
            "Influencia peninsular",
            "Aportaciones caribeñas",
            "Influencia de la música nórdica medieval"
        ],
        correcta: 3,
        explicacion: "La influencia de la música nórdica medieval no es una raíz principal del folclore canario."
    },
    {
        id: 627,
        pregunta: "¿Qué baile es conocido por su carácter solemne, romántico y por realizarse tradicionalmente en grupos de parejas mixtas?",
        opciones: ["La Folía", "El Tanganillo", "La Polka", "El Sirinoque"],
        correcta: 0,
        explicacion: "La Folía se caracteriza por su carácter solemne y romántico."
    },
    {
        id: 628,
        pregunta: "El 'Baile del Vivo' es una danza picaresca y mímica donde el hombre debe intentar quitarle el sombrero a la mujer. ¿De qué isla es originario?",
        opciones: ["Fuerteventura", "La Gomera", "El Hierro", "Gran Canaria"],
        correcta: 2,
        explicacion: "El Baile del Vivo es originario de El Hierro."
    },
    {
        id: 629,
        pregunta: "En las danzas rituales de La Palma, ¿cómo se llaman los personajes que bailan dentro de estructuras de cartón con forma de animal y pirotecnia?",
        opciones: [
            "Los Diablos de Tinizara",
            "Los Caballos de Tea (o Caballos Fuscos)",
            "Los Danzantes de la Rama",
            "Los Gigantes y Cabezudos"
        ],
        correcta: 1,
        explicacion: "Los Caballos de Tea (o Caballos Fuscos) son personajes de las danzas rituales de La Palma."
    },
    {
        id: 630,
        pregunta: "Las 'Seguidillas' canarias suelen interpretarse junto con otro género formando un 'tándem' musical muy popular. ¿Cuál es?",
        opciones: ["Saltonas", "Malagueñas", "Isas", "Arrorrós"],
        correcta: 0,
        explicacion: "Las Seguidillas se interpretan junto con las Saltonas."
    },
    {
        id: 631,
        pregunta: "¿Cuál es la principal característica del 'Baile del Tambor' en La Gomera?",
        opciones: [
            "Se baila en filas enfrentadas al ritmo de las chácaras y el tambor",
            "Solo pueden bailarlo hombres",
            "Es un baile de vals europeo",
            "No tiene canto, solo música instrumental"
        ],
        correcta: 0,
        explicacion: "El Baile del Tambor se baila en filas enfrentadas al ritmo de chácaras y tambor."
    },
    {
        id: 632,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de NTRA. SRA. del Carmen",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de San Antonio",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 3,
        explicacion: "La vestimenta pertenece al Hábito de la Inmaculada Concepción.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1483"
    },
    {
        id: 633,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de San Antonio",
            "Hábito con Luto"
        ],
        correcta: 0,
        explicacion: "La vestimenta pertenece al Hábito de Santa Lucía.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1487"
    },
    {
        id: 634,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de NTRA. SRA. de Candelaria",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de Santa Lucía",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 2,
        explicacion: "La vestimenta pertenece al Hábito de Santa Lucía.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1490"
    },
    {
        id: 635,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de NTRA. SRA. del Socorro (Tegueste)",
            "Hábito de Santa Rita"
        ],
        correcta: 2,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. del Socorro (Tegueste).",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1493"
    },
    {
        id: 636,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de San Antonio",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 3,
        explicacion: "La vestimenta pertenece al Hábito de la Inmaculada Concepción.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1496"
    },
    {
        id: 637,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de Los Dolores",
            "Hábito de San Antonio",
            "Hábito del Nazareno"
        ],
        correcta: 1,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. de Los Dolores.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1499"
    },
    {
        id: 638,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de San Antonio",
            "Hábito del Nazareno"
        ],
        correcta: 3,
        explicacion: "La vestimenta pertenece al Hábito del Nazareno.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1502"
    },
    {
        id: 639,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de NTRA. SRA. del Carmen",
            "Hábito de NTRA. SRA. de Guía (Guía Isora)",
            "Hábito de San Antonio",
            "Hábito de NTRA. SRA. de Candelaria"
        ],
        correcta: 1,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. de Guía (Guía Isora).",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1505"
    },
    {
        id: 640,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Rita",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de Santa Lucía",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 0,
        explicacion: "La vestimenta pertenece al Hábito de Santa Rita.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1508"
    },
    {
        id: 641,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de Candelaria",
            "Hábito de NTRA. SRA. del Socorro (Tegueste)",
            "Hábito de Santa Rita"
        ],
        correcta: 1,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. de Candelaria.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1511"
    },
    {
        id: 642,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito de San Antonio",
            "Hábito de la Inmaculada Concepción"
        ],
        correcta: 2,
        explicacion: "La vestimenta pertenece al Hábito de San Antonio.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1514"
    },
    {
        id: 643,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de Santa Lucía",
            "Hábito de NTRA. SRA. de Los Dolores",
            "Hábito de NTRA. SRA. de las Nieves",
            "Hábito del Nazareno"
        ],
        correcta: 2,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. de las Nieves.",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1517"
    },
    {
        id: 644,
        pregunta: "👁️ Adivina el hábito → ¿A qué hábito pertenece la vestimenta del reverso?",
        opciones: [
            "Hábito de NTRA. SRA. del Carmen",
            "Hábito de NTRA. SRA. de Guía (Guía Isora)",
            "Hábito de San Antonio",
            "Hábito de NTRA. SRA. de Candelaria"
        ],
        correcta: 1,
        explicacion: "La vestimenta pertenece al Hábito de NTRA. SRA. de Guía (Guía Isora).",
        imagen: true,
        enlace: "https://t.me/c/2585777945/1520"
    },
    {
        id: 645,
        pregunta: "Las 'seguidillas robadas' son una variante característica de...",
        opciones: ["Las Malagueñas", "Las Saltonas", "La Isa", "El Tango herreño"],
        correcta: 1,
        explicacion: "Las 'seguidillas robadas' son una variante de las Saltonas."
    },
    {
        id: 646,
        pregunta: "¿Cuál de los siguientes géneros se considera que mantiene las raíces más directas del antiguo 'Baile del Canario' de los aborígenes?",
        opciones: ["La Malagueña", "La Seguidilla", "El Sirinoque", "La Berlina"],
        correcta: 2,
        explicacion: "El Sirinoque mantiene las raíces más directas del antiguo 'Baile del Canario'."
    },
    {
        id: 647,
        pregunta: "¿Cuál de estos bailes se caracteriza por su ritmo alegre, ser 'suelto' y tener un origen emparentado con la jota peninsular?",
        opciones: ["La Folía", "La Malagueña", "La Isa", "El Arrorró"],
        correcta: 1,
        explicacion: "La Malagueña se caracteriza por su ritmo alegre y su origen emparentado con la jota peninsular."
    },
    {
        id: 648,
        pregunta: "¿En qué consiste el 'Baile del Vivo' de la isla de El Hierro?",
        opciones: [
            "Un baile de grupo en círculo",
            "Un baile mí mico de pareja donde el hombre intenta quitar el sombrero a la mujer",
            "Una danza religiosa frente a la iglesia",
            "Un baile de saltos acrobáticos"
        ],
        correcta: 1,
        explicacion: "El Baile del Vivo consiste en un baile mimico de pareja donde el hombre intenta quitar el sombrero a la mujer."
    },
    {
        id: 649,
        pregunta: "Las 'Folías' canarias tienen su origen histórico en...",
        opciones: [
            "Las danzas africanas",
            "Los bailes de salón franceses",
            "Una antigua danza cortesana portuguesa del siglo XV",
            "Cantos aborígenes de las cuevas"
        ],
        correcta: 2,
        explicacion: "Las Folías canarias tienen su origen en una antigua danza cortesana portuguesa del siglo XV."
    },
    {
        id: 650,
        pregunta: "El instrumento de percusión que se toca con la mano derecha para 'replicar' y la izquierda para 'acompañar' se llama...",
        opciones: ["Pandero", "Tambor gomero", "Chácaras", "Lapa"],
        correcta: 2,
        explicacion: "Las Chácaras se tocan con la mano derecha para 'replicar' y la izquierda para 'acompañar'."
    }
];
