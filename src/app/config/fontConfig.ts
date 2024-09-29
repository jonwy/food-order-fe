import localFont from 'next/font/local';

const mulishLight = localFont({
    src: '../fonts/mulish/Mulish-Light.ttf',
    weight: '400',
    style: 'normal',
    display: 'swap'
})

const mulishRegular = localFont({
    src: '../fonts/mulish/Mulish-Regular.ttf',
    weight: '400',
    style: 'normal',
    display: 'swap'
})

const mulishBold = localFont({
    src: '../fonts/mulish/Mulish-Bold.ttf',
    weight: '700',
    style: 'normal',
    display: 'swap'
})

export {mulishLight, mulishRegular, mulishBold};

