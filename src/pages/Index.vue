<template>
  <Layout>
    <div class="container">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

      <h1 class="font-bold text-3xl mt-4">Home</h1>


      <div class="my-4" v-for="page in $page.allGoogleSheet.edges" :key="page.node.id">
        <g-link :to="`/sheet/${page.node.id}`">
          <strong>{{ page.node.event_name }}</strong>
          - {{ page.node.id }}
        </g-link>
      </div>
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
        event_name
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
