<template>
    <h1>Posts</h1>
    <menu>
        <li 
            v-for="post in posts"
            :key="post.id">
            <nuxt-link 
                :to="{path: '/' + post.id}">
                {{ post.title }}
            </nuxt-link>
        </li>
    </menu>
</template>

<script setup>
const config = useRuntimeConfig()
const response = await useFetch(config.public.baseURL + "posts")
const posts = ref(response.data.value)
</script>

<style scoped>
h1 {
    text-align: center;
}
menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
menu {
    list-style-type: none;
}
a {
    text-decoration: none;
    color: darkblue;
}
</style>