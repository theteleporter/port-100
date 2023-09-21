'use client';
import Image from "next/image";
import Link from "next/link";
import Lottie from 'lottie-react';
import animationData from "../../public/siteicons/json/ebKm85fcc3.json";

export default function Home() {

  const hireMe = () => {
      
  }


  return (
    <>
      <header className="fixed text-center bg-gradient-to-b from-black via-less-black to-bg-less-black rounded-bl-md rounded-br-md w-full shadow-inner shadow-black">
        <div className="flex justify-center items-center">
        <h1 className="font-extrabold mx-4 my-4 text-3xl md:text-4xl select-none items-center">
          THE TELEPORTER 
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path fill="rgb(29, 78, 216)" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z"/></svg>
         </div>
      </header>
    <main className="text-center mx-3 flex flex-col align-middle container-sm">
    <div className="flex justify-center p-8 mt-12">
    <Lottie animationData={animationData} className="w-36 h-36 -z-10"/>
    </div>
      <section className="text-lg font-normal">
      Hey, I&#39;m The Teleporter.
      <br />
      Welcome to my portfolio! I&#39;m so glad that you could join me.
      </section>
      <section className="my-9 mx-7 md:mx-20 lg:mx-60">
        <h1 className="font-bold text-3xl">
          Profession
        </h1>
        <p className="text-base">
          I&#39;m a self-taught Web Developer and also a Web Designer who&#39;s had a two year experience in web development using major frameworks such as React and its subsidiaries. Below are some of the libraries and tools that I use in my development.
        </p>
      </section>
        <section className="md:flex md:justify-evenly">
          <div className="card bg-gradient-to-tl from-black via-rose-700 to-blue-800 md:rounded-lg py-4 rounded-md md:py-5 md:px-12 my-7 mx-9 md:mx-2 sm:mx-24 shadow-lg shadow-stone-800 hover:shadow-stone-600 hover:transition-all duration-1000">
          <h1 className="text-2xl font-bold my-2">
            Frameworks
          </h1>
          <ul id="frameworks">
          <li className="font-normal text-lg">
            React Js
            </li>          
            <li className="font-medium text-lg">
            Next Js
            </li>
            <li className="font-medium text-lg">
            Gatsby Js
            </li>
            <li className="font-medium text-lg">
            Astro Js
            </li>
            <li className="font-medium text-lg">
              TailwindCSS
            </li>
            </ul>
          </div>

          <div className="card bg-gradient-to-tl from-blue-800 via-rose-700 to-black md:rounded-lg rounded-md py-4 md:py-5 md:px-16 my-7 mx-9 md:mx-2 sm:mx-24 shadow-lg shadow-stone-800 hover:shadow-stone-600 hover:transition-all duration-1000">
          <h1 className="text-2xl font-bold my-2">
              Databases
            </h1>

            <ul id="databases">
            <li className="font-medium text-lg">
              Mongo DB
            </li>
            <li className="font-medium text-lg">
              Cassandra DB
            </li>
            <li className="font-medium text-lg">
              PostgresSQL
            </li>
            <li className="font-medium text-lg">
              Redis
            </li>
          </ul>
          </div>
          <div className="card bg-gradient-to-tl from-black via-rose-700 to-blue-800 md:rounded-lg rounded-md py-4 md:py-5 md:px-9 my-7 mx-9 md:mx-2 sm:mx-24 shadow-lg shadow-stone-800 hover:shadow-stone-600 hover:transition-all duration-1000">
          <h1 className="font-bold text-2xl my-2">
            Miscellaneous
          </h1>
            <ul>
            <li className="font-medium text-lg">
            GraphQL
          </li>
          <li className="font-medium text-lg">
            Daisy UI
          </li>
          <li className="font-medium text-lg">
            Vue Js
            </li>
            <li className="font-medium text-lg">
            Nuxt Js
            </li>
            </ul>
          </div>
          
        </section>
    </main>
    <footer className="py-9">
      <div className="flex justify-center py-6">
      <Image src={"/siteicons/TK.svg"} alt={"The Teleporter Logo"} width={50} height={50} className="select-none"  />
      </div>
      <div className="text-center text-slate-600">
        Questions? <Link href={""} className="text-white hover:text-link-600">Contact Me.</Link>
      </div>
      <div className="grid grid-cols-2 md:flex md:justify-evenly">
      <div className="my-9 text-center col">
        <h4 className="font-bold text-xl">
          Socials
        </h4>
        <ul>
          <li className="my-2 font-mono font-medium">
            <Link href={"https://instagram.com/theteleporter_"} className="block" target="blank_">
             Instagram
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
            <Link href={"https://linkedin.com/in/theteleporter"} className="block" target="blank_" >
            LinkedIn
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
            <Link href={"https://x.com/@theteleporter_"} className="block" target="blank_">
              X
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://twitch.com/theteleporter_"} className="block" target="blank_" >
            Twitch
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://youtube.com/thetheleporter_"} className="block" target="blank_" >
            Youtube
            </Link>
          </li>
        </ul>
      </div>

      <div className="my-9 text-center col">
        <h4 className="font-bold text-xl">
          Dev Channels
        </h4>
        <ul>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://github.com/theteleporter"} className="block" target="blank_" >
            Github
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" target="blank_" >
            CodePen
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" target="blank_" >
            Slack
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://theteleporter.medium.com"} className="block" target="blank_" >
            Medium
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" target="blank_" >
            Discord
            </Link>
          </li>
        </ul>
      </div>

      <div className="my-9 text-center col">
        <h4 className="font-bold text-xl">
          My  Projects
        </h4>
        <ul>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Liang Xi
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Mud Paper
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
             Ygbarg
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Nebula
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Paper Trail
            </Link>
          </li>
        </ul>
      </div>

      <div className="my-9 text-center col">
        <h4 className="font-bold text-xl">
          Info
        </h4>
        <ul>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
             Hire Me
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Privacy Policy
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Blog
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Terms Of Use
            </Link>
          </li>
          <li className="my-2 font-mono font-medium">
          <Link href={"https://"} className="block" >
            Cookies preferences
            </Link>
          </li>
        </ul>
      </div>
        
      </div>
      <div className="flex justify-center">
        <button onClick={hireMe} className="flex fixed bottom-4 bg-black px-4 py-2 rounded-full shadow-md shadow-slate-300">
        Made with <Image className="mx-2" src={"/next.svg"} alt={"Next Js Logo"} width={80} height={40} />
        </button>
      </div>
      <div className="text-center mb-6">
      <small>
        &copy; 2023
      </small>   
      </div>

    </footer>
    </>
  )
}
