module.exports = {
  name: "Kinsta", // optional, falls back to object key
  description: "The Kinsta website",
  // skip if localhost
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 12, // 12 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    // Main pages
    "https://kinsta.com/",
    "https://kinsta.com/legal",
    "https://kinsta.com/plans",
    "https://kinsta.com/contact",
    "https://kinsta.com/features",
    "https://kinsta.com/signup",
    "https://kinsta.com/blog",
    "https://kinsta.com/resources",
    "https://kinsta.com/about",
    // Test various post type templates
    "https://kinsta.com/knowledgebase/dns_probe_finished_nxdomain/", // Knowledgebase single
    "https://kinsta.com/blog/your-connection-is-not-private/", // Post single
    "https://kinsta.com/ebooks/wordpress/manage-multiple-wordpress-sites/", // Ebook single
    "https://kinsta.com/webinars/speed-up-wordpress/", // Webinar single
    "https://kinsta.com/learn/speed-up-wordpress/", // Learn
    "https://kinsta.com/feature-updates/site-renaming/", // Feature updates
    "https://kinsta.com/clients/on-q-financial/", // Client
  ],
};
