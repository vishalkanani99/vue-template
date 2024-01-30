export const menu = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Shop',
        route: '/shop',
    },
    {
        label: 'Pages',
        submenu: [
            {
                label: 'Product Detail',
                route: '/shop/single',
            },
            {
                label: 'Cart',
                route: '/cart',
            },
            {
                label: 'Checkout',
                route: '/checkout',
            },
            {
                label: 'Wishlist',
                route: '/wishlist',
            },
            {
                label: 'Orders',
                route: '/orders',
            },
            {
                label: 'Address List',
                route: '/address',
            },
            {
                label: 'Login',
                route: '/login',
            },
            {
                label: '404',
                route: '/404',
            },
        ]
    }
]