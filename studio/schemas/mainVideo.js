export default {
  name: "mainVideo",
  title: "Main Video",
  type: "document",
  fields: [
    {
      name: "imgAlt",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "imgAlt",
        maxLength: 96,
      },
    },
    {
      name: "link",
      title: "Link",
      description: "If not any leave blank",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "mux.video",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "imgAlt",
    },
  },
};
