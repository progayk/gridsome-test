<template>
  <Layout>

    <g-image class="min-w-full h-56" src="https://via.placeholder.com/400/333333"></g-image>
    <div class="container">
      <h3 class="mt-8 text-base text-purple-500 tracking-wide uppercase font-semibold">marketing</h3>
      <h1 class="mt-4 text-gray-900 font-bold text-2xl leading-8">{{ $page.post.title }}</h1>

      <div v-for="i in 3" :key="i" class="mt-4 text-gray-700">
        <p >{{$page.post.body }}</p>
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