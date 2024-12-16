import { Allerta_Stencil, Poppins } from 'next/font/google'

export const allertaStencil = Allerta_Stencil({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-allerta-stencil',
})

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})