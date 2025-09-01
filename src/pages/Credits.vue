<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/alexander-sinn-KgLtFCgfC28-unsplash.jpg" alt="Credits header image representing gratitude and appreciation" />
      </template>
      <template v-slot:content>
        <h1 class="text-4xl md:text-6xl">
          Thank you
        </h1>
        <p
          class="text-lg md:text-2xl">
          for everyone helping build our website!
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <RecordCard
            v-for="edge in $page.records.edges"
            :key="edge.node.id"
            :record="edge.node">
            <template v-slot:link>
              <g-link
              v-if="edge.node.path"
                :to="edge.node.path"
                class="text-smalt-blue-500 hover:text-black inline-flex items-center">
                Visit website
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </g-link>
              <span v-else></span>
            </template>
          </RecordCard>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query {
    records: allCredit {
      edges {
        node {
          title
          path : link
          excerpt : content
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import RecordCard from '~/components/RecordCard'

export default {
  metaInfo: {
    title: 'Credits | We For Humanity',
    meta: [
      {
        name: 'description',
        content: 'Thank you to everyone who helped build the We For Humanity website. Credits and acknowledgments for contributors and supporters.'
      },
      {
        property: 'og:title',
        content: 'Credits | We For Humanity'
      },
      {
        property: 'og:description',
        content: 'Thank you to everyone who helped build the We For Humanity website. Credits and acknowledgments for contributors and supporters.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  },
  components: {
    PageHeader,
    RecordCard
  }
};
</script>
