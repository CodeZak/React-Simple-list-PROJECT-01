function Header() {
    const client = "programmer"
    
    return (
        <div className="navbar bg-primary ">
            <h1 className="text-white">{client === "programmer" ?  "Programming" : "Design"} is my life </h1>
        </div>
    );
}

export default Header;
