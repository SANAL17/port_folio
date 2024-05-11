import weather from './Assets/Weather no background.png'
import contact from './Assets/contact hd.png'
import doctor from './Assets/Doctorhd.png'
import food from './Assets/Food.png'
import calculator from './Assets/Calculatorhd.png'
import furni from './Assets/furniture.png'

const data = {
    cardData : [
        {
            id:1,
            img:weather,
            title : 'Weather APP',
            live:'https://wheather-app-93.netlify.app/',
            github:'https://github.com/SANAL17/wheather_app',
            used:'Weather apps are incredibly useful tools that provide up-to-date information about the weather in your area.'
        

        },
        {
            id:2,
            img:contact,
            title : 'Contact APP',
            live:'',
            github:'https://github.com/SANAL17/contacts-app-frontend.git',
            used:'Contact apps are essential for managing your contacts efficiently'
        },
        {
            id:3,
            img:doctor,
            title : 'Doctor APP',
            live:'https://doctors-app-93.netlify.app/',
            github:'https://github.com/SANAL17/doctors-app-frontend.git',
            used:'Doctors APP is a comprehensive healthcare app that offers a range of services for patients and doctors'
        },
        {
            id:4,
            img:food,
            title : 'Food Court',
            live:'https://resturant-app-93.netlify.app/',
            github:'https://github.com/SANAL17/resturant-app.git',
            used:' A food court is a bustling hub where diverse culinary stalls serve up a variety of dishes under one roof'
        },
        {
            id:5,
            img:calculator,
            title : 'Budget Calculator'
            ,
            live:'https://sanal17.github.io/calculator/',
            github:'https://github.com/SANAL17/calculator.git',
            used:'A budget calculator is a valuable tool for managing your finances effectively'
        },
        {
            id:6,
            img:furni,
            title : 'My Furniture'  ,
            live:'',
            github:'',
            used:'Furniture apps serve various purposes and enhance the overall experience of buying, exploring, and visualizing furniture'
        }

    ]

}
export default data;