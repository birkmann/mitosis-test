import * as React from "react";
import { useState } from "react";

type Props = {
  text: string;
};
import s from "./Button.module.scss";

function Button(props: Props) {
  const [name, setName] = useState(() => "fromState");

  const [clicked, setClicked] = useState(() => 0);

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <button
        onClick={(event) => {
          setClicked(clicked + 1);
        }}
        className={s.Button}
      >
        <span>{props.text}</span>

        <br />

        <span>{name}</span>
      </button>

      <div>
        Clicked:
        {clicked}
      </div>
    </div>
  );
}

export default Button;
