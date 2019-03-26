// //reducer used to get all messages
// const GOT_MESSAGES = 'GOT_MESSAGES';
// const GOT_NEW_MESSAGES = 'GOT_NEW_MESSAGE';

// export const gotMessages = message =>({type:GOT_MESSAGES,message})
// export const gotNewMessages = message =>({type:GOT_NEW_MESSAGES,message})

// const reducer = (state = [], action) =>{
//     switch(action.type){
//         case GOT_MESSAGES:
//           return action.messages ? action.messages :[];
//         case GOT_NEW_MESSAGES :
//           return [action.message, ...state];
//         default:
//           return state;

//     }
// }

// export default reducer;