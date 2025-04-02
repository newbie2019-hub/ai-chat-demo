<script lang="ts" setup>
import { nextTick, useTemplateRef, watch } from 'vue'
import type { Messages } from '@/types'
import MessageBubble from './MessageBubble.vue'
import TypingIndicator from './TypingIndicator.vue'

const { messages } = defineProps<{
  messages: Messages[]
  userAgentTyping?: boolean
}>()

const scrollBottom = useTemplateRef('scrollBottom')

const scrollToBottom = () => {
  nextTick(() => {
    if (scrollBottom.value) {
      scrollBottom.value.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

watch(
  () => messages.length,
  () => scrollToBottom(),
)
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full sm:[overflow-anchor:none] pt-6 pb-52">
      <MessageBubble v-for="msg in messages" :key="msg.id" :message="msg" />
      <TypingIndicator v-if="userAgentTyping" />
    </div>
    <!-- Scroll to bottom trigger -->
    <div ref="scrollBottom" class="sm:[overflow-anchor:auto] h-px"></div>
  </div>
</template>
