const MODEL = "@cf/meta/llama-4-scout-17b-16e-instruct";

export async function chatWithCloudflare(messages) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.");
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/ai/run/${MODEL}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages, max_tokens: 300 }),
    }
  );

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`Cloudflare Workers AI returned an invalid response (HTTP ${response.status}).`);
  }

  if (!response.ok || payload.success !== true) {
    const details = Array.isArray(payload.errors)
      ? payload.errors.map((error) => error.message).filter(Boolean).join("; ")
      : "";
    throw new Error(details || `Cloudflare Workers AI request failed (HTTP ${response.status}).`);
  }

  const answer = payload.result?.response;
  if (typeof answer !== "string" || !answer.trim()) {
    throw new Error("Cloudflare Workers AI returned an empty response.");
  }

  return { choices: [{ message: { content: answer } }] };
}
