import { motion, HTMLMotionProps } from "framer-motion"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: "600"
})

interface ButtonProps extends HTMLMotionProps<'button'> {
    text: string,
    icon: JSX.Element
}
export const Button = ({ text, icon, ...props }: ButtonProps) => {
    return (
        <motion.button
            className={`${poppins.className} flex text-black items-center
          bg-[#1ed760] py-1 px-6 rounded-2xl`}
            {...props}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className={`text-sm uppercase tracking-wider`}>
                {text}
            </span>
            {icon && <span className="ml-4">{icon}</span>}
        </motion.button>

    )
}