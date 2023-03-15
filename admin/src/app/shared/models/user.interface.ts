export type Roles = 'SUSCRIPTOR' | 'ÁDMIN'

export interface User {
    username: string | null | undefined;
    password: string | null | undefined;
    id?:number,
    includeCombos?:boolean
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    role: Roles;

    firstName : string;
    lastName: string;
    email: string;
    username : string;
    category:number;
}

export interface userItem {
    message: string;
    token: string;
    userId: number;
    role: Roles;

    firstName : string;
    lastName: string;
    email: string;
    username : string;
    category:number;
}

export interface UserList {
    error: string;
    list: UserListComponent[]
}

export interface UserListComponent {
    id : number,
    admin_category:string,
    id_admin_category: number,
    first_name : string,
    last_name : string,
    email : string,
    agency_name: string,
    enabled : number,
    shop_name : string
}

export interface Food {
    value: string;
    viewValue: string;
  }


  export interface UserInfo {
    error: string;
    agencies: Agency[],
    categories: Category[],
    kiosks: kiosk[],
    shops: Shop[],
    userInfo: UserInfoPass
}

export interface Agency {
    address:string,
    can_change_price: boolean,
    can_sell_free_tickets : boolean,
    conf_external : {},
    deletion_date:string,
    email_addresses: string,
    id:number,
    is_external:boolean,
    logo:string,
    phone_numbers:string,
    title:string
}

export interface Category{
    descrption:string,
    enabled:number,
    id:number,
    title:string
}

export interface kiosk{
    id:number,
    is_opened : boolean,
    datetime_deleted:string,
    name:string
}

export interface Shop{
    address:string,
    address_city:string,
    address_number:string,
    address_zipcode:string,
    can_be_redeem:boolean,
    can_be_shipped:boolean,
    categories:string,
    contact_email:string,
    count:string,
    deletion_date:string,
    detail:string,
    domain:string,
    domain_shop:string,
    enabled:boolean,
    id:number,
    id_logo:number,
    is_external:boolean,
    is_external_shop:boolean,
    list_order:number,
    name:string,
    order_email:string,
    phone:string,
    published:boolean,
    settings:[],
    shop_logo:string,
    show_menu_players:boolean,
    url_external_shop:string,
    vat_percentaje:string,
    view_in_select : boolean
}

export interface UserInfoPass {
    password:string
}