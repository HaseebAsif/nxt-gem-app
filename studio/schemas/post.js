export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "order",
      title: "Order",
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
      name: "slides",
      title: "Slides",
      type: "array",
      of: [{ type: "reference", to: { type: "slides" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
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
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
