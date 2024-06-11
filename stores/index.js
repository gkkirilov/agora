export const useIndexStore = defineStore('indexStore', {
    state: () => ({
        politicalParty: 'Moderate Left',
        money: 50,
        voters: 15,
        integrity: 100,
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
