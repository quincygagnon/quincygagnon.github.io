const Navbar =() => {
    return(
        <nav className="navbar">
            <a href="/"><h1>{"Batter & Bloom"}</h1></a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/recipes">Recipes</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}

export default Navbar;