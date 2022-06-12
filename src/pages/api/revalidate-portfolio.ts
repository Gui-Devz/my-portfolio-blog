export default async function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(400)
      .json({ error: "Invalid HTTP method. Only Post requests are allowed." });
  }

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const body = req.body;
    if (!body) {
      return res.status(400).send("Bad request (no body)");
    }

    await res.unstable_revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
