import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { info, subText, titleText, wrapper } from "./index.css";

import NavbarHome from "~/components/navbar/NavbarHome";
import Hero from "~/components/hero/Hero";
import InfoBox from "~/components/infobox/InfoBox";
import InfoBox2 from "~/components/infobox/InfoBox2";
import Footer from "~/components/footer/Footer";

import HeroHome from "/assets/home/HeroHome.svg";
import PayApp from "/assets/home/PayApp.png";
import ExchangeApp from "/assets/home/ExchangeApp.png";
import Server from "/assets/home/Server.svg";
import Laptop from "/assets/home/Laptop.svg";
import Receipt from "/assets/home/Receipt.svg";

export default component$(() => {
  return (
    <div id="home">
      <NavbarHome />

      <Hero
        image={HeroHome}
        title="Key to a Future Free From Financial Constraints."
        text="Our mission at KSOX is to design a user-centric ecosystem that democratizes financial control."
        buttonText1="KSOX Pay"
        buttonText2="KSOX Exchange"
        link1="https://pay.ksox.finance/"
        link2="https://app.ksox.finance/"
      />

      <div class={info} id="about">
        <div class={wrapper}>
          <h2 class={titleText}>
            Discover KSOX Products
          </h2>
          <InfoBox
            image={PayApp}
            title="KSOX Pay"
            text="A revolutionary payment processor harnessing zk proofs for unparalleled transactional integrity and security."
            linkToApp="https://pay.ksox.finance/"
            pathToReadMore="/PaymentProcessor"
          />
          <InfoBox
            image={ExchangeApp}
            title="KSOX Exchange"
            text="A cutting-edge order book cryptocurrency exchange using zk proofs for top-notch transactional integrity."
            linkToApp="https://pay.ksox.finance/"
            pathToReadMore="/Exchange"
          />
        </div>
      </div>

      <div style="padding-top: 80px; padding-bottom: 80px;">
        <div class={wrapper}>
          <h2 class={titleText}>
            More About KSOX
          </h2>
          <p class={subText}>
            Our mission at KSOX is to design a user-centric ecosystem that
            democratizes financial control, retaining its simplicity and
            decentralized character. Step into the future of finance with KSOX
            today and embrace a world where financial freedom is not just a
            dream, but a reality!
          </p>

          <InfoBox2
            rightSide={false}
            image={Server}
            title="Is it Safe?"
            text="Surely you're asking yourself, why should you trust us? The answer is simple - you don't have to. With KSOX, trust takes on a new dimension. Leveraging zk-STARK technology, we ensure that all crypto assets are securely stored in a smart contract, inaccessible to anyone but you. Only requests authenticated by users get processed – we simply cannot act on your behalf."
          />
          <InfoBox2
            rightSide={true}
            image={Laptop}
            title="What does KSOX offer?"
            text="Ever envisioned a world where contactless payments are the norm? KSOX brings this reality closer to you with its state-of-the-art NFC payment capabilities. Now you can handle transactions as simply as if using a conventional card. Imagine stepping into your favorite bar or cafe, paying with cryptocurrency effortlessly, and not having to worry about your bank's solvency ever again!"
          />
          <InfoBox2
            rightSide={false}
            image={Receipt}
            title="Other features"
            text="But the innovation doesn't stop there. KSOX's unique feature allows you to generate temporary 6-digit codes for smooth and easy fund transfers. This feature, well-established in online payments, paves the way for a seamless integration of cryptocurrency into your online transactions, bringing elegance and simplicity together."
          />
        </div>
      </div>

      <Footer />
    </div>
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
