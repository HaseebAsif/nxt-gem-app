export default {
  name: "featuredDYORSources",
  title: "FeaturedDYORSources",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
