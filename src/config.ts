export const SITE = {
  website: "https://tcm-museum.vercel.app/", // replace this with your deployed domain
  author: "momo & mo小虾",
  profile: "https://github.com/momobuyanqi/Moxiaoxia-TCM-Museum",
  desc: "TCM 洞穴博物馆的官方发布平台 - 记录成长、自由学习与自我民族志。",
  title: "TCM Museum Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
