import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedbull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"



type Props = {
    setSlectedPage: (value: SelectedPage) => void
}

function Home({ setSelectedPage }: Props) {
    const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
            id="home">
            {/* image and main header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">

                {/* main header */}
                <div className="z-10 mt-32 md:basis-3/5">

                    {/*  headings */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:z-[-1]">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio nulla quae at eaque. Sed, totam. Nostrum tenetur quae tempora iure! Saepe facilis praesentium odio incidunt voluptatum natus necessitatibus mollitia architecto, tenetur fugiat assumenda dolorem!</p>
                    </div>
                    {/*  actions */}
                    <div className="flex items-center gap-8 mt-8">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>

                {/* image */}
                <div className="flex basis-3/5 justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end ">
                    <img src={HomePageGraphic} alt="Home-Page-Graphic" />
                </div>
            </div>
            {/* sponsors  */}
            <div className="">
                {isAboveMediaScreens && (
                    <div className="h-[150px] w-full bg-primary-100 py-10">
                        <div className="mx-auto w-5/6">
                            <div className="flex w-3/5 items-center justify-between gap-8">
                                <img src={SponsorRedbull} alt="redbull-sponsor" />
                                <img src={SponsorForbes} alt="forbes-sponsor" />
                                <img src={SponsorFortune } alt="fortune-sponsor" />
                            </div>
                          
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Home