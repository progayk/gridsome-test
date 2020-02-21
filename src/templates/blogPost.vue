<template>
  <Layout>

    <g-image class="min-w-full h-56" src="https://via.placeholder.com/400/333333"></g-image>
    <div class="container">
      <h3 class="mt-6 text-base text-purple-500 tracking-wide uppercase font-semibold">marketing</h3>
      <h1 class="mt-4 text-gray-900 font-bold text-2xl leading-8 capitalize">{{ $page.post.title }}</h1>
      <p class="mt-4 text-sm text-gray-600 "><span class=" font-serif font-light">author</span>&nbsp;&nbsp;<span class="text-gray-700 italic font-serif capitalize">{{ $page.post.title.split(" ")[2] + ' ' + $page.post.title.split(' ')[4]}}</span>  </p>
      <p class="text-gray-600 text-sm"><span class=" font-serif font-light">published at</span>&nbsp;&nbsp;<span class="text-gray-700 italic font-serif">2 May 2020</span> </p>

      <div v-for="i in 3" :key="i" class="mt-5 text-gray-700">
        <p class="capitalize">{{$page.post.body }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia quam dolor minima quas adipisci nostrum blanditiis deserunt eos dolores, natus, dolore odit quia dolorum voluptatum reprehenderit at ut.</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    body
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>