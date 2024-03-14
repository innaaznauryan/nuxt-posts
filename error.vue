<template>
    <h3>{{ error.statusCode }}</h3>
    <p>{{ error.message }}</p>
    <button @click="handleError">Clear Error</button>
</template>

<script setup>
defineProps(["error"])
const handleError = () => {
    clearError({redirect: '/'})
}
</script>

<style scoped>

</style>