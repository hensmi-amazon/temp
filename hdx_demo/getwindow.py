import pygetwindow as gw
import struct

def get_chrome_windows():
    # Get a list of all open windows
    windows = gw.getAllWindows()

    # Iterate through each window and check if 'Chrome' is in the title
    for window in windows:
        if 'Chrome' in window.title:
            window_handle = window._hWnd

            # Convert window handle to host byte order (little-endian, if applicable)
            host_order_handle = struct.pack('<Q', window_handle)
            hex_host_order_handle = host_order_handle.hex()

            print(f"Window Title: {window.title}")
            print(f"Window Handle (Decimal): {window_handle}")
            print(f"Window Handle (Host Order): {hex_host_order_handle}\n")

if __name__ == "__main__":
    get_chrome_windows()
