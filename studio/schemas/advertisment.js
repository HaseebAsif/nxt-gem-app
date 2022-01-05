export default {
  name: "topAdvertisement",
  title: "Top Advertisement",
  type: "document",
  fields: [
    {
      name: "TopAdvertisment",
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
      title: "Link",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "TopAdvertisment",
      media: "mainImage",
    },
  },
};
