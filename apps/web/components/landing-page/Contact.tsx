import Link from "next/link";
import Input from "@repo/ui/input";
import { SocialContactData } from "../../utils/constant";
import { RefAttributes } from "react";
import { IconProps } from "@tabler/icons-react";

interface ISocialContact {
    item: {
        id: number;
        name: string;
        href: string;
        icon: React.ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    }
}

export default function Contact() {

    return (

        <div id="contact" className="border-t mt-12 border-gray-700 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto scroll-mt-20">

            <div className=" col-span-1">
                <h1 className="text-2xl font-semibold">Stay</h1>
                <h1 className="text-2xl font-semibold">Connected</h1>
                <p className="text-gray-400 mt-1">Collaborate with me on exciting projects!</p>
                <Input variant="sm" className="mt-3" type="text" placeholder="Enter your email" />
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Quick Links</h1>
                <ul className="mt-4">
                    <Link href={"#Home"}>
                        <li className="text-sm">Home</li>
                    </Link>
                    <Link href={"#features"}>
                        <li className="mt-1 text-sm">Features</li>
                    </Link>
                </ul>
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Contact Me</h1>
                <p className="mt-4 text-sm ">Delhi, India</p>
                <p className="mt-1 text-sm">Email : shivanshofficial8750@gmail.com</p>
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Follow Me</h1>

                <div className="mt-4 flex gap-x-3 ">
                    {
                        SocialContactData.map(item => (
                            <SocialContactItem item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export function SocialContactItem(props: ISocialContact) {

    const { item } = props;
    const Icon = item.icon;


    return (
        <div className="relative group">

            <Link href={item.href} target="blank">
                <div className="hover:bg-gray-700 border p-2 rounded-full hover:scale-120 transition-all">
                    <Icon className="shrink-0 " size={20} />
                </div >
            </Link>

            <div className="bg-white text-black invisible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 group-hover:visible z-10 px-2 py-1 rounded-md ">
                {item.name}
            </div>
        </div>
    )
}