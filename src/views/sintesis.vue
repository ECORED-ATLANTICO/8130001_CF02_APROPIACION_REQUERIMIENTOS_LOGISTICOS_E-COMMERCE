<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .bloque-texto-g.bloque-texto-g--inverso.color-terciario-10.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        style="background-image: url('@/assets/curso/sintesis/img_1.png')"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Tecnología y transacciones en <em>e-commerce</em> aborda la gestión del servicio y el soporte tecnológico, integrando infraestructura y requerimientos de usuarios y administradores; continúa con la estrategia de medios y comunicación digital mediante la selección de canales, servicios de comunicación e indicadores de desempeño; desarrolla la protección de datos y la seguridad digital considerando normativa, delitos informáticos y requerimientos de soporte; asimismo, analiza las pasarelas de pago y el soporte transaccional, incluyendo operación, facturación electrónica e integración contable; y finaliza con las pruebas de calidad del servicio y la protección de transacciones  
  
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Estructura jerárquica del componente formativo “Tecnología y transacciones en e-commerce”. Parte de un tema central y se organiza en seis ejes que integran la gestión del servicio y el soporte tecnológico, las estrategias de comunicación digital, la protección de datos y la seguridad, las pasarelas de pago, las pruebas y el control de calidad, y la protección de las transacciones con cumplimiento normativo. Cada eje agrupa subtemas relacionados que desarrollan aspectos operativos, técnicos, normativos y de gestión para comprender el funcionamiento integral del comercio electrónico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
