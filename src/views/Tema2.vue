<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de medios y comunicación digital

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-10.p-3.p-sm-4.p-md-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_1.png')})`}"
        role="img"
        aria-label="Un grupo de personas sonríe mientras observa una tableta que sostiene uno de ellos, mientras otra persona sostiene un vaso de café para llevar de color rojo."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación digital constituye un elemento fundamental para el funcionamiento y crecimiento de los negocios en entornos electrónicos. A través de una adecuada estrategia de medios, las organizaciones pueden interactuar con clientes, promocionar productos y servicios, fortalecer su posicionamiento y generar relaciones de largo plazo con los usuarios.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Estrategias de medios

    .row.align-items-center.mb-4
      .col-1.d-none.d-lg-block(data-aos="fade-up")
        img.img-fluid(src="@/assets/curso/tema2/img_2.svg", alt="Ícono de un documento con lista de verificación y un camión de reparto, simbolizando la estrategia de medios y la comunicación en la logística del comercio electrónico.")
      .col-12.col-lg-11
        p.mb-0(data-aos="zoom-in-right") La estrategia de medios hace referencia a las acciones planificadas que una organización implementa para comunicar mensajes a su público objetivo mediante diferentes canales digitales. Su finalidad es garantizar que la información llegue a las personas adecuadas, en el momento oportuno y utilizando los medios más efectivos.

    p.mb-4(data-aos="zoom-in-right") Dentro del comercio electrónico, la estrategia de medios permite cumplir los siguientes objetivos:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-6.col-xl-4.mb-3(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_3.png", alt="Una asesora con diadema de atención telefónica sonríe, mientras a su alrededor se representan, mediante ilustraciones, un carrito de compras con productos y una esfera del mundo rodeada de paquetes, simbolizando la estrategia de medios y la comunicación digital en el comercio electrónico.")
      .col-12.col-lg-12.col-xl-8.mb-3
        SlyderF.circl-arrow.mb-0(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema2/img_4.svg", alt="")
            h4.text-center Visibilidad de la marca
            p.text-center Incrementa la presencia de la empresa en diferentes medios de comunicación para que los clientes identifiquen la marca, conozcan su oferta de productos o servicios y la tengan presente al momento de realizar una compra.
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/tema2/img_5.svg", alt="")
            h4.text-center Atraer clientes potenciales
            p.text-center Capta el interés de personas con posibilidades reales de compra mediante contenidos, promociones y campañas dirigidas a sus necesidades, favoreciendo la generación de oportunidades comerciales y el aumento de las ventas.
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/tema2/img_6.svg", alt="")
            h4.text-center Fortalecer el reconocimiento empresarial
            p.text-center Consolida la imagen y la identidad de la empresa mediante una comunicación coherente y constante que genere confianza, credibilidad y recordación entre los clientes y el mercado objetivo.
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/tema2/img_7.svg", alt="")
            h4.text-center Apoyar el cumplimiento de metas comerciales
            p.text-center Orienta las acciones de comunicación para incrementar las ventas, promover productos, fidelizar clientes y contribuir al logro de las metas comerciales definidas por la organización.

    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-sm-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-up")
        img.img-fluid(src="@/assets/curso/tema2/img_8.svg", alt="Ícono de una tienda o local comercial, simbolizando el diseño de la estrategia de medios.")
      .col-12.col-lg-11
        .tarjeta.tarjeta--terciario-5.p-4(data-aos="zoom-in-right")
          p.mb-0 Su diseño debe estar alineado con las características del mercado, el comportamiento del consumidor y los recursos disponibles de la organización. Una estrategia de medios efectiva requiere definir objetivos claros, identificar segmentos de mercado, seleccionar canales adecuados y establecer indicadores que permitan evaluar los resultados obtenidos.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Selección de canales

    p.mb-4(data-aos="zoom-in-right") La selección de canales consiste en identificar los medios de comunicación más apropiados para interactuar con los usuarios y difundir productos, servicios o campañas de <em>e-commerce</em>. Esta elección depende de factores como el perfil del cliente, el tipo de producto o servicio, los hábitos de consumo digital y los objetivos de la organización. Entre los canales más utilizados se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-4.mb-lg-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-acento-contenido-10")
          div(titulo="Sitio web o tienda virtual")
            p.mb-0 Constituye el canal principal de venta en el <em>e-commerce</em>, donde los clientes consultan productos, comparan opciones, realizan compras y acceden a información sobre pagos, envíos y servicios ofrecidos por la empresa.
          div(titulo="Redes sociales")
            p.mb-0 Facilitan la promoción de productos, la interacción con los clientes y la difusión de contenidos que fortalecen el reconocimiento de la marca y generan oportunidades de venta mediante publicaciones y campañas digitales.
          div(titulo="Correo electrónico")
            p.mb-0 Permite establecer comunicación directa con clientes para compartir promociones, novedades, confirmaciones de compra, seguimiento de pedidos y campañas de fidelización de forma personalizada.
          div(titulo="Aplicaciones móviles")
            p.mb-0 Ofrecen acceso rápido a la tienda virtual desde dispositivos móviles, mejorando la experiencia de compra mediante notificaciones, seguimiento de pedidos y funciones adaptadas a las necesidades del usuario.
      .col-8.col-lg-5(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_9.png", alt="Una mano toca la pantalla de un teléfono móvil que muestra la palabra “Social Media” y una cuadrícula de aplicaciones, mientras a su alrededor flotan íconos de reacciones y aplicaciones digitales.")

    .row.row-cols-1.row-cols-md-2.row-cols-lg-2.row-cols-xl-4.g-4.mb-5
      .col
        .tarjeta.tarjeta--blanca.border.shadow.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              img(src="@/assets/curso/tema2/img_10.svg", alt="")
          h4.text-center Motores de búsqueda
          p.text-center Favorecen la visibilidad de la tienda virtual mediante resultados orgánicos o anuncios patrocinados, facilitando que los clientes encuentren productos y servicios relacionados con sus búsquedas.
      .col
        .tarjeta.tarjeta--blanca.border.shadow.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              img(src="@/assets/curso/tema2/img_11.svg", alt="")
          h4.text-center Mensajería instantánea
          p.text-center Agiliza la comunicación entre la empresa y los clientes para resolver consultas, brindar asesoría, compartir información comercial y realizar seguimiento a pedidos en tiempo real.
      .col
        .tarjeta.tarjeta--blanca.border.shadow.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              img(src="@/assets/curso/tema2/img_12.svg", alt="")
          h4.text-center
            em Marketplaces
          p.text-center Reúnen múltiples vendedores en una misma plataforma, ampliando el alcance comercial y facilitando la comercialización de productos a una mayor cantidad de clientes potenciales.
      .col
        .tarjeta.tarjeta--blanca.border.shadow.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              img(src="@/assets/curso/tema2/img_13.svg", alt="")
          h4.text-center Publicidad digital
          p.text-center Difunde anuncios en plataformas digitales para aumentar la visibilidad de productos, atraer clientes potenciales y dirigir tráfico hacia la tienda virtual, apoyando el cumplimiento de los objetivos comerciales.

    p.mb-4(data-aos="zoom-in-right") Cada uno presenta características específicas que pueden ser aprovechadas según las necesidades del negocio. La adecuada selección de canales contribuye a optimizar recursos y mejorar la efectividad de las acciones de comunicación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  empresas como Shopify permiten que las personas que comercializan sus productos amplíen su cobertura de ventas mediante el uso de canales sociales como Facebook y TikTok, entre otros.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Prestadores de servicio de comunicación

    p.mb-4(data-aos="zoom-in-right") Los prestadores de servicio de comunicación son organizaciones que suministran la infraestructura, las plataformas y los servicios necesarios para facilitar el intercambio de información entre empresas, clientes, proveedores y demás actores del comercio electrónico. Su función consiste en garantizar una comunicación segura, continua y eficiente que apoye las operaciones comerciales, logísticas y de atención al cliente. Entre estos prestadores se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_14.png", alt="Una persona sostiene una taza mientras escribe en un computador portátil que muestra el sitio web de alquiler de vehículos “Car for rent”.")
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--fondo-img-01.p-2.p-md-4.px-3.p-lg-4.p-xl-5.mb-3(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-3(tipo="a")
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Proveedores de internet (ISP)
                p.mb-0 Proporcionan acceso a Internet para garantizar la conectividad de usuarios, empresas y plataformas, permitiendo la navegación, las compras en línea y la gestión de las operaciones digitales.
                p.mb-0
                  strong Ejemplo:
                  |  Claro, Movistar o Tigo suministran la conexión utilizada para administrar una tienda virtual.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Alojamiento web
                p.mb-0 Proporciona el espacio, los recursos tecnológicos y la infraestructura necesarios para almacenar y publicar un sitio web o una tienda virtual en Internet.
                p.mb-0
                  strong Ejemplo:
                  |  Hostinger, GoDaddy o AWS (Amazon Web Services).
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Proveedores de correo electrónico
                p.mb-0 Permiten enviar y recibir mensajes relacionados con promociones, confirmaciones de compra, facturación electrónica y atención al cliente.
                p.mb-0
                  strong Ejemplo:
                  |  Gmail, Outlook o Microsoft 365 envían la confirmación de una compra realizada.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Plataformas de videoconferencia
                p.mb-0 Permiten realizar reuniones virtuales, demostraciones de productos, capacitaciones y atención personalizada cuando la comunicación requiere interacción en tiempo real.
                p.mb-0
                  strong Ejemplo:
                  |  Microsoft Teams o Google Meet para presentar un nuevo catálogo a clientes empresariales.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Redes sociales
                p.mb-0 Funcionan como canales de comunicación y promoción que fortalecen la interacción con los clientes, la difusión de contenidos y el posicionamiento de la marca.
                p.mb-0
                  strong Ejemplo:
                  |  Facebook, Instagram o LinkedIn publican promociones y responden consultas de los usuarios.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-4
                h3.h5 Proveedores de servicios en la nube
                p.mb-0 Ofrecen infraestructura y aplicaciones que soportan los sistemas de comunicación, almacenamiento y colaboración utilizados por las empresas de <em>e-commerce</em>.
                p.mb-0
                  strong Ejemplo:
                  |  Microsoft Azure, Amazon Web Services (AWS) o Google Cloud alojan aplicaciones y servicios de comunicación empresarial.

        p.mb-4(data-aos="zoom-in-right") La selección de un proveedor adecuado debe considerar aspectos relacionados con calidad del servicio, cobertura, disponibilidad, soporte técnico, seguridad y costos operativos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Hostinger es un proveedor global de alojamiento web (<em>hosting</em>) y registro de dominios que permite a empresas y particulares publicar y administrar fácilmente sus páginas web en Internet.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4 Costos

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema2/img_15.png", alt="Una persona escribe en un computador portátil que muestra un explorador de archivos, mientras en el escritorio hay una taza de café, galletas y un jarrón con flores.")
      .bloque-texto-t__texto.color-primario-10.col-12.col-lg-10.mb-0
        p.mb-0 Los costos en las estrategias de medios y comunicación digital corresponden a la inversión necesaria para implementar, administrar y optimizar los canales, herramientas y plataformas utilizados para promocionar productos, fortalecer la comunicación con los clientes y alcanzar los objetivos comerciales. Su adecuada planificación permite seleccionar soluciones acordes con el presupuesto disponible, evaluar la relación entre costo y beneficio, y garantizar el uso eficiente de los recursos destinados a las acciones de marketing y comunicación digital.

    p.mt-4(data-aos="zoom-in-right") A continuación, se presentan las variables asociadas al costo dentro de las estrategias de medios y comunicación digital:

    .row.row-cols-1.row-cols-lg-2.g-4.mb-5
      .col
        .tarjeta.tarjeta--secundario-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 260px; object-position: center;" src="@/assets/curso/tema2/img_16.png", alt="Un hombre sostiene un computador portátil con la bandeja de entrada de correo abierta, mientras otras dos personas conversan al fondo en una sala de reuniones.")
          .p-4
            h4 Tipo de servicio contratado
            p.mb-0 Determina el costo según las funcionalidades, herramientas y características incluidas en el plan seleccionado, como servicios básicos, profesionales o empresariales, de acuerdo con las necesidades de comunicación de la organización.
            p.mb-0
              strong Ejemplo:
              |  una empresa contrata el plan profesional de Mailchimp para automatizar campañas de correo electrónico y acceder a funciones avanzadas de segmentación y análisis.
      .col
        .tarjeta.tarjeta--terciario-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 260px; object-position: center;" src="@/assets/curso/tema2/img_17.png", alt="Ilustración de íconos de WhatsApp, mensajes, contactos y llamadas sobre un fondo verde, representando la comunicación digital.")
          .p-4
            h4 Capacidad requerida
            p.mb-0 Corresponde al volumen de recursos necesarios para operar el servicio, considerando aspectos como número de usuarios, almacenamiento, envíos de mensajes, alcance de campañas o procesamiento de información.
            p.mb-0
              strong Ejemplo:
              |  una tienda virtual adquiere un plan de WhatsApp Business Platform que permite atender miles de conversaciones mensuales con sus clientes.
      .col
        .tarjeta.tarjeta--primario-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 260px; object-position: center;" src="@/assets/curso/tema2/img_18.png", alt="Una persona sostiene una tableta que muestra una videollamada con otra persona, con los controles de cámara, micrófono y finalizar llamada visibles en pantalla.")
          .p-4
            h4 Nivel de soporte ofrecido
            p.mb-0 Influye en el costo de acuerdo con la disponibilidad, los canales de atención, los tiempos de respuesta y el acompañamiento técnico proporcionado por el proveedor durante la utilización del servicio.
            p.mb-0
              strong Ejemplo:
              |  una empresa elige un plan de Microsoft Teams que incluye soporte técnico 24/7 para garantizar la continuidad de sus comunicaciones empresariales.
      .col
        .tarjeta.tarjeta--acento-contenido-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 260px; object-position: center;" src="@/assets/curso/tema2/img_19.png", alt="Dos personas observan juntas la pantalla de un computador de escritorio en una oficina.")
          .p-4
            h4 Condiciones establecidas por cada proveedor
            p.mb-0 Comprende las políticas comerciales, modalidades de contratación, periodos de pago, servicios incluidos, costos adicionales y demás términos definidos por el proveedor para la prestación del servicio.
            p.mb-0
              strong Ejemplo:
              |  Hootsuite ofrece planes con pago mensual o anual, diferentes límites de usuarios y funciones adicionales según el servicio contratado.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Movistar es una empresa de telecomunicaciones que provee servicios de conectividad, tecnología y soluciones digitales para negocios, pymes y corporaciones. Su objetivo es actuar como un aliado estratégico en los procesos de transformación digital de las organizaciones.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.5 KPI

    .row.align-items-center.mb-4
      .col-1.d-none.d-lg-block(data-aos="fade-up")
        img.img-fluid(src="@/assets/curso/tema2/img_20.svg", alt="Ícono de una lupa con una flecha de crecimiento y un documento, simbolizando el análisis de indicadores clave de desempeño.")
      .col-12.col-lg-11
        p.mb-0(data-aos="zoom-in-right") Los indicadores clave de desempeño o <em>Key Performance Indicators</em> (KPI) son métricas utilizadas para medir la eficacia de las estrategias de comunicación digital y el cumplimiento de los objetivos organizacionales. Su propósito consiste en proporcionar información objetiva para apoyar la toma de decisiones y promover la mejora continua.

    p.mb-5(data-aos="zoom-in-right") Entre los KPI más utilizados en medios digitales se encuentran:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-left")
      h5 Figura 1.
      |    Indicadores de desempeño más comunes
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema2/img_21.svg', class="img-fluid d-none d-lg-block", alt="Diagrama circular con seis indicadores clave de desempeño (KPI) alrededor de un círculo central que dice 'Key Performance Indicators (KPI)'. 1. Número de visitas al sitio web: cantidad de usuarios que ingresan al sitio web durante un periodo determinado; ejemplo, la tienda online recibió 5.200 visitas en una semana. 2. Tasa de conversión: porcentaje de visitantes que realizan una acción esperada, como una compra o registro, respecto al total de visitas; ejemplo, de 2.000 visitantes, 80 realizaron una compra (4 %). 3. Alcance de publicaciones: cantidad de personas que visualizan una publicación en un medio digital; ejemplo, una publicación en Facebook alcanzó a 18.000 personas. 4. Nivel de interacción: grado de participación de los usuarios mediante reacciones, comentarios, compartidos, clics o respuestas; ejemplo, una publicación obtuvo 1.200 “me gusta”, 150 comentarios y 300 veces compartida. 5. Costo por adquisición de clientes (CPA): valor promedio invertido para captar un nuevo cliente mediante campañas en medios digitales; ejemplo, la empresa invirtió $60.000 en publicidad para adquirir cada nuevo cliente. 6. Porcentaje de apertura de correos electrónicos: proporción de correos abiertos por los destinatarios respecto al total de mensajes enviados; ejemplo, el 28 % de los correos enviados fueron abiertos.").mb-5
      img(src='@/assets/curso/tema2/img_22.svg', class="img-fluid d-block d-lg-none", alt="Diagrama circular con seis indicadores clave de desempeño (KPI) alrededor de un círculo central que dice 'Key Performance Indicators (KPI)'. 1. Número de visitas al sitio web: cantidad de usuarios que ingresan al sitio web durante un periodo determinado; ejemplo, la tienda online recibió 5.200 visitas en una semana. 2. Tasa de conversión: porcentaje de visitantes que realizan una acción esperada, como una compra o registro, respecto al total de visitas; ejemplo, de 2.000 visitantes, 80 realizaron una compra (4 %). 3. Alcance de publicaciones: cantidad de personas que visualizan una publicación en un medio digital; ejemplo, una publicación en Facebook alcanzó a 18.000 personas. 4. Nivel de interacción: grado de participación de los usuarios mediante reacciones, comentarios, compartidos, clics o respuestas; ejemplo, una publicación obtuvo 1.200 “me gusta”, 150 comentarios y 300 veces compartida. 5. Costo por adquisición de clientes (CPA): valor promedio invertido para captar un nuevo cliente mediante campañas en medios digitales; ejemplo, la empresa invirtió $60.000 en publicidad para adquirir cada nuevo cliente. 6. Porcentaje de apertura de correos electrónicos: proporción de correos abiertos por los destinatarios respecto al total de mensajes enviados; ejemplo, el 28 % de los correos enviados fueron abiertos.").mb-5
      figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  la empresa Google a través de la herramienta Google Analytics permite conocer el número de visitas en un sitio web determinado.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .tarjeta.color-terciario-70.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-2.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_17.svg")
            .col-12.col-md-10.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con logística de distribución y almacenamiento:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=uHvHpgN70yU" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-video

    .row.justify-content-center.mb-0
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-2.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_18.svg")
            .col-12.col-md-10.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Se invita al aprendiz a profundizar en lo relacionado a estrategias de medios y comunicación digital, a través del siguiente libro (página 11-24):
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://8982035.fs1.hubspotusercontent-na1.net/hubfs/8982035/Publicaciones/documentos/publico/Libro-Blanco-de-Marketing-para-eCommerce.pdf" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-pdf
                    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
