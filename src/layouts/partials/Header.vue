<template>
  <header class="bg-shark-500 text-white body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
      <g-link
        to="/"
        class="flex title-font font-medium items-center">
        <g-image src="~/favicon.png" width="60" />

        <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span>
      </g-link>

      <nav class="header-links ml-auto flex flex-wrap items-center text-xl justify-center">
        <g-link
          to="/"
          class="mr-5 hidden md:block"
          exact>
          Home
        </g-link>
        <g-link
          to="/articles"
          class="mr-5 hidden md:block"
          exact>
          Articles
        </g-link>
        <g-link
          to="/pages/donate"
          class="mr-5 hidden md:block"
          exact>
          Donate
        </g-link>
        <g-link
          to="/news"
          class="mr-5 hidden md:block"
          exact>
          News
        </g-link>
        <g-link
          to="/news/wfh-founders-list"
          class="mr-5 hidden md:block"
          exact>
          Founders
        </g-link>
        <g-link
          to="/pages/contribute"
          class="mr-5 hidden md:block"
          exact>
          Contribute
        </g-link>

        <a
          href="#"
          type="button"
          aria-label="Open Navigation"
          title="Open Navigation"
          class="block md:hidden mr-5 focus:outline-none"
          @click.prevent="showResponsiveMenu()">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="menu w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>

        <g-link to="/search">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="search w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showResponsiveMenu () {
      this.$emit('openResponsiveMenu');
    }
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
