import { LogOutIcon, Menu, School } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,

    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import DarkMode from '@/Darkmode';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const user = true;
    
    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200  fixed left-0 top-0 right-0 duration-300 z-10'>
            {/* desktop */}
            <div className='hidden md:flex max-w-7xl mx-auto  justify-between items-center gap-2 h-full'>
                <div className='flex  gap-2 items-center'>
                    <School size={"30"} />
                    <h1 className='hidden  md:block  font-extrabold text-2xl'>E-Learning </h1>
                </div>
                {/* user icon and dark mode icon */}
                <div>
                    {
                        user ?
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" className='h-12 w-12 rounded-full' />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                    
                                        <DropdownMenuItem>
                                        <span><Link to='/my-learing'>
                                             My Learning 
                                             
                                             </Link></span>
                                        </DropdownMenuItem>
                                        
                                        <DropdownMenuItem>
                                            <span>Edit Profile</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <LogOutIcon className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            :
                            <div>
                                <Button variant="outlined">Login</Button>
                                <Button>Signup</Button>
                                <DarkMode />
                            </div>
                    }
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='text-2xl font-extrabold'>E-Learning</h1>
                <MobileNavbar />
            </div>

        </div>
    )
}

export default Navbar


const MobileNavbar = () => {
    const role='instructor'
    return (
        <Sheet className="md:hidden">
            <SheetTrigger size="icon" variant="outlined" className="rounded-full bg-gray-200 hover:bg-gray-300">
                <Menu />
            </SheetTrigger>

            <SheetContent className="flex flex-col h-full">
                {/* Header */}
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4 mt-4">
                   <span className="cursor-pointer hover:text-blue-500">My Learning </span>
                    <span className="cursor-pointer hover:text-blue-500">Edit Profile</span>
                    <span className="cursor-pointer hover:text-blue-500">Settings</span>
                </nav>

                {/* Footer */}
                {
                    role === 'instructor' &&
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter> 
                }

            </SheetContent>
        </Sheet>
    );
};

