import { createSignal } from "solid-js";

type Props = {
  text: string;
};

import s from "./Button.module.scss";

function Button(props: Props) {
  const [name, setName] = createSignal("fromState");

  const [clicked, setClicked] = createSignal(0);

  return (
    <div>
      <input value={name()} onInput={(event) => setName(event.target.value)} />
      <button
        class={s.Button}
        onClick={(event) => {
          setClicked(clicked() + 1);
        }}
      >
        <span>{props.text}</span>
        <br />
        <span>{name()}</span>
      </button>
      <div>
        Clicked:
        {clicked()}
      </div>
    </div>
  );
}

export default Button;
