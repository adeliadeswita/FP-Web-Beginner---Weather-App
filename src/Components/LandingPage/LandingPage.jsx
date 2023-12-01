import React, { useState, useEffect } from "react";
import { TypingText } from "../TypingText/TypingText";
import arrow from "../Assets/down-arrow.png";
import './LandingPage.css';
import { WeatherApp } from "../Weather-App/Weather-App";

export const LandingPage = () => {
   
    useEffect(() => {
        // Menggulirkan halaman secara halus ke elemen dengan ID "main"
        const scrollArrow = document.getElementById("scroll-arrow");
        scrollArrow.addEventListener("click", () => {
            const mainElement = document.getElementById("main");
            if (mainElement) {
                mainElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }, []);

    return(     
        <div className="h-screen relative text-[#00536a] bg-[#f2f2f2] dark:text-[#fca311] dark:bg-[#14213d]">
            <div className="Type">
                <div>
                    <TypingText/>
                </div>
            </div>
            <div className="Desc">
                WELCOME TO WEATHER APP
            </div>
            <div className="Scroll">
                Explore Weather Around The World!
            </div>
            <div>
            <a href="#main" id="scroll-arrow">
                    <img src={arrow} className="Arrow" />
                </a>
            </div>
        
        <div id="main">
            <WeatherApp/>
        </div>
        </div>
    )
}