<template>
  <Layout>
    <div>Test Route</div>

    <div>
      <p>
        <strong>{{ $page.googleSheet.event_name }}</strong>
      </p>
      <!-- <p>{{ $page.googleSheet.organizer }}</p> -->
    </div>
  </Layout>
</template>

<page-query>
query GoogleSheet ($path: String!) {
  googleSheet (path: $path) {
    event_name
    organizer 
    }
}
</page-query>

