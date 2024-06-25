export const useIndexStore = defineStore('indexStore', {
    state: () => ({
        politicalParty: 'Moderate',
        money: 0,
        voters: 0,
        integrity: 0,
        score: 0,
        language: 'en'
    }),

    persist: true,
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
