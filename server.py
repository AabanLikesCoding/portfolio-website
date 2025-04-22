import http.server
import socketserver
import os
import sys
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import webbrowser
from time import sleep

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class AutoReloadHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith(('.html', '.css', '.js')):
            print(f"\nFile {event.src_path} has been modified. Refresh your browser to see changes!")

def run_server():
    os.chdir(DIRECTORY)
    
    Handler = http.server.SimpleHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"\nServing at http://localhost:{PORT}")
        print("Press Ctrl+C to stop the server")
        
        # Open the browser automatically
        webbrowser.open(f"http://localhost:{PORT}")
        
        try:
            # Set up file watching
            event_handler = AutoReloadHandler()
            observer = Observer()
            observer.schedule(event_handler, path=DIRECTORY, recursive=False)
            observer.start()
            
            # Run the server
            httpd.serve_forever()
            
        except KeyboardInterrupt:
            print("\nShutting down the server...")
            observer.stop()
            observer.join()
            sys.exit(0)

if __name__ == "__main__":
    try:
        from watchdog.observers import Observer
        from watchdog.events import FileSystemEventHandler
    except ImportError:
        print("Installing required package: watchdog")
        os.system("pip install watchdog")
        print("\nStarting server...")
        sleep(2)  # Give some time for the installation to complete
    
    run_server() 