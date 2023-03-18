import ClientBar from "../navbar/navbar";
import "./home.css";
import ClientHeader from "./header";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ClientHome() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-home">
        <ClientHeader />

        <div id="client-home-employees">
          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>

              <p className="sts">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>

              <p className="sts">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>

              <p className="sts">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>

              <p className="sts">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>

              <p className="sts">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>
        </div>
      </section>
    </section>
  );
}
