export default {
  name: "ourTeam",
  title: "OurTeam",
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
      name: "order",
      title: "Order",
      type: "string",
    },
    {
      name: "post",
      title: "Designation",
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
    {
      name: "mainImageShadow",
      title: "Main image Shadow",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
    },
    {
      name: "telegram",
      title: "Telegram",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
  },
};
