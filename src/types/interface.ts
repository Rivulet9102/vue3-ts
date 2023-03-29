export interface menuList {
    name: string,
    auth: Array<number>,
    icon: string,
    pageUrl?: string,
    children?: Array<menuList>
}