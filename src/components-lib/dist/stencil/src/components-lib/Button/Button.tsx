import s from "./Button.module.scss";

import { Component, Prop, h, State, Fragment } from "@stencil/core";

@Component({
  tag: "button",
})
export default class Button {
  @Prop() text: any;

  @State() name = "Alex";

  render() {
    return (
      <div>
        <input
          value={this.name}
          onInput={(event) => (this.name = event.target.value)}
        />

        <button class={s.Button}>
          <span>{this.text}</span>

          <span>{this.name}</span>
        </button>
      </div>
    );
  }
}
