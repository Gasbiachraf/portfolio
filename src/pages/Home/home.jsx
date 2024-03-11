
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FirstSectionHome } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
export const HomePage = () => {
    return (
        <>
            <FirstSectionHome/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>

        </>
    );
}
