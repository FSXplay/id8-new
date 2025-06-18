// pages/login.tsx
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Theater Admin Login</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
        <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Theater Admin Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-zinc-400 mt-4">
            Forgot your password? <a href="#" className="text-yellow-400 hover:underline">Reset here</a>
          </p>
        </div>
      </div>
    </>
  );
}
