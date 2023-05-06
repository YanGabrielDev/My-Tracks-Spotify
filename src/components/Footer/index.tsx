import next from '../../../public/icons/next-js.svg'
import spotify from '../../../public/spotifyIcon.svg'
import tailwind from '../../../public/icons/tailwindIcon.svg'
import typescript from '../../../public/icons/ts.svg'
import Image from 'next/image'

export const Footer = () => {
  return(
    <footer className="h-16 w-full bg-black flex justify-center items-center">
      <p className='text-gray-400 text-xs xs:text-base'>Developed by <a className='decoration-transparent text-blue-600'>Yan Gabriel</a> using:</p>
      
        <Image alt="tailwind-css" src={next} className="sx:h-5 sx:w-6 m-1 h-4 w-4 "/>
        <Image alt="tailwind-css" src={typescript} className="sx:h-5 sx:w-6 m-1 h-4 w-4"/>
        <Image alt="tailwind-css" src={spotify} className="sx:h-5 sx:w-6 m-1 h-4 w-4"/>
        <Image alt="tailwind-css" src={tailwind} className="sx:h-5 sx:w-6 m-1 h-4 w-4"/>
      
    </footer>
  )
}