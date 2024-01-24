<script setup>

</script>

<template>
<div class="shadow-md pb-6">
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      
    >
      Oops! Error encountered:
    </div>
    <table class="table-auto w-full">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">dada</td>
          <td class="py-2">afaf</td>
          <td class="py-2">adad</td>
        </tr>
      </tbody>
    </table>
    <div class="m-8 flex justify-center">
      <router-link :to="{ name: 'List' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back to Home
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>