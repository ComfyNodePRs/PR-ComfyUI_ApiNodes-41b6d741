import { strict as assert } from "assert";

const nodeClassTypes = new Set([
  "String API Node",
  "Integer API Node",
  "Float API Node",
  "Any API Node",
]);

/**
 * @param {any} workflow
 * @param {Record<string, any>} options
 */
export const modifyWorkflow = (workflow, options) => {
  return Object.fromEntries(
    Object.entries(workflow).map(([k, v]) => [k, modifyNode(v, options)])
  );
};

/**
 * @param {any} node
 * @param {Record<string, any>} options
 */
const modifyNode = (node, options) => {
  if (!nodeClassTypes.has(node.class_type)) return node;

  const name = node.inputs.name;

  if (!(name in options)) return node;

  node.inputs.default_value = options[name];
  return {
    ...node,
    inputs: { ...node.inputs, default_value: options[name] },
  };
};

/**
 * @param {any} workflow
 * @param {Object} options
 * @param {string} options.url
 * @param {string | undefined} options.username
 * @param {string | undefined} options.password
 */
export const invokeComfyUI = async (workflow, options) => {
  const res = await fetch(`${options.url}/api/prompt`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${options.username}:${options.password}`)}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: workflow }),
  });

  assert(res.ok, `Failed to invoke workflow: ${res.statusText}`);

  return res.json();
};
