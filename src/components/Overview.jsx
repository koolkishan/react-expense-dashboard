import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    data1: 4000,
    data2: 2400,
  },
  {
    data1: 3000,
    data2: 1398,
  },
  {
    data1: 2000,
    data2: 9800,
  },
  {
    data1: 2780,
    data2: 3908,
  },
  {
    data1: 1890,
    data2: 4800,
  },
  {
    data1: 2390,
    data2: 3800,
  },
  {
    data1: 3490,
    data2: 4300,
  },
];
export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__title">
        <h3>Overview</h3>
        <div className="title__buttons">
          <button>Month</button>
          <button>Year</button>
        </div>
      </div>
      <div className="overview__info">
        <div className="outer">
          <div className="info__out">
            <h4>Total balance</h4>
          </div>
          <div className="info__in">
            <h4>USD</h4>
            <h3>17.3M</h3>
          </div>
        </div>
        <div className="outer">
          <div className="info__out">
            <h4>Revenue</h4>
          </div>
          <div className="info__in">
            <h4>USD</h4>
            <h3>14K</h3>
          </div>
        </div>
      </div>
      <div className="overview__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
            }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ee3b3b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ee3b3b11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data1"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data2"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="overview__insights">
        <div className="insight">
          <h4>Invoices</h4>
          <div>
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="insight">
          <h4>Transactions</h4>
          <div>
            <h3>737</h3>
            <h4>Completed</h4>
          </div>
        </div>
      </div>
      <div className="overview__expand">
        <button>Expand Chart</button>
      </div>
    </div>
  );
}
