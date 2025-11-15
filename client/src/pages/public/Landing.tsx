import React, { type ReactElement } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Icons from '../../icons'
import { PublicPageTemplate } from './utils/PublicPageTemplate'

type Feature = {
    name: string
    desc: string
    icon: ReactElement
}

const features: Feature[] = [
    {
        name: 'Szyfrowanie dokumentów',
        desc: 'Twoje pliki nigdy nie opuszczą bezpiecznego, zaszyfrowanego środowiska.',
        icon: <Icons.Lock size={32} />,
    },
    {
        name: 'Weryfikacja podpisu',
        desc: 'Sprawdź, kto i kiedy podpisał plik. Zero wątpliwości co do autentyczności.',
        icon: <Icons.Info size={32} />,
    },
    {
        name: 'Przyjazny interfejs',
        desc: 'Nowoczesny design, szybki workflow, prosty dostęp do wszystkich funkcji.',
        icon: <Icons.TickOutlined size={32} />,
    },
]

const LandingPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <PublicPageTemplate>
            <main className="relative flex flex-1 flex-col items-center justify-center z-10 px-4 pb-16 md:pb-0">
                <div className="max-w-3xl w-full text-center">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-indigo-800 leading-tight mb-6 drop-shadow">
                        Podpisuj, szyfruj,
                        <br className="hidden md:inline" />{' '}
                        <span className="text-indigo-500">zabezpieczaj dokumenty</span> online 🔒
                    </h1>
                    <p className="text-lg md:text-2xl text-indigo-900/80 mb-10">
                        Bezpieczna platforma do podpisu cyfrowego i kontroli autentyczności plików -
                        z wykorzystaniem zaawansowanej kryptografii.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            className="px-8 py-3 text-lg font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition active:scale-95 cursor-pointer"
                            onClick={() => navigate({ to: '/register' })}
                        >
                            Załóż konto
                        </button>
                        <button
                            className="px-8 py-3 text-lg font-semibold rounded-xl bg-white border-2 border-indigo-600 hover:bg-indigo-50 text-indigo-700 shadow transition active:scale-95 cursor-pointer"
                            onClick={() => navigate({ to: '/login' })}
                        >
                            Mam już konto
                        </button>
                    </div>
                </div>

                <div className="mx-auto mt-2 max-w-4xl grid gap-8 sm:grid-cols-3 text-indigo-500">
                    {features.map((f) => (
                        <div
                            key={f.name}
                            className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl flex flex-col items-center border border-indigo-100 transition hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="mb-3">{f.icon}</span>
                            <span className="font-bold text-indigo-900 text-lg mb-1">{f.name}</span>
                            <span className="text-indigo-700/80 text-sm text-center">{f.desc}</span>
                        </div>
                    ))}
                </div>
            </main>
        </PublicPageTemplate>
    )
}

export default LandingPage
