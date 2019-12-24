import getCalendar from "./calendar";

(async () => {
  const calendar = await getCalendar();
  console.log(calendar);
})();
