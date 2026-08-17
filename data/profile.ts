export const profile = {
  name: "Samunder Singh",
  firstName: "Samunder",
  title: "Design Engineer at C-DAC Bangalore",
  roles: ["GPU Design Engineer", "AI/ML Engineer", "Open Source Contributor"],
  location: "Bengaluru, Karnataka, India",
  avatar: "/avatar.png",
  resume: "/samunder_singh.pdf",
  headline:
    "Building LLMs for the edge, Vision AI, and the software stack behind custom GPU hardware.",
  summary:
    "I'm an AI/ML Design Engineer working at the intersection of LLMs, distributed systems, GPU computing, and AI infrastructure. Currently at C-DAC Bengaluru, I build 1B–7B small language models with a focus on distributed training, inference optimization, quantization, and deployment. I also work on the software stack for custom GPU hardware — OpenCL kernels, RISC-V, POCL, compiler/runtime development — and enabling PyTorch-like AI workloads on custom accelerators.",
  extra:
    "Previously at Lincode I built and deployed production ML/CV systems using PyTorch, YOLO, DETR, CLIP, TensorRT, torch.compile, and distributed training. I'm interested in LLM systems, GPU programming, compilers, AI accelerators, and hardware–software co-design. I also contribute to open source, including Ivy at Unify.",
  education: {
    degree: "B.Tech in Electrical, Electronics and Communications Engineering",
    school: "Tezpur University, Assam, India",
    years: "2020 - 2024",
  },
  experience: [
    {
      company: "C-DAC",
      url: "https://www.cdac.in/",
      role: "Design Engineer",
      location: "Bengaluru, India",
      dates: "July 2026 - Present",
      bullets: [
        "Building end-to-end infrastructure for distributed SLM training and inference — training pipelines, inference optimization, and quantization for in-house 1B–7B parameter models.",
        "Developing the software stack for a custom GPU accelerator at the compiler/runtime level with OpenCL kernels, RISC-V POC, and POCL.",
        "Enabling PyTorch-like AI frameworks and LLM inference on custom hardware, bridging low-level kernels to high-level workloads.",
      ],
    },
    {
      company: "Lincode",
      url: "https://lincode.ai/",
      role: "Associate Data Scientist",
      location: "Bengaluru, India",
      dates: "September 2024 - July 2026",
      bullets: [
        "Built a synthetic data pipeline with a structured defect library — generation, augmentation, and dataset versioning — for rare-class imbalance in industrial inspection.",
        "Designed a self-supervised auto-labeling algorithm and a CLIP-based unsupervised pipeline for anomaly detection and data visualization.",
        "Trained and deployed YOLOv8, DETR, and CLIP for defect detection; optimized inference with TensorRT and torch.compile for edge and cloud serving.",
        "Scaled distributed training across multi-GPU and multi-host clusters using PyTorch DDP.",
        "Led end-to-end integration of segmentation and OCR (PaddleOCR) into real-time inspection workflows.",
        "Integrated multi-bucket cloud storage (AWS S3, DigitalOcean Spaces, Storj) for datasets and model artifacts.",
        "Built an MCP server and custom AI tools for LLM-driven automation of internal workflows.",
        "Enhanced a Django-MongoDB backend for scalable ML product deployment; used K-Means, DBSCAN, Grad-CAM, and SHAP for discovery and explanations.",
      ],
    },
    {
      company: "Lincode",
      url: "https://lincode.ai/",
      role: "Data Science Intern",
      location: "United States (Remote)",
      dates: "May 2024 - September 2024",
      bullets: [
        "Developed and integrated object detection models (YOLO, DETR) into the product pipeline, improving real-time inspection accuracy.",
        "Built image augmentation pipelines to improve generalization across manufacturing scenarios.",
        "Contributed to the Django backend — bug fixes, API performance, and ML model integration.",
        "Helped ship a segmentation and OCR pipeline with PaddleOCR into production.",
      ],
    },
    {
      company: "Unify",
      url: "https://github.com/ivy-llc/ivy",
      role: "Top Contributor",
      location: "Remote",
      dates: "February 2024 - May 2024",
      bullets: [
        "Collaborated on test-case fixes and critical Ivy tasks, including deep dives into transpiler and compiler code and PR review.",
        "Built a chatbot to compare and rank LLMs with a global leaderboard — users query two models at once and vote on the winner.",
        "Worked on complex dtypes across TensorFlow, JAX, and PaddlePaddle backends, including SHLO/XLA improvements.",
      ],
    },
  ],
  projects: [
    {
      name: "SLX",
      url: "https://github.com/samthakur587/SLX",
      tags: ["Slang", "PyTorch", "Python", "CUDA"],
      category: "Deep Learning",
      description:
        "A high-performance deep learning framework on PyTorch with custom shader-based kernels through Slang, for efficient tensor operations on GPU.",
    },
    {
      name: "Shruti-Drishti",
      url: "https://github.com/pranjalkar99/shruti-drishti",
      tags: ["Python", "MediaPipe", "TensorFlow", "Flask"],
      category: "Computer Vision",
      description:
        "Real-time Indian Sign Language recognition with Mediapipe, CNN, and LSTM at 90%+ accuracy. Won an award at a Hasgeek hackathon.",
    },
    {
      name: "Edulens",
      url: "https://github.com/samthakur587/Edulens.git",
      tags: ["FastAPI", "Celery", "Google OAuth", "VectorDB"],
      category: "Computer Vision / NLP / LLM",
      description:
        "FastAPI video analysis platform using ML for figure detection, OCR, and speech-to-text, with Google OAuth and Vectara.",
    },
    {
      name: "LLM Playground",
      url: "https://github.com/samthakur587/LLM_playground",
      tags: ["Docker", "GCP", "Streamlit", "LLMs"],
      category: "NLP / LLM",
      description:
        "Chatbot Arena for benchmarking LLMs in the wild — enter a prompt and compare two models side by side.",
    },
    {
      name: "YOLO Agent",
      url: "https://github.com/samthakur587/yolo_agent",
      tags: ["YOLO", "LangChain", "Python", "OpenAI"],
      category: "Computer Vision / LLM",
      description:
        "LangChain agent that talks to Ultralytics YOLO so you can train, validate, export, and deploy detection models in natural language.",
    },
    {
      name: "Sign Language Detection",
      url: "https://github.com/samthakur587/sign_detection",
      tags: ["Python", "MediaPipe", "TensorFlow", "Flask"],
      category: "Computer Vision",
      description:
        "Translated real-time sign gestures into text using holistic landmark tracking with MediaPipe and TensorFlow.",
    },
    {
      name: "Travel Chatbot with RAG",
      url: "https://github.com/samthakur587/travel-chatbot",
      tags: ["LangChain", "OpenAI", "Streamlit", "RAG"],
      category: "NLP / LLM",
      description:
        "LLM chatbot that fetches live weather and search results with LangChain and OpenAI.",
    },
    {
      name: "YOLOv7 Custom Training",
      url: "https://github.com/samthakur587/yolov7",
      tags: ["YOLOv7", "PyTorch", "W&B", "OpenCV"],
      category: "Computer Vision",
      description:
        "Custom object detection on an aquarium dataset with visual logging and monitoring.",
    },
  ],
  skills: {
    "LLM Systems": [
      "Distributed Training",
      "Quantization",
      "SLMs (1B–7B)",
      "TensorRT",
      "torch.compile",
      "PyTorch DDP",
    ],
    "GPU & Hardware": ["OpenCL", "RISC-V", "POCL", "CUDA", "Compiler / Runtime"],
    Languages: ["Python", "C++", "SQL", "Hindi", "English"],
    "ML & Vision": [
      "PyTorch",
      "YOLOv8",
      "DETR",
      "CLIP",
      "PaddleOCR",
      "OpenCV",
      "MediaPipe",
      "JAX",
      "TensorFlow",
    ],
    "Backend & Cloud": [
      "Django",
      "FastAPI",
      "MongoDB",
      "Docker",
      "AWS S3",
      "MCP",
      "Git",
    ],
  },
  certifications: [
    {
      name: "Generative AI with Large Language Models",
      issuer: "AWS, deeplearning.ai",
      url: "https://www.coursera.org/account/accomplishments/verify/TU3M7QWV28FW",
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "deeplearning.ai",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/3PWEZ8XC8FHG",
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "deeplearning.ai",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/ESKL5T4G84LP",
    },
    {
      name: "Structuring Machine Learning Projects",
      issuer: "deeplearning.ai",
      url: "https://www.coursera.org/",
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      url: "https://www.coursera.org/",
    },
  ],
  articles: [
    {
      title:
        "Building a Conversational Document Retrieval System with FastAPI and GPT-3.5 Turbo",
      url: "https://medium.com/@samthakur/building-a-conversational-document-retrieval-system-with-fastapi-and-gpt-3-5-turbo-cd02228af85e",
      source: "Medium",
    },
    {
      title: "SAM 3: The Next Evolution in Promptable Segmentation — Complete Guide",
      url: "https://medium.com/p/66f9f023f95f",
      source: "Medium",
    },
    {
      title: "The 5 Counter-Intuitive Ideas That Gave AI Its Vision",
      url: "https://medium.com/@samthakur/the-5-counter-intuitive-ideas-that-gave-ai-its-vision-2bd0f99887a4",
      source: "Medium",
    },
  ],
  recommendations: [
    {
      name: "Daniel Lenton",
      title: "CEO at Unify | YC W23",
      url: "https://www.linkedin.com/in/daniellenton/",
      date: "May 6, 2024",
      quote:
        "Samunder has done great work during his time as a top contributor working on Ivy. His enthusiasm was infectious to those around him, and he learned a lot during the role, picking up new skills very quickly, with a drive to get things done. I would recommend him for any role involving Machine Learning infrastructure, and especially those using a lot of Python!",
    },
  ],
  fun: {
    heading: "Outside work",
    intro: "A few things that keep me moving.",
    stories: [
      {
        title: "14000 ft. Tawang, India",
        body: "Fourteen thousand feet in Tawang, Arunachal — mist on the hills, a river underfoot, and no plans except go. Trails beat parties, every time.",
        photos: [
          {
            src: "/my_photos/IMG20240330090036.jpg",
            alt: "Looking out over a mountain valley in Tawang",
            caption: "14000 ft. Tawang, India",
          },
          {
            src: "/my_photos/IMG20240330072549.jpg",
            alt: "By a river in the hills around Tawang",
            caption: "Find a trail. Take it.",
          },
        ],
      },
      {
        title: "Fifth Elephant Hackathon",
        body: "And yes — we won The Fifth Elephant hackathon. Show up, ship, take the trophy.",
        photos: [
          {
            src: "/my_photos/hackathon-present.jpg",
            alt: "Presenting after winning The Fifth Elephant hackathon",
            caption: "We won The Fifth Elephant hackathon",
          },
          {
            src: "/my_photos/hackathon-collab.jpg",
            alt: "Building at The Fifth Elephant hackathon",
            caption: "Building it",
          },
        ],
      },
    ],
    items: [
      { emoji: "🏏", title: "CRICKET", detail: "Play > watch" },
      { emoji: "🥊", title: "UFC", detail: "Fight nights. Always." },
      { emoji: "🥾", title: "TREKKING", detail: "Find a trail. Take it." },
      { emoji: "🏕️", title: "CAMPING", detail: "Less signal. More nature." },
      { emoji: "🚗", title: "EXPLORING", detail: "New places > same routine" },
      { emoji: "🌲", title: "OUTDOORS", detail: "No plans. Just go." },
      { emoji: "🏆", title: "HACKATHONS", detail: "Show up. Ship. Win." },
    ],
    quote:
      "Not really a party person.\nGive me a game, a trail, a tent — or a hackathon.",
  },
  contact: {
    email: "singhsamunder270@gmail.com",
    phone: "8741804051",
    github: "https://github.com/samthakur587",
    linkedin: "https://linkedin.com/in/samunder-singh",
    twitter: "https://x.com/iamsamthakur011",
    medium: "https://medium.com/@samthakur",
    website: "https://samthakur.vercel.app/",
  },
} as const;

export type Profile = typeof profile;
export type Project = (typeof profile.projects)[number];
export type Experience = (typeof profile.experience)[number];
