import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <div className="Meaning">
        <h4>{props.data.partOfSpeech}</h4>
        <p>
          <strong>Definition:</strong> {props.data.definition} <br />
          <strong>Example:</strong> <em>{props.data.example}</em>
        </p>
        <Synonyms data={props.data.synonyms} />
      </div>
    </div>
  );
}
