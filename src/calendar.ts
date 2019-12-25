import fetch from "node-fetch";
import moment from "moment";
import { apiCalendarUrl, calendarFormat as format } from "../config.json";

export interface Episode {
  ref: string[];
  _id: string;
  hour: string;
  title: string;
  number: string | number;
  link: string;
  image: string;
  image2x?: string;
}

export interface Day {
  _id?: string;
  date: string;
  episodes: Episode[];
}

export interface Calendar {
  startDate: string;
  endDate: string;
  days: Day[];
}

export async function getCalendar(startDate?: string): Promise<Calendar> {
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
