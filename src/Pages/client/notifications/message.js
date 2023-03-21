import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./notifs.css";

export default function Messages() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-notifs" className="client-nots">
        <ClientHeader message="Here are your messages" />
      </section>
    </section>
  );
}
