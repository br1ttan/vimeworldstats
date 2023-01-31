import { ThemeEnum } from "../enums/theme.enum";

export interface ITheme {
    readonly id: ThemeEnum,
    readonly name: string,
    readonly className: string,
    readonly palette: {
        'background-color': string,
        'header-color': string,
        'text-color': string,
        'card-background-color': string,
        'card-header-color': string,

    }
}
