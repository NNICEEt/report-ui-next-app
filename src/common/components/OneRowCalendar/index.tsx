import { Box } from "@chakra-ui/react";
import { endOfWeek, isWithinInterval, startOfWeek } from "date-fns";
import { DayPicker, DayPickerProps, Row, RowProps } from "react-day-picker";

import "react-day-picker/dist/style.css";

const CurrentWeekRow = (props: RowProps) => {
  const isDateInCurrentWeek = (dateToCheck: Date) => {
    const today = new Date();
    const start = startOfWeek(today);
    const end = endOfWeek(today);
    return isWithinInterval(dateToCheck, { start, end });
  };
  const isNotCurrentWeek = props.dates.every(
    (date) => !isDateInCurrentWeek(date)
  );
  if (isNotCurrentWeek) return <></>;
  return <Row {...props} />;
};

//TODO: ต้อง custom ต่อให้สามารถใช้ตาม design ได้
const OneRowCalendar = (props: DayPickerProps) => {
  return (
    <DayPicker
      components={{
        Row: CurrentWeekRow,
        CaptionLabel: () => null,
        Caption: () => null,
      }}
      {...props}
    />
  );
};

export default OneRowCalendar;
