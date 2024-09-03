import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-blue-500 via-green-300 to-skyBlue bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        AI Course Generator<br></br>

        <span className="sm:block">Custom Learning Paths, Powere by AI</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Unlock personalised education with AI-driven course creation. Tailor your learning journey to fit your unique goals and
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border-2 border-green-300 bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero