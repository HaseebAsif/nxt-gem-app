export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
    {
      name: "relatedArticle1",
      title: "Related Article 1",
      type: "string",
      description: "Slug link of post",
    },
    {
      name: "relatedArticle2",
      title: "Related Article 2",
      type: "string",
      description: "Slug link of post",
    },
    {
      name: "relatedArticle3",
      title: "Related Article 3",
      type: "string",
      description: "Slug link of post",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
