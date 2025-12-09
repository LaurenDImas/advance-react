import useForm from "../hooks/useForm.tsx";

const MyForm = () => {
    const {values, handleChange, handleSubmit, submitted} = useForm({
        name: "",
        email: "",
    })
    
    const onSubmit = () => {
        console.log("submitted", values);
    }
    
    return (
        <div className="border h-screen flex justify-center items-center">
            <div className="bg-white p-15 rounded-2xl shadow-lg border border-gray-100 flex justify-center items-center">
                {submitted ? (
                    <h2 className="text-2xl font-medium">Thank you for submitting your information!</h2>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div>
                            <label>
                                Name
                                <input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                    className="block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-100 ease-in-out"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                    className="block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-100 ease-in-out"
                                />
                            </label>
                        </div>
                        
                        <button type="submit" className="border mt-2 px-4 py-2 text-white bg-blue-700 hover:bg-blue-500 rounded-lg transition duration-100 ease-in-out">Submit</button>
                    </form>
                )}
            </div>
            
        </div>
    )
}
export default MyForm
