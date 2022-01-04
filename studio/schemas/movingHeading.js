export default {
  name: "movingHeading",
  title: "Moving Heading",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "heading",
        maxLength: 96,
      },
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
      title: "heading",
      media: "mainImage",
    },
  },
};
