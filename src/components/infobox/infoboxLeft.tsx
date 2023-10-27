import { Slot, component$ } from "@builder.io/qwik";
import { box, imageLeft, subText, textBoxLeft, titleText } from "./infobox.css";

export default component$(() => {
  return (
    <div class={box}>
      <div class={textBoxLeft}>
        <div class={titleText}>
          <Slot name="title" />
        </div>
        <div class={subText}>
          <Slot name="description" />
        </div>
      </div>
      <div class={imageLeft}>
        <Slot name="image" />
      </div>
    </div>
  );
});
