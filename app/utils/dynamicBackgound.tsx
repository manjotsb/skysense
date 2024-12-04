import React from "react";

const getBackground =(condition: string) => {
    switch(true){
        case /sunny/i.test(condition):
            return 'bg-sunnyImg';
        case /cloud/i.test(condition):
            return 'bg-cloudImg';
        case /rain/i.test(condition):
            return 'bg-rainImg';
        case /snow/i.test(condition):
            return 'bg-snowImg';
        case /thunder/i.test(condition):
            return 'bg-thunderStormImg';
        case /partial/i.test(condition):
            return 'bg-partiallyCloudyImg';
        default:
            return 'bg-gradient from-blue-400 to-blue-200';
    }
};

export default getBackground;