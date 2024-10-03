import { ICourse } from "./courses";

export interface ICategory {
  id: number;
  name: string;
  courses: ICourse[];
  teacher: string;
}

export const dummyCategories: ICategory[] = [
  {
    id: 1,
    name: "Frontend Development",
    courses: [],
    teacher: "John Doe",
  },
  {
    id: 2,
    name: "Backend Development",
    courses: [],
    teacher: "Jane Smith",
  },
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
  {
    id: 5,
    name: "Java",
    courses: [],
    teacher: "Dr. Emma White",
  },
];
