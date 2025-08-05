import React from 'react'
import siteLogo  from "../assets/parth.jpg";
// import Logo  from "../assets/logo.png";
const About = () => {
  return (
    

<div class="w-full lg:h-screen h-full m-auto flex items-center justify-center py-20 backdrop-blur-sm ">
    <div class="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
       
        <div class="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div class="relative">
               
                <img class="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8" alt="Side Image" />

              
                <img class="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://thumbs.dreamstime.com/b/leaves-rain-9537645.jpg" alt="Side Image 2" />

               
                <img class="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image 3" />

                
                <img
            class="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
            src={siteLogo} alt="About us" />
            </div>
            
            <div
                class="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 class="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                    About Us
                </h2>
                <p class="md:text-3xl text-2xl text-center text-gray-800 lg:text-gray-100 md:text-gray-100 dark:text-gray-100 font-bold my-5">
                   🌿 The Inspiration Behind HumFlow
                </p>
                <p class="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 lg:text-gray-100 md:text-gray-100 dark:text-gray-100">It was one of those rare days when nature decides to speak in its loudest, most mesmerizing voice. A heavy downpour, accompanied by thunder and a persistent storm, had blanketed the entire day in grey. The world outside was soaked, calm, and yet alive with energy.

By evening, the rain gradually softened and came to a gentle halt. Drawn by the beauty outside, I stepped onto the terrace. The sky was painted in shades of warm orange as the sun began to set, casting a golden glow over everything it touched.

All around me, nature came alive — the chirping of birds, the rhythmic song of crickets, the subtle buzz of insects. I could hear the gushing of a nearby river, the soft splashes of water, and the distant, peaceful notes of wind chimes dancing in the breeze.

It felt magical — like a symphony composed entirely by the earth.

And at that moment, a thought sparked:
 "What if we could capture this feeling and carry it into our daily lives?" 
That was the beginning of this website — a digital escape into the calming, enchanting world of nature sounds.      </p>

              
            </div>

        </div>
    </div>
</div>
  
  )
}

export default About
