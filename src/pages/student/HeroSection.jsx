import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='relative bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-white text-4xl font-bold mb-4'>Find Best Course For You</h1>
                <p className='text-gray-200 dark:text-gray-400 mb-8 '>Effortless learning, anytime, anywhere. Streamline courses, track progress, and unlock growth with our intuitive LMS.</p>
                <form action="" method="" className='flex  items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                    <Input type="text"
                    placeholder="search courses"
                    className='flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100'  />
                    <button className="bg-blue-600 dark:blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 cursor-pointer">Search</button>
                </form>
                    <Button className="bg-white dark:bg-gray-800  text-blue-600 rounded-full hover:bg-gray-200">Explore Courses</Button>
            </div>
        </div>
    )
}

export default HeroSection