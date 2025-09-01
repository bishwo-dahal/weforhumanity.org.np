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
          <div class="content">
            <!-- Donor Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                v-for="(donor, index) in donorsByDate" 
                :key="donor.id"
                class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <!-- Donor Image -->
                <div class="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <img 
                    v-if="donor.avatarUrl !== 'none'" 
                    :src="donor.avatarUrl" 
                    :alt="`${donor.title} - Profile Photo`"
                    class="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <img 
                    v-else 
                    src="/images/donors/wfh.png" 
                    :alt="`${donor.title} - Default Profile Photo`"
                    class="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <!-- Donor Information -->
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    <g-link :to="donor.path" class="hover:text-blue-600 transition-colors">
                      {{ donor.title }}
                    </g-link>
                  </h3>
                  
                  <div class="space-y-2 mb-4">
                    <div class="flex items-center">
                      <span class="text-sm font-medium text-gray-600">Type:</span>
                      <span class="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {{ donor.type }}
                      </span>
                    </div>
                    
                    <div class="flex items-center">
                      <span class="text-sm font-medium text-gray-600">Date:</span>
                      <span class="ml-2 text-sm text-gray-700">{{ formatDate(donor.date) }}</span>
                    </div>
                    
                    <div class="flex items-center">
                      <span class="text-sm font-medium text-gray-600">Program:</span>
                      <span class="ml-2 text-sm text-gray-700">{{ donor.programs }}</span>
                    </div>
                    
                    <div class="flex items-start">
                      <span class="text-sm font-medium text-gray-600">Contribution:</span>
                      <span class="ml-2 text-sm text-gray-700">{{ donor.donation }}</span>
                    </div>
                  </div>
                  
                  <!-- View Details Button -->
                  <g-link 
                    :to="donor.path" 
                    class="inline-block w-full text-center text-blue-600 hover:text-blue-800 font-medium py-2 px-4 border border-blue-200 hover:border-blue-300 rounded-lg transition-all duration-200 hover:bg-blue-50"
                  >
                    View Details →
                  </g-link>
                </div>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div class="bg-gray-50 rounded-lg p-6 text-center">
              <p class="text-gray-700 mb-2">
                If we missed any of our volunteers by any chance, please let us know via our email at 
                <a href="mailto:weforhumanity05@gmail.com" class="text-blue-600 hover:text-blue-800 font-medium">weforhumanity05@gmail.com</a>
              </p>
              <p class="text-sm text-gray-500">
                Note: We update this list after every program.
              </p>
            </div>
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
  
