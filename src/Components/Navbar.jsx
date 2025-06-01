export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0c29] text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img
          className="h-12 w-auto"
          src="assets/logo.jpg"
          alt="Logo"
        />

        {/* Links */}
        <div className="space-x-6 text-sm md:text-base">
          {/* Refresh current page */}
          <button
            onClick={() => window.location.reload()}
            className="hover:text-cyan-400 transition"
          >
            Home
          </button>

          {/* Go to GitHub Pages sales page */}
          <a
            href="https://web3-ai-deeptech-industry.github.io/web3salespage/"
            className="hover:text-cyan-400 transition"
            rel="noopener noreferrer"
          >
            Sales
          </a>
        </div>
      </div>
    </nav>
  );
}
