import { DarkThemeToggle } from "flowbite-react";
import { TimeLineComponent } from "./components/Timeline";
import JumboTron from "./components/JumboTron";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (


    <><main className="flex w-full items-center justify-center gap-2 dark:bg-gray-800">

      <JumboTron />

    </main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-center align-middle">
            <iframe className="mx-auto h-64 w-full rounded-lg shadow-xl sm:h-96 lg:max-w-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
          </div>
        </div>


      </section>

      <section className="container">
        <TimeLineComponent />

      </section>

      <Testimonial />

    </>
  );
}



