import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import VideoCard from '@/components/VideoCard'
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
    <div>
      <VideoCard 
      title={"Rayleigh is the real badass of the O.P. universe"} 
      channel={"GrandLineReview"}
      views={"2.5M"}
      time={"3 Days"}
      avatar={"/glr.webp"}
      thumbnail={"/thumb.png"}
      />
    </div>
  );
}
