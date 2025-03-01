<template>
  <footer class="text-white body-font">
    <div class="bg-shark-500">
      <div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
        <g-link
          to="/"
          class="flex title-font font-medium items-center md:justify-start justify-center">
          <g-image src="~/favicon.png" width="60" />
          <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span>
        </g-link>
        <div class="text-sm md:ml-6 md:mt-0 mt-4 grid">
          <span>
            © {{ currentYear }} {{ $static.metadata.siteName }}
          </span>
          <span class="text-white">
            <a href="mailto:weforhumanity05@gmail.com">weforhumanity05@gmail.com</a>
          </span>
          <span class="text-white underline"><a href="https://www.bishwodahal.com"> Developed with ❤️ by  Bishwo Dahal</a></span>
        </div>
        <div class="footer-links inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <g-link
            to="/donors"
            class="mr-4">
            Donors List
          </g-link>

          <g-link
            to="/pages/developers-info"
            class="mr-4">
            Developer's Info
          </g-link>

          <g-link to="/credits">
            Credits
          </g-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
