import React from 'react'
import { motion } from "framer-motion"

export default function Main() {
    return (
        <div>
            {/* Node Cards Grid */ }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                { [1, 2, 3, 4, 5, 6].map((node, index) => (
                    <motion.div
                        key={ node.id }
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.5, delay: 1 + index * 0.1 } }
                        whileHover={ { scale: 1.02, y: -5 } }
                        className="cursor-pointer"
                    >
                        <img src="/images/card.png" alt="" className='w-full' />

                    </motion.div>
                )) }
            </div>
        </div>
    )
}
