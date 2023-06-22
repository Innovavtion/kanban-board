import { CalendarDemo } from "@/components/calendar/calendar";
import style from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={style.title}>О нас</div>
      <div className={style.discryption}>да я</div>
      <div className="w-min">
        <CalendarDemo />
      </div>
    </>
  );
}
