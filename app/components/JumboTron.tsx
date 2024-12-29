import React from 'react'

export default function JumboTron() {
    return (
        <section className="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
            <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Vignesh Ramesh</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">Building Future-Ready Software Solutions: 7+ Years of Excellence in Development, Leadership, and Innovation</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

                    <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 sm:ms-4">
                        Learn more
                    </a>
                </div>
            </div>
        </section>

    )
}
