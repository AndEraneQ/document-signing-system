import type { FC, PropsWithChildren } from 'react'
import { Background } from '../../utils/Background'
import Icons from '../../../icons'
import { useNavigate } from '@tanstack/react-router'

const Header: FC = () => {
    const navigate = useNavigate()
    return (
        <header className="relative z-10 flex items-center justify-between px-8 py-6">
            <button className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate({ to: '/' })}>
                <div className="text-white/60 bg-indigo-600 p-2 rounded-lg shadow-md">
                    <Icons.Logo size={24} />
                </div>
                <span className="font-bold text-xl text-indigo-700 tracking-wide drop-shadow-[0_1px_1px_rgba(60,80,200,0.06)]">
                    DocuCrypt
                </span>
            </button>
            <nav className="space-x-4 text-indigo-700 font-medium hidden md:block">
                <button onClick={() => navigate({ to: '/login' })} className="hover:underline cursor-pointer">
                    Logowanie
                </button>
                <button onClick={() => navigate({ to: '/register' })} className="hover:underline cursor-pointer">
                    Rejestracja
                </button>
            </nav>
        </header>
    )
}

const Footer: FC = () => {
    return (
        <footer className="relative z-10 px-8 py-5 text-center text-indigo-900/70 text-sm">
            © 2025 DocuCrypt. Wszelkie prawa zastrzeżone.
        </footer>
    )
}

export const PublicPageTemplate: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Background>
            <Header />
                {children}
            <Footer />
        </Background>
    )
}
