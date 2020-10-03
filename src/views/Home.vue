<template>
  <div class="home">
    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="text-center">

        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Outdoors
        </p>

        <div class="mt-2 sm:flex md:flex justify-center">
          <router-link to="/jungle" class="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug rounded-md shadow-md text-white focus:outline-none transition ease-in-out duration-150">
            Jungle
          </router-link>

          <router-link to="/cavern" class="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug rounded-md shadow-md text-white focus:outline-none transition ease-in-out duration-150">
            Cavern
          </router-link>
        </div>

        <p class="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Indoors
        </p>

        <div class="mt-2 sm:flex sm:justify-center">
          <router-link to="/temple" class="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug rounded-md shadow-md text-white focus:outline-none transition ease-in-out duration-150">
            Temple
          </router-link>
        </div>

        <p class="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Combat
        </p>

        <div class="mt-2 sm:flex sm:justify-center">
          <router-link to="/combat" class="bg-red-800 hover:bg-red-700 focus:bg-red-700 mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug rounded-md shadow-md text-white focus:outline-none transition ease-in-out duration-150">
            Combat
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

