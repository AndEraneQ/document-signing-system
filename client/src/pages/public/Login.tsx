import React, { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Icons from '../../icons'
import { PublicPageTemplate } from './utils/PublicPageTemplate'

const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState<string | null>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setError(null)
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        // Tu dodaj walidację lub request do backendu
        if (!form.email || !form.password) {
            setError('Uzupełnij adres e-mail oraz hasło.')
            return
        }
        // Fake login
        setTimeout(() => navigate({ to: '/dashboard' }), 500)
    }

    return (
        <PublicPageTemplate>
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-10">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl px-8 py-10 border border-indigo-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 text-center">
                        Zaloguj się
                    </h2>
                    <p className="text-indigo-700/80 mb-7 text-center text-md">
                        Uzyskaj dostęp do bezpiecznego podpisywania i weryfikowania dokumentów
                        cyfrowych.
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="block text-indigo-900 font-medium mb-1"
                                htmlFor="email"
                            >
                                Adres e-mail
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-indigo-400">
                                    {/* <Icons.Mail size={20} /> */}
                                </span>
                                <input
                                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-indigo-900 outline-none transition"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="username"
                                    onChange={handleChange}
                                    value={form.email}
                                    placeholder="Twój e-mail"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="block text-indigo-900 font-medium mb-1"
                                htmlFor="password"
                            >
                                Hasło
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-indigo-400">
                                    <Icons.Lock size={20} />
                                </span>
                                <input
                                    className="pl-10 pr-10 py-2 w-full rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-indigo-900 outline-none transition"
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={form.password}
                                    placeholder="Hasło"
                                    required
                                />
                                <button
                                    type="button"
                                    className="cursor-pointer absolute right-3 top-2.5 text-indigo-400 hover:text-indigo-600 transition"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword((s) => !s)}
                                >
                                    {/* {showPassword ? <Icons.EyeOff size={20} /> : <Icons.Eye size={20} />} */}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <div className="bg-red-50 text-red-700 rounded-lg px-4 py-2 text-sm">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="cursor-pointer w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-xl shadow-lg transition text-lg"
                        >
                            Zaloguj się
                        </button>
                    </form>
                    <div className="mt-6 flex flex-col items-center text-indigo-700/80 text-sm">
                        <button
                            className="hover:underline cursor-pointer"
                            onClick={() => navigate({ to: '/reset-password' })}
                        >
                            Zapomniałeś hasła?
                        </button>
                        <div className="mt-2">
                            Nie masz jeszcze konta?
                            <button
                                className="ml-1 font-medium hover:underline text-indigo-600 cursor-pointer"
                                onClick={() => navigate({ to: '/register' })}
                            >
                                Zarejestruj się
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </PublicPageTemplate>
    )
}

export default LoginPage
