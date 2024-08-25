export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORT_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "sp", name: "Spanish" },
  { identifier: "hn", name: "Hindi" },
  { identifier: "urdu", name: "Urdu" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const IMDB_CDN = "https://www.imdb.com/title/";
