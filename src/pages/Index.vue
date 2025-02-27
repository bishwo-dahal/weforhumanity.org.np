<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/main_page_picture.jpeg"/>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          मनब्ता को लागि हामी 
        </p>
        <p class="text-lg md:text-2xl">
          Help others and grow!
        </p>
      </template>
    </PageHeader>
    <div class="container text-center mx-auto">
      <SectionLatestArticles />
    </div>

    <SectionContribute />
    <SectionCompanyProfileLists />

    <SectionThinkDifferent />
    
    <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div>

    

    <SectionOpenSource />
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestArticles from '~/components/sections/LatestArticles'
import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionThinkDifferent from '~/components/sections/ThinkDifferent'
import SectionCompanyProfileLists from '~/components/sections/CompanyProfileLists'
import SectionOpenSource from '~/components/sections/OpenSource'

export default {
  metaInfo: {
    title: 'We for Humanity: Charikot, Nepal'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionThinkDifferent,
    SectionOpenSource,
    SectionCompanyProfileLists
  }
};
</script>
