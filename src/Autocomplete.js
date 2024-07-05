import { useState } from "react";

const AutoComplete = ({ suggestions}) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [input, setInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("");
    const onChange = (e) => {
        if (input !== "") {

        const userInput = e.target.value;
    
        const unLinked = suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().startsWith(userInput.toLowerCase())
        );
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setPlaceHolder(filteredSuggestions[0]);
        }
        else {
            setInput(e.target.value);
        }
      };
    const onKeyDown = (e) => {
        if (e.key === "Backacpe") {
            onChange(e);
        }
        if (e.key === "Enter") {
            setInput(placeHolder);
        }
    }
    let onButtonClick = (e) => {
        if(!suggestions.includes(input)) {
            suggestions.push(input)
            console.log(input)
        }
    }

   return (
    <div className="autocomplete-container">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div className="placeholder">{placeHolder}</div>
      <button onClick={onButtonClick}>
        Отправить
      </button>
      {/* {showSuggestions && input && <SuggestionsListComponent />} */}
    </div>
  );
};
export default AutoComplete;