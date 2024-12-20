import { DarkThemeToggle } from "flowbite-react";
import { VRCarousel } from "./components/Carousel";
import { TimeLineComponent } from "./components/Timeline";
import AboutJumboTron from "./components/AboutJumboTron";

export default function Home() {
  return (


    <><main className="flex w-full items-center justify-center gap-2 dark:bg-gray-800">

      <AboutJumboTron />

    </main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Experience</h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">

              <a href="#" className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:ms-4">
                Learn more
              </a>
            </div>
          </div>
          <div>
            <iframe className="mx-auto h-64 w-full rounded-lg shadow-xl sm:h-96 lg:max-w-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="container">
        <TimeLineComponent />

      </section>

    </>
  );
}



