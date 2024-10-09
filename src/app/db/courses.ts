import { ICategory } from "./categories";
import { IClass } from "./classes";
export interface ICourse {
  id: number;
  name: string;
  classesNumber: number;
  teacher: string;
  description: string;
  categories: ICategory[];
  classes: IClass[]
}

export const dummyCourses: ICourse[] = [
  {
    id: 1,
    name: "Introdução à Programação",
    classesNumber: 10,
    teacher: "João Silva",
    description: "Curso básico de programação, abordando lógica, algoritmos e linguagens de programação.",
    categories: [
      { id: 1, name: "Programação", teacher: "", courses: [] },
      { id: 2, name: "Iniciante", teacher: "", courses: [] }
    ],
    classes: [
      { id: 1, name: "Lógica de Programação", duration: 60, course_id: 1, url: "" },
      { id: 2, name: "Introdução ao Python", duration: 90, course_id: 1, url: "" },
    ]
  },
  {
    id: 2,
    name: "Desenvolvimento Web",
    classesNumber: 12,
    teacher: "Maria Oliveira",
    description: "Curso focado em desenvolvimento de sites e aplicações web utilizando HTML, CSS e JavaScript.",
    categories: [
      { id: 3, name: "Web", teacher: "", courses: [] },
      { id: 4, name: "Intermediário", teacher: "", courses: [] }
    ],
    classes: [
      { id: 3, name: "HTML e CSS", duration: 120, course_id: 2, url: "" },
      { id: 4, name: "JavaScript Básico", duration: 90, course_id: 2, url: "" },
    ]
  },
  {
    id: 3,
    name: "Análise de Dados",
    classesNumber: 8,
    teacher: "Carlos Pereira",
    description: "Aprenda a coletar, processar e analisar dados usando ferramentas como Python e Excel.",
    categories: [
      { id: 5, name: "Dados", teacher: "", courses: [] },
      { id: 6, name: "Análise", teacher: "", courses: [] }
    ],
    classes: [
      { id: 5, name: "Introdução à Análise de Dados", duration: 75, course_id: 3, url: "" },
      { id: 6, name: "Visualização de Dados com Python", duration: 90, course_id: 3 , url: ""},
    ]
  }
];

// export const dummyCourses: ICourse[] = [
//   {
//     id: 101,
//     name: "Introduction to React",
//     classesNumber: 12,
//     teacher: "John Doe",
//     description:
//       "Aprenda os fundamentos do React, a biblioteca JavaScript mais popular para a criação de interfaces de usuário modernas e interativas.",
//     categories: [
//       {
//         id: 1,
//         name: "Frontend Development",
//         courses: [],
//         teacher: "John Doe",
//       },
//     ],
//   },
//   {
//     id: 102,
//     name: "Advanced TypeScript",
//     classesNumber: 10,
//     teacher: "Jane Smith",
//     description:
//       "Domine os conceitos avançados do TypeScript e melhore a qualidade e escalabilidade dos seus projetos JavaScript.",
//     categories: [
//       {
//         id: 2,
//         name: "Backend Development",
//         courses: [],
//         teacher: "Jane Smith",
//       },
//     ],
//   },
//   {
//     id: 103,
//     name: "Machine Learning Basics",
//     classesNumber: 15,
//     teacher: "Dr. Emma White",
//     description:
//       "Explore os conceitos fundamentais de Machine Learning, incluindo algoritmos supervisionados e não supervisionados.",
//     categories: [
//       {
//         id: 3,
//         name: "Artificial Intelligence",
//         courses: [],
//         teacher: "Dr. Emma White",
//       },
//       {
//         id: 4,
//         name: "Python",
//         courses: [],
//         teacher: "Dr. Emma White",
//       },
//     ],
//   },
// ];

// export const courses: ICourse[] = [
//   {
//     name: "Introduction to React",
//     category: "Web Development",
//     classesNumber: 12,
//     teacher: "John Doe",
//   },
//   {
//     name: "Advanced JavaScript",
//     category: "Programming",
//     classes: 20,
//     teacher: "Jane Smith",
//   },
//   {
//     name: "Data Science with Python",
//     category: "Data Science",
//     classes: 18,
//     teacher: "Emily Johnson",
//   },
//   {
//     name: "UI/UX Design Fundamentals",
//     category: "Design",
//     classes: 10,
//     teacher: "Michael Brown",
//   },
//   {
//     name: "Machine Learning Basics",
//     category: "Artificial Intelligence",
//     classes: 15,
//     teacher: "Sarah Lee",
//   },
//   {
//     name: "Database Management with SQL",
//     category: "Database",
//     classes: 8,
//     teacher: "Robert Wilson",
//   },
//   {
//     name: "Mobile App Development with Flutter",
//     category: "Mobile Development",
//     classes: 16,
//     teacher: "Laura Davis",
//   },
//   {
//     name: "Cloud Computing with AWS",
//     category: "Cloud Computing",
//     classes: 14,
//     teacher: "Daniel Miller",
//   },
// ];
