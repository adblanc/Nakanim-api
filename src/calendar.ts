import fetch from "node-fetch";
import moment from "moment";
import { apiCalendarUrl, calendarFormat as format } from "../config.json";

interface Calendar {
  startDate: string;
  endDate: string;
  days: object[];
}

export default async function(startDate?: string): Promise<Calendar> {
  const monday = moment()
    .isoWeekday(1)
    .format(format);
  try {
    startDate = startDate || monday;

    const res = await fetch(`${apiCalendarUrl}/${startDate}`);
    return await res.json();
  } catch (ex) {
    console.error("Error fetching nakanim calendar : ", ex);
    return {
      startDate: "",
      endDate: "",
      days: []
    };
  }
}
