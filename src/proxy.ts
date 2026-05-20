import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
  const currentUrl = new URL(request.url);

  if (currentUrl.pathname.includes("/users")) {
    const message = `Proxying request to: ${currentUrl.pathname}`;
    console.log(message);
    return NextResponse.json({ message, status: 200 });
  }

  return NextResponse.next();
}
