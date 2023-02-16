const Home = () => {
    const devName = "Oakley";
    const link = "https://www.google.com";
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>Developed by {devName}</p>
            <a href={link}>Google Site</a>
        </div>
      );
}
 
export default Home;