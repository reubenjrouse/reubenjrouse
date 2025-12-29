import { Gallery4 } from "@/components/ui/gallery4"
import type { Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  title: "Projects",
  description:
    "Explore my projects where I attempt to solve real-world problems through hands-on machine learning and AI applications. Each project reflects practical experience in tackling diverse challenges.",
  items: [
    {
      id: "isl-project",
      title: "Indian Sign Language Translation",
      description:
        "Continuous sign language translation using BiLSTM networks and LLMs.",
      href: "https://github.com/reubenjrouse/indian-sign-language-translation",
      image:
        "/images/isl.JPG",
    },
    {
      id: "capsule-vision",
      title: "Abnormality Classification for Video Capsule Endoscopy",
      description:
        "Multi-class image classification using multi-backbone architecture combining ResNet-50, Vision Transformer (DeiT), and MobileNetV3-Large",
      href: "https://github.com/reubenjrouse/endoscopy-capsule-classification",
      image:
        "/images/capsule-vision.JPG",
    },
    {
      id: "fall-gmm",
      title: "Fall Detection",
      description:
        "Fall detection in video footage using optical flow and Gaussian Mixture Model.",
      href: "https://github.com/reubenjrouse/fall-detection-GMM",
      image:
        "/images/falling.JPG",
    },
    {
      id: "disaster-tweet",
      title: "Disaster tweet classification",
      description:
        "Disaster classification of tweets using BERT based LSTM model.",
      href: "https://github.com/reubenjrouse/disaster-tweet-verification",
      image:
        "/images/disaster.JPG",
    },
    {
      id: "skAI",
      title: "skAI: Flight route optimizer",
      description:
        "Flight route optimization using weather prediction and Dijkstra's shortest-path algorithm.",
      href: "https://github.com/reubenjrouse/skAI--flight-route-optimizer",
      image:
        "/images/flight.JPG",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
