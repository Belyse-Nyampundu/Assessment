import {BASE_URL} from "@/app/config";
export async function POST(request: Request) {
  try {

    const posts = await request.json().then(async (response) => {
      const result = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });
      const post = await result.json();
      return post;
    });
    return new Response(JSON.stringify(posts), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    })
  }
}