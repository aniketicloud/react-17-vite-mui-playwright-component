import { expect, test } from "@playwright/experimental-ct-react17";
import SimpleMediaQuery from "./SimpleMediaQuery";

test("renders the MUI Button", async ({ mount, page }) => {
  await mount(<SimpleMediaQuery />);
  await expect(page.getByRole("paragraph")).toContainText("true");
});
