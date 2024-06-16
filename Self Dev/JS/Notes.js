const noteTitleInput = document.getElementById("note-title");
const noteContentInput = document.getElementById("note-content");
const notesContainer = document.getElementById("notes-container");
const addNoteForm = document.getElementById("add-note-form");

addNoteForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const title = noteTitleInput.value;
  const content = noteContentInput.value;

  // Create a new note object
  const newNote = {
    title: title,
    content: content,
  };

  // Create a new note element
  const note = document.createElement("div");
  note.classList.add("note");

  // Create a container for title and content
  const noteContent = document.createElement("div");
  noteContent.classList.add("note-content");

  // Add title and content to the container
  const noteTitle = document.createElement("h2");
  noteTitle.textContent = title;
  noteContent.appendChild(noteTitle);

  const noteParagraph = document.createElement("p");
  noteParagraph.textContent = content;
  noteContent.appendChild(noteParagraph);

  // Add container to the note
  note.appendChild(noteContent);

  // Add a button to delete the note
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    notesContainer.removeChild(note);
    const remainingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    remainingNotes.splice(remainingNotes.indexOf(newNote), 1);
    localStorage.setItem("notes", JSON.stringify(remainingNotes));
  });
  note.appendChild(deleteButton);

  // Add the note to the container
  notesContainer.appendChild(note);

  //Save notes to localStorage
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  allNotes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(allNotes));

  // Clear the form after adding the note
  noteTitleInput.value = "";
  noteContentInput.value = "";
});

// Load any existing notes from localStorage
const savedNotes = JSON.parse(localStorage.getItem("notes"));
if (savedNotes) {
  savedNotes.forEach((note) => {
    const newNote = document.createElement("div");
    newNote.classList.add("note");

    const noteContent = document.createElement("div");
    noteContent.classList.add("note-content");
    noteContent.innerHTML = `<h2>${note.title}</h2><p>${note.content}</p>`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      notesContainer.removeChild(newNote);
      const remainingNotes = JSON.parse(localStorage.getItem("notes")) || [];
      remainingNotes.splice(remainingNotes.indexOf(note), 1);
      localStorage.setItem("notes", JSON.stringify(remainingNotes));
    });

    newNote.appendChild(noteContent);
    newNote.appendChild(deleteButton);
    notesContainer.appendChild(newNote);
  });
}

// Save notes to localStorage when form is submitted or the window is closed
window.addEventListener("beforeunload", () => {
  const notes = [];
  for (const note of notesContainer.children) {
    notes.push({
      title: note.querySelector("h2").textContent,
      content: note.querySelector("p").textContent,
    });
  }
  localStorage.setItem("notes", JSON.stringify(notes));
});
