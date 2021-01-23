import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = {
  date: Date;
  count: number;
};

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampledCount = 0;
            if (item.count !== null) {
              clampledCount =
                item.count < 0
                  ? Math.max(item.count, 0)
                  : Math.min(item.count, 4);
            }
            return `scale-${clampledCount}`;
          }}
          showWeekdayLabels
        />
        <span>calendar (do not represent actual date)</span>
      </div>
    </Container>
  );
};

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;
    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

//   console.log(values);
  return values;
};

export default RandomCalendar;
