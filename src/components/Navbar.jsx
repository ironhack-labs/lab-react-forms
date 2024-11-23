import logo from "./../assets/logo-ironhack-blue.png";
import profile from "./../assets/profile-icon.png";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-20 px-4">
        
        {/* Sección izquierda: Logo */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-lg py-1">
            <img src={logo} alt="Ironhack Logo" className="h-8 w-auto" />
          </button>
        </div>
        
        {/* Sección central: Título */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold tracking-wide">
            Cohort Tools
          </span>
        </div>
        
        {/* Sección derecha: Perfil */}
        <div className="flex justify-end">
          <button className="flex items-center text-lg py-1">
            <img
              src={profile}
              alt="Profile"
              className="h-10 w-10 border border-white rounded-full p-1 object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
