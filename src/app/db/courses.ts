import { ICategory } from "./categories";
export interface ICourse {
  id: number;
  name: string;
  classes: number;
  teacher: string;
  description: string;
  categories: ICategory[];
}

export const dummyCourses: ICourse[] = [
  {
    id: 101,
    name: "Introduction to React",
    classes: 12,
    teacher: "John Doe",
    description:
      "Aprenda os fundamentos do React, a biblioteca JavaScript mais popular para a criação de interfaces de usuário modernas e interativas.",
    categories: [
      {
        id: 1,
        name: "Frontend Development",
        courses: [],
        teacher: "John Doe",
      },
    ],
  },
  {
    id: 102,
    name: "Advanced TypeScript",
    classes: 10,
    teacher: "Jane Smith",
    description:
      "Domine os conceitos avançados do TypeScript e melhore a qualidade e escalabilidade dos seus projetos JavaScript.",
    categories: [
      {
        id: 2,
        name: "Backend Development",
        courses: [],
        teacher: "Jane Smith",
      },
    ],
  },
  {
    id: 103,
    name: "Machine Learning Basics",
    classes: 15,
    teacher: "Dr. Emma White",
    description:
      "Explore os conceitos fundamentais de Machine Learning, incluindo algoritmos supervisionados e não supervisionados.",
    categories: [
      {
        id: 3,
        name: "Artificial Intelligence",
        courses: [],
        teacher: "Dr. Emma White",
      },
      {
        id: 4,
        name: "Python",
        courses: [],
        teacher: "Dr. Emma White",
      },
    ],
  },
];

// export const courses: ICourse[] = [
//   {
//     name: "Introduction to React",
//     category: "Web Development",
//     classes: 12,
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
