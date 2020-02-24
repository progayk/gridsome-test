<template>
  <Layout>
    <div class="container">
      <p class="mt-4 text-gray-700 text-sm">Patient Name</p>
      <h1 class="font-bold text-3xl">
        <span class="capitalize" v-if="$page.googleSheet.Last_Name">{{ $page.googleSheet.Last_Name}}, </span>
        {{ $page.googleSheet.First_Name }} 
      </h1>
      <h2 class="mt-2"><strong>Id: </strong> {{ $page.googleSheet.id }}</h2>

      <div class="mt-4">
        <p>
          <strong>{{ $page.googleSheet.First_Name }}</strong>
        </p>
        <!-- <p>{{ $page.googleSheet.organizer }}</p> -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query GoogleSheet ($path: String!) {
  googleSheet (path: $path) {
    First_Name 
    Last_Name
    id 
    }
}
</page-query>

