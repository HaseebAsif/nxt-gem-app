export default {
  name: "slide",
  title: "Slides",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
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
