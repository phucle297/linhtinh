import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
let store = (set: any) => ({
  pagination: {
    page: 1,
    size: 12,
    search: ''
  },
  setPagination: (pagination: any) => {
    set((state: any) => ({
      ...state,
      pagination
    }))
  }
})
// @ts-ignore
store = devtools(store) // Allow redux devtool debug
// @ts-ignore
store = persist(store, { name: 'library' }) // Persist to local storage

export default create(store)
