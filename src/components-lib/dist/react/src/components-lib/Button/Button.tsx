import * as React from "react";
import { useState } from "react";

type Props = {
  text: string;
};
import s from "./Button.module.scss";

function Button(props: Props) {
  const [name, setName] = useState(() => "Alex");

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <button className={s.Button}>
        <span>{props.text}</span>

        <span>{name}</span>
      </button>
    </div>
  );
}

export default Button;
