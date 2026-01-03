import { useState } from 'react';
import { Terminal, Eye, EyeOff, Github } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';

export function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen flex-col justify-center py-12 px-6 lg:px-8 bg-background-subtle">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="h-10 w-10 bg-brand rounded flex items-center justify-center text-white mr-3">
                        <Terminal size={24} />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 self-center font-sans">
                        LogStream
                    </h1>
                </div>
                <h2 className="text-center text-xl font-medium leading-9 tracking-tight text-slate-900">
                    Create an account
                </h2>
                <p className="mt-1 text-center text-sm text-slate-500">
                    Enter your details to get started.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow-sm rounded-lg sm:px-12 border border-slate-100">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <Input
                                label="Full Name"
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="John Doe"
                                className="py-3!"
                            />
                        </div>

                        <div>
                            <Input
                                label="Email Address"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="name@company.com"
                                className="py-3!"
                            />
                        </div>

                        <div>
                            <div className="relative">
                                <Input
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    required
                                    placeholder="••••••••"
                                    className="py-3! pr-10!"
                                />
                                <div
                                    className="absolute inset-y-0 right-0 top-[26px] flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full bg-brand! hover:bg-brand/90! py-3! text-sm! font-bold"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>

                    <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white px-6 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-colors"
                        >
                            <Github className="h-5 w-5" fill="currentColor" />
                            <span className="text-sm font-medium leading-6">GitHub</span>
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-brand hover:text-brand/80 hover:underline transition-all">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
