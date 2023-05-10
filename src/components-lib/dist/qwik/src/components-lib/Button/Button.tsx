import s from "./Button.module.scss";

import { Fragment, component$, h, useStore } from "@builder.io/qwik";

type Props = {
  text: string;
};
export const Button = component$((props: Props) => {
  const state = useStore<any>({ name: "Alex" });

  return (
    <div>
      <input
        value={state.name}
        onChange$={(event) => (state.name = event.target.value)}
      />
      <button class={s.Button}>
        <span>{props.text}</span>
        <span>{state.name}</span>
      </button>
    </div>
  );
});

export default Button;
