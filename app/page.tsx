import { Gallery4Demo } from "@/components/blocks/gallery4-demo";
import { HeroSection04 } from "@/components/blocks/hero04-demo";
import SkillsDemo from "@/components/blocks/skills-demo";
import WorkExperienceDemo from "@/components/blocks/experience-demo";
import ContactDemo from "@/components/blocks/contact-demo";

export default function Home() {
  return (
    <>
      <HeroSection04 />
      <WorkExperienceDemo />
      <Gallery4Demo />
      <SkillsDemo />
      <ContactDemo />
    </>
  );
}
