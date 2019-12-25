import { getAllAnimes, getAnime, getRandomAnime } from "../src/animes";

describe("animes", () => {
  jest.setTimeout(30000);

  describe("getAllAnimes", () => {
    it("should return an array of animes if everything ok", async () => {
      const res = await getAllAnimes();
      expect(res.length).toBeGreaterThan(0);
      res.forEach(anime =>
        expect(Object.keys(anime)).toMatchObject(
          expect.arrayContaining([
            "ref",
            "_id",
            "name",
            "link",
            "rating",
            "episodes",
            "img",
            "synopsis"
          ])
        )
      );
    });
  });

  describe("getAnime", () => {
    it("should return an anime if everything went well", async () => {
      const animes = await getAllAnimes();
      const res = await getAnime(animes[0]._id);
      expect(Object.keys(res)).toMatchObject(
        expect.arrayContaining([
          "ref",
          "_id",
          "name",
          "link",
          "rating",
          "episodes",
          "img",
          "synopsis"
        ])
      );
    });
    it("should return an empty anime if invalid id", async () => {
      const id = 1;
      const res = await getAnime(id);
      expect(res).toHaveProperty("name", "");
      expect(res).toHaveProperty("link", "");
      expect(res).toHaveProperty("img", "");
      expect(res).toHaveProperty("_id", `${id}`);
      expect(res).toHaveProperty("synopsis", "");
      expect(res.genres.length).toBe(0);
      expect(res.rating).toBe(0);
      expect(res.episodes).toBe(0);
    });
  });

  describe("getRandomAnime", () => {
    it("should return today's random anime if no date passed", async () => {
      const res = await getRandomAnime();
      expect(Object.keys(res)).toMatchObject(
        expect.arrayContaining(["date", "_id", "anime"])
      );
      expect(Object.keys(res.anime)).toMatchObject(
        expect.arrayContaining([
          "ref",
          "_id",
          "name",
          "link",
          "rating",
          "episodes",
          "img",
          "synopsis"
        ])
      );
    });

    it("should return correct random anime if correct date passed", async () => {
      const res = await getRandomAnime("25/12/2019");
      expect(Object.keys(res)).toMatchObject(
        expect.arrayContaining(["date", "_id", "anime"])
      );
      expect(Object.keys(res.anime)).toMatchObject(
        expect.arrayContaining([
          "ref",
          "_id",
          "name",
          "link",
          "rating",
          "episodes",
          "img",
          "synopsis"
        ])
      );
    });
    it("should return an empty random anime if incorrect date passed", async () => {
      const date = "1";
      const res = await getRandomAnime(date);
      expect(res).toHaveProperty("_id", "0");
      expect(res).toHaveProperty("date", date);
      expect(res).toHaveProperty("anime");
      expect(res.anime).toHaveProperty("name", "");
      expect(res.anime).toHaveProperty("link", "");
      expect(res.anime).toHaveProperty("img", "");
      expect(res.anime).toHaveProperty("synopsis", "");
      expect(res.anime.genres.length).toBe(0);
      expect(res.anime.rating).toBe(0);
      expect(res.anime.episodes).toBe(0);
    });
  });
});
