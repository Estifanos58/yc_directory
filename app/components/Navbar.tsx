// "use client";

import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
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
                                    <span>Create</span>
                                </Link>  

                                <form action={async ()=>{
                                    "use server";
                                    await signOut({redirectTo:"/"});
                                }}>
                                    <button type="submit">
                                    <span>LogOut</span>
                                </button> 
                                </form>

                                <Link href={`/user/${session?.id}`}>
                                    <span>{session?.user?.name}</span>
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