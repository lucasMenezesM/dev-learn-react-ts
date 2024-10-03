import { ICourse } from "./courses";
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  enrolled_courses: ICourse[];
}

export const dummyUsers: IUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123",
    enrolled_courses: [
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
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    password: "supersecurepassword",
    enrolled_courses: [
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
        ],
      },
    ],
  },
];
