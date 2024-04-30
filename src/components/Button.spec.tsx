import { expect, test } from "@playwright/experimental-ct-react17";
import Button from "./Button";

test("renders the button wth default props", async ({ mount, page }) => {
  await mount(<Button />);
  await expect(page.getByRole("button")).toContainText("Default");
});
