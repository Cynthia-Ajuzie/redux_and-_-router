const initState = {
    posts: [
        {id: '1', title:'xxyubcuivg', body: 'tygyugeuivciosdhiovjposdjvposdjpvojpovjiosdjiojiohvuishvuisui'},
        {id: '2', title:'yyvyubcuivg', body: 'tygyugeuivciosdhiovjposdjvposdjpvojpovjiosdjiojiohvuishvuisui'},
        {id: '3', title:'zzvyubcuivg', body: 'tygyugeuivciosdhiovjposdjvposdjpvojpovjiosdjiojiohvuishvuisui'},

    
    ]
}

const rootReducer =(state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;