import React, {FC} from "react";

export enum CardVariant {
    outlined= 'outlined',
    primary='primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant
    children?: JSX.Element
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         children,
    }) => {
    return (
        <div style={{width,height, border: '1px solid #333'}}>
            {children}
        </div>
    )
}

export default Card;