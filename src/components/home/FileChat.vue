<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'remove'): void
}>()

defineProps<{
  fileName: string
}>()
</script>

<template>
  <div
    class="relative w-28 truncate cursor-pointer hover:bg-gray-100 bg-white dark:bg-gray-900/50 dark:text-gray-200 transition-all ease-in-out duration-200 text-sm border rounded-full px-3 py-1"
    @click="emit('remove')"
  >
    {{ fileName }}
    <span class="absolute right-2 top-1 text-red-600 bg-white rounded-full">x</span>
  </div>
</template>
