import "dotenv/config"; // Add this line to load .env variables
import { defineConfig, devices } from "@playwright/test";

// choose https or http. If you are dev testing auth with a local server you will want https, else
// you can use http as the default. When playwright is run in CI, it will use the BASE_URL environment variable
// uncomment whichever you want to use, and comment the other one out.

// const localBaseUrlDefault = "https://localhost:5173/"; // shall we use https?
const localBaseUrlDefault = "http://localhost:5173/"; // shall we use http?
const baseUrl = process.env.BASE_URL || localBaseUrlDefault;
// Log the base URL to verify it's being set correctly
console.info(
  "Playwright using env BASE_URL:",
  baseUrl
);

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: baseUrl,
    trace: "on-first-retry",
    headless: true,
    ignoreHTTPSErrors: true,
    ...devices["Desktop Chrome"],
  },
});
