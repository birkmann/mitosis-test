<template>
  <div>
    <input :value="name" @input="name = $event.target.value" />
    <button
      @click="clicked = clicked + 1"
      :class="_classStringToObject(s.Button)"
    >
      <span>{{ text }}</span>
      <span>{{ name }}</span>
    </button>
    <div>Clicked: {{ clicked }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import s from "./Button.module.scss";

type Props = {
  text: string;
};

const props = defineProps<Props>();
const name = ref("Alex");
const clicked = ref(0);

function _classStringToObject(str: string) {
  const obj: Record<string, boolean> = {};
  if (typeof str !== "string") {
    return obj;
  }
  const classNames = str.trim().split(/\s+/);
  for (const name of classNames) {
    obj[name] = true;
  }
  return obj;
}
</script>