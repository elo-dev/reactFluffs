let initialState = {
    friends:[
        {id: 1,
         name: 'Dima Frolov',
         photo: 'https://images.pexels.com/photos/5121986/pexels-photo-5121986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
         link: 'Dimasiys'
        },
        {id: 2,
            name: 'Alina',
            photo: 'https://images.pexels.com/photos/5121986/pexels-photo-5121986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            link: 'Alina'
        },
        {id: 3,
            name: 'Liza',
            photo: 'https://images.pexels.com/photos/5121986/pexels-photo-5121986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            link: 'Lizok'
        },
        {id: 4,
            name: 'Andrey',
            photo: 'https://images.pexels.com/photos/5121986/pexels-photo-5121986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            link: 'Juk1337'
        },
        {id: 5,
            name: 'Natasha',
            photo: 'https://images.pexels.com/photos/5121986/pexels-photo-5121986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            link: 'natasha'
        }
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state
}

export default sideBarReducer