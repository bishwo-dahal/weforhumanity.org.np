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

    

  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestArticles from '~/components/sections/LatestArticles'
import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionViewDonors from '~/components/sections/ViewDonors'
import SectionCompanyProfileLists from '~/components/sections/CompanyProfileLists'
import SectionImageCarousel from '~/components/sections/ImageCarousel'

const mainPageExcerpt = "We For Humanity is a Nepal-based nonprofit organization dedicated to helping those in need through donations, volunteering, and community support.";
const mainPageKeywords = "We For Humanity, Nepal NGO, nonprofit organization, charity in Nepal, humanitarian aid, donations, volunteering, fundraising, community service, social impact, food distribution, education support, healthcare assistance, social welfare, support the needy, make a difference";
const mainPageImage = "/images/thumbnail/first_annual_meeting.JPG"

export default {
  metaInfo: {
    title: 'We for Humanity: Charikot, Nepal',
    meta:[
    {
          name:"developer",
          content:"Bishwo Dahal"
        }, 
        {
          property:'description',
          content:mainPageExcerpt
        },
        {
          property:'keywords',
          content:mainPageKeywords
        },
        {
          property:'og:title',
          content:`We For Humanity: Charikot, Nepal`
        },
        {
          property:'og:description',
          content:mainPageExcerpt
        },
        {
          property:'og:image',
          content:mainPageImage
        },
        {
          property:'twitter:title',
          content:`We For Humanity: Charikot, Nepal`
        },
        {
          property:'twitter:description',
          content:mainPageExcerpt
        },
        {
          property:'twitter:image',
          content:mainPageImage
        }
    ]
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionViewDonors,
    SectionCompanyProfileLists,
    SectionImageCarousel
  }
};
</script>
