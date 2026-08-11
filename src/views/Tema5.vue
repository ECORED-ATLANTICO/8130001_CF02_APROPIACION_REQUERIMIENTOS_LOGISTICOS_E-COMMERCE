<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Pruebas y control de calidad del servicio

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario-5.p-3.p-sm-4.p-md-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_1.png')})`}"
        role="img"
        aria-label="Una mujer sonríe mientras sostiene un teléfono móvil frente a un computador, en una bodega con cajas de cartón apiladas."
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La calidad del servicio constituye un factor determinante para el éxito de las operaciones de comercio electrónico. Los usuarios esperan plataformas seguras, funcionales, rápidas y fáciles de utilizar. Para garantizar estos atributos, las organizaciones implementan procesos de evaluación y control mediante diferentes tipos de pruebas, que permiten verificar el desempeño de los sistemas antes y durante su funcionamiento.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Pruebas de servicio

    .row.align-items-center.mb-4
      .col-8.col-sm-2.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
        img.img-fluid(src="@/assets/curso/tema5/img_2.svg", alt="Ícono de un computador con un carrito de compras en la pantalla, simbolizando las pruebas de servicio en el comercio electrónico.")
      .col-12.col-lg-11
        p.mb-0(data-aos="zoom-in-right") Las pruebas de servicio son procedimientos diseñados para verificar que los servicios, aplicaciones y procesos de una plataforma de comercio electrónico funcionen correctamente antes y durante su operación. Su propósito es identificar errores, validar el cumplimiento de los requerimientos, garantizar la disponibilidad de los servicios y ofrecer una experiencia de compra segura, confiable y eficiente para los usuarios. Entre las principales pruebas tenemos:

    .tabla-a.color_primario-20.mb-5(data-aos="zoom-in-right")
      table
        caption Tabla 3. Diferentes pruebas de servicio
        thead
          tr
            th Prueba
            th Descripción
            th Ejemplo en <em>e-commerce</em>
        tbody
          tr
            td Prueba de funcionalidad
            td Verifica que cada función de la plataforma opere conforme a los requerimientos establecidos y produzca los resultados esperados.
            td Se comprueba que el registro de usuarios, el carrito de compras y el proceso de pago funcionen correctamente.
          tr
            td Prueba de rendimiento
            td Evalúa el comportamiento de la plataforma bajo diferentes niveles de carga para verificar su capacidad de respuesta y estabilidad.
            td Se simula el ingreso simultáneo de miles de usuarios durante una campaña de descuentos.
          tr
            td Prueba de seguridad
            td Comprueba la efectividad de los mecanismos implementados para proteger la información, las transacciones y el acceso a la plataforma.
            td Se verifica que las contraseñas estén cifradas y que la conexión utilice un certificado SSL/TLS.
          tr
            td Prueba de usabilidad
            td Analiza la facilidad de uso de la plataforma para garantizar una navegación clara, intuitiva y eficiente para los usuarios.
            td Se evalúa si un cliente puede completar una compra sin dificultades.
          tr
            td Prueba de compatibilidad
            td Verifica el funcionamiento de la plataforma en diferentes navegadores, dispositivos y sistemas operativos.
            td Se comprueba que la tienda virtual funcione correctamente en Chrome, Edge, Safari y dispositivos móviles.
          tr
            td Prueba de integración
            td Valida la comunicación y el intercambio de información entre la plataforma y los servicios externos utilizados en la operación.
            td Se verifica la integración con la pasarela de pagos y la empresa de transporte para actualizar el estado del pedido.
          tr
            td Prueba de recuperación
            td Evalúa la capacidad del sistema para restaurar la información y reanudar la operación después de una falla o incidente.
            td Se recupera la base de datos desde una copia de seguridad tras una interrupción del servidor.
          tr
            td Prueba de aceptación del usuario (UAT)
            td Confirma que la plataforma satisface las necesidades del usuario y cumple los requisitos definidos antes de su puesta en funcionamiento.
            td Un grupo de usuarios realiza compras de prueba para validar el proceso antes del lanzamiento de la tienda virtual.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Pruebas de interfaz

    .row.align-items-center.mb-4
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema5/img_3.png", alt="Una mujer sostiene una tarjeta y un teléfono móvil frente a un computador portátil que muestra el sitio web de una tienda de moda con productos en oferta.")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") Las pruebas de interfaz se enfocan en evaluar los elementos visuales y funcionales con los cuales interactúan los usuarios dentro de una plataforma digital. Su propósito es verificar que la navegación, el diseño, los controles y la presentación de la información sean claros, consistentes y fáciles de utilizar, favoreciendo una experiencia de compra satisfactoria y reduciendo los errores durante la interacción.
        p.mb-0(data-aos="zoom-in-right") Durante estas pruebas se verifican aspectos relacionados con:

    .tarjeta.tarjeta--fondo-img-04.p-4.px-5.mb-4(data-aos="zoom-in-right")
      .row.align-items-center
        .col-12.col-lg-8
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-5(tipo="a")
              .py-4.px-5
                h3.h5 Diseño
                p.mb-0 Verifica que la distribución de los elementos, colores, tipografía e imágenes mantengan una presentación uniforme, favoreciendo una navegación clara y una experiencia visual coherente para el usuario.
                p.mb-0
                  strong Ejemplo:
                  |  se comprueba que el catálogo de Mercado Libre conserve el mismo diseño y organización al navegar entre las diferentes categorías de productos.
              .py-4.px-5
                h3.h5 Accesibilidad
                p.mb-0 Comprueba que la interfaz pueda ser utilizada por personas con diferentes capacidades, incorporando elementos que faciliten el acceso, la navegación y la comprensión del contenido.
                p.mb-0
                  strong Ejemplo:
                  |  se verifica que la tienda virtual permita navegar mediante el teclado y que las imágenes incluyan texto alternativo para lectores de pantalla.
              .py-4.px-5
                h3.h5 Organización de contenidos
                p.mb-0 Evalúa la estructura y disposición de la información para garantizar que los usuarios encuentren fácilmente productos, servicios y opciones durante el proceso de compra.
                p.mb-0
                  strong Ejemplo:
                  |  se valida que los productos estén organizados por categorías y que el buscador facilite la localización de un artículo específico.
              .py-4.px-5
                h3.h5 Funcionamiento de botones
                p.mb-0 Confirma que los botones ejecuten correctamente la acción prevista y respondan de forma oportuna a la interacción del usuario dentro de la plataforma.
                p.mb-0
                  strong Ejemplo:
                  |  se comprueba que el botón "Agregar al carrito" incorpore el producto seleccionado y actualice automáticamente el carrito de compras.
              .py-4.px-5
                h3.h5 Formularios
                p.mb-0 Valida el correcto ingreso, verificación y envío de la información suministrada por los usuarios, evitando errores durante el registro, la compra o el pago.
                p.mb-0
                  strong Ejemplo:
                  |  se verifica que el formulario de registro solicite los datos obligatorios y notifique cuando un correo electrónico tiene un formato incorrecto.
              .py-4.px-5
                h3.h5 Enlaces
                p.mb-0 Corrobora que los vínculos dirijan a las páginas o recursos correspondientes, evitando enlaces rotos o rutas que afecten la navegación del usuario.
                p.mb-0
                  strong Ejemplo:
                  |  se verifica que el enlace "Ver detalles del producto" abra correctamente la página con la información completa del artículo.
              .py-4.px-5
                h3.h5 Elementos gráficos
                p.mb-0 Revisa que imágenes, iconos, banners y demás recursos visuales se visualicen correctamente y contribuyan a la comprensión y usabilidad de la plataforma.
                p.mb-0
                  strong Ejemplo:
                  |  se comprueba que las fotografías de los productos carguen correctamente y mantengan una buena calidad en computadores y dispositivos móviles.
        .col-12.col-lg-4.d-none.d-lg-block.text-center
          img.img-fluid(src="@/assets/curso/tema5/img_4.png", alt="Unas manos manipulan un panel de diseño de interfaz con herramientas de edición de texto, imagen y tipografía.")

    p.mb-3(data-aos="zoom-in-right") Una interfaz adecuada facilita la interacción del usuario y mejora la experiencia de compra. Por el contrario, errores de navegación o diseños poco intuitivos pueden generar abandono de procesos y pérdida de oportunidades comerciales.
    p.mb-4(data-aos="zoom-in-right") Por ejemplo, si un botón de pago no funciona correctamente o resulta difícil de localizar, la organización puede experimentar disminución en la conversión de ventas.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Pruebas de usuario

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema5/img_6.png", alt="Un hombre con gafas y audífonos sonríe mientras sostiene una tableta, en un espacio exterior.")
      .bloque-texto-t__texto.color-primario-10.col-12.col-lg-10.mb-0
        p.mb-0 Las pruebas de usuario permiten evaluar el comportamiento y la experiencia de las personas que interactúan con una plataforma digital. Estas pruebas se realizan con usuarios reales o grupos representativos del público objetivo para identificar dificultades de uso y oportunidades de mejora. Su finalidad consiste en determinar si los procesos son comprensibles, eficientes y satisfactorios desde la perspectiva del cliente. La información obtenida permite realizar ajustes orientados a optimizar la experiencia del usuario.

    .row.align-items-center.mb-0
      .col-12.col-lg-5.mb-0
        p.mb-4(data-aos="zoom-in-right") Entre los aspectos evaluados se encuentran facilidad de navegación, comprensión de instrucciones, tiempos de respuesta, localización de información y ejecución de procesos de compra.
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--adicional-1.py-4.px-5.d-flex.align-items-center.justify-content-between(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0
              p.mb-0
                strong Ejemplo:
                |  Amazon permite a los usuarios explorar la plataforma antes de iniciar sus actividades de venta, con el fin de familiarizarse con sus funcionalidades y procesos. Asimismo, dispone de mecanismos mediante los cuales los usuarios pueden enviar sugerencias, recomendaciones o comentarios para contribuir al mejoramiento continuo del servicio.
            .col-12.col-lg-2.d-none.d-lg-block.mb-0
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Una mano sostiene un paquete que emerge de la pantalla de un teléfono móvil, representando la entrega de pedidos en el comercio electrónico.")

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.4 Pruebas del sistema

</template>

<script>
export default {
  name: 'Tema5',
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
