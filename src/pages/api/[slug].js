const AllData = async (req, res) => {
  const pageSlug = req.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(`*[ _type == "${pageSlug}" ]`);
  const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  if (!result) {
    return res.status(500);
  } else {
    return res.status(200).json(result.result);
  }
};
export default AllData;
