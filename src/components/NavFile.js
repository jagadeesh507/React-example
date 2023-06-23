function NavFile(){
    return(
        <>
        <div className="navBar">
          <div className="homePage">
              <h2>Home Page</h2>
          </div>
          <div className="listContainer">
              <ul>
                  <li><a href="login.js">login</a></li>
                  <li><a href="register.js">Register</a></li>
                  <li><a href="about.js">About</a></li>
              </ul>
          </div>
        </div>
        </>
      );
}
export default NavFile;