<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Tecnología y transacciones en <em>e-commerce</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conceptos y procesos relacionados con la selección de componentes tecnológicos, sistemas de transacción, seguridad digital y soporte tecnológico para servicios logísticos <em>e-commerce</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de la gestión del servicio en el <em>e-commerce</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la comunicación con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar calidad y satisfacción durante la prestación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar procesos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las ventas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La gestión del servicio busca garantizar la calidad y satisfacción del cliente durante las operaciones de comercio electrónico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple el soporte tecnológico en una operación de <em>ecommerce</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener el funcionamiento de plataformas y sistemas digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir al personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar inventarios físicos exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El soporte tecnológico permite garantizar la continuidad y disponibilidad de los servicios digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es un componente fundamental de la infraestructura tecnológica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Campañas promocionales.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Servidores, redes y bases de datos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Procesos de contratación.', esCorrecta: false },
            { id: 'd', texto: 'Manuales de ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los servidores, redes y bases de datos son elementos esenciales de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite una estrategia de medios digitales bien estructurada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los canales de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la presencia digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar canales adecuados para llegar al público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una estrategia de medios facilita la selección de canales adecuados para llegar al público objetivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué representan los indicadores <em>KPI</em>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Herramientas para medir el desempeño y cumplimiento de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tipos de pasarelas de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistemas de almacenamiento.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Estrategias promocionales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los <em>KPI</em> permiten medir el desempeño y cumplimiento de los objetivos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es el propósito principal de la protección de datos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar la privacidad y seguridad de la información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar controles administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La protección de datos garantiza la privacidad y seguridad de la información personal y empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué se considera un delito informático?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar informes de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar una plataforma digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceder sin autorización a sistemas o información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar una compra electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El acceso no autorizado a sistemas o información constituye un delito informático.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función principal de una pasarela de pago?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Gestionar inventarios.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Administrar redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesar y autorizar transacciones electrónicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las pasarelas de pago permiten procesar y autorizar transacciones electrónicas de forma segura.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué ventaja ofrece la facturación electrónica?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita el registro y control de operaciones comerciales.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Sustituye la contabilidad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Elimina obligaciones tributarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza las pasarelas de pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La facturación electrónica fortalece el control y la trazabilidad de las operaciones comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué permite la integración contable en una operación de <em>e-commerce</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar registros financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Vincular transacciones electrónicas con procesos contables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la gestión administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la seguridad informática.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La integración contable relaciona las operaciones comerciales con los procesos financieros de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué se evalúa mediante una prueba de interfaz?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interacción visual y funcional del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El presupuesto empresarial.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La nómina de empleados.', esCorrecta: false },
            { id: 'd', texto: 'Las ventas presenciales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las pruebas de interfaz permiten verificar la interacción visual y funcional entre el usuario y el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es el objetivo principal de las pruebas de usuario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medir únicamente ventas.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Validar la experiencia y funcionamiento desde la perspectiva del usuario.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Sustituir auditorías.', esCorrecta: false },
            { id: 'd', texto: 'Eliminar indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las pruebas de usuario permiten verificar que la plataforma satisfaga las necesidades del cliente final.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué permiten las pruebas del sistema?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar el desempeño integral de la plataforma tecnológica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Clasificar productos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las pruebas del sistema evalúan el funcionamiento general de la solución tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es un riesgo frecuente en las transacciones electrónicas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incremento de inventarios.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Robo o fraude de información financiera.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aumento de publicidad.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mayor disponibilidad tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El fraude electrónico es uno de los principales riesgos asociados a las transacciones digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué contribuye a fortalecer la seguridad digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar controles de acceso.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Compartir contraseñas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Implementar mecanismos de autenticación y protección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los mecanismos de autenticación ayudan a proteger la información y los sistemas tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumplen los prestadores de servicio de comunicación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer soluciones de conectividad y comunicación digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir las pasarelas de pago.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Gestionar inventarios.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Elaborar políticas salariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los prestadores de servicio facilitan la comunicación y conectividad en entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una ventaja de utilizar pasarelas de pago reconocidas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir la seguridad.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Incrementar la confianza y seguridad de las transacciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar controles financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la facturación electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las pasarelas reconocidas generan confianza y reducen riesgos en las operaciones de pago.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué normativa colombiana regula la protección de datos personales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 80 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 100 de 1993.', esCorrecta: false },
            { id: 'c', texto: 'Ley 1581 de 2012.', esCorrecta: true },
            { id: 'd', texto: 'Ley 590 de 2000.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 1581 de 2012 establece las disposiciones generales para la protección de datos personales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué permite una adecuada gestión del servicio?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la experiencia y satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la calidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la comunicación digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir procesos tecnológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una adecuada gestión del servicio fortalece la satisfacción y fidelización de los clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante el cumplimiento normativo en el <em>e-commerce</em>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque elimina riesgos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza los sistemas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reduce el uso de plataformas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque fortalece la legalidad, seguridad y confianza en las operaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
