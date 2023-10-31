"use client";

import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import social from '../sanity/schemas/social';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};


export default function Home({socials, projects, experiences, skills, pageInfo}: Props){


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Portfolio</title>
    </Head>
    {/*<h1 className="text-blue-800"> Harsha's Portfolio </h1> */}

    {/* Header */}
    
    <Header socials={socials} />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero pageInfo={pageInfo}/>
    </section>

    {/* About */}

    <section id="about" className="snap-center">
      <About pageInfo={pageInfo} />
    </section>

    {/* Experience */}

    <section id="experience" className="snap-center">
      <WorkExperience experiences={experiences}/>
    </section>

    {/* Skills */}

    <section id="skills" className="snap-start">
      <Skills skills={skills} />

    </section>

    {/* Projects */}

    <section id="projects" className="snap-center">
      <Projects projects={projects} />
      
    </section>

    {/* Contact Me */}

    <section id="contact" className="snap-center">
      <ContactMe />
    </section>

  </div>
  );
}

export const getStaticProps: GetStaticProps<Props>=async()=>{

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };

};
