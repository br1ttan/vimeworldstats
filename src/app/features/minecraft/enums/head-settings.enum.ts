import { HeadTransformOptionsEnum } from "./head-transform-options.enum";

type generalWidthAndHeightOptions = 48 | 120; 

export interface  IHeadSettings {
    width: generalWidthAndHeightOptions,
    height: generalWidthAndHeightOptions,
    transform: HeadTransformOptionsEnum,
}
