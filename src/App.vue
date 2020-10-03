<template>
  <div id="navbar" class="h-screen">
    <nav class="bg-gray-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
                <svg class="h-8 w-8 text-teal-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/jungle" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Jungle</router-link>
                <router-link to="/cavern" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Cavern</router-link>
                <router-link to="/temple" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Temple</router-link>
                <router-link to="/combat" class="px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Combat</router-link>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.
        Open: "block", closed: "hidden"
      -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/jungle" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-100 focus:outline-none focus:text-white focus:bg-gray-900">Jungle</router-link>
          <router-link to="/cavern" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-100 focus:outline-none focus:text-white focus:bg-gray-900">Cavern</router-link>
          <router-link to="/temple" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-100 focus:outline-none focus:text-white focus:bg-gray-900">Temple</router-link>
          <router-link to="/combat" class="block px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Combat</router-link>
        </div>
      </div>
    </nav>

    <main>
      <div class="max-w-5xl mx-auto p-6">
        <div class="flex justify-center">
          <router-view/>
        </div>
      </div>
    </main>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css';
</style>
