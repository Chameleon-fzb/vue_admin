import { defineStore } from 'pinia'
export const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
      refsh: false,
    }
  },
})
