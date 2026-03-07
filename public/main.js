function handleSearch() {
    const value = document.getElementById('search-input').value;

    if(value.trim() === ""){
        return
    }

    fetch(`http://localhost:3000/books/search?data=${encodeURIComponent(value)}&page=1`)
        .then((r) => r.json())
        .then((r) => console.log(r))
        .catch(err => console.log(err));
}