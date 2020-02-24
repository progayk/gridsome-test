<template>
  <Layout>
    <div class="container">
      <p class="mt-4 text-gray-700 text-sm">Patient Name</p>
      <h1 class="font-bold text-3xl leading-8">
        <span class="capitalize" v-if="$page.googleSheet.Last_Name">{{ $page.googleSheet.Last_Name}}, </span>
        {{ $page.googleSheet.First_Name }} 
      </h1>
      <p class="mt-4"><strong>Id: </strong> {{ $page.googleSheet.id }}</p>
      <p class=""><strong>Year of Birth:</strong> {{ $page.googleSheet.Year_of_Birth }}</p>
      <p><strong>Grafts:</strong> {{ $page.googleSheet.Grafts }}</p>
      <p class="capitalize"><strong>Nationality:</strong> {{ $page.googleSheet.Nationality }}</p>
      <p><strong>Mail:</strong> {{ $page.googleSheet.Mail }}</p>
      <p><strong>Phone:</strong> {{ $page.googleSheet.Phone }}</p>
      <p><strong>Occupation:</strong> {{ $page.googleSheet.Occupation }}</p>
      <p><strong>Surgery_Date:</strong> {{ $page.googleSheet.Surgery_Date }}</p>


      <div class="mt-4">
        <p class="font-bold text-2xl">Notes</p>
        <p v-if="$page.googleSheet.Notes">
          {{ $page.googleSheet.Notes }}
        </p>
        <p class="text-gray-700" v-else>There is no not about this patient.</p>
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
    Occupation
    Year_of_Birth
    Surgery_Date
    Nationality
    id 
    Grafts
    Mail
    Phone
    }
}
</page-query>

