import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

type Props = {
  text: string;
};

import s from "./Button.module.scss";

@Component({
  selector: "button, Button",
  template: `
    <div>
      <input [attr.value]="name" (input)="name = $event.target.value" />

      <button
        (click)="
          clicked = clicked + 1;
        "
        [class]="s.Button"
      >
        <span>{{text}}</span>

        <span>{{name}}</span>
      </button>

      <div>Clicked: {{clicked}}</div>
    </div>
  `,
})
export class Button {
  s = s;

  @Input() text: Props["text"];

  name = "Alex";
  clicked = 0;
}

@NgModule({
  declarations: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
