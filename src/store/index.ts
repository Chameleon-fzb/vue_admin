//store
import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia

export { useUserStore } from './modules/user.ts'
export { useLayoutSettingStore } from './modules/setting.ts'
