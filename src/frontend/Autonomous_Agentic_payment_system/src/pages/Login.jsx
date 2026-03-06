import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Mail, Lock, Loader2, User as UserIcon } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const url = isLogin 
      ? 'http://localhost:3000/api/auth/login' 
      : 'http://localhost:3000/api/auth/register';
    
    const payload = isLogin 
      ? { email, password } 
      : { name, email, password };

    try {
      const response = await axios.post(url, payload);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || `Failed to ${isLogin ? 'login' : 'register'}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4a1d82] via-[#753a88] to-[#1a0b2e] text-white selection:bg-purple-500/30">
        
      {/* --- Animated Starfield Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Slow moving, small stars */}
        <div className="absolute inset-0 opacity-50" style={{ background: 'transparent url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"400\\" height=\\"400\\"><circle cx=\\"100\\" cy=\\"100\\" r=\\"1\\" fill=\\"white\\"/><circle cx=\\"300\\" cy=\\"200\\" r=\\"0.8\\" fill=\\"white\\"/><circle cx=\\"50\\" cy=\\"350\\" r=\\"1.2\\" fill=\\"white\\"/><circle cx=\\"250\\" cy=\\"50\\" r=\\"1\\" fill=\\"white\\"/></svg>") repeat', animation: 'drift 60s linear infinite' }}></div>
        {/* Layer 2: Medium moving, bright stars */}
        <div className="absolute inset-0 opacity-70" style={{ background: 'transparent url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"300\\" height=\\"300\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"1.5\\" fill=\\"%23ffffff80\\"/><circle cx=\\"200\\" cy=\\"150\\" r=\\"1\\" fill=\\"%23ffffff80\\"/><circle cx=\\"100\\" cy=\\"250\\" r=\\"1.5\\" fill=\\"%23ffffff80\\"/></svg>") repeat', animation: 'drift 40s linear infinite reverse' }}></div>
        {/* Layer 3: Fast moving, sparse large stars (twinkling) */}
        <div className="absolute inset-0 opacity-90 mix-blend-screen" style={{ background: 'transparent url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"500\\" height=\\"500\\"><circle cx=\\"150\\" cy=\\"250\\" r=\\"2\\" fill=\\"white\\"/><path d=\\"M350,100 L352,105 L357,105 L353,108 L355,113 L350,110 L345,113 L347,108 L343,105 L348,105 Z\\" fill=\\"white\\"/></svg>") repeat', animation: 'drift 80s linear infinite' }}></div>
        
        {/* Deep ambient glow overlays */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#b76e79]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#3b0b59]/40 rounded-full blur-[120px]"></div>
      </div>

      {/* Inline styles for background animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift {
            from { background-position: 0 0; }
            to { background-position: 1000px 1000px; }
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.8); }
        }
      `}} />

      {/* --- Glassmorphism Login Card --- */}
      <div className="relative z-10 w-full max-w-[420px] p-8 md:p-10 mx-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[2rem] animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            {isLogin ? 'Login' : 'Register'}
          </h1>
          <p className="text-white/70 mt-3 font-light">
            {isLogin ? 'Welcome back to the ecosystem.' : 'Join the Payventory network.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-100 p-3 rounded-2xl text-sm text-center backdrop-blur-sm animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {!isLogin && (
            <div className="space-y-2 relative group">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all font-light placeholder:text-white/30 backdrop-blur-sm"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="space-y-2 relative group">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all font-light placeholder:text-white/30 backdrop-blur-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2 relative group">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1 flex justify-between">
                <span>Password</span>
                {isLogin && <a href="#" className="text-white/50 hover:text-white transition-colors capitalize">Forgot?</a>}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all font-light placeholder:text-white/30 backdrop-blur-sm"
                required
              />
            </div>
          </div>

          {isLogin && (
              <div className="flex items-center space-x-2 px-1">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500/50 focus:ring-offset-0 transition-all cursor-pointer" />
                  <label htmlFor="remember" className="text-sm font-light text-white/70 cursor-pointer select-none">Remember me</label>
              </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-[#4a1d82] font-bold text-lg py-4 rounded-2xl shadow-xl shadow-purple-900/40 hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 disabled:active:scale-100 mt-4 group"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
                isLogin ? 'Login' : 'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <p className="text-white/60 text-sm font-medium">
            {isLogin ? "Don't have an account?" : "Already an explorer?"}{' '}
            <button 
              type="button"
              onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
              }}
              className="text-white font-bold hover:underline transition-all drop-shadow-sm ml-1"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
