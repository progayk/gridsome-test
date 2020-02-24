<template>
  <Layout>
    <div class="container">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

      <h1 class="font-bold text-3xl mt-4">Patients</h1>

      <ol class="list-decimal pl-6">
        <li class="my-4" v-for="page in $page.allGoogleSheet.edges" :key="page.node.id">
          <g-link class="capitalize" :to="`/sheet/${page.node.id}`">
            <strong class="capitalize" v-if="page.node.Last_Name">{{ page.node.Last_Name}},</strong>
            {{ page.node.First_Name }} -
            <i class="italic capitalize">({{ page.node.Nationality }})</i>
            <!-- - {{ page.node.id }} -->
          </g-link>
        </li>
      </ol>

      <!-- <div class="mt-4">
        <div
          class="max-w-sm mb-2 mx-auto flex p-4 bg-white rounded-lg shadow-md"
          v-for="(item, index) in $page.allFaker.edges"
          :key="index"
        >
          <div class="flex-shrink-0">
            <g-image class="h-16 w-16 rounded-full" :src="item.node.avatar" alt="ChitChat Logo" />
          </div>
          <div class="ml-4 pt-3">
            <h4 class="text-base text-gray-900 leading-tight">{{ item.node.author }}</h4>
            <p class="text-sm text-gray-600 leading-normals">{{ item.node.email }}</p>
          </div>
        </div>
      </div> -->



    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<page-query>
query {
	allGoogleSheet {
    edges {
      node {
        id
        Nationality
        Last_Name
        First_Name
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
