import './App.css';
import Autocomplete from "./Autocomplete";
import suggestions from "./suggestions"

const App = () => {
  return (
    <div>
      <h1>Задание 9</h1>
      <Autocomplete
        suggestions={suggestions}
      />
    </div>
  );
};

export default App;
