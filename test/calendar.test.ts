import moment from "moment";
import getCalendar from "../src/calendar";
import { calendarFormat as format } from "../config.json";

describe("getCalendar", () => {
  jest.setTimeout(30000);
  const monday = moment()
    .isoWeekday(1)
    .format(format);
  const sunday = moment()
    .isoWeekday(7)
    .format(format);

  it("should return a valid calendar if no date is given", async () => {
    const res = await getCalendar();
    expect(res.startDate).toBe(monday);
    expect(res.endDate).toBe(sunday);
    expect(res.days).toBeTruthy();
  });

  it("should return a valid calendar if monday date is passed", async () => {
    const res = await getCalendar(monday);
    expect(res.startDate).toBe(monday);
    expect(res.endDate).toBe(sunday);
    expect(res.days).toBeTruthy();
  });

  it("should return a calendar with empty days if incorrect date is passed", async () => {
    const res = await getCalendar("1234");
    expect(res.startDate.length).toBe(0);
    expect(res.endDate.length).toBe(0);
    expect(res.days.length).toBe(0);
  });
});
