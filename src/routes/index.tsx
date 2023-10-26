import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { info, subText, titleText, wrapper } from "./index.css";

export default component$(() => {
  return (
    <div></div>
  );
});

export const head: DocumentHead = {
  title: "KSOX",
  meta: [
    {
      name: "description",
      content: "KSOX - Your key to a future free from financial constraints.",
    },
  ],
};
