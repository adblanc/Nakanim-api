import fetch from "node-fetch";
import { apiAnimesUrl } from "../config.json";

export async function getAllAnimes(): Promise<[]> {
  try {
    const res = await fetch(`${apiAnimesUrl}`);
    return await res.json();
  } catch (ex) {
    console.error("Error while fetching all animes : ", ex);
    return [];
  }
}

export async function getAnime(id: string | number): Promise<object> {
  try {
    const res = await fetch(`${apiAnimesUrl}/${id}`);
    return await res.json();
  } catch (ex) {
    console.error(`Error while fetching anime ${id} : `, ex);
    return {};
  }
}
