<template>
  <div>
    <input :value="name" @input="name = $event.target.value" />
    <button :class="_classStringToObject(s.Button)">
      <span>{{ text }}</span>
      <span>{{ name }}</span>
    </button>
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