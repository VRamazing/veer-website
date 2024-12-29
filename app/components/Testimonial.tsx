import React from 'react'

export default function Testimonial() {
    return (
        <div className="mb-8 grid rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:mb-12 md:grid-cols-2 lg:grid-cols-3">
            <figure className="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="size-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                    <div className="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                        <div>Bonnie Green</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-se-lg">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                    <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="size-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                    <div className="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                        <div>Roberta Casas</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-es-lg md:border-b-0 md:border-e">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                    <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="size-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                    <div className="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                    </div>
                </figcaption>
            </figure>
        </div>


    )
}
