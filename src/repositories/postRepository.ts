export interface IPosts {
  id: string;
  title: string;
  content: string;
  userId: string;
  postedAt: Date;
}

export const postRepository: IPosts[] = [
  {
    userId: "b266e032-59e9-4931-ad29-85ae121314db",
    title: "My First Post at CodeLeap Network!",
    content: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.\n
    Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`,
    id: "8ebd3e4e-95fd-4596-9bb1-56cdeddd2857",
    postedAt: new Date("2023-04-28T11:00:00.000Z"),
  },
];

export const postSave = (valor: IPosts) => {
  postRepository.push(valor);
};

export const postRemove = (id: string) => {
  const index = postRepository.findIndex((post) => post.id === id);
  postRepository.splice(index, 1);
};
