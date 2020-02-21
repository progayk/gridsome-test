<template>
  <Layout class>
    <div class="container">
      <h1 class="text-black text-3xl font-bold mt-4">Blog</h1>

      <div class="mt-4 grid rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <g-link
          tag="div"
          class="max-w-md rounded-xl shadow-xl cursor-pointer hover:shadow-2xl bg-white"
          v-for="post in $page.allBlogPost.edges"
          :key="post.id"
          :to="`/blog/${post.node.id}`"
        >
          <g-image fit="cover" class="rounded h-56 w-full" src="https://via.placeholder.com/400/333333"></g-image>

          <div class="p-6">
            <h3 class="font-semibold uppercase text-gray-900 hover:underline">{{post.node.title}}</h3>
            <p class="mt-2 text-gray-600">{{ post.node.body }}</p>
          </div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query {
  allBlogPost {
    edges {
      node {
        title
        id
        path
        body
      }
    }
  }
}
</page-query>