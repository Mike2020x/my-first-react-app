import "./App.css";
import img from "../src/assets/scarecrow.png";
function App() {
  return (
    <>
      <div>
        <header>
          <h1>404 NOT FOUND</h1>
        </header>
        <div className="container">
          <div className="left">
            <img src={img} className="img" alt="scarecrow" />
          </div>
          <div className="right">
            <h2>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily
              unavaliable
            </p>
            <button>BACK TO HOME PAGE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
