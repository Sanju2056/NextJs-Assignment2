'use client'
import Header from "./Pages/Header"
import SideBar from "./Pages/SideBar"
import Body from "./Pages/Body"

export default function Home() {
  return (
    <div className="bg-[#0D0B21] h-[100%] flex w-[100%]" >
      <SideBar />
      <div className="flex flex-col h-[100%] w-[calc(100%-240px)]">
        <Header />
        <Body />
      </div>
    </div>
  )
}
