import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <div className="Meaning">
        <h3>{props.data.partOfSpeech}</h3>
        <div className="definition">{props.data.definition}</div>
        <div className="example">{props.data.example}</div>
        <Synonyms data={props.data.synonyms} />
      </div>
    </div>
  );
}
