import Header from "../components/landing-page/Header"
import Body from "../components/landing-page/body"


export default function Home() {

  return (
    <div className="">
      <Header />

      {/* {
        myOpen?.isOpen && <div className="block md:hidden border rounded-md fixed max-w-2xl w-full bg-black p-3 mx-auto left-0 right-0 top-24">
          <ul>
            <li>Home</li>
            <li>Demo</li>
            <li>Start</li>
          </ul>
        </div>
      } */}
      <Body />
    </div>
  )
}