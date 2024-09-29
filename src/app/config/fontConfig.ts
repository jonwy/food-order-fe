import localFont from 'next/font/local';

const mulishLight = localFont({
    src: '../fonts/mulish/Mulish-Light.tff',
    weight: '400',
    style: 'normal',
    display: 'swap'
})

const mulishRegular = localFont({
    src: '../fonts/mulish/Mulish-Regular.tff',
    weight: '400',
    style: 'normal',
    display: 'swap'
})

const mulishBold = localFont({
    src: '../fonts/mulish/Mulish-Bold.tff',
    weight: '700',
    style: 'normal',
    display: 'swap'
})

export {mulishLight, mulishRegular, mulishBold};

