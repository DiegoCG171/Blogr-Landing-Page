export interface ItemNavbar {
    name: string;
    link: string[];
}

export const dataNavbar: ItemNavbar[] = [
    {
        name: 'Product',
        link: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
    },
    {
        name: 'Company',
        link: ['About','Team', 'Blog', 'Careers']
    },
    {
        name: 'Connect',
        link: ['Contact', 'Newsletter', 'LinkedIn']
    }
]