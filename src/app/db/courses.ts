export interface Course {
    name: string,
    category: string,
    classes: number,
    teacher: string
}

export const courses: Course[] = [
    {
      name: "Introduction to React",
      category: "Web Development",
      classes: 12,
      teacher: "John Doe"
    },
    {
      name: "Advanced JavaScript",
      category: "Programming",
      classes: 20,
      teacher: "Jane Smith"
    },
    {
      name: "Data Science with Python",
      category: "Data Science",
      classes: 18,
      teacher: "Emily Johnson"
    },
    {
      name: "UI/UX Design Fundamentals",
      category: "Design",
      classes: 10,
      teacher: "Michael Brown"
    },
    {
      name: "Machine Learning Basics",
      category: "Artificial Intelligence",
      classes: 15,
      teacher: "Sarah Lee"
    },
    {
      name: "Database Management with SQL",
      category: "Database",
      classes: 8,
      teacher: "Robert Wilson"
    },
    {
      name: "Mobile App Development with Flutter",
      category: "Mobile Development",
      classes: 16,
      teacher: "Laura Davis"
    },
    {
      name: "Cloud Computing with AWS",
      category: "Cloud Computing",
      classes: 14,
      teacher: "Daniel Miller"
    }
  ];
  