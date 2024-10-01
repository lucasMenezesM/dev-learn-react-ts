export interface UserI {
    name: string,
    email: string,
    password: string
}

export const dummyUsers: UserI[] = [
    {
      name: "Alice Martins",
      email: "alice.martins@example.com",
      password: "alice1234"
    },
    {
      name: "Bruno Oliveira",
      email: "bruno.oliveira@example.com",
      password: "bruno5678"
    },
    {
      name: "Carla Souza",
      email: "carla.souza@example.com",
      password: "carla8901"
    },
    {
      name: "Diego Lima",
      email: "diego.lima@example.com",
      password: "diego2345"
    },
    {
      name: "Fernanda Costa",
      email: "fernanda.costa@example.com",
      password: "fernanda7890"
    }
  ];
  