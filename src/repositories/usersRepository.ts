export interface IUsers {
  id: string;
  userName: string;
}

export const usersRepository: IUsers[] = [
  {
    id: "b266e032-59e9-4931-ad29-85ae121314db",
    userName: "Rafael",
  },
];

export const userSave = (valor: IUsers) => {
  usersRepository.push(valor);
};

export const userRemove = (id: string) => {
  const index = usersRepository.findIndex((user) => user.id === id);
  usersRepository.splice(index, 1);
};
