import useNotesStore from "../stores/store.ts";
import {FiSearch} from "react-icons/fi";

const Sidebar = () => {
    const {notes, search, selectNote, setSearch} = useNotesStore()
    
    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div className="w-1/3 bg-white p-4 shadow-lg">
            <div className="flex items-center mb-4">
                <FiSearch className="text-2xl mr-2" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            
            <div>
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note, index) => (
                        <div
                            key={index}
                            className="flex items-center mb-2 p-4 rounded-lg shadow-md cursor-pointer border hover:bg-gray-200"
                            onClick={() => selectNote(index)}
                        >
                            {/*Color Circle*/}
                            <div
                                className="w-4 p-4 rounded-full mr-2"
                                style={{
                                    backgroundColor: note.color,
                                    border: "1px solid #000",
                                }}
                            />
                            
                            <div
                                className="truncate"
                                dangerouslySetInnerHTML={{ __html: note.text }}
                            ></div>
                        </div>
                    ))
                ) : (
                    <p>No New Notes</p>
                )}
            </div>
        </div>
    )
}
export default Sidebar
