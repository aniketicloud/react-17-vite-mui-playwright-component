import { expect, test } from "@playwright/experimental-ct-react17";
import MUButton from "./MUButton";

test("renders the MUI Button", async ({ mount, page }) => {
  await mount(<MUButton />);
  await expect(page.getByRole("button")).toContainText("MUI Button");
});
