<template>
    <div class="flex items-center justify-center">

        <Carousel class="image-slider" :autoplay="true" perPage="1" :navigationEnabled="true"  :centerMode="true" :loop="true" >
<Slide>
    <g-image src="/images/carousel/all_blood_donors.jpg"></g-image>
    Blood donors on Blood donation program conducted by WFH on World Blood Donors Day
</Slide>
<Slide>
    <g-image src="/images/carousel/awareness_rally.jpg"></g-image>
    Awareness Rally by We for Humanity

</Slide>
<Slide>
    <g-image src="/images/carousel/dhurmus_suntali_sanitation_program.JPG"></g-image>
    Sanitation Program conducted in collaboration with Dhurmus & Suntali
</Slide>
<Slide>
    <g-image src="/images/carousel/warm_blankets_distribution_to_locals.jpg"></g-image>
    Warm blankets distribution during our Nyano Bitaran program
</Slide>
<Slide>
    <g-image src="/images/carousel/dhurmus_suntali_sanitation.JPG"></g-image>
    Sanitation program with members of WFH
</Slide>
<Slide>
    <g-image src="/images/carousel/distributed_food_to_needy.JPG"></g-image>
    Food distribution in Mutthi Dan Program to needy peoples
</Slide>
<Slide>
    <g-image src="/images/carousel/first_agm_celebration.jpg"></g-image>
    First Annual general meeting celebration with professors from Kalinchowk College
</Slide>
<Slide>
    <g-image src="/images/carousel/first_annual_meeting.JPG"></g-image>
    First annual meeting among board members
</Slide>
<Slide>
    <g-image src="/images/carousel/food_collection_from_locals.jpg"></g-image>
    Food collection to distribute in Mutthi Dan Program
</Slide>
<Slide>
    <g-image src="/images/carousel/meeting_of_founders.jpg"></g-image>
    Founders meeting
</Slide>
<Slide>
    <g-image src="/images/carousel/participation_on_blood_donation.JPG"></g-image>
    Blood donation program participants in Kalinchowk School
</Slide>
<Slide>
    <g-image src="/images/carousel/street_drama_about_divorce.jpg"></g-image>
    Street drama conducted to aware about divorce in collaboration with other NGOs
</Slide>
<Slide>
    <g-image src="/images/carousel/trees_plantation.JPG"></g-image>
    Tree plantation by one of our founding members in Ghewapani
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
    text-align: center;
}
@media only screen and (max-width:800px) {
    .image-slider{
        max-width: 90vw;
    }
}
</style>