// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: "Javascript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "React",
    competency: 4,
    category: ["Web Development", "Javascript", "Typescript"],
  },
  {
    title: "Node.JS",
    competency: 4,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Typescript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML + SASS/SCSS/CSS",
    competency: 5,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Bash",
    competency: 3,
    category: ["Tools", "Languages"],
  },
  {
    title: "Amazon Web Services",
    competency: 4,
    category: ["Web Development", "Tools"],
  },
  {
    title: "Postman",
    competency: 4,
    category: ["Web Development", "Tools"],
  },
  {
    title: "MongoDB",
    competency: 3,
    category: ["Web Development", "Databases"],
  },
  {
    title: "PostgreSQL/SQLite3/SQL",
    competency: 4,
    category: ["Web Development", "Databases", "Languages"],
  },
  {
    title: "Express.JS",
    competency: 2,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Django",
    competency: 3,
    category: ["Web Development", "Python"],
  },
  {
    title: "Git/Mercurial",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Numpy",
    competency: 3,
    category: ["Data Science", "Data Engineering", "Python"],
  },
  {
    title: "Tensorflow + Keras",
    competency: 3,
    category: ["Data Science", "Python"],
  },
  {
    title: "Jupyter",
    competency: 3,
    category: ["Data Science", "Python"],
  },

  {
    title: "Python",
    competency: 5,
    category: ["Languages", "Python"],
  },
  {
    title: "C++",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "Java",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "R",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "PWA",
    competency: 4,
    category: ["Web Development", "Javascript", "Typescript"],
  },
  {
    title: "Data Visualization",
    competency: 3,
    category: ["Data Science", "Javascript"],
  },
  {
    title: "Pandas",
    competency: 3,
    category: ["Data Engineering", "Data Science", "Python"],
  },
  {
    title: "Matplotlib",
    competency: 3,
    category: ["Data Engineering", "Data Science", "Python"],
  },
  {
    title: "Scikit-Learn",
    competency: 2,
    category: ["Data Engineering", "Data Science", "Python"],
  },
  {
    title: "Astro",
    competency: 3,
    category: ["Web Development", "Javascript", "Typescript"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
