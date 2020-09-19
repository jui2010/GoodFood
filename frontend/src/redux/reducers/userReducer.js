import {SET_PREF, SET_AUTHENTICATED } from '../types'

const initialState = {
    authenticatedUser : {
        _id:"5f2ebeb9ebd9270fe69fd85e",
        firstName:"Jui",
        lastName:"Thombre",
        profilePicture:"https://lh3.googleusercontent.com/a-/AOh14GgN7FFpwiW9NW9vvhqax-tyoBY6eVrCUI2BkU0oRr0",
        email:"jui20oct@gmail.com",
        username:"jui20oct",
    },
    authenticated : true,
    loading : false,
    preferences : {
        freshness : true,
        nonVegetarian : true,
        vegetarian : true,
        vegan : true,
        taste : true,
        organic : true,
        healthy : true,
        glutenFree : true,
        dairy : true
    } 
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_AUTHENTICATED :
            return {
                ...state,
                authenticated : true
            }

        case SET_PREF :
            return {
                ...state,
                preferences : action.payload
            }

        default : 
            return {
                ...state
            }
    }
}