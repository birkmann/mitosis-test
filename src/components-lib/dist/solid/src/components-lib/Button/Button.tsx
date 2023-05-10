import { createSignal } from "solid-js";

type Props = {
  text: string;
};

import s from "./Button.module.scss";

function Button(props: Props) {
  const [name, setName] = createSignal("Alex");

  return (
    <div>
      <input value={name()} onInput={(event) => setName(event.target.value)} />
      <button class={s.Button}>
        <span>{props.text}</span>
        <span>{name()}</span>
      </button>
    </div>
  );
}

export default Button;
