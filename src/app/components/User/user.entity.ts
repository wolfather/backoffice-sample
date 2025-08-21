export interface UserEntity {
    id : number
    avatar: string
    email: string
    first_name: string
    last_name: string
}

export interface APIResponse<T> {
    page: number 
    per_page: number
    support: {
        url: string
        text: string
    }
    total: number
    total_pages: number
    data: T
}
