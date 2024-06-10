import React from 'react'
import { t1 } from '../assets'
export default function Team() {
    return (
        <section id="our-team" class="py-16">
            <div class="container mx-auto px-32">
                <h2 class="text-5xl text-blue-500 font-bold text-center mb-8 text-primary">Meet Our Team</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-blue-950 rounded-lg shadow-md p-6 my-6 text-center">
                        <img src={`${t1}`} alt="Team Member 1" class="w-full rounded-full mb-4" />
                        <h3 class="text-xl font-semibold mb-2">John Doe</h3>
                        <p class="text-white">Role: Software Engineer</p>
                    </div>

                    <div class="bg-blue-950 rounded-lg shadow-md p-6 my-6 text-center">
                        <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" alt="Team Member 2" class="w-full rounded-full mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
                        <p class="text-white">Role: Graphic Designer</p>
                    </div>

                    <div class="bg-blue-950 rounded-lg shadow-md p-6 my-6 text-center">
                        <img src="https://spacema-dev.com/elevate/assets/images/team/3.jpg" alt="Team Member 3" class="w-full rounded-full mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Alex Johnson</h3>
                        <p class="text-white">Role: Marketing Manager</p>
                    </div>

                    <div class="bg-blue-950 rounded-lg shadow-md p-6 my-6 text-center">
                        <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" alt="Team Member 4" class="w-full rounded-full mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Peter Johnson</h3>
                        <p class="text-white">Role: Seo specialist</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
