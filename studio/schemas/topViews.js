export default {
  name: "topViews",
  title: "Top Views",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "link",
      title: "Youtube Link",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "link",
    },
  },
};
