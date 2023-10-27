import { component$ } from "@builder.io/qwik";
import { subText, technology, titleText } from "./index.css";
import InfoBox from "./Infobox";

import ServerSvg from "~/media/home/server.svg";
import LaptopSvg from "~/media/home/laptop.svg";
import ReceiptSvg from "~/media/home/receipt.svg";

export default component$(() => {
  return (
    <div class={technology}>
      <h2 class={titleText}>More About KSOX</h2>
      <p class={subText}>
        Our mission at KSOX is to design a user-centric ecosystem that
        democratizes financial control, retaining its simplicity and
        decentralized character. Step into the future of finance with KSOX today
        and embrace a world where financial freedom is not just a dream, but a
        reality!
      </p>

      <InfoBox
        rightSide={false}
        image={ServerSvg}
        title="Is it Safe?"
        text="Surely you're asking yourself, why should you trust us? The answer is simple - you don't have to. With KSOX, trust takes on a new dimension. Leveraging zk-STARK technology, we ensure that all crypto assets are securely stored in a smart contract, inaccessible to anyone but you. Only requests authenticated by users get processed – we simply cannot act on your behalf."
      />
      <InfoBox
        rightSide={true}
        image={LaptopSvg}
        title="What does KSOX offer?"
        text="Ever envisioned a world where contactless payments are the norm? KSOX brings this reality closer to you with its state-of-the-art NFC payment capabilities. Now you can handle transactions as simply as if using a conventional card. Imagine stepping into your favorite bar or cafe, paying with cryptocurrency effortlessly, and not having to worry about your bank's solvency ever again!"
      />
      <InfoBox
        rightSide={false}
        image={ReceiptSvg}
        title="Other features"
        text="But the innovation doesn't stop there. KSOX's unique feature allows you to generate temporary 6-digit codes for smooth and easy fund transfers. This feature, well-established in online payments, paves the way for a seamless integration of cryptocurrency into your online transactions, bringing elegance and simplicity together."
      />
    </div>
  );
});
