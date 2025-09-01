<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" alt="Articles header image representing our written content and stories" />
      </template>
      <template v-slot:content>
        <h1 class="text-4xl md:text-6xl">
          Articles
        </h1>
        <p
          class="text-lg md:text-2xl">
          We have currently {{ $page.records.totalCount }} articles in our list
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <RecordCard
            v-for="edge in $page.records.edges"
            :key="edge.node.id"
            :record="edge.node" />
        </div>
      </section>
      <div
        v-if="$page.records.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          base-url="/articles"
          :current-page="$page.records.pageInfo.currentPage"
          :total-pages="$page.records.pageInfo.totalPages" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    records: allArticle(sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          path
          excerpt
          createdAt(format:"Do MMMM YYYY")
          timeToRead
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Articles | We For Humanity',
    meta: [
      {
        name: 'description',
        content: 'Browse our collection of articles about humanitarian work, community service, and social impact stories from We For Humanity.'
      },
      {
        property: 'og:title',
        content: 'Articles | We For Humanity'
      },
      {
        property: 'og:description',
        content: 'Browse our collection of articles about humanitarian work, community service, and social impact stories from We For Humanity.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  },
  components: {
    PageHeader,
    Pagination,
    RecordCard
  }
};
</script>
