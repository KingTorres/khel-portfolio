import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('nav', () => {
  const currentSection = ref('home')
  return { currentSection }
})
