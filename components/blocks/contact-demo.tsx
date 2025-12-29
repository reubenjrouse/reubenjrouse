import { Contact2 } from "@/components/ui/contact-2";

export default function ContactDemo() {
  return (
    <Contact2 
      title="Get In Touch"
      description="Interested in collaborating on ML projects or discussing AI opportunities? Feel free to reach out!"
      email="reubenjrouse@gmail.com"
      web={{ label: "linkedin.com/in/reubenjrouse", url: "https://linkedin.com/in/reubenjrouse" }}
    />
  );
}
