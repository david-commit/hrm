import ClientBar from "../navbar/navbar";
import "./home.css";
import ClientHeader from "./header";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let data = [
  {
    id: "Item1",
    value: 410,
    color: "#618B25",
  },
  {
    id: "Item2",
    value: 175,
    color: "#C0F8D1",
  },
  {
    id: "Item3",
    value: 128,
    color: "hsl(140, 18%, 16%)",
  },
];

export default function ClientHome() {
  const datal = {
    labels: ["Item 1", "Item 2"],
    datasets: [
      {
        label: "Item 1",
        data: [82, 100],
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Item 2",
        data: [40, 80],
        borderColor: "black",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

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
            <div className="chart-container">
              <Bar
                data={datal}
                options={{
                  responsive: true,
                }}
              />
            </div>
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
                className="nivo-pie"
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
