import {create} from "zustand";

interface Meals {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface StoreMeal{
    meals: Meals[];
    searchQuery: string;
    debouncedQuery: string;
    setMeals: (meals: Meals[]) => void;
    setSearchQuery: (searchQuery: string) => void;
}

let debounceTimer: number | undefined;

export const useStore = create<StoreMeal>((set) => ({
    meals: [],
    searchQuery: '',
    debouncedQuery: '',
    setMeals: (meals: Meals[]) => set({meals}),
    setSearchQuery: (query: string) => {
        set({searchQuery: query});
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            set({debouncedQuery: query});
        }, 500)
    },
}))