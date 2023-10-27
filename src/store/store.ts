// store.js
import create from 'zustand'

type State = {
  isDrawerOpen: boolean
  DrawerOpen: () => void
  DrawerClose: () => void
}

const useStore = create<State>((set) => ({
  isDrawerOpen: false,
  DrawerOpen: () => set({ isDrawerOpen: true }),
  DrawerClose: () => set({ isDrawerOpen: false })
}))

export default useStore
