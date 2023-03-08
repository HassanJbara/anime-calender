import { season } from "./modules";

export function getSeasonName(s: season){
    switch (s){
        case 'FALL':
            return 'الخريف'
        
        case 'SPRING':
            return 'الربيع'

        case "SUMMER":
            return 'الصيف'
        
        case "WINTER": 
            return 'الشتاء'
    }
}