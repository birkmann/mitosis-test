<script context="module" lang="ts">
  type Props = {
    text: string;
  };
</script>

<script lang="ts">
  import s from "./Button.module.scss";

  export let text: Props["text"];

  let name = "Alex";
</script>

<div>
  <input bind:value={name} />
  <button class={s.Button}>
    <span>{text}</span>
    <span>{name}</span>
  </button>
</div>