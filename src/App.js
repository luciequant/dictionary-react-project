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
        <footer className="text-center">
          {" "}
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/luciequant"
              target="_blank"
              rel="noreferrer"
            >
              Lucie Quantová
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/luciequant/dictionary-react-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
