export default {
  name: "ourPartners",
  title: "OurPartners",
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
