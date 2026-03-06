import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Lock, Loader2, X, ShieldCheck, UserPlus, User as UserIcon } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, initialMode = 'login', onSuccess }) => {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const url = mode === 'login' 
      ? 'http://localhost:3000/api/auth/login' 
      : 'http://localhost:3000/api/auth/register';
    
    const payload = mode === 'login' 
      ? { email, password } 
      : { name, email, password };

    try {
      const response = await axios.post(url, payload);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        onSuccess?.();
        onClose();
      }
    } catch (err) {
      setError(err.response?.data?.error || `Failed to ${mode}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content - Purple Glassmorphism */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
        
        {/* Animated Purple Background Gradient/Stars Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#4a1d82] to-[#1a0b2e] z-0">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        <div className="relative z-10 backdrop-blur-xl bg-white/5 p-8 sm:p-10">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-4 border border-white/20 shadow-xl">
              {mode === 'login' ? <ShieldCheck size={32} className="text-white" /> : <UserPlus size={32} className="text-white" />}
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {mode === 'login' ? 'Login' : 'Join Us'}
            </h1>
            <p className="text-white/60 mt-2 text-center text-sm">
              {mode === 'login' ? 'Welcome back to the future' : 'Start your journey with Payventory'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/20 border border-red-500/20 text-red-100 p-3 rounded-2xl text-xs text-center">
                {error}
              </div>
            )}

            {mode === 'register' && (
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Full Name</label>
                <div className="relative group">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" size={18} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-sm placeholder:text-white/20"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-sm placeholder:text-white/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-sm placeholder:text-white/20"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-[11px] text-white/40">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded bg-white/5 border-white/10 checked:bg-purple-500" />
                    <span>Remember me</span>
                </label>
                <button type="button" className="hover:text-white transition-colors">Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-[#1a0b2e] font-bold py-4 rounded-2xl shadow-xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 mt-4"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                mode === 'login' ? 'Login' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-white/30 text-[11px] font-medium tracking-wide">
            {mode === 'login' ? "Don't have an account?" : "Already a member?"}{' '}
            <button 
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-white hover:underline transition-all font-bold"
            >
              {mode === 'login' ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
