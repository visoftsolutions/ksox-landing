import { component$ } from "@builder.io/qwik";
import { products, titleText } from "./index.css";
import Product from "./product";

import payImg from "~/media/home/pay.png";
import exchangeImg from "~/media/home/exchange.png";

export default component$(() => {
  return (
    <div class={products}>
      <div class={titleText}>Discover KSOX Products</div>
      <Product
        image={payImg}
        hrefToApp="https://ksox.finance/"
        hrefToReadMore="/pay"
      >
        <div q:slot="title">KSOX Pay</div>
        <div q:slot="description">
          A revolutionary payment processor harnessing zk proofs for
          unparalleled transactional integrity and security
        </div>
      </Product>
      <Product
        image={exchangeImg}
        hrefToApp="https://ksox.finance/"
        hrefToReadMore="/exchange"
      >
        <div q:slot="title">KSOX Exchange</div>
        <div q:slot="description">
          A cutting-edge order book cryptocurrency exchange using zk proofs for
          top-notch transactional integrity
        </div>
      </Product>
    </div>
  );
});
