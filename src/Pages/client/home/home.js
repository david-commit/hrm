import ClientBar from "../navbar/navbar";
import "./home.css";
import ClientHeader from "./header";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";

let data = [
  {
    id: "Item1",
    value: 410,
    color: "hsl(19, 70%, 50%)",
  },
  {
    id: "Item2",
    value: 175,
    color: "hsl(213, 70%, 50%)",
  },
  {
    id: "Item3",
    value: 128,
    color: "hsl(58, 70%, 50%)",
  },
];
export default function ClientHome() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-home">
        <ClientHeader />

        <div id="client-home-employees">
          {/* <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span> */}

          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Payout</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total attendance</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total deductions</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>
        </div>

        <div id="client-home-chart">
          <div id="client-home-bar">
            <p className="client-home-chart-title">Deductions and Net pay</p>
          </div>
          <div id="client-home-pie">
            <p className="client-home-chart-title">Gender balance</p>
            <div>
              <Pie
                width={400}
                height={400}
                data={data}
                margin={{
                  top: 40,
                  right: 80,
                  bottom: 80,
                  left: 80,
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                borderColor="inherit:darker(0.6)"
              />
              <ThemeProvider>
                <SvgWrapper
                  height={100}
                  width={400}
                  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                ></SvgWrapper>
              </ThemeProvider>
            </div>
          </div>
        </div>

        <></>
      </section>
    </section>
  );
}
