<template>
  <Layout>
    <div class="container">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

      <h1 class="font-bold text-3xl mt-4">Patients</h1>

      <ol class="my-4" v-for="page in $page.allGoogleSheet.edges" :key="page.node.id">
        <li v-if="page.node.First_Name">
          <g-link class="capitalize" :to="`/sheet/${page.node.id}`">
            <strong class="capitalize" v-if="page.node.Last_Name">{{ page.node.Last_Name}}, </strong>{{ page.node.First_Name }}  -
            <i class="italic capitalize">({{ page.node.Nationality }})</i>
            <!-- - {{ page.node.id }} -->
          </g-link>
        </li>
      </ol>
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
