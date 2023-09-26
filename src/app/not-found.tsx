"use client";

import { useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import glitchNotFound from "../../public/siteicons/json/animation_lmwf68bj.json";

export const Not_Found = (props: any) =>{
    
    const className = props.className;
    const nfRef = useRef<LottieRefCurrentProps>(null);
    const interactivity = {
        mode: "click",
        actions:
            {
                type: "stop",
                frames: [0],
            },
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
      };


    return<>
    <Lottie onClick={() => {
            nfRef.current?.play();
        } }
        lottieRef={nfRef}
        className={className} animationData={glitchNotFound} />
    </>
  }


export default function NotFound() {
    return(
    <>
        <div className="h-screen items-center flex justify-center select-none">
            <h1 className="text-4xl font-bold fixed">
                Page Not Found
            </h1>
            <div className="fixed -z-10 m-10">
                <Not_Found />
            </div>
        </div>
    </>
        )
}