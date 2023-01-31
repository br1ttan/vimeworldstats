import { ThemeEnum } from "../enums/theme.enum";
import { ITheme } from "../interfaces";

export const THEME_ARRAY: ITheme[] = [
    {
        id: ThemeEnum.Standart,
        name: 'Стандартна тема',
        className: 'standart-theme',
        palette: {
            'header-color': '#0092ee',
            'background-color': '#b2defa',
            'text-color': '#524c4c',
            'card-background-color': '#edf7fe',
            'card-header-color': '#282828',
        }
    },
    {
        id: ThemeEnum.Green,
        name: 'Зелена тема',
        className: 'green-theme',
        palette: {
            'header-color': '#4caf50',
            'background-color': '#eee',
            'text-color': '#524c4c',
            'card-background-color': '#fff',
            'card-header-color': '#def4df',
        }
    },
    {
        id: ThemeEnum.Orange,
        name: 'Помаранчева тема',
        className: 'orange-theme',
        palette: {
            'header-color': '#ff9528',
            'background-color': '#ffdfbe',
            'text-color': '#524c4c',
            'card-background-color': '#fff',
            'card-header-color': '#ffdfbe',
        }
    },
    {
        id: ThemeEnum.Dark,
        name: 'Темна тема',
        className: 'dark-theme',
        palette: {
            'header-color': '#1e1e1f',
            'background-color': '#1e1e1e',
            'text-color': '#fff',
            'card-background-color': '#282828',
            'card-header-color': '#282828',
        }
    },
    {
        id: ThemeEnum.Light,
        name: 'Світла тема',
        className: 'light-theme',
        palette: {
            'header-color': '#777',
            'background-color': '#eee',
            'text-color': '#000',
            'card-background-color': '#fff',
            'card-header-color': '#1e1e1f',
        }
    },
]
