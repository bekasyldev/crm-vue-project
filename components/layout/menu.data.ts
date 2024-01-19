export interface MenutItemProps {
    name: string
    url: string 
    // doent't support icon type
    icon: string
}

export const MenuData: MenutItemProps[] = [
    {
    icon: 'radix-icons:dashboard',
    name: 'Home',
    url: '/'
    },
    {
    icon: 'ep:goods',
    name: 'Products',
    url: '/products'
    },
    {
    icon: 'ph:contactless-payment',
    name: 'Payments',
    url: '/payments'
    },
    {
    icon: 'mingcute:group-line',
    name: 'Customers',
    url: '/customers'
    },
    {
    icon: 'fluent:person-feedback-48-regular',
    name: 'Feedback',
    url: '/feedback'
    },
    {
    icon: 'radix-icons:gear',
    name: 'Settings',
    url: '/settings'
    },
    {
    icon: 'radix-icons:question-mark',
    name: 'Help',
    url: '/help'
    },
]