import { getServerSession } from "next-auth";
import { authConfig } from "../../../lib/AuthConfig";

export async function GET() {
  const session = await getServerSession(authConfig);

  return new Response(JSON.stringify({ session }));
}
