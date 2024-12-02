export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "within a research-driven and innovative environment. ",
      description: "Final-year student, pursuing a MSc. with a focus on deep learning",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/insight.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Communication | Leadership | Teamwork ",
      description: "Soft skills",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech and sport",
      description: "Main interests",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Cifar10 Classification algorithm",
      des: "Developed a deep learning classifier using the CIFAR-10 dataset and integrated it with a JavaScript frontend.",
      //  connected to a Python backend
      img: "/classif4.png",
      iconLists: ["/pytorchlogo.png", "/onnx.png", "/Javascriptlogo.png"],
      link: "https://github.com/Wonkssss/CIPHAR10_classification",
    },
    {
      id: 2,
      title: "Superheroes description with Transformer",
      des: "Developed a superheroes text generation algorithm using a transformer that provides descriptions based on prompts.",
      img: "/generation2.png",
      iconLists: ["/pytorchlogo.png", "/onnx.png", "/Javascriptlogo.png"],
      link: "https://github.com/Wonkssss/text_generation_project_2",
    },
    {
      id: 3,
      title: "Motion Capture with Smart Suit Pro II",
      // title: "Technological Expedition: Motion Capture with Smart Suit Pro II",

      des: "Learned how to capture movements using Smart Suit Pro II and Rokoko software to save movements in real time.",
      // des: "Conducted a technological expedition by learning how to capture movements using Smart Suit Pro II and Rokoko software to save movements in real time.",

      img: "/rokoko1.png",
      iconLists: ["/logo-rokoko.png"],
      link: "",
    },
    {
      id: 4,
      title: "Strapple It - Quickstarter Campaign",
      des: "Collaboratively developed a product from ideation to production, successfully raising over 1000 euros in funding.",
      img: "/strappleit1.png",
      iconLists: ["/kickstarterlogo.png"],
      link: "https://www.kickstarter.com/projects/zoemichel/quickstarter-strapple-it-the-freedom-to-carry-more",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Intern Data Analyst at La Poste Groupe",
      desc: "Explored data and made dashboards using Jupyter Notebooks, Dataiku and Tableau.",
      className: "md:col-span-2",
      thumbnail: "/laposte.png",
    },
    {
      id: 2,
      title: "Treasurer and Vice-President of University Association LéoBasket",
      desc: "Managing the treasury of the association and involved in taking decisions among the other members of the board of directors.",
      className: "md:col-span-2", 
      thumbnail: "/Logolbk.png",
    },
    {
      id: 3,
      title: "Hackathon Hussar Academy Paris-Dakar 2023",
      desc: "Won with my team providing a solution for cybersecurity, Metaverse and Web3 challenges.",
      className: "md:col-span-2", 
      thumbnail: "/hussar_academy_logo.jpeg",
    },
    {
      id: 4,
      title: "Alumna and Logistics Officer for Rêv'Elles Association",
      desc: "Alumna since 2016 and volunteered for two weeks for an association that supports women's ambitions, helping them build confidence and professional careers.",
      className: "md:col-span-2",
      thumbnail: "/revelles2.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Wonkssss"
    },

    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/wiam-bensaid-142435222"
    },
  ];