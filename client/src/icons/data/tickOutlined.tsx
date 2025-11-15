import type { FC } from 'react'
import type { IconProps } from '../types'

export const TickOutlined: FC<IconProps> = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="Free-Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <g
                    transform="translate(-1265.000000, -526.000000)"
                    id="Group"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <g transform="translate(1263.000000, 524.000000)" id="Shape">
                        <path d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z" />
                        <polyline points="7.71428571 11.6223394 11.2436971 15 16.2857143 9" />
                    </g>
                </g>
            </g>
        </svg>
    )
}
