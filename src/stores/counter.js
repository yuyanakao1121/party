import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const unchi = defineStore('counter', () => {
  const name = ref("")
  const course1 = ref("")
  const course2 = ref("")
  const course3 = ref("")
  const course4 = ref("")
  const selectedCourse = ref("")
  return { name,course1,course2,course3,course4,selectedCourse }
})
