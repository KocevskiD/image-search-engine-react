function SearchBar(){
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('I need to tell the parent about some data')
        
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}

export default SearchBar;