<template>
    <div class="flex items-center justify-center">

        <Carousel class="image-slider" :autoplay="true" perPage="1" :navigationEnabled="true"  :centerMode="true" :loop="true" >
            <Slide>
                <g-image src="/images/programs/blood_donation_2073/all_blood_donors_at_wfh.jpg" ></g-image>
                Giving certificate
            </Slide>
            <Slide>
                <g-image src="/images/programs/blood_donation_2073/blood_donated_by_himal_basnet_and_sangam_bhandari.JPG" ></g-image>
                
            </Slide>
            <Slide>
                <g-image src="/images/programs/food_donation_2073/distributed_food_to_needy.JPG" ></g-image>
                
            </Slide>
            <Slide>
                <g-image src="/images/programs/blood_donation_2073/certificate_handover_to_blood_donars.JPG" ></g-image>
                
            </Slide>
        </Carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
<style scoped>
.image-slider{
    max-width: 70vw;
}
@media only screen and (max-width:800px) {
    .image-slider{
        max-width: 90vw;
    }
}
</style>