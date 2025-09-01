<template>
  <div class="donor-sidebar">
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 class="text-xl font-bold mb-4">Donor Details</h3>
      
      <div class="space-y-3">
        <div>
          <span class="font-semibold text-gray-700">Type:</span>
          <span class="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            {{ donor.type }}
          </span>
        </div>
        
        <div>
          <span class="font-semibold text-gray-700">Date:</span>
          <span class="ml-2">{{ formatDate(donor.date) }}</span>
        </div>
        
        <div>
          <span class="font-semibold text-gray-700">Program:</span>
          <span class="ml-2">{{ donor.programs }}</span>
        </div>
        
        <div>
          <span class="font-semibold text-gray-700">Contribution:</span>
          <span class="ml-2">{{ donor.donation }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-bold mb-4">Related Donors</h3>
      <div class="space-y-3">
        <g-link 
          v-for="relatedDonor in relatedDonors" 
          :key="relatedDonor.id"
          :to="relatedDonor.path"
          class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div class="flex items-center space-x-3">
            <img 
              v-if="relatedDonor.avatarUrl && relatedDonor.avatarUrl !== 'none'" 
              :src="relatedDonor.avatarUrl" 
              :alt="`${relatedDonor.title} - Profile Photo`"
              class="h-10 w-10 rounded-full object-cover"
            />
            <img 
              v-else
              src="/images/donors/wfh.png" 
              :alt="`${relatedDonor.title} - Default Profile Photo`"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ relatedDonor.title }}
              </p>
              <p class="text-xs text-gray-500">
                {{ relatedDonor.type }} - {{ formatDate(relatedDonor.date) }}
              </p>
            </div>
          </div>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonorSidebar',
  props: {
    donor: {
      type: Object,
      required: true
    }
  },
  computed: {
    relatedDonors() {
      // This would need to be implemented with a GraphQL query
      // For now, returning empty array
      return []
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
  }
}
</script>

<style scoped>
.donor-sidebar {
  position: sticky;
  top: 2rem;
}
</style> 