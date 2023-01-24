import { createElement } from "react";

const all_subjects = [
    {
        id:1,
        product_name:"Pottery",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard and durable form. Major types include earthenware, stoneware and porcelain.",
        price:60,
        currency:" TD",
        thumb:createElement("C:/CollabArt/front/public/images_courses/1.jpg"),
    },
    {
        id:2,
        product_name:"Design",
        description: "A design is a plan to make something. Learn how to make your work look the best way you can !",
        price:50,
        currency:" TD",
        thumb : createElement("C:/CollabArt/front/public/images_courses/2.jpg")
    },  
    {
        id:3,
        product_name:"Weaving",
        description: "Fund Raising is the act of collecting or producing money for a particular purpose, especially for a charity.",
        price:50,
        currency:" TD",
        thumb:"C:/CollabArt/front/public/images_courses/2.jpg"
    },   
    {
        id:4,
        product_name:"Marketing",
        description: "Marketing is the activity or business of promoting and selling products or services, including market research and advertising.",
        price:40,
        currency:" TD",
        thumb:"C:/CollabArt/front/public/images_courses/2.jpg"
    },
]
export default all_subjects;