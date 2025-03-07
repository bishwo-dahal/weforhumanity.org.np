<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ $page.entry.title }}
        </h1>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
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
    entry : article(id: $id) {
      title
      content,
      excerpt,
      createdAt(format:"Do MMMM YYYY"),
      timeToRead,
      tags {
          title,
          path
      },
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import PageSidebar from '~/components/PageSidebar'

export default {
  components: {
    PageHeader,
    PageSidebar
  },

  metaInfo () {
    const thumbnailImage = this.$static.metadata.siteUrl + (this.$page.entry.thumbnail || '/images/thumbnail/default.jpg');
    return {
      title: this.$page.entry.title,
      titleTemplate:"%s | We For Humanity",
      meta:[
        {
          name:"developer",
          content:"Bishwo Dahal"
        }, 
        {
          property:'description',
          content:this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property:'keywords',
          content:this.$page.entry.tags.map(arr=>arr.title).join(',')
        },
        {
          property:'og:title',
          content:`${this.$page.entry.title} | We For Humanity`
        },
        {
          property:'og:description',
          content:this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property:'og:image',
          content:thumbnailImage
        },
        {
          property:'twitter:title',
          content:`${this.$page.entry.title} | We For Humanity`
        },
        {
          property:'twitter:description',
          content:this.$page.entry.excerpt || this.$page.entry.title
        },
        {
          property:'twitter:image',
          content:thumbnailImage
        },
      ]
    };
  }
};
</script>
