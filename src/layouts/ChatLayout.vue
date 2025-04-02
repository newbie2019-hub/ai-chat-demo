<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import DarkMode from '@/components/DarkMode.vue'
import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<template>
  <SidebarProvider>
    <div
      class="glow bg-green-300 fixed -top-6 -right-8 w-[260px] h-[260px] rounded-full blur-[300px] pointer-events-none"
    ></div>
    <AppSidebar />
    <main class="w-full">
      <div class="flex justify-between px-3 pt-3 sticky top-3 z-10">
        <SidebarTrigger />
        <div class="flex gap-x-3">
          <Button>
            <Icon icon="mdi:account-add" />
            Invite Friends
          </Button>
          <Button variant="outline">Sign-in</Button>
          <DarkMode />
        </div>
      </div>
      <div class="px-4 sm:px-7">
        <slot />
      </div>
    </main>
  </SidebarProvider>
</template>
