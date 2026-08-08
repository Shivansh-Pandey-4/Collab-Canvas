"use client"
import { useContext } from "react"
import Header from "../components/Header"
import { OpenContext } from "../context/OpenContext"
import Body from "../components/body";

export default function Home() {
  const myOpen = useContext(OpenContext);

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

      <h1 className="mt-2">Home Page.</h1>
      <Body />
    </div>
  )
}