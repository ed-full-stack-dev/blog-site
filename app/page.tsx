import React from "react";
import type { Metadata } from "next";
import { homePageMetaData } from "@/utils/metadata";
import HomeContainer from "@/components/home-page/HomeContainer";

export const metadata: Metadata = homePageMetaData;

import '@/styles/home-page.css'
function Home() {
  return(
    <HomeContainer />
  )
}
export default Home;
