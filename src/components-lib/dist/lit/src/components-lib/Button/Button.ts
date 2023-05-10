import s from "./Button.module.scss";

import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

type Props = {
  text: string;
};

@customElement("my-button")
export default class Button extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property() text: any;

  @state() name = "Alex";
  @state() clicked = 0;

  render() {
    return html`

          <div >

        <input  .value=${this.name}  @input=${(event) =>
      (this.name = event.target.value)}  />


        <button  class={s.Button}  @click=${(event) => {
          this.clicked = this.clicked + 1;
        }} >

        <span >${this.text}</span>


        <span >${this.name}</span>

              </button>


        <div >Clicked:
        ${this.clicked}</div>

            </div>
        `;
  }
}
