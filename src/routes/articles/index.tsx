import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/articles/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Oh, you found me!</div>;
}
