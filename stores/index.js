const total = 3600000
export const useIndexStore = defineStore('indexStore', {
    state: () => ({
        politicalParty: 'centrist',
        money: 0,
        voters: 0,
        integrity: 0,
        points: 0,
        language: 'en',
        nickname: '',
        goal: '',
        customGoal: '',
    }),

    persist: true,
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
