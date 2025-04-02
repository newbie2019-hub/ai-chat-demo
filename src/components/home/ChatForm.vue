<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Button } from '../ui/button'
import { Icon } from '@iconify/vue'
import { DRAG_STATE } from '@/lib/utils'
import FileChat from './FileChat.vue'

const emit = defineEmits<{
  (e: 'submit', data: { query: string; file: File[] }): void
}>()

const dragState = ref<(typeof DRAG_STATE)[keyof typeof DRAG_STATE] | null>(null)
const fileAttachments = ref<File[]>([])
const query = ref('')

const placeholder = computed(() => {
  return dragState.value === DRAG_STATE.ON_DRAG_ENTER
    ? 'Drop your files here...'
    : 'Ask AI a question or make a request...'
})

const handleFormSubmit = () => {
  emit('submit', {
    query: query.value,
    file: fileAttachments.value,
  })
  query.value = ''
  fileAttachments.value = []
}

const handleFileDrop = (ev: DragEvent) => {
  ev.preventDefault()
  if (!ev.dataTransfer) return

  if (ev.dataTransfer.items) {
    ;[...ev.dataTransfer.items].forEach((item) => {
      if (item.kind === 'file') {
        const file = item.getAsFile()
        if (!file) return

        fileAttachments.value.push(file)
      }
    })
  } else {
    ;[...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file}`)
    })
  }
}

const removeFileAttachment = (index: number) => {
  fileAttachments.value.splice(index, 1)
}
</script>

<template>
  <div
    class="relative shadow-md bg-white dark:bg-black shadow-blue-600/5 focus-within:border-green-600/60 rounded-lg border p-4 w-full"
    :class="{
      'border-green-600/60': dragState === DRAG_STATE.ON_DRAG_ENTER,
    }"
    @dragover="dragState = DRAG_STATE.ON_DRAG_ENTER"
    @dragleave="dragState = null"
    @drop="handleFileDrop"
  >
    <div v-if="fileAttachments.length > 0" class="flex gap-x-2 items-center pb-3">
      <p class="text-sm text-gray-500">File Attachments:</p>
      <FileChat
        v-for="(file, i) in fileAttachments"
        :key="file.name"
        :file-name="file.name"
        @remove="() => removeFileAttachment(i)"
      />
    </div>
    <div class="flex gap-x-3">
      <span>✨</span>
      <textarea
        v-model="query"
        type="text"
        :placeholder
        class="input resize-none"
        rows="2"
        @keyup.enter.prevent="handleFormSubmit"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <Button size="icon" class="cursor-pointer">
        <Icon icon="mdi:arrow-upward" />
      </Button>
    </div>
  </div>
</template>

<style>
.input {
  @apply w-full outline-0 border-0;
}
</style>
