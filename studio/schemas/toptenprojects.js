export default {
  name: "toptenprojects",
  title: "Top Ten Projects",
  type: "document",
  fields: [
    {
      name: "imgAlt",
      title: "Name / number",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "imgAlt",
      media: "mainImage",
    },
  },
};
