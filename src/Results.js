import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div>
        <h2>{props.data.word}</h2>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
}
