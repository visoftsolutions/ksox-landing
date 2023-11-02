import { component$ } from "@builder.io/qwik";
import {
  businessSvgSize,
  description,
  descriptionBox,
  descriptionText,
  descriptionTitle,
  exchangeSvgSize,
  imageBox,
  launchButton,
  products,
  transferSvgSize,
} from "./index.css";
import InfoboxLeft from "../infobox/infoboxLeft";
import InfoboxRight from "../infobox/infoboxRight";
import ExchangeSvg from "~/media/home/exchange.svg";
import TransferSvg from "~/media/home/transfer.svg";
import BusinessSvg from "~/media/home/business.svg";

export default component$(() => {
  return (
    <div class={products}>
      <InfoboxLeft>
        <section id="ksox-exchange" q:slot="title">
          KSOX Crypto Exchange
        </section>
        <div q:slot="description" class={description}>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Minimal Fees</div>
            <div class={descriptionText}>
              Experience trading with fees that are 10x lower than most
              platforms, putting more of your assets where they belong - in your
              wallet
            </div>
          </div>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Dynamic Pricing</div>
            <div class={descriptionText}>
              Through our advanced set of arbitrage bots, we tap into multiple
              exchanges ensuring you receive the best market prices. We list a
              diverse range of coins, from established to niche, offering
              opportunities for every crypto enthusiast
            </div>
          </div>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Open-Source & Collaborative</div>
            <div class={descriptionText}>
              Our platform is entirely open-source. This ensures transparency
              and allows our community to suggest improvements through GitHub
            </div>
          </div>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>AI & Bot Integration</div>
            <div class={descriptionText}>
              Our API flexibility means our platform isn't just powered by our
              bots. We encourage third-party AI trading tools and bots to
              provide users with dynamic trading strategies and asset
              accumulation opportunities
            </div>
          </div>
        </div>
        <div q:slot="image">
          <div class={imageBox}>
            <img
              src={ExchangeSvg}
              class={exchangeSvgSize}
              width={300}
              height={200}
              alt="exchange product image"
            />
            <a
              href={"https://ksox.finance"}
              target="_blank"
              rel="noreferrer"
              class={launchButton}
            >
              Exchange Crypto
            </a>
          </div>
        </div>
      </InfoboxLeft>
      <InfoboxRight>
        <section id="ksox-transfer" q:slot="title">
          KSOX Transfer Processor
        </section>
        <div q:slot="description" class={description}>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Seamless Transfers</div>
            <div class={descriptionText}>
              Whether you're transferring between user accounts or sending to
              external entities, our platform ensures smooth and secure
              transactions
            </div>
          </div>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Optimized for Growth</div>
            <div class={descriptionText}>
              Our underlying technologies ensure KSOX isn't just a platform for
              spending. It's ideal for holding and growing assets. With the
              ever-changing crypto landscape, our arbitrage bots guarantee
              profitable transactions
            </div>
          </div>
        </div>
        <div q:slot="image">
          <div class={imageBox}>
            <img
              src={TransferSvg}
              class={transferSvgSize}
              width={400}
              height={350}
              alt="transfer product image"
            />
            <a
              href={"https://ksox.finance"}
              target="_blank"
              rel="noreferrer"
              class={launchButton}
            >
              Transfer Crypto
            </a>
          </div>
        </div>
      </InfoboxRight>
      <InfoboxLeft>
        <section id="ksox-business" q:slot="title">
          KSOX Business Suite
        </section>
        <div q:slot="description" class={description}>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Comprehensive Business Solutions</div>
            <div class={descriptionText}>
              Designed for businesses venturing into the crypto world. Whether
              you're managing payments for your workforce, invoicing clients, or
              running a full-fledged crypto business, KSOX Business Suite has
              you covered
            </div>
          </div>
          <div class={descriptionBox}>
            <div class={descriptionTitle}>Streamlined Operations</div>
            <div class={descriptionText}>
              Send payment requests, create invoices, and more, all in one
              platform. Our suite integrates both payment and exchange
              functionalities to simplify your business needs
            </div>
          </div>
        </div>
        <div q:slot="image">
          <div class={imageBox}>
            <img
              src={BusinessSvg}
              class={businessSvgSize}
              width={400}
              height={300}
              alt="business product image"
            />
            <a
              href={"https://ksox.finance"}
              target="_blank"
              rel="noreferrer"
              class={launchButton}
            >
              Crypto Business
            </a>
          </div>
        </div>
      </InfoboxLeft>
    </div>
  );
});
