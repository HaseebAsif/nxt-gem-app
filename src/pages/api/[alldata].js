const { connectToDatabase } = require("../../lib/mongodb");

async function handler(req, res) {
  try {
    const { alldata } = req.query;
    let { db } = await connectToDatabase();
    let posts = await db.collection(alldata).find({}).toArray();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).end();
  }
}

export default handler;
