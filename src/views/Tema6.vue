<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Protección de transacciones financieras y cumplimiento normativo

    .row.align-items-center.mb-0
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema6/img_1.png", alt="Una mano sostiene un lápiz sobre unos documentos financieros, junto a una calculadora y un computador portátil.")
      .col-12.col-lg-9
        .tarjeta.tarjeta--secundario-5.p-4(data-aos="zoom-in-right")
          p.mb-3 Las transacciones financieras constituyen uno de los procesos más sensibles dentro del comercio electrónico, debido a que involucran el intercambio de información económica y datos personales de los usuarios.
          p.mb-0 Por esta razón, las organizaciones deben implementar mecanismos de protección que garanticen la seguridad de las operaciones, minimicen riesgos y aseguren el cumplimiento de la normativa aplicable a los entornos digitales.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Riesgos

    p.mb-4(data-aos="zoom-in-right") Las operaciones realizadas mediante plataformas digitales están expuestas a diversos riesgos que pueden afectar la seguridad de la información, la continuidad del servicio y la confianza de los usuarios. Estos riesgos pueden originarse por factores tecnológicos, errores humanos o acciones malintencionadas de terceros.

    .tarjeta.tarjeta--terciario-5.p-4.mb-5(data-aos="zoom-in-right")
      p.mb-0 Entre los riesgos más comunes se encuentran el fraude electrónico, robo de identidad, suplantación de usuarios, acceso no autorizado a sistemas, interceptación de información financiera, ataques informáticos y pérdida de datos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-4.mb-lg-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-acento-contenido-10")
          div(titulo="<em>Phishing</em>")
            p.mb-0 Consiste en el envío de mensajes o la creación de sitios web falsos para engañar a los usuarios y obtener información financiera o credenciales de acceso.
            p.mb-0
              strong Ejemplo:
              |  un cliente recibe un correo que imita a una tienda virtual y entrega los datos de su tarjeta bancaria.
          div(titulo="Suplantación de identidad")
            p.mb-0 Ocurre cuando un tercero utiliza la información personal o financiera de un usuario para realizar transacciones sin autorización.
            p.mb-0
              strong Ejemplo:
              |  un delincuente utiliza los datos de una tarjeta de crédito robada para realizar una compra en línea.
          div(titulo="Intercepción de información")
            p.mb-0 Se presenta cuando los datos transmitidos durante una transacción son capturados por personas no autorizadas debido a conexiones o sistemas inseguros.
            p.mb-0
              strong Ejemplo:
              |  un atacante intercepta la información de pago mientras el cliente utiliza una red Wi-Fi pública sin protección.
          div(titulo="<em>Malware</em>")
            p.mb-0 Corresponde a programas maliciosos que buscan capturar información financiera, alterar el funcionamiento de los sistemas o facilitar accesos no autorizados.
            p.mb-0
              strong Ejemplo:
              |  un software malicioso registra las credenciales bancarias ingresadas por el usuario durante una compra.
      .col-8.col-lg-5(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema6/img_2.png", alt="Una persona con capucha, guantes negros y una máscara blanca sostiene el cierre de su chaqueta, con ilustraciones de un globo terráqueo con paquetes y un carrito de compras alrededor.")

    .tarjeta.tarjeta--fondo-img-01.p-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col-4.col-lg-3.d-none.d-lg-block.text-center
          img.img-fluid(src="@/assets/curso/tema6/img_3.png", alt="Una carpeta amarilla con tarjetas dentro y un ícono de huella digital en un círculo azul oscuro, simbolizando la protección de información financiera.")
        .col-12.col-lg-9
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-5(tipo="a")
              .py-4.px-5
                h3.h5 Fraude en transacciones
                p.mb-0 Comprende acciones dirigidas a realizar pagos, devoluciones o compras utilizando información falsa o medios de pago obtenidos de forma ilícita.
                p.mb-0
                  strong Ejemplo:
                  |  un comprador utiliza una tarjeta clonada para adquirir productos en una tienda virtual.
              .py-4.px-5
                h3.h5 Acceso no autorizado
                p.mb-0 Se produce cuando una persona ingresa a sistemas, cuentas o plataformas sin los permisos correspondientes para consultar o modificar información.
                p.mb-0
                  strong Ejemplo:
                  |  un atacante accede al panel administrativo de la tienda virtual mediante credenciales comprometidas.
              .py-4.px-5
                h3.h5 Vulnerabilidades del sistema
                p.mb-0 Corresponden a fallas de configuración, software desactualizado o errores técnicos que pueden ser aprovechados para comprometer la seguridad de las transacciones.
                p.mb-0
                  strong Ejemplo:
                  |  una plataforma sin actualizaciones de seguridad permite la explotación de una vulnerabilidad conocida.
              .py-4.px-5
                h3.h5 Indisponibilidad del servicio
                p.mb-0 Ocurre cuando la plataforma o los servicios de pago dejan de estar disponibles, afectando la realización de las transacciones electrónicas.
                p.mb-0
                  strong Ejemplo:
                  |  durante un ataque de denegación de servicio (DDoS), los clientes no pueden completar el pago de sus compras.

    p.mb-3(data-aos="zoom-in-right") La identificación y evaluación de riesgos permite a las organizaciones implementar controles preventivos y fortalecer los mecanismos de protección asociados a las transacciones electrónicas.
    p.mb-4(data-aos="zoom-in-right") Cuando un ciberdelincuente intenta obtener información bancaria mediante correos electrónicos falsos, se presenta un riesgo de fraude que puede afectar tanto al usuario como a la organización.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  empresas de <em>e-commerce</em> como Temu implementan estrategias de comunicación dirigidas a sus clientes para promover prácticas seguras de compra y prevenir posibles fraudes o estafas en entornos digitales.
            .col-12.col-lg-2.d-none.d-lg-flex.align-items-center.justify-content-center.mb-0
              figure.mb-0
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Sistemas de protección

    p.mb-4(data-aos="zoom-in-right") Los sistemas de protección corresponden al conjunto de herramientas, procedimientos y tecnologías implementadas para garantizar la seguridad de las transacciones financieras y la información intercambiada durante las operaciones digitales. Entre los mecanismos más utilizados se encuentran:

    .tabla-a.color_primario-20.mb-5(data-aos="zoom-in-right")
      table
        caption Tabla 4. Diferentes sistemas de protección
        thead
          tr
            th Sistema de protección
            th Concepto
            th Ejemplo
        tbody
          tr
            td Cifrado de datos
            td Convierte la información en un formato codificado para impedir que sea leída por personas no autorizadas durante su almacenamiento o transmisión.
            td La información de la tarjeta de crédito viaja cifrada entre el navegador del cliente y la tienda virtual.
          tr
            td Autenticación multifactor
            td Verifica la identidad del usuario mediante dos o más mecanismos de autenticación antes de permitir el acceso a la plataforma o autorizar una transacción.
            td Después de ingresar la contraseña, el cliente confirma su identidad mediante un código enviado al teléfono móvil.
          tr
            td Certificados digitales
            td Garantizan la autenticidad del sitio web y establecen conexiones seguras para proteger la información intercambiada entre el usuario y la plataforma.
            td El navegador muestra el candado de seguridad y la dirección https:// al ingresar a una tienda virtual.
          tr
            td Firewalls
            td Controlan el tráfico de información que entra y sale de la red, bloqueando conexiones o actividades que representen un riesgo para los sistemas.
            td El firewall impide intentos de acceso no autorizados al servidor donde funciona la tienda virtual.
          tr
            td Sistemas de detección de intrusiones
            td Identifican comportamientos sospechosos o intentos de ataque contra la infraestructura tecnológica, generando alertas para facilitar una respuesta oportuna.
            td El sistema detecta múltiples intentos fallidos de inicio de sesión desde una dirección IP desconocida.
          tr
            td Monitoreo de actividades
            td Supervisa continuamente las operaciones y los eventos registrados en la plataforma para detectar anomalías, fraudes o incidentes de seguridad.
            td El sistema registra los accesos al panel administrativo y alerta sobre actividades inusuales.
          tr
            td Protocolos de seguridad para la transmisión de información
            td Protegen la comunicación entre los diferentes componentes del comercio electrónico mediante protocolos que garantizan la confidencialidad e integridad de los datos.
            td La tienda virtual utiliza el protocolo HTTPS con TLS para transmitir de forma segura la información de los clientes.

    .row.align-items-stretch.mb-0
      .col-12.col-lg-5.mb-0
        .tarjeta.tarjeta--terciario-5.p-4.h-100(data-aos="zoom-in-right")
          p.mb-0 Estas soluciones permiten reducir vulnerabilidades y proteger los datos financieros frente a amenazas internas y externas. Además, contribuyen a fortalecer la confianza de los usuarios en las plataformas de comercio electrónico.
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.h-100.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-9.mb-0
              p.mb-0
                strong Ejemplo:
                |  empresas como Mercado Libre implementan múltiples mecanismos de autenticación y validación de identidad con el fin de fortalecer la seguridad de las cuentas de usuario. Entre estos mecanismos se encuentran el reconocimiento facial, los códigos QR, las llaves de acceso y la verificación mediante teléfono móvil o correo electrónico.
            .col-12.col-lg-3.d-none.d-lg-flex.align-items-center.justify-content-center.mb-0
              figure.mb-0
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Soporte

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema6/img_4.png", alt="Un dedo toca un panel holográfico de escaneo de huella digital, con líneas de código y datos digitales proyectados alrededor de una persona con capucha.")
      .bloque-texto-t__texto.color-primario-10.col-12.col-lg-10.mb-0
        p.mb-0 El soporte asociado a la protección de transacciones financieras son las actividades orientadas a garantizar el funcionamiento continuo de los sistemas de seguridad implementados por la organización.
        p.mb-0 Estas actividades incluyen monitoreo permanente, actualización de aplicaciones, gestión de incidentes, mantenimiento preventivo, análisis de vulnerabilidades y recuperación de información ante posibles fallas o ataques informáticos.

    p.mt-4.mb-3(data-aos="zoom-in-right") Asimismo, el soporte permite verificar el cumplimiento de políticas de seguridad y asegurar que los controles implementados continúen siendo efectivos frente a nuevas amenazas digitales.
    p.mb-4(data-aos="zoom-in-right") Una adecuada gestión del soporte contribuye a mantener la estabilidad de los sistemas y a minimizar el impacto de posibles incidentes sobre las operaciones comerciales.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.4 Normativa aplicable a transacciones electrónicas

    .bloque-texto-g.color-secundario-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_5.png')})`}"
        role="img"
        aria-label="Libros de derecho abiertos junto a un mazo de juez, una balanza de la justicia y una pluma, sobre un escritorio."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son las disposiciones legales que regulan la realización de operaciones comerciales mediante medios digitales. Estas normas establecen los requisitos para garantizar la validez jurídica de las transacciones, la protección de la información, la seguridad de los pagos y los derechos de consumidores y comerciantes en el comercio electrónico; además de proteger a consumidores, empresas y entidades participantes en los procesos de comercio electrónico.

    p.mb-4(data-aos="zoom-in-right") En Colombia, la normatividad que aplica para este tipo de actividades son las siguientes:

    .tabla-a.color_primario-20.mb-5(data-aos="zoom-in-right")
      table
        caption Tabla 5. Normatividad en transacciones electrónicas
        thead
          tr
            th Norma
            th Descripción
            th Aplicación en <em>e-commerce</em>
        tbody
          tr
            td Constitución Política de Colombia (1991)
            td Reconoce derechos fundamentales como la intimidad, el hábeas data y la protección de la información personal en medios físicos y digitales.
            td Un cliente puede solicitar la actualización o eliminación de sus datos personales registrados en una tienda virtual.
          tr
            td Ley 527 de 1999
            td Regula el comercio electrónico y otorga validez jurídica a los mensajes de datos, las firmas electrónicas y las firmas digitales.
            td Una orden de compra realizada por Internet tiene validez legal cuando cumple los requisitos establecidos por la ley.
          tr
            td Ley 1480 de 2011 – Estatuto del Consumidor
            td Establece los derechos y deberes de consumidores y proveedores, incluyendo las ventas realizadas por medios electrónicos.
            td La tienda virtual informa las características, el precio y las condiciones de devolución antes de finalizar la compra.
          tr
            td Ley 1581 de 2012
            td Regula el tratamiento de los datos personales y define las obligaciones de quienes recolectan, almacenan y utilizan esta información.
            td La empresa solicita autorización al cliente para el tratamiento de sus datos personales durante el proceso de compra.
          tr
            td Decreto 1074 de 2015
            td Compila la reglamentación del sector Comercio, Industria y Turismo, incluyendo disposiciones relacionadas con comercio electrónico y protección de datos personales.
            td La empresa implementa procedimientos para atender consultas y reclamos sobre transacciones y tratamiento de datos.

    p.mb-4(data-aos="zoom-in-right") En consecuencia, la protección de transacciones financieras no depende únicamente de la implementación de herramientas tecnológicas, sino también del cumplimiento de normas, políticas y procedimientos que contribuyan a garantizar la transparencia, seguridad y confiabilidad de las operaciones desarrolladas en entornos de comercio electrónico.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Mercado Libre cuenta con una política de tratamiento de datos personales, para la protección de la información de sus clientes.
            .col-12.col-lg-2.d-none.d-lg-flex.align-items-center.justify-content-center.mb-0
              figure.mb-0
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
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con protección de transacciones financieras y cumplimiento normativo:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=TPyJIfK1NT4" target="_blank")
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
                  p.mb-0 Se invita al aprendiz a profundizar en protección de transacciones financieras y cumplimiento normativo, a través del siguiente libro (página 207-211):
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-video

</template>

<script>
export default {
  name: 'Tema6',
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
