import { ICategory } from "./categories";
export interface ICourse {
  id: number;
  name: string;
  classes: number;
  teacher: string;
  categories: ICategory[];
}

export const courses: ICourse[] = [
  {
    id: 101,
    name: "Introduction to React",
    classes: 12,
    teacher: "John Doe",
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
    categories: [
      {
        id: 3,
        name: "Artificial Intelligence",
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
