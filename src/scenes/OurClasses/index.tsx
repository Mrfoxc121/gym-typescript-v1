import { SelectedPage, ClassType } from '@/shared/types'
import { motion } from 'framer-motion'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import HText from '@/shared/HText'
import Class from '@/scenes/OurClasses/Class'

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image1

    },
    {
        name: "Yoga Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image2

    },
    {
        name: "Box Fit Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image3

    },
    {
        name: "Pilates Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image4

    },
    {
        name: "Crossfit Training Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image5

    },
    {
        name: "Circuit Training Classes",
        description: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus!",
        image: image6

    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function OurClasses({ setSelectedPage }: Props) {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
                className=''
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className='mx-auto w-5/6'
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5 text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis ratione modi, illo hic quo ex facilis et beatae soluta voluptas doloribus minus saepe officia. Reprehenderit excepturi autem aut cumque!
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.3, duration: 1 }}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 }
                 }}
                className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item, index) => (
                            <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default OurClasses