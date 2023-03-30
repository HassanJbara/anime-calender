import { format, genre, season } from "./modules";
import { adaptaion } from "./modules/animes";

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

export function getAdaptationName(a: adaptaion) {
  switch (a) {
    case "MANGA":
      return "مانجا";

    case "LIGHTNOVEL":
      return "رواية قصيرة";

    case "GAME":
      return "لعبة";

    case "ORIGINAL":
      return "أصلي";

    case "OTHER":
      return "أخرى";
  }
}

export function getSeasonColor(s: season) {
  switch (s) {
    case "FALL":
      return "#173841";
    case "SPRING":
      return "#8D1F20";
    case "WINTER":
      return "#38A6A7";
    case "SUMMER":
      return "#bf0f0f";
  }
}

export function getSeasonTextColor(s: season) {
  switch (s) {
    case "FALL":
      return "text-fall-blue";
    case "SPRING":
      return "text-spring-wine";
    case "WINTER":
      return "text-winter-torq";
    case "SUMMER":
      return "text-summer-red";
  }
}

export function getSeasonBgColor(s: season) {
  switch (s) {
    case "FALL":
      return "bg-fall-blue";
    case "SPRING":
      return "bg-spring-wine";
    case "WINTER":
      return "bg-winter-torq";
    case "SUMMER":
      return "bg-summer-red";
  }
}
