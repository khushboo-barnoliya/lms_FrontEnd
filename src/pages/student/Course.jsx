import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Course = () => {
    return (
        <Card className="overflow-hidden cursor-pointer rounded-lg dark:bg-gray-800 bg-white shadow-md hover:shadow-2xl transform hover:scale-105  transition-all duration-300">
            <div className='relative' >
                <img
                    src="https://www.hamedbahram.io/images/courses/nextjs/course.png"
                    className='w-full h-36 object-cover rounded-t-lg ' 
                    />

            </div>
            <CardContent className="mt-2 px-5 py-4 space-y-3">
                <h1 className='hover:underline font-bold text-lg truncate cursor-pointer'>Next Js complete course in Hindi </h1>
                <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 '>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" className='h-12 w-12 rounded-full' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <h1 className='font-medium text-sm '> Vishal Mern Stack</h1>
                <Badge className='bg-blue-600 text-white px-2 py-1 text-xs '>Advance</Badge>
                </div>
                <div className='text-lg font-bold '>
                    <span>₹499</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default Course