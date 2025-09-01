<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image v-if="$page.entry.thumbnail" :src="$page.entry.thumbnail" :alt="`${$page.entry.title} - Donor Profile`" />
        <g-image v-else src="~/assets/images/multiple_hand_donors_heart.jpg" alt="Default donor header image" />
      </template>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ $page.entry.title }}
        </h1>
        <p class="text-lg md:text-2xl">
          {{ $page.entry.type }} - {{ $page.entry.date }}
        </p>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <DonorSidebar :donor="$page.entry" />
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
          <div class="donor-profile mb-8">
            <div v-if="$page.entry.avatarUrl && $page.entry.avatarUrl !== 'none'" class="donor-avatar mb-6">
              <img 
                :src="$page.entry.avatarUrl" 
                :alt="`${$page.entry.title} - Profile Photo`"
                class="h-32 w-32 rounded-full object-cover mx-auto"
              />
            </div>
            
            <div v-else class="donor-avatar mb-6">
              <img 
                src="/images/donors/wfh.png" 
                :alt="`${$page.entry.title} - Default Profile Photo`"
                class="h-32 w-32 rounded-full object-cover mx-auto"
              />
            </div>
            
            <div class="donor-info bg-gray-50 p-6 rounded-lg mb-8">
              <h2 class="text-2xl font-bold mb-4">Donation Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong>Type:</strong> {{ $page.entry.type }}
                </div>
                <div>
                  <strong>Date:</strong> {{ formatDate($page.entry.date) }}
                </div>
                <div>
                  <strong>Program:</strong> {{ $page.entry.programs }}
                </div>
                <div>
                  <strong>Contribution:</strong> {{ $page.entry.donation }}
                </div>
              </div>
            </div>
          </div>

          <div
            class="content"
            v-html="$page.entry.content" />
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

<page-query>
  query ($id: ID!) {
    entry : donor(id: $id) {
      title
      content
      excerpt
      thumbnail
      date
      type
      donation
      programs
      avatarUrl
      description
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import DonorSidebar from '~/components/DonorSidebar'

export default {
  components: {
    PageHeader,
    DonorSidebar
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },

  metaInfo () {
    const thumbnailImage = this.$static.metadata.siteUrl + (this.$page.entry.thumbnail || '/images/donors/default-donor.jpg');
    return {
      title: this.$page.entry.title,
      titleTemplate: "%s | We For Humanity",
      meta: [
        {
          name: "developer",
          content: "Bishwo Dahal"
        }, 
        {
          property: 'description',
          content: this.$page.entry.description || this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property: 'keywords',
          content: `donor, ${this.$page.entry.type}, ${this.$page.entry.programs}, we for humanity, charity`
        },
        {
          property: 'og:title',
          content: `${this.$page.entry.title} | We For Humanity`
        },
        {
          property: 'og:description',
          content: this.$page.entry.description || this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property: 'og:image',
          content: thumbnailImage
        },
        {
          property: 'og:type',
          content: 'profile'
        },
        {
          property: 'twitter:title',
          content: `${this.$page.entry.title} | We For Humanity`
        },
        {
          property: 'twitter:description',
          content: this.$page.entry.description || this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property: 'twitter:image',
          content: thumbnailImage
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    };
  }
};
</script>

<style scoped>
.donor-profile {
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 2rem;
}

.donor-info {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}
</style> 