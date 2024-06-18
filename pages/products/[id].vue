<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      {{ product.title }}
    </p>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(url, {
  key: id,
});

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
