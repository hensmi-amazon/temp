import pygetwindow as gw

# Get a list of all open windows
windows = gw.getWindowsWithTitle('Microsoft Edge')

# Check if there is at least one Chrome window open
if windows:
    chrome_window = windows[0]
    print(f"Window Title: {chrome_window.title}")
    print(f"Window Handle: {chrome_window._hWnd}")
else:
    print("No Chrome window found.")
