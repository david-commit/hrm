import ClientBar from "../navbar/navbar";
import "./home.css";
import ClientHeader from "./header";

export default function ClientHome() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-home">
        <ClientHeader />
      </section>
    </section>
  );
}
