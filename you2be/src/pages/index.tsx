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
      {/* Sidebar is now fixed and lives on its own */}
      <Sidebar />

      {/* This div wraps all the content to the right of the sidebar */}
      <div className="md:ml-64">
        
        {/* Your Appbar remains sticky at the top of this container */}
        <div className="sticky top-0 z-50">
          <Appbar />
        </div>

        {/* Your video grid will now scroll correctly within this container */}
        <div className="pt-16">
          <VideoGrid />
        </div>
      
      
    </div>
    </>
  );
}
