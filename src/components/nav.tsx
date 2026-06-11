'use client'
import { useSelector } from 'react-redux'
import styles from '@/src/css/nav.module.css'
import HomeIcon from '@/public/assets/svg/HomeIcon'
import FolderIcon from '@/public/assets/svg/FolderIcon'
import ToolsIcon from '@/public/assets/svg/ToolsIcon'

const Nav = () => {
    // Read the active section directly from your global Redux store state
    // (Adjust 'ui' or 'currentSection' to match your exact slice setup name)
    const activeSection = useSelector((state: any) => state.navUI.currentSection);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.navigation}>
            <button 
                className={activeSection === 'intro' ? styles.active : ''} 
                onClick={() => scrollToSection('intro')}
            >
                <div className={styles.icon}><HomeIcon/></div>
                <div className={styles.label}>INTRO</div>
            </button>
            <button 
                className={activeSection === 'works' ? styles.active : ''} 
                onClick={() => scrollToSection('works')}
            >
                <div className={styles.icon}><FolderIcon/></div>
                <div className={styles.label}>WORKS</div>
            </button>
            <button 
                className={activeSection === 'skills' ? styles.active : ''} 
                onClick={() => scrollToSection('skills')}
            >
                <div className={styles.icon}><ToolsIcon/></div>
                <div className={styles.label}>SKILLS</div>
            </button>
        </div>
    )
}
export default Nav