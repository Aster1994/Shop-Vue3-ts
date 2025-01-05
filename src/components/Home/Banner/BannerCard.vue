<template>
  <div class="banner-card">
    <div
      :class="{ 'md:grid md:grid-cols-5 items-center': banner.title }"
      class="banner-card__wrapper bg-base-200 min-h-[inherit] max-h-[inherit] w-full rounded-2xl"
    >
      <div
        v-if="banner.title"
        :class="{ 'md:col-span-2': banner.title }"
        class="p-8 md:p-16 flex flex-col justify-between items-center md:items-start max-h-full min-h-max w-full"
      >
        <h3 class="banner-card__title font-bold !leading-tight">
          {{ banner.title }}
        </h3>
        <p v-if="banner.text" class="banner-card__text md:text-xl mt-8">{{ banner.text }}</p>
        <button
          v-if="banner.hasButton"
          class="banner-card__button px-8 mt-8 text-xl w-max d-btn d-btn-accent"
        >
          {{ banner.buttonText }}
        </button>
      </div>

      <img
        :alt="banner.altImage"
        :class="{ 'md:col-span-3': banner.title }"
        :src="banner.image"
        class="banner-card__image w-full h-[inherit] max-h-[inherit] rounded-2xl object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Banner {
  title?: string
  text?: string
  image?: string
  altImage?: string
  hasButton?: boolean
  buttonText?: string
}

const props = defineProps<{
  banner: Banner
}>()
const { banner } = props
</script>

<style lang="scss" scoped>
.banner-card__title {
  font-size: clamp(2rem, 3.5vw, 4.5rem);
  @supports not (font-size: clamp(2rem, 3.5vw, 4.5rem)) {
    font-size: 3.5vw;
  }
}
</style>
