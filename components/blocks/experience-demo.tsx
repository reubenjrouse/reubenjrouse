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
        description: `- Built a LangGraph agent that auto-generates Jira epics, stories, and tasks from unstructured requirement docs using RAG, saving ~3 hrs of manual ticket creation per sprint.
- Integrated Atlassian REST APIs and MCP for conversational Jira interaction and project automation.
- Ported Scaled-YOLOv4 to Tenstorrent TT-SIM for edge hardware execution; PR merged into the upstream repository.
- Building a multimodal RAG ingestion pipeline (Unstructured + Qdrant) for enterprise documents spanning PDFs, tables, and images.`,
        skills: [
          "LangGraph",
          "RAG",
          "Agentic AI",
          "Atlassian REST APIs",
          "MCP",
          "Qdrant",
          "Unstructured",
          "Tenstorrent TT-SIM",
          "Python",
        ],
        isExpanded: true,
      },
      {
        id: "ml-intern",
        title: "Machine Learning Engineer Intern",
        employmentPeriod: "01.2025 — 07.2025",
        employmentType: "Internship",
        icon: "code",
        description: `- Built a no-code LLM fine-tuning platform (Streamlit) supporting 10+ model families (LLaMA, Mistral, Falcon, Phi) with QLoRA, cutting per-model onboarding from ~3 hrs to ~30 min.
- Standardized SFT pipeline using HuggingFace SFTTrainer + LoRA/QLoRA across 10+ open-source LLMs.
- Deployed distributed training on Kubeflow Training Operator on Kubernetes with configurable data and model parallelism.
- Served fine-tuned models via vLLM, abstracting infrastructure complexity from end users.`,
        skills: [
          "LLM Fine-tuning",
          "HuggingFace",
          "SFTTrainer",
          "PEFT/LoRA",
          "QLoRA",
          "Kubeflow",
          "Kubernetes",
          "vLLM",
          "MLOps",
          "Python",
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
