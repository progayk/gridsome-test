<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-2xl mt-4">Faker Data</h1>

      <div class="mt-4">
        <div
          class="max-w-sm mb-2 mx-auto flex p-4 bg-white rounded-lg shadow-md"
          v-for="(item, index) in $page.allFaker.edges"
          :key="index"
        >
          <div class="flex-shrink-0">
            <g-image class="h-16 w-16 rounded-full" :src="item.node.avatar" alt="ChitChat Logo" />
          </div>
          <div class="ml-4 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">{{ item.node.author }}</h4>
            <p class="text-base text-gray-600 leading-normal">{{ item.node.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
    query {
        allFaker (perPage: 15){
            edges {
                node {
                    author
                    email
                    avatar
                }
            }
  }
}
</page-query>