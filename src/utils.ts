import type { adaptaion, format, genre, season, weekday } from "@/modules";

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

    case "MYSTERY":
      return "غموض";

    case "ROMANCE":
      return "رومانسي";

    case "SCHOOL":
      return "مدرسي";

    case "SCI-FI":
      return "خيال علمي";

    case "SEINEN":
      return "سينين";

    case "SHOUJO":
      return "شوجو";

    case "SHOUNEN":
      return "شونين";

    case "SLICE_OF_LIFE":
      return "شريحة حياة";

    case "SPORTS":
      return "رياضي";

    default:
      return "";
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

export function getAiredEpisodeCount(startDate: string) {
  const currentDate = new Date();
  const startDateDate = new Date(startDate);

  if (startDateDate.getTime() > currentDate.getTime()) return 0;

  const WEEK = 1000 * 60 * 60 * 24 * 7;

  const diff = currentDate.getTime() - startDateDate.getTime();

  return Math.floor(diff / WEEK) + 1; // +1 for the already aired episode in the past
}

export function getWeekdayName(day: weekday) {
  switch (day) {
    case "Monday":
      return "الاثنين";

    case "Tuesday":
      return "الثلاثاء";

    case "Wednesday":
      return "الأربعاء";

    case "Thursday":
      return "الخميس";

    case "Friday":
      return "الجمعة";

    case "Saturday":
      return "السبت";

    case "Sunday":
      return "الأحد";
  }
}
