import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#a2d2ff]">
      <div className="w-[350px] rounded-2xl p-6 ">
        <h1 className="mt-4 text-4xl text-center font-black mb-1 text-white">Login</h1>
        <p className="text-center text-black mb-4 text-sm">
        </p>

        {/* Email */}
        <div className="relative mb-3">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
            <svg height="1em" width="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.99-7.713v15.031h23.98v-15.031zm11.99-9.713h-23.98c-.007 0-.01.002-.016.002l12 8.002 12-8.002c-.007 0-.011-.002-.017-.002z" /></svg>
          </span>
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full rounded-full py-2.5 pl-12 pr-4 text-base bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-2"
          />
        </div>

        {/* Password */}
        <div className="relative mb-2">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-lg">
            <svg height="1em" width="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.25c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2zM17 8V7c0-2.76-2.24-5-5-5S7 4.24 7 7v1c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3zm-8 0V7c0-2.21 1.79-4 4-4s4 1.79 4 4v1H9zm10 10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v7z" /></svg>
          </span>
          <input
            type="password"
            placeholder="Password"
            className="block w-full rounded-full py-2.5 pl-12 pr-4 text-base bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <Link to={'/home'}>
          <button className="w-full my-3 rounded-full bg-blue-600 text-white font-bold py-2 text-lg shadow hover:bg-blue-700 transition">
            Login
          </button>
        </Link>

        <div className="text-center text-white text-sm mb-2 cursor-pointer hover:underline">
          forget password
        </div>
        <div className="flex items-center my-6">
          <div className="flex-1 border-1 border-white" />
          <span className="px-2 text-white text-base">Or Connect With</span>
          <div className="flex-1 border-1 border-white" />
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className='p-1 flex justify-center items-center bg-white rounded-full'>
            <svg height="30" width="30" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M24 9.5c3.87 0 7.09 1.41 9.3 3.65l6.93-6.93C36.92 2.77 30.95 0 24 0 14.82 0 6.69 5.8 2.73 14.01l8.15 6.33C12.74 13.49 17.93 9.5 24 9.5z" />
                <path fill="#34A853" d="M46.14 24.65c0-1.56-.14-3.08-.41-4.53H24v9.11h12.43c-.54 2.92-2.18 5.28-4.66 6.91l7.3 5.68C44.58 37.26 46.14 31.41 46.14 24.65z" />
                <path fill="#FBBC05" d="M10.88 28.35A14.48 14.48 0 0 1 9.4 24c0-1.52.27-2.98.77-4.35l-8.17-6.34A24.034 24.034 0 0 0 0 24c0 3.91.91 7.62 2.53 10.98l8.35-6.63z" />
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.3-5.68c-2.02 1.32-4.6 2.11-8.6 2.11-6.03 0-11.12-4-12.97-9.39l-8.35 6.62C6.68 42.2 14.81 48 24 48z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>
          </div>
          <span className="ml-2 text-white font-medium">
            connect with google
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login