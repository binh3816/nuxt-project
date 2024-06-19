export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);
//   const {age} = await event.request.json();
  return {
    message: `hello ${name}! You are ${age} years old`,
  };
});
