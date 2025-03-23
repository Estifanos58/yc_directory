// "use client";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const Navbar = async ()=>{
    const session = await auth();
    return (
        <div className="px-5 py-3 bg-white shadow-md font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="logo" width={144} height={30}/>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                            <>
                                <Link href={'/startup/create'}>
                                    <span className="max-sm:hidden">Create</span>
                                    <BadgePlus className="size-6 sm:hidden"/>
                                </Link>  

                                <form action={async ()=>{
                                    "use server";
                                    await signOut({redirectTo:"/"});
                                }}>
                                    <button type="submit">
                                    <span className="max-sm:hidden">LogOut</span>
                                    <LogOut className="size-6 sm:hidden text-red-500"/>
                                </button> 
                                </form>

                                <Link href={`/user/${session?.id}`}>
                                    <Avatar className="size-10">
                                        <AvatarImage src={session?.user?.image} alt={session?.user?.name || ''} width={45} height={50} className="rounded-full"/>
                                        <AvatarFallback>AV</AvatarFallback>
                                    </Avatar>
                                </Link>                       
                            </>
                        ): (
                            <form action={async ()=> {
                                "use server";

                                await signIn('github');
                            }}>
                                <button type="submit">
                                    <span>Login</span>
                                </button>
                            </form>
                        )
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar;