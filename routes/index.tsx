export const handler = {
  GET: async () => {
    const data = await Deno.readFile("./static/torra.html");

    return new Response(data, { status: 200 });
  },
};
