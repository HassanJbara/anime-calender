import { format, genre, season } from "./modules";

export function getSeasonName(s: season) {
  switch (s) {
    case "FALL":
      return "الخريف";

    case "SPRING":
      return "الربيع";

    case "SUMMER":
      return "الصيف";

    case "WINTER":
      return "الشتاء";
  }
}

export function getFormatName(f: format) {
  switch (f) {
    case "TV":
      return "تلفزيوني";

    case "SHORT":
      return "تلفزيوني قصير";

    case "MOVIE":
      return "أفلام";

    case "ONGOING":
      return "مستمرة";

    case "OTHER":
      return "حلقات خاصة / أوفا / أونا";
  }
}

export function getGenreName(g: genre) {
  switch (g) {
    case "ACTION":
      return "أكشن";

    case "ADVENTURE":
      return "مغامرات";

    case "COMEDY":
      return "كوميديا";

    case "DRAMA":
      return "دراما";

    case "ECCHI":
      return "إيتشي";

    case "FANTASY":
      return "خيال";

    case "HAREM":
      return "هاريم";

    case "ISEKAI":
      return "إيسيكاي";

    case "MECHA":
      return "ميكا";

    default:
      return "";
    // And the rest....
  }
}
