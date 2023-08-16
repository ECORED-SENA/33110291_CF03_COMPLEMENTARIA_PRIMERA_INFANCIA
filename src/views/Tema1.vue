<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de los hallazgos de la valoración integral en salud y desarrollo infantil
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") El análisis realizado para la valoración integral en niñas y niños, nace de la necesidad de aplicar un instrumento denominado Escala #[b.t1 Abreviada de Desarrollo EAD-3], en el cual se deben tener en cuenta aspectos de acuerdo al rango de edad, son encontrados en 144 ítems que permiten orientar al profesional en un concepto más objetivo, de acuerdo con la red de apoyo familiar y el entorno o ambiente donde se encuentran las niñas y los niños en su etapa de primera infancia. 
        .bg3.p-4.brad(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 A través de la observación de las respuestas correspondientes a la valoración del desarrollo infantil, se han encontrado hallazgos que permiten visualizar, de manera clara en cada etapa, si el desarrollo es adecuado para el rango de edad, o si se presentan signos de riesgo en el proceso. #[b La valoración se divide en tres indicadores de perfil: avanzado, esperado y riesgo, cada uno se describe a continuación.]          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')      

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-8.my-3(data-aos="fade-right") 
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgad")
          .row(titulo="Esperado") 
            p.mb-0 Cuando los resultados registrados cumplen con las dimensiones fundamentales acorde a su edad, se considera que el niño o la niña presenta un perfil de desarrollo #[b esperado]. En este caso, es importante tener en cuenta las indicaciones del plan pedagógico y continuar fortaleciendo todas las áreas valoradas para que el niño o la niña siga alcanzando los logros en su crecimiento y desarrollo. 
          .row(titulo="Avanzado") 
            p.mb-0 Si se observa un desarrollo adelantado en al menos una de las dimensiones del niño o la niña, en comparación con su edad y etapas posteriores, se considera que presenta un perfil #[b avanzado]. En este caso, es importante continuar fortaleciendo y estimulando al niño o niña para aprovechar al máximo su potencial y promover un desarrollo óptimo. 
          .row(titulo="En riesgo") 
            p.mb-0 Si se observa alguna novedad en al menos una de las dimensiones del niño o la niña, como la falta de cumplimiento de una actividad propuesta o un resultado no esperado, se habla de un perfil de desarrollo en #[b riesgo]. En este caso, es fundamental prestar mucha atención a las prácticas y enfoques aplicados hasta el momento, tanto por parte del talento humano en salud como por parte de los padres y/o cuidadores.     
            
    .row.justify-content-center.align-items-center.mb-4               
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='') 
      .col.my-3    
        p(data-aos="fade-down").mb-0 Es #[b.t1  importante entender los valores y conceptos que se han encontrado en el desarrollo de la aplicación para la Escala Abreviada de Desarrollo EAD-3], para ello, a continuación, se encontrarán de manera específica los temas en los cuales se debe realizar un análisis que ayuda a identificar esas características, que deben ser tenidas en cuenta luego de realizada la valoración en una consulta con niñas y niños. 

    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
          h5 Figura 1.
          span Pirámide de conceptos  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='La pirámide de conceptos es esencial para el análisis de los resultados de la Escala Abreviada de Desarrollo -3, herramienta utilizada en la evaluación del desarrollo infantil. Su actualización en el tamizaje clínico del desarrollo es fundamental. Hace hincapié en comprender los patrones de crecimiento normales, así como en una alimentación y nutrición adecuadas. La escala evalúa las principales dimensiones del desarrollo y destaca la interpretación de las curvas de crecimiento para evaluar la progresión en el tiempo, requiriendo un seguimiento constante para evitar errores diagnósticos.') 

    p(data-aos="fade-down").mb-5 En la pirámide encontrada en la figura, se observan los conceptos que deben tenerse en cuenta para realizar un análisis de los hallazgos encontrados en la valoración, luego de aplicar los ítems de la Escala Abreviada de Desarrollo-3. Es importante recordar que este análisis presenta la actualización de un instrumento para tamizar el desarrollo infantil en el entorno clínico del país, es por ello que se incorpora en el proceso de transformación de la consulta de crecimiento y desarrollo. #[b.t1 A continuación, se amplían los conceptos de la pirámide.]

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Los patrones de normalidad" :icono="require('@/assets/curso/temas/7.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Los patrones de normalidad
            p Hacen referencia a las medidas encontradas en niñas y niños durante su crecimiento. Estos patrones determinan cómo se sitúan en relación a los valores de referencia y nos proporcionan una idea de su adecuado desarrollo desde la etapa posnatal hasta los 6 años. Al abordar este tema, es importante considerar aspectos clave como las buenas prácticas en alimentación y nutrición. La lactancia materna, como uno de los pilares de una alimentación saludable y óptimos resultados nutricionales, marca una gran diferencia en el crecimiento acelerado de los niños. Después de la lactancia materna, se introduce la alimentación complementaria, donde es crucial tener en cuenta tanto el tipo de alimentos como los nutrientes que contienen para garantizar un desarrollo nutricional adecuado según la edad.
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/10.svg', alt='') 
      .py-4.py-md-5(titulo="Interpretación de las curvas de crecimiento" :icono="require('@/assets/curso/temas/8.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Interpretación de las curvas de crecimiento
            p Permiten evaluar la tendencia de crecimiento a lo largo del tiempo, pero es importante llevar un seguimiento constante y preciso para evitar interpretaciones erróneas o diagnósticos y tratamientos incorrectos. Además, al realizar esta valoración, es fundamental tener en cuenta el rango de edad como base para la observación.
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.svg', alt='') 
      .py-4.py-md-5(titulo="Variables normales de crecimiento y talla familiar" :icono="require('@/assets/curso/temas/9.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Variables normales de crecimiento y talla familiar
            p Es un enfoque clave para asegurar el flujo de información sobre el desarrollo infantil, se basa en el seguimiento del crecimiento, que debe estar acorde a la edad y a las variables normales de crecimiento relacionadas con el estado nutricional, como el peso y la talla del niño. También es importante considerar estas variables en relación con los padres. Desde temprano, incluso antes del nacimiento, se puede observar que la talla familiar de niños suele estar por debajo de los valores normales en un porcentaje significativo. El análisis se realiza mediante la detección de valores que difieren de los resultados esperados en la evaluación o que no se ajustan al rango de edad de cada niño o niña. Es fundamental detectar de manera temprana posibles alteraciones en el desarrollo, con el fin de identificar causas tratables e implementar las medidas necesarias para la prevención o corrección de los problemas encontrados. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.svg', alt='')                         

    p(data-aos="fade-down").mb-5 Los aspectos fundamentales, además, de los encontrados en los conceptos de valoración inicial, en consulta de crecimiento y desarrollo, son: 

    .row.bg4.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up(data-aos="fade-right")
            img(src='@/assets/curso/temas/15.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.pb-4(columnas="col-lg-6")(data-aos="fade-right")
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Motricidad Gruesa 
                p.mb-0 Coordinación de movimientos presentes en cabeza, tronco, extremidades superiores e inferiores, tono y la postura que toma la niña o el niño.
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Motricidad Fina-adaptativa 
                p.mb-0 Se caracteriza por el seguimiento visual, la capacidad de coordinación entre mano–ojo, cálculo de distancias, movimientos precisos, la manipulación de elementos y pinza digital.  
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Personal Social 
                p.mb-0 Es la interacción generada entre más participantes del entorno, su capacidad de expresar sus emociones, sentimientos y cómo a través de ellos genera dependencia o independencia para realizar movimientos o gestos en un comportamiento de adaptación al entorno.
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Lenguaje 
                p.mb-0 Inicia su proceso de comunicación que, desde la vida extrauterina, puede ser un lenguaje no verbal y expresado de manera corporal o gesticular, y que en su crecimiento evoluciona al habla o se puede ver mixto entre el habla y sus movimientos corporales.   
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Aferencias sensoriales 
                p.mb-0 Sigue órdenes o se deja llevar de manera creativa, generando estímulos de manera visual o auditiva.
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Cognición 
                p.mb-0 Se encuentran de manera integral la mente y el cerebro, los cuales se ven reflejados en la memoria, atención, abstracción, cálculo, funciones ejecutivas.   
              .tarjeta.bgcard.ts.h-100.p-4
                h4 Entorno 
                p.mb-0 Esta depende del ambiente en el cual se encuentra la niña o el niño, puede estimular los demás aspectos como puede generar miedo o perder la orientación, no solo del menor sino de sus padres al no tener acceso a la atención médica o no contar con una estabilidad económica o red de apoyo adecuada.

    .row.justify-content-center.align-items-center         
      .col-lg-10(data-aos="fade-right")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ts
                  h4 Manual técnico  escala de valoración cualitativa del desarrollo infantil 
                  p.mb-0 Estimado aprendiz, lo invitamos el documento: Manual técnico escala de valoración cualitativa del desarrollo infantil, donde podrá contextualizarse sobre los hallazgos del desarrollo infantil y como realizar el análisis de la información.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_Tecnico_Escala_de_Valoracion_Cualitativa_del_Desarrollo_Infantil.pdf')" target="_blank")
                    span.text-white Descargar
                    i.text-white.fas.fa-file-download                 
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
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
