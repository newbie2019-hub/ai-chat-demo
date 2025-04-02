<script lang="ts" setup>
import type { Messages } from '@/types'

defineProps<{ message: Messages }>()
</script>

<template>
  <div class="w-full h-fit py-1 flex" :class="{ 'justify-end': message.role === 'user' }">
    <div
      class="p-3.5 bg-gray-50 border dark:bg-gray-900/40 h-fit w-fit rounded-2xl max-w-lg"
      :class="{ 'dark:bg-gray-950': message.temporary }"
    >
      <p>{{ message.message }}</p>
    </div>
  </div>
</template>
