import Image from "next/image";
import Styles from "@/src/css/content.module.css"
import Intro from "@/src/components/intro";
import Works from "@/src/components/works";
import Skills from "@/src/components/skills";
import References from "@/src/components/references";
import Footer from "@/src/components/footer"
import SectionObserver from '@/src/components/sectionObserver';
import skillCover from "@/public/assets/img/coverPhoto.jpg"
export default function Home() {
  return (
    <div className={Styles.content}>
      <SectionObserver id="intro" classname={Styles.section}>
        <Intro/>
      </SectionObserver>
      <SectionObserver id="works" classname={Styles.section}>
        <Works/>
      </SectionObserver>
      <SectionObserver id="skills" classname={`${Styles.section} ${Styles.skill}`} activeClassName={Styles.active} inactiveClassName={Styles.inactive}>
        <Skills/>
        <div className={Styles.sectionBackground}>
          <Image src={skillCover} alt="background"/>
        </div>
      </SectionObserver>
      <SectionObserver id="references" classname={Styles.section}>
        <References/>
      </SectionObserver>
      <SectionObserver id="footer" classname={Styles.section}>
        <Footer/>
      </SectionObserver>
    </div>
  );
}