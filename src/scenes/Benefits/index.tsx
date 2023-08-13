
import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import HText from "@/shared/HText"
import Benefit from '@/scenes/Benefits/Benefit'
import ActionButton from "@/shared/ActionButton"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatum error! Dolore, blanditiis",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's Of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatum error! Dolore, blanditiis",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert & Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatum error! Dolore, blanditiis",
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Benefits({ setSelectedPage }: Props) {
    return (
        <section
            className="mx-auto min-h-full w-5/6 py-20"
            id="benefits"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
                className=""
            >
                {/* header */}
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="md:my-5 md:w-3/5">
                    <HText>MORE THAT JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatum error! Dolore, blanditiis accusantium. Maiores similique nihil vero excepturi fuga.
                    </p>
                </motion.div>

                {/* benefits */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className="md:flex items-center justify-between gap-8">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}

                        />
                    ))}
                </motion.div>

                {/*  graphic and description */}

                {/* graphic */}
                <div className="md:flex md:mt-28 mt-16 items-center justify-between ">
                    <img 
                    className="mx-auto"
                    src={BenefitsPageGraphic} 
                    alt="Benefits-Page-Graphic" />

                    {/* description */}
                    <div className="">
                        {/* title */}
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <div className="">
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className="text-primary-500">FIT</span></HText>
                                </div>
                            </div>
                        </motion.div>
                        {/* description */}
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="">
                            <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni corrupti, nulla eligendi facilis pariatur asperiores, unde tenetur impedit aspernatur quisquam autem natus voluptates atque ducimus blanditiis id! Harum eligendi iste neque necessitatibus deleniti blanditiis repellat praesentium. Natus, pariatur placeat!</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores, expedita omnis qui tenetur quasi odio in dolore recusandae error quidem ex cumque laudantium voluptatem, quae vel veritatis voluptatum reiciendis.</p>
                        </motion.div>

                        {/* button */}
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton
                                setSelectedPage={setSelectedPage}
                                >
                                    Join Now
                                </ActionButton>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default Benefits