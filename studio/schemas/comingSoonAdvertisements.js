export default {
  name: "comingSoonAdvertisements",
  title: "Coming Soon Advertisements",
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
      title: "Link",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "string",
      description: "Big advertisement number will be 1",
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
      title: "name",
      media: "mainImage",
    },
  },
};
