<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protección de datos y seguridad digital

    .tarjeta.tarjeta--secundario-5.p-4.mb-0(data-aos="zoom-in-right")
      .row.align-items-center.mb-0
        .col-8.col-sm-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-up")
          figure
            img.img-fluid(src="@/assets/curso/tema3/img_1.svg", alt="Ícono de un candado, simbolizando la protección de datos y la seguridad digital.")
        .col-12.col-lg-11
          p.mb-0 La transformación digital ha incrementado significativamente el volumen de información que las organizaciones recopilan, almacena y procesan diariamente. En este contexto, la protección de datos y la seguridad digital se convierten en factores esenciales para garantizar la confidencialidad, integridad y disponibilidad de la información, así como para fortalecer la confianza de los usuarios en los servicios digitales.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Protección de datos

    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_2.png", alt="Unas manos escriben en un computador portátil mientras se proyecta un holograma de un candado de seguridad rodeado de íconos de documento, nube y carpeta, representando la protección de datos.")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") La protección de datos comprende el conjunto de medidas técnicas, administrativas y legales destinadas a garantizar el adecuado tratamiento de la información personal y empresarial. Su finalidad consiste en prevenir el acceso no autorizado, la pérdida, alteración o uso indebido de los datos. En el comercio electrónico, las organizaciones gestionan información relacionada con nombres, direcciones, correos electrónicos, números telefónicos, hábitos de compra y medios de pago de los clientes. Debido a la sensibilidad de estos datos, resulta indispensable implementar mecanismos que garanticen su seguridad y confidencialidad.
        .tarjeta.tarjeta--terciario-5.p-4(data-aos="zoom-in-right")
          p.mb-0 La adecuada protección de datos contribuye al fortalecimiento de la confianza de los consumidores y favorece el cumplimiento de las disposiciones legales aplicables a los entornos digitales.

    .row.justify-content-center.align-items-center.mb-0.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  cuando un cliente realiza una compra en línea, espera que la empresa proteja su información personal y financiera frente a posibles riesgos o amenazas informáticas. Falabella cuenta con una política de datos personales, con la cual garantizan que el manejo de información personal se realiza de forma legal, segura y transparente.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Normativa

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_3.png')})`}"
        role="img"
        aria-label="Una mano toma un disco de madera con un ícono de verificación, ubicado junto a otros tres discos con íconos de documento, documento con lápiz y documento con verificación."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de datos personales se encuentra regulada por diversas disposiciones legales que establecen derechos, obligaciones y responsabilidades para las organizaciones que recopilan y procesan información. Estas normas buscan garantizar la privacidad de los usuarios, proteger sus derechos y promover el tratamiento responsable de la información por parte de las organizaciones.

    p.mb-4(data-aos="zoom-in-right") A continuación, se relacionan las principales leyes que hacen parte de esta normativa:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 2.
        | Normatividad legal en temas de protección de datos
    .tabla-a.color_primario-20.mb-5(data-aos="zoom-in-right")
      table
        caption Nota. SENA, (2026).
        thead
          tr
            th Norma
            th Descripción
            th Aplicación en <em>e-commerce</em>
        tbody
          tr
            td Constitución Política de Colombia (Artículo 15)
            td Reconoce el derecho de todas las personas a la intimidad, al buen nombre y a conocer, actualizar y rectificar la información registrada sobre ellas en bases de datos.
            td Un cliente puede solicitar la actualización o eliminación de sus datos personales registrados en una tienda virtual.
          tr
            td Ley 1581 de 2012
            td Establece el régimen general para la protección de datos personales, definiendo los principios, derechos de los titulares y obligaciones de quienes realizan el tratamiento de la información.
            td Una tienda virtual debe solicitar autorización para tratar los datos personales de sus clientes y disponer de una política de tratamiento de datos.
          tr
            td Decreto 1377 de 2013
            td Reglamenta parcialmente la Ley 1581 de 2012, estableciendo disposiciones sobre autorización, políticas de tratamiento, derechos de los titulares y responsabilidades de los responsables y encargados del tratamiento.
            td La empresa informa al cliente la finalidad de la recolección de sus datos antes de completar el registro o la compra.
          tr
            td Decreto 1074 de 2015
            td Compila la reglamentación del sector Comercio, Industria y Turismo e incorpora las disposiciones relacionadas con la protección de datos personales y su cumplimiento por parte de las organizaciones.
            td La empresa implementa procedimientos para atender consultas y reclamos relacionados con el tratamiento de datos personales.
          tr
            td Ley 527 de 1999
            td Regula el uso de los mensajes de datos, el comercio y las firmas electrónicos, otorgando validez jurídica a las transacciones realizadas por medios electrónicos.
            td Una compra realizada mediante una tienda virtual tiene validez jurídica cuando cumple los requisitos establecidos por la ley.

    .row.justify-content-center.mb-3
      .col-12.col-lg-8
        .tarjeta.tarjeta--primario-10.p-4.text-center(data-aos="zoom-in-right")
          p.mb-0 El cumplimiento de estas disposiciones permite a las organizaciones operar dentro de parámetros legales y fortalecer la confianza de los usuarios en los servicios digitales.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Delitos informáticos

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-4.mb-lg-0
        p.mb-3(data-aos="zoom-in-right") Los delitos informáticos son conductas ilícitas cometidas mediante el uso de equipos, redes, aplicaciones o sistemas de información, con el propósito de acceder, alterar, destruir, divulgar o utilizar información sin autorización. En el comercio electrónico, estos delitos pueden afectar la seguridad de las transacciones, la confidencialidad de los datos y la continuidad de las operaciones, generando riesgos para las empresas y los usuarios.
        p.mb-0(data-aos="zoom-in-right") Entre los delitos más frecuentes se encuentran los siguientes:
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-01.p-4.px-5.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-0.px-0.py-md-4.px-md-5(tipo="a")
              .py-4.px-5
                h3.h5 Acceso no autorizado
                p.mb-0 Consiste en ingresar a sistemas, cuentas o plataformas sin el permiso del propietario para consultar, modificar o extraer información.
                p.mb-0
                  strong Ejemplo:
                  |  un ciberdelincuente accede al panel administrativo de una tienda virtual utilizando credenciales robadas.
              .py-4.px-5
                h3.h5 Suplantación de identidad
                p.mb-0 Ocurre cuando una persona utiliza la identidad o los datos de otra para realizar transacciones o acceder a servicios de forma fraudulenta.
                p.mb-0
                  strong Ejemplo:
                  |  un atacante utiliza los datos personales de un cliente para realizar compras en línea.
              .py-4.px-5
                h3.h5 Phishing
                p.mb-0 Técnica de engaño que busca obtener información confidencial mediante correos electrónicos, mensajes o sitios web que simulan ser legítimos.
                p.mb-0
                  strong Ejemplo:
                  |  un cliente recibe un correo falso que imita a la tienda virtual y solicita actualizar sus datos bancarios.
              .py-4.px-5
                h3.h5 Malware
                p.mb-0 Son programas maliciosos diseñados para dañar equipos, robar información o alterar el funcionamiento de sistemas informáticos.
                p.mb-0
                  strong Ejemplo:
                  |  un archivo descargado desde un enlace fraudulento instala un programa que captura las credenciales de acceso del usuario.
              .py-4.px-5
                h3.h5 Fraude informático
                p.mb-0 Manipular sistemas o información para obtener beneficios económicos de manera ilegal durante una transacción electrónica.
                p.mb-0
                  strong Ejemplo:
                  |  un atacante modifica el valor de una transacción para pagar un monto inferior al precio real del producto.
              .py-4.px-5
                h3.h5 Interceptación de datos
                p.mb-0 Es el proceso de capturar o acceder de forma ilegal a la información transmitida entre usuarios y plataformas digitales.
                p.mb-0
                  strong Ejemplo:
                  |  un ciberdelincuente intercepta la información enviada durante un proceso de pago en una red no segura.
              .py-4.px-5
                h3.h5 Alteración o destrucción de información
                p.mb-0 Comprende la modificación, eliminación o daño de datos almacenados en sistemas de información sin autorización.
                p.mb-0
                  strong Ejemplo:
                  |  un atacante elimina el registro de pedidos almacenados en la base de datos de una tienda virtual.
              .py-4.px-5
                h3.h5 Ataques de denegación de servicio (DoS/DDoS)
                p.mb-0 Buscan saturar un sistema o servidor para impedir el acceso de los usuarios y afectar la disponibilidad del servicio.
                p.mb-0
                  strong Ejemplo:
                  |  durante una campaña comercial, la tienda virtual deja de funcionar debido a un ataque que sobrecarga el servidor.

    .tarjeta.tarjeta--terciario-5.p-4.d-flex.align-items-cente.mb-4(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-2.col-lg-1.d-none.d-lg-block.mb-0
          figure
            img.img-fluid(src="@/assets/curso/tema3/img_4.svg", alt="")
        .col-12.col-lg-11.mb-0
          p.mb-0 El crecimiento del comercio electrónico ha incrementado la necesidad de implementar mecanismos de prevención y control que permitan reducir la exposición a este tipo de amenazas. La capacitación permanente y la implementación de controles de seguridad contribuyen significativamente a disminuir los riesgos asociados con los delitos informáticos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  los ataques de phishing buscan engañar a los usuarios para obtener información confidencial como contraseñas, datos bancarios o información personal mediante mensajes o sitios web fraudulentos.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Requerimientos de soporte y administración

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema3/img_5.png", alt="Una mano toca un carrito de compras holográfico que emerge de un globo terráqueo con líneas de conexión, junto a íconos de camión de reparto, dinero, teléfono móvil y megáfono, sobre un fondo azul.")
      .bloque-texto-t__texto.color-primario-10.col-12.col-lg-10.mb-0
        p.mb-0 Son los requerimientos, recursos y procedimientos necesarios para garantizar el funcionamiento, la disponibilidad y la continuidad de las plataformas de comercio electrónico. Estos requerimientos permiten administrar los servicios tecnológicos, atender incidentes, realizar mantenimiento, controlar el acceso a los sistemas y brindar soporte oportuno a los usuarios, contribuyendo a la seguridad, estabilidad y eficiencia de las operaciones digitales.

    p.mt-4.mb-4(data-aos="zoom-in-right") Para garantizar el funcionamiento seguro y eficiente de una plataforma de comercio electrónico, es necesario tener en cuenta los siguientes requerimientos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-4.mb-lg-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-acento-contenido-10")
          div(titulo="Gestión de usuarios y permisos")
            p.mb-0 Administra las cuentas de usuario y asigna niveles de acceso según las funciones desempeñadas, garantizando el uso adecuado de la plataforma y la protección de la información.
          div(titulo="Actualización de software")
            p.mb-0 Incorpora nuevas versiones, mejoras de seguridad y correcciones que optimizan el funcionamiento de la plataforma, reducen vulnerabilidades y mantienen la compatibilidad de los servicios.
          div(titulo="Monitoreo de actividades")
            p.mb-0 Supervisa las operaciones realizadas en la plataforma para identificar comportamientos inusuales, detectar incidentes y verificar el correcto funcionamiento de los servicios tecnológicos.
          div(titulo="Realización de copias de seguridad")
            p.mb-0 Genera respaldos periódicos de la información para facilitar su recuperación ante fallas técnicas, pérdida de datos o incidentes que afecten la continuidad de las operaciones.
      .col-8.col-lg-5(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_6.png", alt="Un computador portátil muestra una maqueta de publicación de Instagram, mientras a su alrededor se representan un globo terráqueo con paquetes, un carrito de compras y una calle con un camión de reparto.")

    .row.row-cols-1.row-cols-md-1.row-cols-lg-2.g-4.mb-5
      .col
        .tarjeta.tarjeta--secundario-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 220px; object-position: center;" src="@/assets/curso/tema3/img_7.png", alt="Un hombre sostiene un teléfono móvil mientras en un panel holográfico se muestran un candado con una marca de verificación y un campo de contraseña.")
          .p-4
            h4 Implementación de mecanismos de autenticación
            p.mb-0 Aplica procedimientos para verificar la identidad de los usuarios antes de permitir el acceso a la plataforma, fortaleciendo la seguridad de la información y las transacciones.
      .col
        .tarjeta.tarjeta--terciario-5.border.shadow.overflow-hidden.h-100(data-aos="fade-up")
          img.w-100.object-fit-cover(style="height: 220px; object-position: center;" src="@/assets/curso/tema3/img_8.png", alt="Un hombre toca un ícono holográfico de candado junto a un panel de inicio de sesión con campos de usuario y contraseña.")
          .p-4
            h4 Control de accesos
            p.mb-0 Regula el ingreso y uso de los recursos tecnológicos mediante permisos y restricciones, asegurando que cada usuario acceda únicamente a la información y funciones autorizadas.

    .bloque-texto-g.color-secundario-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_9.png')})`}"
        role="img"
        aria-label="Unas manos escriben en un teclado mientras se proyecta un holograma de un carrito de compras junto a íconos de candado y datos digitales, en tonos turquesa."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También resulta importante establecer procedimientos para la atención de incidentes de seguridad, recuperación de información y gestión de riesgos tecnológicos. Estas actividades permiten minimizar vulnerabilidades y responder oportunamente ante posibles amenazas. La combinación de medidas técnicas y administrativas fortalece la protección de los datos y contribuye a garantizar la seguridad de las operaciones desarrolladas en entornos de comercio electrónico.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  algunas compañías implementan medidas de autenticación y seguridad de Google a través de la solución de Google Cloud, la cual verifica quien está intentando acceder (el usuario o la aplicación) y determina qué recursos puede utilizar y qué acciones puede realizar una vez verificada su identidad.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    .row.justify-content-center.mb-5.mt-5
      .col-12.col-lg-8
        .tarjeta.color-terciario-70.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-2.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_17.svg")
            .col-12.col-md-10.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con protección de datos y seguridad digital:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=_sjIHKMeeeg&t=1752s" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-video

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-2.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_18.svg")
            .col-12.col-md-10.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Se invita al aprendiz a profundizar en protección de datos y seguridad digital, a través del siguiente artículo:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.mintic.gov.co/portal/715/articles-403023_recurso_2.pdf" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-pdf
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
