import { component$ } from "@builder.io/qwik";
import { products, titleText } from "./index.css";
import Product from "./product";

import PayApp from "~/media/home/PayApp.png";
import ExchangeApp from "~/media/home/ExchangeApp.png";

export default component$(() => {
  return (
    <div class={products}>
      <h2 class={titleText}>Discover KSOX Products</h2>
      <Product
        image={PayApp}
        title="KSOX Pay"
        text="A revolutionary payment processor harnessing zk proofs for unparalleled transactional integrity and security."
        linkToApp="https://pay.ksox.finance/"
        pathToReadMore="/PaymentProcessor"
      />
      <Product
        image={ExchangeApp}
        title="KSOX Exchange"
        text="A cutting-edge order book cryptocurrency exchange using zk proofs for top-notch transactional integrity."
        linkToApp="https://pay.ksox.finance/"
        pathToReadMore="/Exchange"
      />
    </div>
  );
});
