<template>
  <div class="pt-12">
    <header class="inset-x-0 px-4 fixed top-0 z-100 h-12 bg-gray-100 flex justify-between items-center border-b border-gray-400">
      <strong class="">
        <g-link tag="span" class="text-black" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="flex text-gray-600 ">
        <g-link class="mx-2 lg:mx-4 inline-block hover:text-blue-400" to="/">Home</g-link>
        <g-link class="mx-2 lg:mx-4 inline-block" to="/about/">About</g-link>
        <g-link class="mx-2 lg:mx-4 inline-block" to="/faker/">Faker</g-link>
        <g-link class="ml-2 lg:mx-4 inline-block" to="/blog/">Blog</g-link>
      </nav>
    </header>

    <!-- SLOT -->
    <slot />
    <!-- SLOT -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>



<style>

</style>
