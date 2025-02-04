import React from 'react';
import PortfolioOverview from '@/app/portfolio/PortfolioOverview';
import { portfolioPageMetadata } from "@/utils/metadata";
export const metadata = portfolioPageMetadata;
function PortfolioPage() {
  return ( 
    <PortfolioOverview />
  );
}

export default PortfolioPage;
