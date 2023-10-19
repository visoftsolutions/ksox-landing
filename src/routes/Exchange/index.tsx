import { component$ } from "@builder.io/qwik";

import Hero from "~/components/hero/Hero";
import NavbarProduct from "~/components/navbar/NavbarProduct";
import Footer from "~/components/footer/Footer";
import InfoBox2 from "~/components/infobox/InfoBox2";

import ExchangeHero from "/assets/exchange/ExchangeHero.svg";
import Image1 from "/assets/exchange/Image1.svg";
import Image2 from "/assets/exchange/Image2.svg";

export default component$(() => {
  return (
    <>
      <NavbarProduct linkToApp="https://app.ksox.finance/" />
      <Hero
        image={ExchangeHero}
        title="Key to a Future Free From Financial Constraints."
        text="Our mission at KSOX is to design a user-centric ecosystem that democratizes financial control."
        buttonText1="Launch App"
        buttonText2="Read More"
        link1="https://app.ksox.finance/"
        link2="#readMore"
      />

      <div class="py-20 bg-white text-[#1D1D1D]" id="readMore">
        <div class="max-w-[1270px] mx-auto px-8 md:px-20 lg:px-0">
          <h2 class="lg:pl-10 font-bold text-2xl sm:text-4xl text-center lg:text-start">
            Discover KSOX Exchange
          </h2>
          <InfoBox2
            rightSide={true}
            image={Image1}
            title="What does KSOX Exchange offer?"
            text="KSOX Exchange brings to you an intuitive interface making trading cryptocurrencies a breeze. Step into the next generation of exchanges where your transactions are backed by groundbreaking zk proofs, ensuring complete transparency and trust."
          />
          <InfoBox2
            rightSide={false}
            image={Image2}
            title="About technology"
            text="KSOX Exchange operates as an order book exchange platform. What sets us apart is the application of zk-STARKs, a zero-knowledge proof mechanism, to validate the integrity of trades. This methodology guarantees the authenticity of transactions, fortifying the exchange against malicious attempts and ensuring transactional confidentiality without sacrificing security."
          />
        </div>
      </div>
      <Footer />
    </>
  );
});
