<template>
  <div>
    <Head>
      <Title>Nuxt merch | {{ products.title }}</Title>
      <Meta name="description" :content="products.description" />
    </Head>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: 'binh | merch',
  meta:[
    {name: 'description', content: 'binh merch'}
  ]
})
</script>

<style lang="scss" scoped></style>

