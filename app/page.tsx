// import Image from "next/image";
import React from "react";
import type { Metadata } from 'next';
import { homePageMetaData } from "@/utils/metadata";

export const metadata: Metadata = homePageMetaData;
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="text-center">
        {/* Subtitle */}
        <p className="text-2xl text-blue-700 font-light mb-4">Hey, I’m Edgar</p>

        {/* Underline */}
        <div className="h-1 w-16 bg-blue-700 mx-auto mb-4"></div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-blue-900 leading-tight">
          Full Stack Developer
        </h1>
      </div>
    </main>


  );
}
