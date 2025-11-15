import React, { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Icons from '../../icons'
import { PublicPageTemplate } from './utils/PublicPageTemplate'

const RegisterPage: React.FC = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({ email: '', password: '', repeatPassword: '' })
    const [error, setError] = useState<string | null>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setError(null)
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!form.email || !form.password || !form.repeatPassword) {
            setError('Uzupełnij wszystkie pola.')
            return
        }
        if (form.password !== form.repeatPassword) {
            setError('Hasła się nie zgadzają!')
            return
        }
        if (form.password.length < 8) {
            setError('Hasło musi mieć co najmniej 8 znaków.')
            return
        }
        // Tu dodaj request do backendu.
        // Fake registration:
        setTimeout(() => navigate({ to: '/dashboard' }), 700)
    }

    return (
        <PublicPageTemplate>
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-5">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl px-8 py-10 border border-indigo-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 text-center">
                        Załóż konto
                    </h2>
                    <p className="text-indigo-700/80 mb-7 text-center text-md">
                        Rejestracja pozwala na podpisywanie oraz weryfikację dokumentów w DocuCrypt.
                        Zacznij korzystać z najnowocześniejszej kryptografii!
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
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={form.password}
                                    placeholder="Hasło (min. 8 znaków)"
                                    minLength={8}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-2.5 text-indigo-400 hover:text-indigo-600 transition"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword((s) => !s)}
                                    aria-label={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                                >
                                    {/* {showPassword ? <Icons.EyeOff size={20} /> : <Icons.Eye size={20} />} */}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label
                                className="block text-indigo-900 font-medium mb-1"
                                htmlFor="repeatPassword"
                            >
                                Powtórz hasło
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-indigo-400">
                                    <Icons.Lock size={20} />
                                </span>
                                <input
                                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-indigo-900 outline-none transition"
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={form.repeatPassword}
                                    placeholder="Powtórz hasło"
                                    required
                                />
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
                            Zarejestruj się
                        </button>
                    </form>
                    <div className="mt-6 flex flex-col items-center text-indigo-700/80 text-sm">
                        Masz już konto?
                        <button
                            className="cursor-pointer ml-1 font-medium hover:underline text-indigo-600"
                            onClick={() => navigate({ to: '/login' })}
                        >
                            Zaloguj się
                        </button>
                    </div>
                </div>
            </main>
        </PublicPageTemplate>
    )
}

export default RegisterPage
