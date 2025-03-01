<template>
    <div class="flex items-center justify-center">
<Carousel  :slides="slides"
      :autoplay="true"
      :perPage="1"
      :navigationEnabled="true"
      :centerMode="true"
      :loop="true" >
    </Carousel>
    
    </div>
</template>
<script>
import Carousel from '~/components/Carousel.vue';
export default {
  components: {
    Carousel
  },
  data(){
    return {
        slides:[
  {
    image: '/images/carousel/all_blood_donors.jpg',
    caption: 'Blood donors on Blood donation program conducted by WFH on World Blood Donors Day'
  },
  {
    image: '/images/carousel/awareness_rally.jpg',
    caption: 'Awareness Rally by We for Humanity'
  },
  {
    image: '/images/carousel/dhurmus_suntali_sanitation_program.JPG',
    caption: 'Sanitation Program conducted in collaboration with Dhurmus & Suntali'
  },
  {
    image: '/images/carousel/warm_blankets_distribution_to_locals.jpg',
    caption: 'Warm blankets distribution during our Nyano Bitaran program'
  },
  {
    image: '/images/carousel/dhurmus_suntali_sanitation.JPG',
    caption: 'Sanitation program with members of WFH'
  },
  {
    image: '/images/carousel/distributed_food_to_needy.JPG',
    caption: 'Food distribution in Mutthi Dan Program to needy peoples'
  },
  {
    image: '/images/carousel/first_agm_celebration.jpg',
    caption: 'First Annual general meeting celebration with professors from Kalinchowk College'
  },
  {
    image: '/images/carousel/first_annual_meeting.JPG',
    caption: 'First annual meeting among board members'
  },
  {
    image: '/images/carousel/food_collection_from_locals.jpg',
    caption: 'Food collection to distribute in Mutthi Dan Program'
  },
  {
    image: '/images/carousel/meeting_of_founders.jpg',
    caption: 'Founders meeting'
  },
  {
    image: '/images/carousel/participation_on_blood_donation.JPG',
    caption: 'Blood donation program participants in Kalinchowk School'
  },
  {
    image: '/images/carousel/street_drama_about_divorce.jpg',
    caption: 'Street drama conducted to aware about divorce in collaboration with other NGOs'
  },
  {
    image: '/images/carousel/trees_plantation.JPG',
    caption: 'Tree plantation by one of our founding members in Ghewapani'
  }
]

    }
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