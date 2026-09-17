import Button from "@repo/ui/button"
import Link from "next/link"


export default function Hero() {

    return (
        <div className="border border-gray-800 py-20 px-10 mt-12 text-center mx-auto overflow-hidden">
            <p className="text-4xl md:text-5xl lg:text-7xl  font-semibold">Build faster with<br />Collab Canvas</p>

            <div className="mt-8 space-x-5 flex items-center justify-center">
                <Link href={"/canvas"}>
                    <Button variant="secondary" size="lg" >Be My Guest</Button>
                </Link>
                <Link href={"/signup"}>
                    <Button variant="primary" size="lg" >Create Account</Button>
                </Link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ali absolute -left-[-4px] md:left-5 top-29 h-10 w-10">
                <path d="M12 5h14"></path>
                <path d="M12 5v14"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ali absolute -right-[-6px] md:right-5.5 top-29 h-10 w-10 ">
                <path d="M0 5h14"></path>
                <path d="M14 5v14"></path>
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ali absolute -right-[-6px] md:right-5.5 lg:right-5.5 bottom-54 md:bottom-49 lg:bottom-38 xl:bottom-34 h-10 w-10">
                <path d="M0 19h14"></path>
                <path d="M14 5v14"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ali absolute -left-[-1px] md:left-4 lg:left-4 bottom-54 md:bottom-49 lg:bottom-38 xl:bottom-34 h-10 w-10">
                <path d="M15 19h14"></path>
                <path d="M14 5v14"></path>
            </svg> */}
        </div>
    )
}

