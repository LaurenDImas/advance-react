import {create} from "zustand";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string,
}

interface RecipeStore {
    recipes: Recipe[];
    addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
    removeRecipe: (id: number) => void;
    updateRecipe: (recipe: Recipe) => void;
}

export const useStore = create<RecipeStore>((set) => ({
    recipes: [],
    addRecipe: (recipe) =>
        set((state) => ({ recipes: [...state.recipes, { ...recipe, id: Date.now() }] })),
    removeRecipe: (id: number) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id)
        })),
    updateRecipe: (recipe: Recipe) =>
        set((state) => ({
            recipes: state.recipes.map(data =>
                data.id === recipe.id ? {...data, ...recipe} : data)
        }))
}))