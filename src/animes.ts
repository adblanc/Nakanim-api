import fetch from "node-fetch";
import { apiAnimesUrl, apiRandomAnimesUrl } from "../config.json";
import moment = require("moment");

export interface Genre {
  _id: string;
  name: string;
}

export interface Anime {
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

export interface RandomAnime {
  _id: string;
  date: string;
  anime: Anime;
}

export async function getAllAnimes(): Promise<Anime[]> {
  try {
    const res = await fetch(`${apiAnimesUrl}`);
    const { result } = await res.json();

    return result;
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
      genres: [],
    };
  }
}

export async function getRandomAnime(date?: string): Promise<RandomAnime> {
  const day = date || moment().format("DD/MM/YYYY");
  try {
    const res = await fetch(`${apiRandomAnimesUrl}?date=${day}`);
    return await res.json();
  } catch (ex) {
    console.error(`Error while fetching RandomAnime : `, ex);
    return {
      _id: "0",
      date: day,
      anime: {
        ref: [""],
        _id: "0",
        name: "",
        link: "",
        rating: 0,
        episodes: 0,
        img: "",
        synopsis: "",
        genres: [],
      },
    };
  }
}
