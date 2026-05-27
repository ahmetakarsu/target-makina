from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        # Listen for console logs and navigation
        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))
        
        print("Navigating to localhost:4321...")
        page.goto("http://localhost:4321")
        
        print("Clicking the popup trigger...")
        page.click(".cd-popup-trigger")
        
        print("Waiting for popup to be visible...")
        page.wait_for_selector(".custom-pop-inquiry", state="visible")
        
        print("Clicking the submit button without filling fields...")
        page.click("button.inqury_submit")
        
        print("Wait a bit to see if anything happens...")
        page.wait_for_timeout(2000)
        
        print("Filling the form...")
        page.fill('input[name="email"]', "test@example.com")
        page.fill('input[name="name"]', "Test User")
        page.fill('input[name="mobile"]', "05555555555")
        page.fill('textarea[name="message"]', "Hello world")
        
        print("Clicking the submit button again...")
        with page.expect_navigation(timeout=5000) as nav_info:
            page.click("button.inqury_submit")
            
        print(f"Navigated to: {page.url}")
        
        browser.close()

if __name__ == "__main__":
    run()
