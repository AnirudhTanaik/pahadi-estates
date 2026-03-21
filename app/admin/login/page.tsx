import { signIn } from '@/lib/actions/auth'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <span className="font-serif text-3xl text-cream">Pahadi</span>
          <span className="font-serif text-3xl text-gold"> Admin</span>
          <p className="font-sans text-mist text-sm mt-2">Sign in to manage your properties</p>
        </div>

        <div className="bg-[#161e1a] border border-[#2d5441]/40 p-8">
          <form action={signIn} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-mist font-sans">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="admin@pahadestates.com"
                className="bg-[#0e0e0e] border border-[#2d5441] text-cream placeholder-mist px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-mist font-sans">Password</label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="bg-[#0e0e0e] border border-[#2d5441] text-cream placeholder-mist px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-[#0e0e0e] font-sans font-medium tracking-wide text-sm px-6 py-3 hover:bg-gold-light transition-colors duration-200 mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
