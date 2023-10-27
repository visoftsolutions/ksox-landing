import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import { container } from "./layout.css";
import { info } from "./index.css";
import Products from "~/components/products";
import Technology from "~/components/technology";

export default component$(() => {
  return (
    <>
      <div class={container}>
        <Hero />
      </div>

      <div class={[container, info]} id="about">
        <Products />
      </div>

      <div class={container} id="about">
        <Technology />
      </div>
    </>
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
