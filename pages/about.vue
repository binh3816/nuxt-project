<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime
      dolore temporibus in tempore, suscipit dolorem asperiores. Officia
      suscipit architecto excepturi illum libero itaque tempora, et doloremque
      natus quaerat sed.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const {data} = await useFetch('/api/ninja?name=binh',{
  method: 'post',
  body: {
    age: 30,
  }
}
  
)
</script>

<style scoped></style>
