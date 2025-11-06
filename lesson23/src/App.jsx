import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Lesson 23: Context + LocalStorage</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}

export default App;
