export default {
  name: "toptenprojects",
  title: "Top Ten Projects",
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
      name: "order",
      title: "Order",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
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
