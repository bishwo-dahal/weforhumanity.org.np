<template>
      <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/multiple_hand_donors_heart.jpg" alt="Donors header image showing multiple hands forming a heart" />
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
                <tr v-for="(donor,index) in donorsByDate" :key="donor.id">
                    <td>{{ index+1 }}.</td>
                    <td class="flex items-center justify-around ">
                        <g-link :to="donor.path" class="hover:text-blue-600 transition-colors">
                          <span class="px-2">{{ donor.title }}</span>
                        </g-link>
                     <img v-if="donor.avatarUrl !=='none'" :src="donor.avatarUrl || '/images/team/placeholder.jpg'" :alt="`${donor.title} - Profile Photo`" style="margin: 0px;" class="h-12 w-12 rounded-full object-cover"/>
                     <img v-else src="/images/donors/wfh.png" :alt="`${donor.title} - Default Profile Photo`" style="margin: 0px;" class="h-12 w-12 rounded-full object-cover"/>
                 </td>
                    <td>{{ donor.type }}</td>
                    <td>{{ donor.donation }}</td>
                    <td>{{ formatDate(donor.date) }}</td>
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
  
  <static-query>
  query{
    metadata{
      siteUrl
    }
  }
  </static-query>
  
  <script>
import PageHeader from '~/components/PageHeader'

  export default {
    name: "Donors",
    components:{
        PageHeader
    },
    computed:{
        donorsByDate(){
            return this.$page.donors.edges.map(edge => edge.node).sort((first,second)=>new Date(second.date)-new Date(first.date))
        }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      }
    },
    metaInfo() {
      return {
        title: 'Donors | We For Humanity',
        meta: [
          {
            name: 'description',
            content: 'Meet our generous donors and contributors who support We For Humanity\'s mission to help communities in need through various programs and initiatives.'
          },
          {
            property: 'og:title',
            content: 'Donors | We For Humanity'
          },
          {
            property: 'og:description',
            content: 'Meet our generous donors and contributors who support We For Humanity\'s mission to help communities in need through various programs and initiatives.'
          },
          {
            property: 'og:image',
            content: this.$static.metadata.siteUrl + '/images/donors/wfh.png'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'twitter:title',
            content: 'Donors | We For Humanity'
          },
          {
            property: 'twitter:description',
            content: 'Meet our generous donors and contributors who support We For Humanity\'s mission to help communities in need through various programs and initiatives.'
          },
          {
            property: 'twitter:image',
            content: this.$static.metadata.siteUrl + '/images/donors/wfh.png'
          },
          {
            property: 'twitter:card',
            content: 'summary_large_image'
          }
        ]
      }
    }
  };
  </script>

  <page-query>
  query {
    donors: allDonor {
      edges {
        node {
          id
          title
          path
          date
          type
          donation
          programs
          avatarUrl
        }
      }
    }
  }
  </page-query>
  
