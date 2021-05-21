import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement>{}

export const HamburgerIcon = (props: Props) => {
    return (
        <svg width={32} height={18} viewBox='0 0 32 18' xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0 0h32v2H0zm0 8h32v2H0zm0 8h32v2H0z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </svg>
    )
}
