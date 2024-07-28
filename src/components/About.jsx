import React from 'react'

const About = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/7213436/pexels-photo-7213436.jpeg"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
            <img className='rounded-full' src="https://images.pexels.com/photos/2341350/pexels-photo-2341350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Partha Sarathi Phukon</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-400">Person behind this website</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Welcome to TASK.dev, your ultimate todo list companion designed to enhance productivity and streamline daily tasks. Built with cutting-edge technologies like React, Vite, and Tailwind CSS, TASK.dev offers a seamless and intuitive user experience. Our platform is crafted to help you manage your tasks efficiently, ensuring you stay organized and focused. Whether you're planning your day or tracking long-term projects, TASK.dev provides the tools you need to succeed. Join us and take control of your tasks with elegance and ease.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
