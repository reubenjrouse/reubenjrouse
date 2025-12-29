import type { ExperienceItemType } from "@/components/ui/work-experience";
import { WorkExperience } from "@/components/ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "tech-startup",
    companyName: "AI Tech Startup",
    positions: [
      {
        id: "ml-engineer",
        title: "Machine Learning Engineer",
        employmentPeriod: "06.2024 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Leading development of computer vision models for production systems.
- Fine-tuning LLMs for domain-specific applications and building agentic AI workflows.
- Implementing MLOps pipelines for model deployment and monitoring.
- Collaborating with product team to integrate AI features into core platform.`,
        skills: [
          "PyTorch",
          "TensorFlow",
          "LLM Fine-tuning",
          "Agentic AI",
          "Computer Vision",
          "MLOps",
          "Docker",
          "AWS",
          "FastAPI",
          "Python",
        ],
        isExpanded: true,
      },
      {
        id: "ml-intern",
        title: "Machine Learning Intern",
        employmentPeriod: "01.2024 — 05.2024",
        employmentType: "Internship",
        icon: "code",
        description: `- Developed proof-of-concept computer vision models for object detection.
- Assisted in LLM integration and prompt engineering experiments.
- Conducted research on model optimization techniques.
- Contributed to internal ML tooling and documentation.`,
        skills: [
          "PyTorch",
          "OpenCV",
          "YOLO",
          "LangChain",
          "Python",
          "Research",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "mumbai-university",
    companyName: "Mumbai University",
    positions: [
      {
        id: "ml-research-intern",
        title: "Machine Learning Research Intern",
        employmentPeriod: "06.2023 — 12.2023",
        employmentType: "Internship",
        icon: "education",
        description: `- Researched and implemented Indian Sign Language translation systems using computer vision.
- Fine-tuned deep learning models for real-time gesture recognition.
- Collaborated with research team on accessible communication technologies.
- Published findings and presented at university research symposium.`,
        skills: [
          "Computer Vision",
          "PyTorch",
          "OpenCV",
          "YOLO",
          "Object Detection",
          "Research",
          "Python",
          "Model Training",
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
