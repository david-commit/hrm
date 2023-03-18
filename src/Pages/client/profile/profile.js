import ClientBar from "../navbar/navbar";
import "./profile.css";
import ClientHeader from "../home/header";

export default function ClientProfile() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-profile">
        <ClientHeader />
      </section>
    </section>
  );
}
