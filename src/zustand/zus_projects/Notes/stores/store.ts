import {create} from "zustand";

interface Note {
    text: string;
    color: string;
}

interface NotesState {
    notes: Note[];
    search: string;
    editorContent: string;
    noteColor: string;
    currentNoteIndex: number|null;
    setNotes: (updateNotes: Note[]) => void;
    setSearch: (searchValue: string) => void;
    setEditorContent: (content: string) => void;
    setNoteColor: (color: string) => void;
    setCurrentNoteIndex: (index: number|null) => void;
    addOrUpdateNote: () => void;
    selectNote: (index: number) => void;
}

const useNotesStore = create<NotesState>((set) => ({
    notes: [],
    search: '',
    editorContent: '',
    noteColor: "#fff",
    currentNoteIndex: null,
    
    setNotes: (updateNotes: Note[]) => set(() => ({notes: updateNotes})),
    setSearch: (searchValue: string) => set(() => ({search: searchValue})),
    setEditorContent: (content: string) => set(() => ({editorContent: content})),
    setNoteColor: (color: string) => set({noteColor: color}),
    setCurrentNoteIndex: (index: number|null) => set(() => ({currentNoteIndex: index})),
    
    addOrUpdateNote: () => set((state) => {
        const {editorContent, noteColor, currentNoteIndex, notes} = state;
        console.log(noteColor);
        if (editorContent.trim()) {
            if (currentNoteIndex !== null){
                const updatedNotes = [...notes]
                updatedNotes[currentNoteIndex] = {
                    text: editorContent,
                    color: noteColor
                }
                
                return {
                    notes: updatedNotes,
                    editorContent: "",
                    noteColor: "#fff",
                    currentNoteIndex: null
                }
            }else{
                return {
                    notes: [...notes, { text: editorContent, color: noteColor }],
                    editorContent: '',
                    noteColor: "#fff",
                    currentNoteIndex: null
                }
            }
        }
        
        return {};
    }),
    
    selectNote: (index: number) => set((state) => ({
        currentNoteIndex: index,
        editorContent: state.notes[index].text,
        noteColor: state.notes[index].color,
    }))
}));

export default useNotesStore;