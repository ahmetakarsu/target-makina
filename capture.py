from playwright.sync_api import sync_playwright
import time

def capture_screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        print("Navigating to http://localhost:4321")
        page.goto("http://localhost:4321", wait_until="networkidle")
        # Scroll down a bit to capture the services section
        page.evaluate("window.scrollBy(0, 800)")
        time.sleep(2)  # wait for animations
        page.screenshot(path="C:/Users/ahmet/Desktop/target/astro-site/screenshot.png")
        print("Screenshot saved to screenshot.png")
        browser.close()

if __name__ == "__main__":
    capture_screenshot()
