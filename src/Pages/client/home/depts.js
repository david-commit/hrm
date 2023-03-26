import ClientBar from "../navbar/navbar";
import "./depts.css";
import ClientHeader from "./header";

export default function DepartentDetail() {
  return (
    <section id="client-home">
      <ClientBar />
      <section id="client-home">
        <ClientHeader message="Here is an overview of the Engineering department" />
        <section> This is the engineering department</section>
      </section>
    </section>
  );
}
