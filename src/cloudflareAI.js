const MODEL = "@cf/zai-org/glm-4.7-flash";

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
      body: JSON.stringify({
        messages,
        max_completion_tokens: 160,
        chat_template_kwargs: { enable_thinking: false },
      }),
      signal: AbortSignal.timeout(25000),
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

  const answer = [
    payload.result?.choices?.[0]?.message?.content,
    payload.result?.response,
    payload.choices?.[0]?.message?.content,
  ].find((candidate) => typeof candidate === "string" && candidate.trim());

  if (!answer) {
    const resultFields =
      payload.result && typeof payload.result === "object"
        ? Object.keys(payload.result).join(", ")
        : "none";
    throw new Error(`Cloudflare Workers AI returned no text (result fields: ${resultFields}).`);
  }

  return { choices: [{ message: { content: answer } }] };
}
