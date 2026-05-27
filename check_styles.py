from playwright.sync_api import sync_playwright

def check_styles():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:4321")
        
        # Wait for the element
        p_handle = page.wait_for_selector(".taskoit_service_main p", timeout=5000)
        if p_handle:
            styles = page.evaluate("""(element) => {
                const computed = window.getComputedStyle(element);
                return {
                    color: computed.color,
                    fontSize: computed.fontSize,
                    lineHeight: computed.lineHeight,
                    visibility: computed.visibility,
                    display: computed.display,
                    fontFamily: computed.fontFamily,
                    opacity: computed.opacity,
                    backgroundColor: computed.backgroundColor,
                    height: computed.height,
                    overflow: computed.overflow
                };
            }""", p_handle)
            print("Computed Styles for <p> in service_main:")
            for k, v in styles.items():
                print(f"  {k}: {v}")
                
            # Check bounding box
            box = p_handle.bounding_box()
            print(f"Bounding box: {box}")
            
            # Get text content
            text = page.evaluate("(element) => element.textContent", p_handle)
            print(f"Text content: {text}")
        else:
            print("Element not found")
            
        browser.close()

if __name__ == "__main__":
    check_styles()
