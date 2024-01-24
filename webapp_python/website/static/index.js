function deleteNote(noteId) {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        window.location.href = "/";
    });
}

function go_to(noteId) {
    console.log('Navigating to note with ID:', noteId);
    // Your navigation logic here
}