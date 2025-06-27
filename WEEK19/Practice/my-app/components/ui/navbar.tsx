export default function Navbar() {
  return (
    <nav className="bg-black text-white w-full h-16 flex items-center px-8 shadow-md">
      {/* Logo on the left */}
      <div className="flex-1 flex items-center">
        <a
          className="text-2xl font-bold tracking-wide no-underline text-white"
          href="#"
        >
          FlyonUI
        </a>
      </div>
      {/* Menu items on the right */}
      <div className="flex gap-8 items-center">
        <a href="#" className="hover:text-black hover:bg-white px-3 py-1 rounded transition-colors duration-200">
          Home
        </a>
        <a href="#" className="hover:text-black hover:bg-white px-3 py-1 rounded transition-colors duration-200">
          Services
        </a>
        <a href="#" className="hover:text-black hover:bg-white px-3 py-1 rounded transition-colors duration-200">
          Contact us
        </a>
      </div>
    </nav>
  );
}
