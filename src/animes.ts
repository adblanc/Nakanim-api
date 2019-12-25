import fetch from "node-fetch";
import { apiAnimesUrl } from "../config.json";

interface Genre {
  _id: string;
  name: string;
}

interface Anime {
  ref: string[];
  _id: string;
  name: string;
  link: string;
  rating: number;
  episodes: number;
  img: string;
  synopsis: string;
  year?: string | number;
  type?: string;
  season?: number;
  date?: string;
  originalName?: string;
  otherNames?: string;
  copyright?: string;
  extraInfos?: string;
  __v?: number;
  genres: Genre[];
}

export async function getAllAnimes(): Promise<Anime[]> {
  try {
    const res = await fetch(`${apiAnimesUrl}`);
    return await res.json();
  } catch (ex) {
    console.error("Error while fetching all animes : ", ex);
    return [];
  }
}

export async function getAnime(id: string | number): Promise<Anime> {
  try {
    const res = await fetch(`${apiAnimesUrl}/${id}`);
    return await res.json();
  } catch (ex) {
    console.error(`Error while fetching anime ${id} : `, ex);
    return {
      ref: [""],
      _id: `${id}`,
      name: "",
      link: "",
      rating: 0,
      episodes: 0,
      img: "",
      synopsis: "",
      genres: []
    };
  }
}
