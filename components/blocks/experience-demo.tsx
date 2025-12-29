import type { ExperienceItemType } from "@/components/ui/work-experience";
import { WorkExperience } from "@/components/ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "harman",
    companyName: "Harman Connected Services",
    positions: [
      {
        id: "junior-associate-data-scientist",
        title: "Junior Associate Data Scientist",
        employmentPeriod: "07.2025 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Building an AI agent chatbot for project planning that automates Jira workflow creation.
- Developing agentic AI system using LangGraph for multi-step task orchestration and reasoning.
- Integrating Jira MCP (Model Context Protocol) to enable seamless issue creation and project management automation.
- Designing conversational interfaces for natural language-based project planning and task decomposition.`,
        skills: [
          "Agentic AI",
          "LangGraph",
          "Jira MCP",
          "LLM Integration",
          "Chatbot Development",
          "Python",
          "LangChain",
          "API Integration",
          "Project Automation",
        ],
        isExpanded: true,
      },
      {
        id: "ml-intern",
        title: "Machine Learning Engineer Intern",
        employmentPeriod: "01.2025 — 07.2025",
        employmentType: "Internship",
        icon: "code",
        description: `- Built a no-code platform for fine-tuning LLMs with custom datasets, enabling non-technical users to train models.
- Developed a standardized framework for supervised fine-tuning of multiple LLMs using SFTTrainer.
- Implemented distributed training infrastructure using Kubeflow Training Operator for scalable model training.
- Containerized ML workflows with Docker for consistent deployment across environments.`,
        skills: [
          "LLM Fine-tuning",
          "Hugging Face",
          "SFTTrainer",
          "Kubeflow",
          "Docker",
          "Python",
          "Kubernetes",
          "MLOps",
          "Distributed Training",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "ht-labs",
    companyName: "HT Labs",
    positions: [
      {
        id: "data-engineer",
        title: "Data Engineer Intern",
        employmentPeriod: "05.2024 — 07.2024",
        employmentType: "Internship",
        icon: "code",
        description: `- Integrated 10+ APIs from OTT partner providers using Postman to build robust data pipelines.
- Developed crawler scripts to automate data ingestion, adding 1,000+ movies and shows to the database.
- Expanded OTTPlay content offerings by 5% through strategic data collection from non-partner providers.
- Leveraged OpenAI APIs to create personalized content recommendations for music videos, enhancing user engagement.`,
        skills: [
          "API Integration",
          "Postman",
          "Web Scraping",
          "Python",
          "Data Pipelines",
          "OpenAI API",
          "SQL",
          "ETL",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];

export default function WorkExperienceDemo() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Work Experience
        </h2>
        <WorkExperience
          className="rounded-lg border p-6"
          experiences={WORK_EXPERIENCE}
        />
      </div>
    </section>
  );
}
