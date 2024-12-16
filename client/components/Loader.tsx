'use client'

interface Props {
    size: string
}

export const Loader = ({ size }: Props) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${size}`}
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
                >
                    <animateTransform
                        attributeName="transform"
                        dur="0.6s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12">

                    </animateTransform>
                </path>
            </svg>
        </>
    )
}

export const LoaderSec = ({ size }: Props) => {
    return (
        <>
            <svg className={`${size} flex items-center justify-center`}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx={4} cy={12} r={3} fill="currentColor">
                    <animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate>
                </circle>
                <circle cx={12} cy={12} r={3} fill="currentColor" opacity={0.4}>
                    <animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate>
                </circle>
                <circle cx={20} cy={12} r={3} fill="currentColor" opacity={0.3}>
                    <animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate>
                </circle>
            </svg>
        </>
    )
}
