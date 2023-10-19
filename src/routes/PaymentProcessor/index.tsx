import { component$ } from "@builder.io/qwik";

import Hero from "~/components/hero/Hero";
import NavbarProduct from "~/components/navbar/NavbarProduct";
import Footer from "~/components/footer/Footer";
import InfoBox2 from "~/components/infobox/InfoBox2";

import PayHero from "/assets/pay/PayHero.svg";
import Image1 from "/assets/pay/Image1.svg";
import Image2 from "/assets/pay/Image2.svg";

export default component$(() => {
  return (
    <>
      <NavbarProduct linkToApp="https://pay.ksox.finance/" />
      <Hero
        image={PayHero}
        title="Key to a Future Free From Financial Constraints."
        text="Our mission at KSOX is to design a user-centric ecosystem that democratizes financial control."
        buttonText1="Launch App"
        buttonText2="Read More"
        link1="https://pay.ksox.finance/"
        link2="#readMore"
      />

      <div class="py-20 bg-white text-[#1D1D1D]" id="readMore">
        <div class="max-w-[1270px] mx-auto px-8 md:px-20 lg:px-0">
          <h2 class="lg:pl-10 font-bold text-2xl sm:text-4xl text-center lg:text-start">
            Discover KSOX Pay
          </h2>
          <InfoBox2
            rightSide={true}
            image={Image1}
            title="What You can do with KSOX Pay?"
            text="With KSOX Pay, experience the evolution of payments. Pay for your daily essentials, transfer funds, or shop online with the assurance that your transactions are swift, effortless, and incredibly secure, all thanks to the power of zk proofs."
          />
          <InfoBox2
            rightSide={false}
            image={Image2}
            title="How it Works?"
            text="KSOX Pay functions as a dynamic payment processor system. It employs zk-STARK technology to validate the integrity of each payment, ensuring that every transaction is genuine. The zk proof system not only brings a new level of security but also provides transparency, making it a top-tier solution for modern-day payment processing."
          />
        </div>
      </div>
      <Footer />
    </>
  );
});
