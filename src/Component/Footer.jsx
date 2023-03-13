import React from 'react'

const Footer = () => {
    return (

        <footer style={{marginTop: '100px'}} class="p-2 bg-white shadow md:px-4 md:py-6 dark:bg-gray-900">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Save Your Choice</span>
                </a>
                <ul class="flex flex-wrap items-center mb-2 text-sm text-gray-500  dark:text-gray-400">
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="/service" class="mr-4 hover:underline md:mr-6 ">Service</a>
                    </li>
                </ul>
            </div>
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">

                Developed By Sagar Sharma
            </span>
        </footer>

    )
}

export default Footer