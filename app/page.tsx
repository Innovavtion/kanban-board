import BoardItem from "@/components/Boards/BoardItem";

export const metadata = {
  title: "Kanban",
  description: "Main Kanban-Board",
};

export default function Home() {
  return (
    <>
      <BoardItem text="Какой-то проект" />
      <BoardItem text="Длинное название проекта очень длинное dgdfgdfg dfgdf dfgdfg" />
    </>
  );
}
