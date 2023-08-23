export const handler = async (req, ctx) => {
  const response = await ctx.next();

  return new Response(response.body, response);
};
