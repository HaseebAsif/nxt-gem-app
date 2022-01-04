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
      name: "linkVideo",
      title: "Link of Video",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "imgAlt",
    },
  },
};
