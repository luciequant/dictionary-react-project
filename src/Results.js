import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div>
        <div className="Results">
          <h2>{props.data.word}</h2>
          <p>/{props.data.phonetic}/</p>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
