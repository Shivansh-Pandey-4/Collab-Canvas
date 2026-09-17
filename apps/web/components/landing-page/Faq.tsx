import FaqItem from "./FaqItem"
import { FaqData } from "../../utils/constant"


export default function Faq() {


    return (
        <div id="faq" className="px-6 mx-auto md:max-w-3xl lg:max-w-6xl w-full py-10 scroll-mt-20">
            <div className="border-b border-gray-600 py-6">
                <h1 className="text-5xl font-bold text-white">FAQs</h1>
                <p className="text-gray-300">Get all your questions answered about CollabCanvas.</p>
            </div>

            <div className="py-8 mt-4 flex gap-4 flex-wrap">
                {
                    FaqData.map((item) => (
                        <FaqItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div >
    )
}
