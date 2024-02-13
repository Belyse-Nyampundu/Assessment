import {URL} from "@/app/config";

export async function POST(request: Request) {
  console.log(request,"request")
  try {
    if (!URL) {
      return new Response("Base URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const body = await request.json().then(response => response);
    console.log(body,"body")
    const result = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const user = await result.json();
    console.log(result.status)
    return new Response(JSON.stringify(user), {
      status: result.status,
      statusText: "Success",
    });
  } catch (error: any) {
    console.log(error,"error1")
    return new Response(error, {
      status: 500,
      statusText: "Failed",
    });
  }
}