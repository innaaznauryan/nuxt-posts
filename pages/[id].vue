<template>
    <h3>{{ post.title }}</h3>
    <p>{{ post.description }}</p>
    <p>Views: {{ post.views }}</p>
    <h4 v-if="comments.length">Comments:</h4>
    <p v-for="comment in comments">{{ comment.text }}</p>
</template>

<script setup>
const config = useRuntimeConfig()
const {id} = useRoute().params

const postsResponse = await useFetch(config.public.baseURL + "posts/" + id)
const commentsResponse = await useFetch(config.public.baseURL + "comments/")

const post = ref(postsResponse.data.value)
const comments = ref(commentsResponse.data.value.filter(comment => comment.postId === id))

if (!post.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Page not found",
        fatal: true
    })
}

useHead({
  title: post.value.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: post.value["seo_description"]
    },
    {
      hid: "keywords",
      name: "keywords",
      content: post.value["seo_keywords"]
    }
  ]
})
</script>