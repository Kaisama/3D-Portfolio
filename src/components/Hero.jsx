import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 h-40 sm:h-80 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className="text-[#915eff]">Akshat Bisht</span></h1>
          <p className={`${styles.heroSubText} text-white`}>I develop User Interfaces,Frontend and Backend Projects [MERN] with API Production and Testing  </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero