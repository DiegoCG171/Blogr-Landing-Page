import React, { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement>{}

export const ArrowDarkIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 12 9'  width={12} height={9} {...props}>
            <path fill="none" stroke="#FF7B86" strokeWidth={2} d="M1 1l4 4 4-4" />
        </svg>
    )
}
