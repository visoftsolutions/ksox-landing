import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import { container } from "./layout.css";
import { info } from "./index.css";
import Products from "~/components/products";
import Technology from "~/components/technology";
import Wave1 from "~/media/wave/wave1.svg?jsx";
import Wave2 from "~/media/wave/wave2.svg?jsx";

export default component$(() => {
  return (
    <>
      <div class={container}>
        <Hero />
      </div>

      <div class={info}>
        <Wave1 />
        <div class={container} id="products">
          <Products />
        </div>
      </div>

      <div>
        <Wave2 />
        <div class={container} id="technology">
          <Technology />
        </div>
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
