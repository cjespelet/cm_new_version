export interface TableColumn {
    label: string;
    def: string;
    dataKey: string;
    format?:string;
    dataType?:string;
}


export interface ButtonConfiguration {
    type : string;
    color: string;
    action: string;
    text: string;
    goTo?:string;
    typeButton?:string;
    disabled?:boolean | false; 
    class?:string;
}