import {MainSection} from "../MainSection";
import {Gallery} from "../Gallery";
import {About} from "../About";
import {Summary} from "../Summary";

export const Homepage = () => {
    return(
        <>
            <MainSection/>
            <Gallery/>
            <About/>
            <Summary/>
        </>
    )
}