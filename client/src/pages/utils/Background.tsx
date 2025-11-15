import type { FC, PropsWithChildren } from 'react'

export const Background: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -left-40 w-[36rem] h-[36rem] bg-indigo-400 opacity-40 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-40 w-[48rem] h-[48rem] bg-indigo-200 opacity-30 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-indigo-50 to-white opacity-90" />
            </div>
            {children}
        </div>
    )
}
