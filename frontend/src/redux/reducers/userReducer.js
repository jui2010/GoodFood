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
    loading : false
}

export default function(state = initialState , action){
    switch(action.type){
        
        default : 
            return {
                ...state
            }
    }
}