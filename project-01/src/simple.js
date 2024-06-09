import { useState } from "react";

const React = {
    useState: (str1) => {
        let isString = str1;
        return [isString, (str) => {
            isString = str
        }]
    },
       
}

const useState = ["hadi", () => {}]
const [name , func1] = useState


