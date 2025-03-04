<template>
      <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/multiple_hand_donors_heart.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Donors
        </p>
        <p
          class="text-lg md:text-2xl">
          See our Contributors
        </p>
      </template>
    </PageHeader>
    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div
          class="w-full px-5 prose lg:prose-xl max-w-none">
          <div
            class="content overflow-x-scroll"
           >
           <table >
            <thead>
                <tr>
                    <th>S.N.</th>
                    <th>Donor's name</th>
                    <th>Type of Donation</th>
                    <th>Donation</th>
                    <th>Donation Date</th>
                    <th>Program involved</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(donor,index) in donorsByDate" :key="index">
                    <td>{{ index+1 }}.</td>
                    <td class="flex items-center justify-around ">
                        <span class="px-2">{{ donor.name }}</span>
                     <img v-if="donor.avatarUrl !=='none'" :src="donor.avatarUrl || '/images/team/placeholder.jpg'" style="margin: 0px;" class="h-12 w-12 rounded-full object-cover"/>
                 </td>
                    <td>{{ donor.type }}</td>
                    <td>{{ donor.donation }}</td>
                    <td>{{ donor.date }}</td>
                    <td>{{ donor.programs }}</td>

                </tr>
            </tbody>


           </table>
           If we missed any of our volunteers by any chance, please let us know via our email at 
           <a href="mailto:weforhumanity05@gmail.com">weforhumanity05@gmail.com</a> <br/>Note: We update this list after every program.        
        </div>
        </div>
      </div>
    </div>

  </Layout>



  </template>
  
  <script>
import PageHeader from '~/components/PageHeader'

  export default {
    name: "Donors",
    components:{
        PageHeader
    },
    data() {
      return {
        donors: [
          {
            name: "Bhimeshwar-5 residents",
            date: "2016/04/23",
            type: "Material Donation",
            donation:"24 KGs Wheat, 20Kgs Potatoes, 6 KGs Rice, 2KGs Lentils",
            programs:"Distribution to specially-abled people",
            avatarUrl:"none"
          },
          {
            name: "Bhimeshwar-5 residents",
            date: "2016/04/23",
            type: "Monetary Donation",
            donation:"रू 3,780",
            programs:"Distribution to specially-abled people",
            avatarUrl:"none"
          },
          {
            name: "Bishwo Dahal",
            avatarUrl: "/images/donors/bishwo_dahal.jpeg",
            date: "2025/03/05",
            type: "Volunteer",
            donation:"Developed website for WFH",
            programs:""
          },

        ],
      };
    },
    computed:{
        donorsByDate(){
            return this.donors.sort ((first,second)=>new Date(second.date)-new Date(first.date))
        }
    }
  };
  </script>
  