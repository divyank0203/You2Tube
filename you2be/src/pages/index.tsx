import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import VideoCard from '@/components/VideoCard'
import VideoGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
    <div className="sticky top-0 z-50">
      <Appbar></Appbar>
    </div>
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-5">
      <VideoGrid></VideoGrid>
      </div>
      
      
    </div>
    </>
  );
}
