export default {
  widgets: [
    {
      name: "google-analytics",
      layout: {
        width: "large",
      },
      options: {
        title: "Last 30 days",
        gaConfig: {
          reportType: "ga",
          query: {
            dimensions: "ga:date",
            metrics: "ga:users, ga:sessions, ga:newUsers",
            "start-date": "30daysAgo",
            "end-date": "yesterday",
          },
          chart: {
            type: "LINE",
            options: {
              width: "100%",
            },
          },
        },
      },
    },
    {
      name: "google-analytics",
      layout: {
        width: "medium",
      },
      options: {
        title: "World map",
        gaConfig: {
          reportType: "ga",
          query: {
            dimensions: "ga:country",
            metrics: "ga:users",
            "start-date": "30daysAgo",
            "end-date": "yesterday",
          },
          chart: {
            type: "GEO",
            width: "100%",
          },
        },
      },
    },
    {
      name: "project-info",
      options: {
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/haseebasif/nxt-gem-app",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://nxtgem.io",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
