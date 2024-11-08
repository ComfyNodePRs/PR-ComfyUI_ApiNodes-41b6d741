import { strict as assert } from "assert";

const nodeClassTypes = new Set([
  "String API Node",
  "Integer API Node",
  "Float API Node",
]);

export const modifyWorkflow = (workflow: any, options: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(workflow).map(([k, v]) => [k, modifyNode(v, options)])
  );
};

const modifyNode = (node: any, options: Record<string, any>) => {
  if (!nodeClassTypes.has(node.class_type)) return node;

  const name = node.inputs.name;

  if (!(name in options)) return node;

  node.inputs.default_value = options[name];
  return {
    ...node,
    inputs: { ...node.inputs, default_value: options[name] },
  };
};

export const invokeComfyUI = async (
  workflow: any,
  options: {
    url: string;
    username: string | undefined;
    password: string | undefined;
  }
) => {
  const res = await fetch(`${options.url}/api/prompt`, {
    method: "POST",
    headers: {
      // Authorization: `Basic ${btoa(`${options.username}:${options.password}`)}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: workflow }),
  });

  assert(res.ok, `Failed to invoke workflow: ${res.statusText}`);

  return res.json();
};
