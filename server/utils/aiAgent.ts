import { ProxyAPIChatModel } from "./proxyapiLLM";

let cachedModel: ProxyAPIChatModel | null = null;

export async function getModel() {
  if (!cachedModel) cachedModel = new ProxyAPIChatModel();
  return cachedModel;
}

export async function updateToken() {
  return process.env.PROXY_API_KEY || "sk-Qg0N8h7ps0QFjfqeFYToUqYglqWYdHps";
}
