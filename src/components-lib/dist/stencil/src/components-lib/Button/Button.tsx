import s from "./Button.module.scss";

import { Component, Prop, h, State, Fragment } from "@stencil/core";

@Component({
  tag: "button",
})
export default class Button {
  @Prop() text: any;

  @State() name = "fromState";
  @State() clicked = 0;

  render() {
    return (
      <div>
        <input
          value={this.name}
          onInput={(event) => (this.name = event.target.value)}
        />

        <button
          class={s.Button}
          onClick={(event) => {
            this.clicked = this.clicked + 1;
          }}
        >
          <span>{this.text}</span>

          <br />

          <span>{this.name}</span>
        </button>

        <div>
          Clicked:
          {this.clicked}
        </div>
      </div>
    );
  }
}
