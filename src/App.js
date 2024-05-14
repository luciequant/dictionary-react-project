import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="earth" />
        </main>
        <footer className="text-center">Coded by Lucie Quantová</footer>
      </div>
    </div>
  );
}

export default App;
