import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders children inside the card", () => {
  render(
    <Card>
      <div>Card content</div>
    </Card>
  );
  expect(screen.getByText("Card content")).toBeInTheDocument();
});

test("elevated variant includes shadow and correct variant classes", () => {
  render(
    <Card variant="elevated">
      <div>Elevated</div>
    </Card>
  );
  const inner = screen.getByText("Elevated");
  const card = inner.parentElement as HTMLElement;
  expect(card).toBeTruthy();
  expect(card).toHaveClass("shadow-xl");
  expect(card).toHaveClass("bg-neutral-100");
  expect(card).toHaveClass("dark:bg-neutral-800");
});

test("applies padding classes for sm, md and lg", () => {
  const { rerender } = render(
    <Card padding="sm">
      <div>Sm</div>
    </Card>
  );
  let card = screen.getByText("Sm").parentElement as HTMLElement;
  expect(card).toHaveClass("p-2");

  rerender(
    <Card padding="md">
      <div>Md</div>
    </Card>
  );
  card = screen.getByText("Md").parentElement as HTMLElement;
  expect(card).toHaveClass("p-3");

  rerender(
    <Card padding="lg">
      <div>Lg</div>
    </Card>
  );
  card = screen.getByText("Lg").parentElement as HTMLElement;
  expect(card).toHaveClass("p-4");
});
