import { component$ } from "@builder.io/qwik";
import Discord from '/assets/icons/Discord.svg'
import Telegram from '/assets/icons/Telegram.svg'
import LinkedIn from '/assets/icons/LinkedIn.svg'
import XIcon from '/assets/icons/XIcon.svg'

export default component$(() => {

  const contactItems = [
    {
      id: 1,
      icon: Discord,
      link: "https://discord.com/invite/d9qn83Qnbv",
    },{
      id: 2,
      icon: Telegram,
      link: "https://t.me/ksox_community",
    },{
      id: 3,
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/ksox/",
    },{
      id: 4,
      icon: XIcon,
      link: "https://twitter.com/KsoxExchange",
    }
  ]

  const productItems = [
    {
      id: 1,
      title: "Payment Processor",
      text: "Ksox pay apps",
      href: "https://pay.ksox.finance/"
    },{
      id: 2,
      title: "Exchange app",
      text: "Ksox Exchange trading platform",
      href: "https://pay.ksox.finance/"
    }
  ]

  const legalItems = [
    {
      id: 1,
      title: "Privacy policy",
      text: "Our policies around privacy and data gathering",
      href: "/"
    },{
      id: 2,
      title: "Cookies policy",
      text: "Our policies around cookies",
      href: "/"
    },{
      id: 3,
      title: "Crowdsale terms",
      text: "Our policies around crowdsale and token",
      href: "/"
    }
  ]

  const technologyItems = [
    {
      id: 1,
      title: "Cairo",
      text: "Turing-complete language for writing provable programs on blockchain",
      href: "https://www.cairo-lang.org/"
    },{
      id: 2,
      title: "Solidity",
      text: "Language designed for developing smart contracts",
      href: "https://soliditylang.org/"
    },{
      id: 3,
      title: "Rust",
      text: "Multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency",
      href: "https://www.rust-lang.org/"
    }
  ]



  return(
    <div class="py-32" style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;">
        <div class="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-10">

        <div class="flex mx-auto justify-center border-2 py-12 rounded-2xl mb-20" id="contact">
          <div class="text-center">
            <h1 class="text-2xl sm:text-5xl font-bold">Let's Stay in Touch!</h1>
            <p class="text-base sm:text-xl">Find us Here</p>
            <div class="flex justify-between pt-8 sm:pt-14">
              {contactItems.map((item) => (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.icon} width={25} height={25}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-3">
          
          <div class="pb-10 sm:pb-0 text-center sm:text-left sm:pr-14 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Product</h3>
                {productItems.map((item) => (
                  <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
                    <h4 class="font-semibold">{item.title}</h4>
                    <p class="pb-5">{item.text}</p>
                  </a>
                ))}
                <a href='src/routes/Whitepaper/ksox-whitepaper.pdf' target="_blank" rel="noreferrer">
                    <h4 class="font-semibold">Whitepaper</h4>
                    <p class="pb-5">Documentation about Cryptocurrency Exchange & Payment Processor</p>
                </a>
          </div>

          <div class="pb-10 sm:pb-0 text-center px-2 sm:px-10 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Legal</h3>
                {legalItems.map((item) => (
                  <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
                    <h4 class="font-semibold">{item.title}</h4>
                    <p class="pb-5">{item.text}</p>
                  </a>
                ))}
          </div>

          <div class="text-center sm:text-right sm:pl-14 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Technology</h3>
                {technologyItems.map((item) => (
                  <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
                    <h4 class="font-semibold">{item.title}</h4>
                    <p class="pb-5">{item.text}</p>
                  </a>
                ))}
          </div>
        </div>
        </div>
    </div>

  ) 
});
