<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación se presenta un mapa conceptual que sintetiza el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El plan integral de cuidado en la primera infancia se basa en la Escala Abreviada de Desarrollo EAD-3, la cual es un instrumento de valoración del desarrollo de niños y niñas. Esta escala permite identificar los factores de riesgo presentes en las distintas etapas del crecimiento y desarrollo durante la primera infancia mediante indicadores de perfil que incluyen niveles avanzados, esperados y de riesgo. Además, el plan integral de cuidado para el niño o la niña en la primera infancia se basa en un conjunto de acciones coordinadas. Estas acciones tienen como objetivo satisfacer tanto las necesidades esenciales para preservar la vida como aquellas relacionadas con el desarrollo y aprendizaje humano, teniendo en cuenta las características, necesidades e intereses de cada niño o niña. Dichas acciones se llevan a cabo a través de diferentes pautas, como la provisión de servicios sociales y atención a la familia, el diagnóstico, tratamiento y derivación de enfermedades, la promoción y mantenimiento de la salud, la vigilancia en salud, la provisión de información en salud, la remisión a intervenciones colectivas y la educación para la salud.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
