<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from '@/lib/api'
import { promptExamples } from '@/lib/examples'
import ChatForm from '@/components/home/ChatForm.vue'
import ChatMessages from '@/components/home/ChatMessages.vue'
import UserGreeting from '@/components/home/UserGreeting.vue'
import ChatLayout from '@/layouts/ChatLayout.vue'
import { messages } from '@/lib/examples'
import type { Messages, userQuery } from '@/types'

const chatMessages = ref<Messages[]>(messages)
const chatInitiated = ref(false)

const loading = ref<boolean>(false)
const userAgentTyping = ref<boolean>(false)

const simulateAIResponse = async (data: userQuery) => {
  console.log('File: ', data.file)
  userAgentTyping.value = true
  // Wait for 2 seconds before executing the next line
  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (data.file.length === 0) {
    chatMessages.value.push({
      id: chatMessages.value.length + 1,
      message: `Thank you for your message: "${data.query}"`,
      role: 'assistant',
    })
  } else {
    const fileNames = data.file.map((file) => file.name)

    chatMessages.value.push({
      id: chatMessages.value.length + 1,
      message: `Received your file: "${fileNames}". Will analyze it shortly.`,
      role: 'assistant',
    })
  }

  userAgentTyping.value = false
}

const handleSubmit = async (data: userQuery) => {
  loading.value = true
  chatInitiated.value = true

  const tempMessage: Messages = {
    id: chatMessages.value.length + 1,
    role: 'user',
    message: data.query,
    temporary: true,
  }

  chatMessages.value.push(tempMessage)

  try {
    const res = await api.post('posts', { message: data.query, role: 'user' })
    loading.value = false

    const index = chatMessages.value.findIndex((msg) => msg.temporary)
    if (index !== -1) {
      chatMessages.value[index] = { ...res.data, id: tempMessage.id } // Keep the same ID
    }

    await simulateAIResponse(data)
  } catch (err: unknown) {
    loading.value = false
    console.log('Err: ', err)
  }
}
</script>

<template>
  <ChatLayout>
    <div
      class="mx-auto md:max-w-4xl w-full items-center justify-center container-height flex flex-col relative"
    >
      <ChatMessages
        v-if="chatInitiated"
        :messages="chatMessages"
        :user-agent-typing="userAgentTyping"
      />
      <div class="w-full mx-auto">
        <UserGreeting v-if="!chatInitiated" />
        <ChatForm
          :class="[
            { 'mt-5': !chatInitiated },
            { 'mb-3': chatInitiated },
            { '!fixed bottom-2 max-w-4xl': chatInitiated },
          ]"
          @submit="handleSubmit"
        />
        <div v-if="!chatInitiated" class="mt-14">
          <p class="uppercase text-gray-600 dark:text-gray-500 text-sm">
            Get Started with an example below
          </p>
          <div class="flex gap-x-3 mt-4">
            <div
              v-for="prompt in promptExamples"
              :key="prompt.prompt"
              class="bg-gray-50 dark:bg-gray-900/40 hover:dark:bg-gray-800/30 p-5 rounded-md flex-1 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer"
            >
              <div class="flex gap-x-3">
                <Icon
                  :icon="prompt.icon"
                  class="size-4 shrink-0 text-gray-600 dark:text-gray-300 mt-1"
                />
                <div class="h-16">
                  <p class="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {{ prompt.prompt }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ChatLayout>
</template>

<style>
.container-height {
  height: calc(100dvh - 50px);
}
</style>
