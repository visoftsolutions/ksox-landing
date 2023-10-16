import { component$ } from "@builder.io/qwik";


interface ModalProps {
    image: string,
    title: string,
    text: string,
    buttonText1: string,
    buttonText2: string,
    link1: string,
    link2: string, 
}

export default component$((props: ModalProps) => {
  return(
    <div 
    class="text-center lg:text-left" 
    style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;"
    >
        <div class="max-w-[1270px] mx-auto px-8 md:px-20 lg-px-0" >
            <div class="flex py-52 sm:py-96">
                <div class="grid lg:grid-cols-2 m-auto">
                    <div class="lg:pr-10">
                        <h1 class="font-bold text-transparent text-2xl sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-b from-blue-700 to-blue-200">{props.title}</h1>
                        <p class="py-10 md:py-20 text-sm sm:text-lg lg:pr-20">{props.text}</p>
                        <div class="flex justify-center lg:justify-start">

                            <a href={props.link1} target="_blank" rel="noreferrer" class="pr-10">
                                <button class="sm:text-xl border-2 py-1 px-5 rounded-full hover:bg-gray-900 duration-300">
                                    {props.buttonText1}
                                </button>
                            </a>

                            <a href={props.link2} target={props.link2.includes("#") ? "" : "_blank"} rel="noreferrer">
                                <button class="sm:text-xl border-2 py-1 px-5 rounded-full hover:bg-gray-900 duration-300">
                                    {props.buttonText2}
                                </button>
                            </a>

                        </div>
                    </div>
                    <div class="pt-10 lg:pt-0 flex justify-center lg:justify-end lg:mx-0 px-10 sm:px-20 lg:px-0">
                        <img src={props.image} alt="hero image" class="lg:absolute  object-contain" width={480} height={480}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) 
});