import Styles from "@/src/css/content.module.css"
import Intro from "@/src/components/intro";
import Works from "@/src/components/works";
import Skills from "@/src/components/skills";
import References from "@/src/components/references";
import Footer from "@/src/components/footer"
export default function Home() {
  return (
    <div className={Styles.content}>
      <section id="intro" className={Styles.section}>
        <Intro/>
      </section>
      <section id="works" className={Styles.section}>
        <Works/>
      </section>
      <section id="skills" className={`${Styles.section} ${Styles.skill}`}>
        <Skills/>
      </section>
      <section className={Styles.section}>
        <References/>
      </section>
      <section  className={Styles.section}>
        <Footer/>
      </section>
    </div>
  );
}