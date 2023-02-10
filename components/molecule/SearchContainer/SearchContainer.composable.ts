const isSearching = ref(false);

export const useSearchContainer = () => {
  const toggleSearch = () => { isSearching.value = !isSearching.value }

  return {
    toggleSearch,
    isSearching,
  }
}
