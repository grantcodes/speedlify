module.exports = {
  name: "grant.codes", // optional, falls back to object key
  description: "grant.codes",
  // skip if localhost
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 24, // 24 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://grant.codes/",
    "https://grant.codes/about",
    "https://grant.codes/where",
    "https://grant.codes/contact",
    "https://grant.codes/pay",
    "https://grant.codes/websites",
    "https://grant.codes/collections",
    "https://grant.codes/photos",
    "https://grant.codes/likes",
    "https://grant.codes/2020/08/09/100days-conclusion",
    "https://grant.codes/search/speed",
  ],
};
