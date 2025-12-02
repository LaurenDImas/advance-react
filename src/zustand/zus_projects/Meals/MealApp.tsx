import {useStore} from "./stores/store.ts";
import {useEffect} from "react";

const MealApp = () => {
    const {
        meals,
        searchQuery,
        setMeals,
        setSearchQuery,
        debouncedQuery,
    } = useStore();
    
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
                );
                const data = await response.json();
                
                setMeals(data.meals);
            }catch (error) {
                console.log(error);
            }
        }
        
        fetchMeals();
    }, [setMeals]);
    
    const filteredMeals = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(debouncedQuery.toLowerCase()));
    
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100"
        >
            <h1 className="text-4xl font-bold mb-8 text-teal-600">
                Seafood Recipes
            </h1>
            
            <input
                type="text"
                placeholder="Search for a meals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            
            <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-4">
                {filteredMeals.length > 0 ? (
                    filteredMeals.map((meal) => (
                        <div
                            key={meal.idMeal}
                            className="bg-white shadow-md rounded-lg flex flex-col overflow-hidden"
                        >
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover  mb-4" />
                            
                            <div className="px-4 pb-4">
                                <h2 className="text-xl font-semibold text-teal-700 mb-2 break-all">{meal.strMeal}</h2>
                                
                                <p className="text-gray-600 text-sm">Delicious seafood meal.</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No meals found</p>
                )}
            </div>
        </div>
    )
}
export default MealApp
