import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import useNotesStore from "./stores/store.ts";
import {AiOutlinePlus} from "react-icons/ai";
import Sidebar from "./components/Sidebar.tsx";

const NoteApp = () => {
    const {
        editorContent,
        noteColor,
        currentNoteIndex,
        setEditorContent,
        setNoteColor,
        addOrUpdateNote
    } = useNotesStore();
    
    
    return (
        <div className="h-screen flex">
            {/*Sidebar*/}
            <Sidebar/>
            {/*Main*/}
            <div className="w-2/3 p-8">
                <ReactQuill
                    placeholder="Write your note here..."
                    theme="snow"
                    className="h-94 bg-white mb-[2rem]"
                    value={editorContent}
                    onChange={setEditorContent}
                />
                
                {/*Color Selector*/}
                <div className="flex ml-[1rem] items-center mt-4 space-y-4">
                    <input
                        type="color"
                        value={noteColor}
                        onChange={(e) => setNoteColor(e.target.value)}
                        className="w-10 h-10 border rounded-full"
                    />
                    <p>Choose a note Color</p>
                </div>
                
                {/*Save button*/}
                <button
                    type="button"
                    onClick={addOrUpdateNote}
                    className="bg-blue-500 ml-[1rem] text-white py-2 px-2 rounded-lg shadow-lg
                hover:bg-blue-600 flex items-center"
                >
                    <AiOutlinePlus className="mr-2"/>
                    {currentNoteIndex !== null ? "Update Note" : "Save Note"}
                </button>
            </div>
            
        </div>
    )
}
export default NoteApp
