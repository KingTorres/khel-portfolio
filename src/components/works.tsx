"use client"
import { useState } from "react";
import Styles from "@/src/css/works.module.css"
import Image from "next/image";

// Images
import megabetLogo from "@/public/assets/img/logo/megabet_logo_single.webp"
import cgmLogo from "@/public/assets/img/logo/cgm.webp"
import asiatypeLogo from "@/public/assets/img/logo/asiatype.webp"
const Work = () => {
    
    const [modal, setModal] = useState(false)
    const modalShow = ()=> {
        setModal(true)
    }
    const modalHide = ()=> {
        setModal(false)
    }
    return(
        <>
        <div className={Styles.sectionTitle}>Works</div>
        <div className={Styles.projectList}>
            <div className={`${Styles.listItem} ${Styles.active}`} onClick={modalShow}>
                <div className={Styles.logo}>
                    <Image src={megabetLogo} alt="megabet"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Megabet</div>
                    <div className={Styles.subTitle}>Layout, Screen Responsiveness, Reactive.</div>
                </div>
                <div className={Styles.action}>{'>'}</div>
            </div>
            <div className={Styles.listItem}>
                <div className={Styles.logo}>
                    <Image src={cgmLogo} alt="cgm manila"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Circle Graphics</div>
                    <div className={Styles.subTitle}>Data Conversion, Macros.</div>
                </div>
            </div>
            <div className={Styles.listItem}>
                <div className={Styles.logo}>
                    <Image src={asiatypeLogo} alt="asiatype"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Asiatype</div>
                    <div className={Styles.subTitle}>Data Conversion, Macros.</div>
                </div>
            </div>
        </div>
        {modal &&
            <div className={Styles.megabetDemo}>
                <div className="modalCard">
                    <div className="modalHeader">
                        <div>Megabet</div>
                        <button onClick={modalHide}>CLOSE</button>
                    </div>
                    <div className="modalBody">
                        <iframe 
                        src="https://www.youtube.com/embed/RzoUd5w4w94?si=Nbd8xHl91ZaG76XV" 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Work