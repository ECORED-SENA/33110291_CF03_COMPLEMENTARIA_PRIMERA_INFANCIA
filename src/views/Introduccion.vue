<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.justify-content-center.align-items-center          
      .col-lg-12.bg1.px-4.mb-5.up      
        .row.justify-content-center.align-items-center         
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='') 
          .col.my-3 
            p(data-aos="fade-down").mb-0 Estimado aprendiz, bienvenido al componente formativo #[b.t1 “Plan Integral de Cuidado en la Primera Infancia.”] Para comenzar, le invitamos a ingresar al siguiente video para obtener más información:   

    .bg2          
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/MeLgoD6v37k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
          figcaption Video. Plan Integral de Cuidado en la Primera Infancia

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
