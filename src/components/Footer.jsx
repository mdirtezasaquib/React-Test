
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">React Practice</h3>
              <p className="text-gray-400">Learn React props through hands-on excercises.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/practice" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email : learn@reactpractice.com</p>
              <p className="text-gray-400">Phone : (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2025 React Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }