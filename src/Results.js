import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div>
        <div className="Results">
          <section>
            <h2>{props.data.word}</h2>
            <p>/{props.data.phonetic}/</p>
          </section>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning data={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}
