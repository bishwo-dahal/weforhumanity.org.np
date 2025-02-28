<template>
  <section class="bg-shark-50 body-font">
    <div class="w-full mx-auto">
      <div class="flex flex-wrap items-center mx-auto text-center md:flex-row-reverse">
        <div class="w-full md:w-1/2 text-2xl relative md:min-h-50vh flex justify-center pt-12 md:pt-0">
          <g-image
            class="md:object-contain md:absolute md:top-0 md:left-0 md:w-full md:h-full w-64 h-64"
            src="~/assets/images/donors_wfh.svg"
            width="400"
            alt="Think different" />
        </div>

        <div
          class="text-xl font-medium title-font w-full md:w-1/2 py-12 md:py-0">
          <h3 class="text-4xl lg:text-6xl text-center">
            See our contributors & Donors
          </h3>
          <p class="px-4 text-xl lg:text-2xl">
            We appreciate every donors, volunteers, and contributors who has contributed to our mission.
            <br> Visit our donors page for more information.
          </p>
          <p class="text-center mt-8">
            <g-link
              to="/articles"
              class="bg-smalt-blue-500 rounded p-4 text-white hover:bg-smalt-blue-600 transition-colors duration-100">
              Visit our Donors
            </g-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
