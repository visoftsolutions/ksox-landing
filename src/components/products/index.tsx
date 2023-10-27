import { component$ } from "@builder.io/qwik";
import { infobox, products, subText, titleText } from "./index.css";
import InfoboxLeft from "../infobox/infoboxLeft";
import InfoboxRight from "../infobox/infoboxRight";

export default component$(() => {
  return (
    <div class={products}>
      <h2 class={titleText}>Ksox Products</h2>
      <p class={subText}>
        Our mission at KSOX is to design a user-centric ecosystem that
        democratizes financial control, retaining its simplicity and
        decentralized character. Step into the future of finance with KSOX today
        and embrace a world where financial freedom is not just a dream, but a
        reality!
      </p>
      <div class={infobox}>
        <InfoboxLeft>
          <div q:slot="title">Is it Safe?</div>
          <div q:slot="description">
            Surely you're asking yourself, why should you trust us? The answer
            is simple - you don't have to. With KSOX, trust takes on a new
            dimension. Leveraging zk-STARK technology, we ensure that all crypto
            assets are securely stored in a smart contract, inaccessible to
            anyone but you. Only requests authenticated by users get processed –
            we simply cannot act on your behalf
          </div>
          <div q:slot="image">
            {/* <img src={ServerSvg} width={280} height={200} /> */}
          </div>
        </InfoboxLeft>
        <InfoboxRight>
          <div q:slot="title">What does KSOX offer?</div>
          <div q:slot="description">
            Ever envisioned a world where contactless payments are the norm?
            KSOX brings this reality closer to you with its state-of-the-art NFC
            payment capabilities. Now you can handle transactions as simply as
            if using a conventional card. Imagine stepping into your favorite
            bar or cafe, paying with cryptocurrency effortlessly, and not having
            to worry about your bank's solvency ever again!
          </div>
          <div q:slot="image">
            {/* <img src={LaptopSvg} width={280} height={200} /> */}
          </div>
        </InfoboxRight>
      </div>
    </div>
  );
});
