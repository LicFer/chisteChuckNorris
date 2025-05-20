<template>
    <div class="card">
      <img :src="joke.icon_url" alt="Chuck Norris" />
      <p>{{ joke.value }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['joke'],
  }
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
  </style>
  