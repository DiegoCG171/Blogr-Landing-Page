export interface InfoData {
    title?: string;
    imgMobile: string;
    imgDesktop: string;
    imgDirection: 'left' | 'rigth';
    alt: string;
    articles: Article[];
}

interface Article {
    title: string;
    desc: string;
}

export const dataSection: InfoData[] = [
    {
        title: 'Designed for the future',
        imgDesktop: 'https://res.cloudinary.com/dmfhnhyyj/image/upload/v1621573510/blogr/illustration-editor-desktop_wf14hc.svg',
        imgMobile: 'https://res.cloudinary.com/dmfhnhyyj/image/upload/v1621573510/blogr/illustration-editor-mobile_igmaoq.svg',
        imgDirection: 'rigth',
        alt: 'Editor mobile',
        articles: [
            {
                title: 'Introducing an extensible editor',
                desc: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
            },
            {
                title: 'Robust content management',
                desc: 'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
            }
        ],
    },
    {
        imgDesktop: 'https://res.cloudinary.com/dmfhnhyyj/image/upload/v1621573510/blogr/illustration-laptop-desktop_koubrc.svg',
        imgMobile: 'https://res.cloudinary.com/dmfhnhyyj/image/upload/v1621573510/blogr/illustration-laptop-mobile_cxdrba.svg',
        imgDirection: 'left',
        alt: 'Laptop ilustration',
        articles: [
            {
                title: 'Free, open, simple',
                desc: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
            },
            {
                title: 'Powerful tooling',
                desc: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
            }
        ]
    }
]