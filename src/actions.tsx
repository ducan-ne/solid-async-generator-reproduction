/*
export const logHello = async function (message: string) {
  "use server";
  console.log(message);

 return (<span>Hello</span>)
};*/

export const logHello = async function * (message: string) {
  "use server";
  console.log(message);

  yield { a: true }
  await new Promise((resolve) => setTimeout(resolve, 5000))

  yield { b: true }
};