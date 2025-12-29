import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";

// ML Engineering and Computer Vision skills for Reuben
const technicalSkills = [
  "PyTorch",
  "TensorFlow",
  "Computer Vision",
  "LLM Fine-tuning",
  "Agentic AI",
  "Python",
  "OpenCV",
  "Hugging Face Transformers",
  "LangChain",
  "RAG Systems",
  "YOLO",
  "Object Detection",
  "Image Segmentation",
  "Neural Networks",
  "Deep Learning",
  "Natural Language Processing",
  "MLOps",
  "Docker",
  "Git",
  "AWS",
  "Model Optimization",
  "Prompt Engineering",
  "Vector Databases",
  "API Development",
  "FastAPI",
];

/**
 * Skills demo component showcasing ML/AI expertise
 */
export default function SkillsDemo() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="space-y-16">
          {/* Technical Skills */}
          <ExpandableSkillTags
            title="Technical Skills"
            skills={technicalSkills}
            initialCount={12}
          />
        </div>
      </div>
    </section>
  );
}
