import fetch from "node-fetch";
import moment from "moment";
import { apiCalendarUrl } from "../config.json";

const format = "YYYY-MM-DD";

export default async function(startDate?: string): Promise<object> {
  const monday = moment()
    .isoWeekday(1)
    .format(format);
  try {
    startDate = startDate || monday;

    const res = await fetch(`${apiCalendarUrl}/${startDate}`);
    return await res.json();
  } catch (ex) {
    console.error("Error fetching nakanim calendar : ", ex);
    const sunday = moment()
      .isoWeekday(7)
      .format(format);
    return {
      startDate: monday,
      endDate: sunday,
      days: []
    };
  }
}
