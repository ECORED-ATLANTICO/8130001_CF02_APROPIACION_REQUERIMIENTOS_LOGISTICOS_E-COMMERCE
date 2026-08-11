<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario-10.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img_1.png')})`}"
        role="img"
        aria-label="Una mujer sentada revisa su teléfono móvil frente a un computador portátil abierto, en un ambiente doméstico, en el contexto de una compra en línea."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Tecnología y transacciones en <em>e-commerce</em> aborda los elementos tecnológicos y operativos que soportan las actividades comerciales desarrolladas en entornos digitales. Actualmente, las organizaciones requieren plataformas tecnológicas, sistemas de comunicación y mecanismos seguros de transacción que permitan garantizar continuidad operativa, protección de la información y satisfacción del cliente.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-3
        figure
          img(src="@/assets/curso/introduccion/img_2.png", class="img-fluid", alt="Una persona interactúa con un computador portátil que muestra una tienda virtual con productos de ropa, mientras a su alrededor se observan figuras de juguete tipo robot y contenedores que representan el proceso de compra y distribución en el comercio electrónico.")
      .col-lg-9
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-3 Su importancia radica en que permite comprender la relación existente entre gestión del servicio, soporte tecnológico, medios de comunicación, protección de datos y sistemas de pago electrónicos. Estos elementos son fundamentales para asegurar la disponibilidad de los servicios, la integridad de la información y la confiabilidad de las operaciones comerciales realizadas mediante canales digitales.

                p.mb-3 El tema se abordará de manera progresiva, iniciando con la gestión del servicio y el soporte tecnológico requerido para las operaciones de <em>e-commerce</em>. Posteriormente, se desarrollarán aspectos relacionados con estrategias de medios, comunicación digital, protección de datos y seguridad informática. Finalmente, se estudiarán las pasarelas de pago, el soporte transaccional, las pruebas de servicio y los mecanismos de protección de transacciones financieras, integrando criterios de calidad, seguridad y cumplimiento normativo.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
