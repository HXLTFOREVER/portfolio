import image7 from "@/assets/images/memory.jpg";
import dayjs from "dayjs";

export const initGallries = () => {
  let res = [];
  Array.from({ length: 4 }).forEach((item, index) => {
    res.push({
      title: "title" + index,
      date: index % 2 ? "1年生" : "2年生",
      image: image7,
    });
  });
  return res;
};

export let mockGallries = initGallries();
