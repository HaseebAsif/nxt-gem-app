export default {
  name: "slides",
  title: "Slides",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
      description: "Leave Empty for no heading",
    },
    {
      name: "order",
      title: "Order",
      type: "string",
      description:
        "Order of 1st background image will be a, youtube video will be 997 author will be 998 last and related articles will be 999",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      options: {
        maxLength: 600,
      },
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
