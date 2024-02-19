import React from "react";
function colorForMethod(method) {
  switch (method.toLowerCase()) {
    case "get":
      return "var(--openapi-code-blue)";
    case "put":
      return "var(--openapi-code-orange)";
    case "post":
      return "var(--openapi-code-green)";
    case "delete":
      return "var(--openapi-code-red)";
    default:
      return undefined;
  }
}
function MethodEndpoint({ method, path }) {
  return (
    <pre
      style={{
        background: "var(--openapi-card-background-color)",
        borderRadius: "var(--openapi-card-border-radius)",
      }}
    >
      <span
        style={{
          color: colorForMethod(method),
        }}
      >
        {method.toUpperCase()}
      </span>{" "}
      <span>{path.replace(/{([a-z0-9-_]+)}/gi, ":$1")}</span>
    </pre>
  );
}
export default MethodEndpoint;
