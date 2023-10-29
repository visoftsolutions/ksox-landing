import { component$ } from "@builder.io/qwik";
import {
  description,
  descriptionBox,
  descriptionText,
  infobox,
  technology,
  titleText,
} from "./index.css";

import ServerSvg from "~/media/home/server.svg";
import LaptopSvg from "~/media/home/laptop.svg";
import ReceiptSvg from "~/media/home/receipt.svg";
import InfoboxLeft from "~/components/infobox/infoboxLeft";
import InfoboxRight from "~/components/infobox/infoboxRight";

export default component$(() => {
  return (
    <div class={technology}>
      <h2 class={titleText}>More About KSOX</h2>
      <div class={infobox}>
        <InfoboxLeft>
          <div q:slot="title">Is it Safe?</div>
          <div q:slot="description" class={description}>
            <div class={descriptionBox}>
              <div class={descriptionText}>
                Surely you're asking yourself, why should you trust us? The
                answer is simple - you don't have to. With KSOX, trust takes on
                a new dimension. Leveraging zk-STARK technology, we ensure that
                all crypto assets are securely stored in a smart contract,
                inaccessible to anyone but you. Only requests authenticated by
                users get processed – we simply cannot act on your behalf
              </div>
            </div>
          </div>
          <div q:slot="image">
            <img src={ServerSvg} width={280} height={200} alt="safety image" />
          </div>
        </InfoboxLeft>
        <InfoboxRight>
          <div q:slot="title">What does KSOX offer?</div>
          <div q:slot="description" class={description}>
            <div class={descriptionBox}>
              <div class={descriptionText}>
                Ever envisioned a world where contactless payments are the norm?
                KSOX brings this reality closer to you with its state-of-the-art
                NFC payment capabilities. Now you can handle transactions as
                simply as if using a conventional card. Imagine stepping into
                your favorite bar or cafe, paying with cryptocurrency
                effortlessly, and not having to worry about your bank's solvency
                ever again!
              </div>
            </div>
          </div>
          <div q:slot="image">
            <img src={LaptopSvg} width={280} height={200} alt="offer image" />
          </div>
        </InfoboxRight>
        <InfoboxLeft>
          <div q:slot="title">Other features</div>
          <div q:slot="description" class={description}>
            <div class={descriptionBox}>
              <div class={descriptionText}>
                But the innovation doesn't stop there. KSOX's unique feature
                allows you to generate temporary 6-digit codes for smooth and
                easy fund transfers. This feature, well-established in online
                payments, paves the way for a seamless integration of
                cryptocurrency into your online transactions, bringing elegance
                and simplicity together
              </div>
            </div>
          </div>
          <div q:slot="image">
            <img
              src={ReceiptSvg}
              width={280}
              height={200}
              alt="features image"
            />
          </div>
        </InfoboxLeft>
      </div>
    </div>
  );
});
