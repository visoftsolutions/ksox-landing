import { Slot, component$ } from "@builder.io/qwik";
import {
  box,
  imageRight,
  subText,
  textBoxRight,
  titleText,
} from "./infobox.css";

export default component$(() => {
  return (
    <div class={box}>
      <div class={imageRight}>
        <Slot name="image" />
      </div>
      <div class={textBoxRight}>
        <div class={titleText}>
          <Slot name="title" />
        </div>
        <div class={subText}>
          <Slot name="description" />
        </div>
      </div>
    </div>
  );
});
