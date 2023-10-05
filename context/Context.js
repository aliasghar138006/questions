import { createContext } from "react";
import Layout from "../components/layout/Layout";


export const DataContext = createContext()
function Context({children}) {
    const questionsData = [
        {
            id:1,
            question : 'اسمت چیه؟',
            answers : [
                {id:1 , answer: 'علی' , correct : true},
                {id:2 , answer: 'جواد' , correct : false},
                {id:3 , answer: 'اسماعیل' , correct : false},
                {id:4 , answer: 'میثم' , correct : false},
            ]
        },
        {
            id:2,
            question : ' چند سالته؟',
            answers : [
                {id:1 , answer: '12' , correct : false},
                {id:2 , answer: '15' , correct : false},
                {id:3 , answer: '42' , correct : false},
                {id:4 , answer: '22' , correct : true},
            ]
        },
        {
            id:3,
            question : ' کلاس چندمی؟',
            answers : [
                {id:1 , answer: 'دانشگاه' , correct : true},
                {id:2 , answer: 'دوم' , correct : false},
                {id:3 , answer: 'دوازدهم' , correct : false},
                {id:4 , answer: 'هیچکدام' , correct : false},
            ]
        }
    ]
    return (
        <DataContext.Provider value={{questionsData}}>
            {children}
        </DataContext.Provider>
    );
}

export default Context;