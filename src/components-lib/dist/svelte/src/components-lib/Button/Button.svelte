<script context="module" lang="ts">
  type Props = {
    text: string;
  };
</script>

<script lang="ts">
  import s from "./Button.module.scss";

  export let text: Props["text"];

  let name = "Alex";
  let clicked = 0;
</script>

<div>
  <input bind:value={name} />
  <button
    on:click={(event) => {
      clicked = clicked + 1;
    }}
    class={s.Button}
  >
    <span>{text}</span>
    <span>{name}</span>
  </button>
  <div>Clicked: {clicked}</div>
</div>