<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/main_page_picture.jpeg"/>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          We for Humanity 
        </p>
        <p class="text-lg md:text-2xl">
          We can!
        </p>
      </template>
    </PageHeader>

    <SectionImageCarousel class="py-10"/>
    <div class="container text-center mx-auto">
      <SectionLatestArticles />
    </div>
    <SectionContribute />
    <SectionCompanyProfileLists />

    <SectionViewDonors />
    
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
import SectionViewDonors from '~/components/sections/ViewDonors'
import SectionCompanyProfileLists from '~/components/sections/CompanyProfileLists'
import SectionOpenSource from '~/components/sections/OpenSource'
import SectionImageCarousel from '~/components/sections/ImageCarousel'


export default {
  metaInfo: {
    title: 'We for Humanity: Charikot, Nepal'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionViewDonors,
    SectionOpenSource,
    SectionCompanyProfileLists,
    SectionImageCarousel
  }
};
</script>
