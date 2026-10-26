import type { Metadata } from "next";

import CareersHero from "./_components/careers-hero";
import CareersBenefits from "./_components/careers-benefits";
import OpenPositions from "./_components/open-positions";
import HiringProcess from "./_components/hiring-process";
import CareersCta from "./_components/careers-cta";

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Explore career opportunities at Dhopkol and help us build thoughtful software and digital experiences.",
};

/*
|--------------------------------------------------------------------------
| Careers Page
|--------------------------------------------------------------------------
*/

export default function CareersPage() {
    return (
        <>
            <CareersHero />
            <CareersBenefits />
            <OpenPositions />
            <HiringProcess />
            <CareersCta />
        </>
    );
}