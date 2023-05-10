import s from "./Button.module.scss";

import { Fragment, component$, h, useStore } from "@builder.io/qwik";

type Props = {
  text: string;
};
export const Button = component$((props: Props) => {
  const state = useStore<any>({ clicked: 0, name: "Alex" });

  return (
    <div>
      <input
        value={state.name}
        onChange$={(event) => (state.name = event.target.value)}
      />
      <button
        onClick$={(event) => {
          state.clicked = state.clicked + 1;
        }}
        class={s.Button}
      >
        <span>{props.text}</span>
        <span>{state.name}</span>
      </button>
      <div>Clicked: {state.clicked}</div>
    </div>
  );
});

export default Button;
