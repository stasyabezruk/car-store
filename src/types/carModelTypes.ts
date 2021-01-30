export interface ICarTrim {
    name: string;
    price: number;
    colors: IColor[]
}

export interface IColor {
    name: string;
    iconUrl: string;
    imageUrl: string
    price: number;
}

export interface ICarModel {
    code: string;
    name: string;
    trims: ICarTrim[];
}