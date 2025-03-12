import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import  Avatar  from "../avatar";


export default function IntroSection() {
    return (
      <header className="intro">
        <Avatar className="intro__avatar" src='/profile-bw.png' />
        <h1 className="intro__title">web developer <span className=" text-teal-500">|</span> music enthusiast <span className=" text-teal-500">|</span> amateur photographer.</h1>
        <p className="intro__subtitle">Hey, I&apos;m Edgar a full-stack developer with a passion for music and photography, living between Canada and Mexico. I build scalable web applications by day and capture the world through my lens in my free time. Always exploring new tech, new sounds, and new perspectives.</p>
        <div className="intro__social-links">
          <IoLogoGithub className="social-icon" />
          <IoLogoInstagram className="social-icon" />
          <IoLogoLinkedin className="social-icon" />
        </div>
      </header>
  
    )
  }