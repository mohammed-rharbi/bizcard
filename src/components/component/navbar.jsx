/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RpDpFKGUxPU
 */
import { Link } from 'react-router-dom';  
export function navbar({ isAuthenticated }) {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 mb-12">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-14 px-4 md:px-6">
          <Link className="font-semibold mt-4" to={'/'}>
            <img src="public/Screenshot_2024-04-04_163630-removebg-preview.png" width={'70'} alt="" />
          </Link>
          <nav className="flex items-center space-x-4">
            <Link className="font-medium" to={'/'}>
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link className="font-medium" to={'/dashboard'}>
                  Dashboard
                </Link>
                <Link className="font-medium" to={'/logout'}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="font-medium" to={'/login'}>
                  Login
                </Link>
                <Link className="font-medium" to={'/register'}>
                  Register
                </Link>
              </>
            )}
            <Link className="font-medium" to={'/contact'}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link className="rounded-full w-8 h-8 overflow-hidden" href="#">
              <img
                alt="Avatar"
                className="rounded-full border border-gray-300 aspect-square"
                height="32"
                src="/placeholder.svg"
                width="32" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
