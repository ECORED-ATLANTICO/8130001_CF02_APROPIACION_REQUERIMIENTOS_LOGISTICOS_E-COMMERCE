<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Pasarelas de pago y soporte transaccional

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema4/img_1.png", alt="Una mano sostiene un teléfono móvil frente a un datáfono de pago, en el contexto de una transacción electrónica.")
      .bloque-texto-t__texto.color-primario-10.col-12.col-lg-10.mb-0
        p.mb-0 Las transacciones electrónicas constituyen uno de los procesos más importantes dentro del comercio electrónico, ya que permiten concretar la compra y venta de productos o servicios mediante medios digitales. Para garantizar operaciones seguras, ágiles y confiables, las organizaciones utilizan pasarelas de pago y sistemas de soporte transaccional que facilitan la comunicación entre compradores, vendedores y entidades financieras.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Pasarelas de pago

    .row.align-items-center.mb-4
      .col-12.col-lg-7
        p.mb-3(data-aos="zoom-in-right") Las pasarelas de pago son plataformas tecnológicas que permiten procesar, validar y autorizar pagos realizados a través de medios electrónicos. Su función principal consiste en facilitar la transferencia segura de información entre el cliente, el comercio y la entidad financiera encargada de aprobar la transacción. Estas herramientas permiten que los usuarios realicen pagos mediante tarjetas débito, tarjetas crédito, transferencias bancarias, billeteras digitales y otros mecanismos electrónicos. Gracias a su utilización, las empresas pueden ofrecer alternativas de pago que mejoran la experiencia de compra y amplían sus oportunidades de negocio.
        .tarjeta.tarjeta--acento-contenido-5.p-4(data-aos="zoom-in-right")
          p.mb-0 En el comercio electrónico, las pasarelas de pago contribuyen a generar confianza en los consumidores al proporcionar procesos seguros para la gestión de transacciones financieras.
      .col-8.col-lg-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema4/img_2.png",, class="img-fluid" alt="Una mujer sonríe mientras sostiene una tarjeta de crédito frente a un computador portátil, con ilustraciones de un carrito de compras, cajas y una esfera del mundo rodeada de paquetes.")

    p.mb-4(data-aos="zoom-in-right") Los componentes principales de la pasarela de pagos son:

    SlyderF.circl-arrow.mb-5(columnas="col-lg-4")
      .tarjeta.tarjeta--blanca.border.shadow.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/tema4/img_3.svg", alt="")
        h4.text-center Comprador
        p.text-center Persona que realiza la compra y proporciona la información necesaria para efectuar el pago mediante un medio electrónico autorizado.
        p.text-center
          strong Ejemplo:
          |  un cliente paga un pedido utilizando una tarjeta de crédito desde la tienda virtual.
      .tarjeta.tarjeta--blanca.border.shadow.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/tema4/img_4.svg", alt="")
        h4.text-center Comercio electrónico
        p.text-center Empresa o plataforma que ofrece productos o servicios y solicita la autorización del pago para completar la transacción.
        p.text-center
          strong Ejemplo:
          |  una tienda virtual envía la solicitud de pago a la pasarela al finalizar la compra.
      .tarjeta.tarjeta--blanca.border.shadow.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/tema4/img_5.svg", alt="")
        h4.text-center Entidad financiera
        p.text-center Institución encargada de autorizar o rechazar la transacción según la disponibilidad de fondos y las políticas de seguridad.
        p.text-center
          strong Ejemplo:
          |  Bancolombia autoriza el pago realizado con una tarjeta débito.
      .tarjeta.tarjeta--blanca.border.shadow.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/tema4/img_6.svg", alt="")
        h4.text-center Medio de pago
        p.text-center Instrumento utilizado por el cliente para realizar la transacción electrónica de forma segura.
        p.text-center
          strong Ejemplo:
          |  tarjeta de crédito, tarjeta débito, transferencia bancaria o billetera digital.
      .tarjeta.tarjeta--blanca.border.shadow.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/tema4/img_7.svg", alt="")
        h4.text-center Confirmación de la transacción
        p.text-center Resultado del proceso de validación que informa al comercio y al cliente si el pago fue aprobado o rechazado.
        p.text-center
          strong Ejemplo:
          |  la tienda virtual muestra el mensaje "Pago aprobado" y genera la orden de compra.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Treli es una plataforma de tecnología financiera que ayuda a las empresas a automatizar sus procesos de facturación, cobro y gestión de suscripciones.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Tipos

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_8.png')})`}"
        role="img"
        aria-label="Una mujer sonríe mientras sostiene una taza y observa la pantalla de un computador portátil en una cafetería."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen diferentes tipos de pasarelas de pago, las cuales pueden clasificarse según la forma en que procesan las transacciones y la experiencia que ofrecen al usuario durante el proceso de compra. Cada una presenta características específicas relacionadas con la gestión del pago, la integración con la tienda virtual, el nivel de control del comercio y la seguridad de la información. Las más empleadas por las empresas de comercio digital son:

    .row.justify-content-center.align-items-start.mb-4
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="flip-left")
        figure
          img(src="@/assets/curso/tema4/img_9.png",, class="img-fluid" alt="Una mano sostiene un teléfono móvil mientras escribe en un computador portátil, con ilustraciones de un carrito de compras, cajas y monedas, en el contexto de una compra en línea.")
      .col-12.col-lg-9.mb-0(data-aos="flip-left")
        TabsA.color-acento-botones.mb-3.uno
          .tarjeta.color-primario-10.h-100.p-5(titulo="Pasarela redireccionada")
            p.mb-0 Redirige al comprador al sitio web de la pasarela para completar el pago. Posteriormente, el usuario regresa a la tienda virtual una vez finalizada la transacción.
            p.mb-0
              strong Ejemplo:
              |  PayPal, PayU, Mercado Pago.
          .tarjeta.color-primario-10.h-100.p-5(titulo="Pasarela integrada")
            p.mb-0 Procesa el pago directamente desde la tienda virtual, permitiendo que el cliente complete la transacción sin abandonar el sitio web del comercio.
            p.mb-0
              strong Ejemplo:
              |  Wompi, ePayco.
          .tarjeta.color-primario-10.h-100.p-5(titulo="Pasarela mediante API")
            p.mb-0 Se integra con la plataforma mediante interfaces de programación, ofreciendo mayor personalización, control y adaptación del proceso de pago según las necesidades del comercio.
            p.mb-0
              strong Ejemplo:
              |  Stripe, PayU API.
          .tarjeta.color-primario-10.h-100.p-5(titulo="Pasarela para dispositivos móviles")
            p.mb-0 Facilita el procesamiento de pagos desde aplicaciones móviles o sitios web adaptados, optimizando la experiencia de compra en teléfonos inteligentes y tabletas.
            p.mb-0
              strong Ejemplo:
              |  Mercado Pago, PayPal, Stripe.
          .tarjeta.color-primario-10.h-100.p-5(titulo="Pasarela omnicanal")
            p.mb-0 Integra pagos provenientes de diferentes canales, como tiendas virtuales, aplicaciones móviles, puntos de venta y enlaces de pago, centralizando la gestión de las transacciones.
            p.mb-0
              strong Ejemplo:
              |  PayU, Bold.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-5.mb-0
        p.mb-4(data-aos="zoom-in-right") La selección del tipo de pasarela depende de factores como seguridad, costos, facilidad de integración y necesidades específicas de la organización. Las organizaciones deben proyectar escenarios de crecimiento, comportamiento del consumidor y necesidades logísticas para mantener competitividad en operaciones de <em>e-commerce</em>.

      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  MercadoLibre ofrece a sus clientes diferentes medios de pago tales como tarjeta débito, tarjeta de crédito, entre otros, facilitando el pago de sus productos de una manera sencilla y eficiente.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Operación

    p.mb-4(data-aos="zoom-in-right") Consiste en una secuencia de actividades que permiten gestionar de forma segura una transacción electrónica entre el cliente, el comercio y la entidad financiera. Desde la selección del producto hasta la confirmación del pago, cada etapa valida la información y protege los datos financieros para garantizar la integridad, confidencialidad y confiabilidad de la operación. La siguiente figura presenta de manera resumida el funcionamiento de una pasarela de pagos durante una compra en el comercio electrónico.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          |    Operación de una pasarela de pagos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema4/img_10.svg', class="img-fluid d-none d-lg-block", alt="Diagrama con seis pasos de la operación de una pasarela de pagos. 1. Selección del producto o servicio: el cliente elige el producto o servicio en la tienda virtual. 2. Selección del medio de pago: el cliente selecciona el medio de pago disponible, como tarjeta, PSE o billetera digital. 3. Envío seguro de la información: la pasarela recibe y transmite la información de forma segura. 4. Validación por la entidad financiera: la entidad financiera verifica la información y valida la operación. 5. Respuesta de la transacción: la entidad financiera autoriza o rechaza la transacción. 6. Comunicación del resultado: el resultado se comunica al comercio y al cliente en segundos, siendo el resultado de la transacción aprobada o rechazada. Un recuadro adicional indica que la seguridad se mantiene en todo el proceso: la información viaja cifrada y protegida para garantizar la confidencialidad y la integridad de los datos financieros.").mb-5
          img(src='@/assets/curso/tema4/img_11.svg', class="img-fluid d-block d-lg-none", alt="Diagrama con seis pasos de la operación de una pasarela de pagos. 1. Selección del producto o servicio: el cliente elige el producto o servicio en la tienda virtual. 2. Selección del medio de pago: el cliente selecciona el medio de pago disponible, como tarjeta, PSE o billetera digital. 3. Envío seguro de la información: la pasarela recibe y transmite la información de forma segura. 4. Validación por la entidad financiera: la entidad financiera verifica la información y valida la operación. 5. Respuesta de la transacción: la entidad financiera autoriza o rechaza la transacción. 6. Comunicación del resultado: el resultado se comunica al comercio y al cliente en segundos, siendo el resultado de la transacción aprobada o rechazada. Un recuadro adicional indica que la seguridad se mantiene en todo el proceso: la información viaja cifrada y protegida para garantizar la confidencialidad y la integridad de los datos financieros.").mb-5
          figcaption Nota. SENA, (2026).

    p.mb-4(data-aos="zoom-in-right") La eficiencia en la operación de las pasarelas de pago contribuye a mejorar la experiencia del usuario y a incrementar la confianza en las compras realizadas por medios electrónicos.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Soporte tecnológico

    .row.align-items-center.mb-4
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--secundario-5.p-4(data-aos="zoom-in-right")
          .row.align-items-center.mb-4
            .col-3.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema4/img_12.svg", alt="Ícono de una persona con auriculares de atención al cliente y una herramienta, simbolizando el soporte tecnológico.")
            .col-12.col-lg-10
              p.mb-0 Son las actividades técnicas orientadas a garantizar el funcionamiento, mantenimiento y disponibilidad de los equipos, aplicaciones, redes y plataformas utilizadas en el comercio electrónico. Su propósito es prevenir y solucionar incidentes, optimizar el desempeño de los sistemas y asegurar la continuidad de las operaciones. Por otro lado, garantiza la continuidad operativa de los servicios transaccionales y la correcta integración con las plataformas de comercio electrónico.
      .col-8.col-lg-3.mb-0
        figure
          img(src="@/assets/curso/tema4/img_13.png", class="img-fluid", alt="Un hombre con audífonos de atención al cliente sonríe frente a un computador portátil mientras sostiene un destornillador, con ilustraciones de un carrito de compras, cajas y monedas, simbolizando el soporte tecnológico.")
    
    p.mb-4(data-aos="zoom-in-right") Entre las actividades de soporte se encuentran:

    .tarjeta.tarjeta--fondo-img-01.p-4.px-5.mb-0(data-aos="zoom-in-right")
      .row.align-items-center
        .col-8.col-lg-3.d-none.d-lg-block.text-center
          figure
            img.img-fluid(src="@/assets/curso/tema4/img_14.png", alt="Un servidor apilado junto a una nube con flechas de sincronización y una carpeta amarilla, simbolizando la actualización de sistemas.")
        .col-12.col-lg-9
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-5(tipo="a")
              .py-4.px-5
                h3.h5 Actualización de sistemas
                p.mb-0 Incorpora nuevas versiones de software, parches de seguridad y mejoras funcionales para optimizar el rendimiento, corregir vulnerabilidades y mantener la compatibilidad de la plataforma con otros servicios tecnológicos.
              .py-4.px-5
                h3.h5 Monitoreo de operaciones
                p.mb-0 Supervisa continuamente el funcionamiento de la plataforma, las transacciones y los recursos tecnológicos para detectar anomalías, prevenir fallas y garantizar la continuidad de las operaciones.
              .py-4.px-5
                h3.h5 Solución de incidentes
                p.mb-0 Restablece el funcionamiento de los servicios mediante la identificación, análisis y corrección de fallas que afectan la operación de la plataforma o la experiencia del usuario.
              .py-4.px-5
                h3.h5 Mantenimiento de conexiones con entidades financieras
                p.mb-0 Garantiza la disponibilidad y el correcto funcionamiento de la comunicación entre la plataforma de <em>e-commerce</em>, las pasarelas de pago y las entidades financieras durante las transacciones electrónicas.
              .py-4.px-5
                h3.h5 Gestión de seguridad informática
                p.mb-0 Implementa controles, políticas y mecanismos de protección para prevenir accesos no autorizados, salvaguardar la información y reducir los riesgos asociados a amenazas informáticas.

    p.mt-4.mb-3(data-aos="zoom-in-right") Además, el soporte tecnológico permite identificar posibles fallas en el procesamiento de pagos y adoptar acciones correctivas para minimizar afectaciones sobre los clientes y las operaciones comerciales.
    p.mb-4(data-aos="zoom-in-right") Una adecuada gestión del soporte contribuye a mantener la disponibilidad del servicio y a reducir riesgos asociados con interrupciones o errores transaccionales.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Bold brinda soporte técnico a sus clientes para atender incidentes o fallas que puedan presentarse en su plataforma durante el procesamiento de transacciones financieras, garantizando la continuidad y confiabilidad del servicio.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 Facturación electrónica

    .row.align-items-center.mb-4
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_16.png", alt="Una mano sostiene un largo recibo o factura impresa, con ilustraciones de un carrito de compras, cajas y un camión de reparto en una calle.")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") La facturación electrónica es el proceso mediante el cual las organizaciones generan, transmiten y almacenan documentos tributarios en formato digital. Este mecanismo facilita el control de las operaciones comerciales y mejora la gestión administrativa de las empresas. En Colombia, la facturación electrónica forma parte de los procesos de transformación digital impulsados por la autoridad tributaria y constituye un requisito para múltiples actividades empresariales.
        .tarjeta.tarjeta--terciario-5.p-4(data-aos="zoom-in-right")
          p.mb-0 Entre sus beneficios se encuentran la reducción de costos operativos, la optimización de procesos administrativos, la mejora en la trazabilidad de las operaciones y el fortalecimiento del control financiero.
          p.mb-0 La integración entre las plataformas de comercio electrónico y los sistemas de facturación electrónica permite automatizar procesos y mejorar la eficiencia operativa.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Servientrega dispone de un portal web que permite a los usuarios acceder y descargar electrónicamente sus facturas cuando estas han sido generadas y puestas a disposición por la organización.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    .row.justify-content-center.mb-5.mt-4
      .col-12.col-lg-8
        .tarjeta.color-terciario-70.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-8.col-sm-3.col-lg-2
              figure
                img(src="@/assets/curso/tema1/img_17.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con pasarelas de pago y soporte transaccional:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=XfAEtsoDCdI" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-video

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-8.col-sm-2.col-lg-2
              figure
                img(src="@/assets/curso/tema1/img_18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Se invita al aprendiz a profundizar en pasarelas de pago y soporte transaccional, tal como se muestra en el siguiente artículo:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://bibliotecadigital.iue.edu.co/server/api/core/bitstreams/ef97a47b-0fc9-4c2d-b21d-747de1849a21/content" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-video

    .row.justify-content-center.mb-0
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-03.py-3.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-8.col-lg-4.d-none.d-lg-block.mb-0
              img(src="@/assets/curso/tema1/img_19.png", class="img-fluid", alt="Un micrófono retro de color amarillo sobre una base, representando el podcast sugerido.")
            .col-12.col-lg-8
              h2.mb-5.text-white A continuación, se invita a ir al siguiente podcast:
              TarjetaAudio.color-acento-contenido.p-4.mb-0(
                texto="Pasarelas de pago y experiencia del usuario en el comercio electrónico."
                :audio="require_src('@/assets/curso/podcast/podcast_2.mp3')"
                tiempo
              )
</template>

<script>
export default {
  name: 'Tema4',
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
