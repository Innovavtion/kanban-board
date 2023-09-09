import BoardCreate from "@/components/Boards/BoardCreate";
import BoardItem from "@/components/Boards/BoardItem";
import BoardsRecently from "@/components/Boards/BoardsRecently";

export const metadata = {
  title: "Kanban",
  description: "Main Kanban-Board",
};

export default function Home() {
  return (
    <>
      <BoardsRecently />
    </>
  );
}
