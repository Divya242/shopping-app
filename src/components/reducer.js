export const reducer = (state,action) => {
   if(action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((currid)=>{
        return currid.id !== action.payload;
      }),
    };
      }

      if(action.type === "CLEAR_CART"){
        return {
          ...state,
          items:[]
        }
      }
      if(action.type === "ADD_QUANTITY") {
        let updatequantity = state.items.map((curEle) => {
          if(curEle.id === action.payload) {
            return {...curEle, quantity: curEle.quantity + 1 }
          }
          return curEle;
        })
        return { ...state, items:updatequantity}
      }

      if(action.type === "MINUS_QUANTITY"){
       const updatedValue = state.items.map((ele)=>{
        if(ele.id === action.payload){
          return {...ele, quantity:ele.quantity - 1}

        }
        return ele;
       }).filter((currEle)=>currEle.quantity !== 0);
       return {
         ...state,
         items:updatedValue
       }
          }

          if(action.type==="GET_ToTAL") {
           let {totalItems,totalprice} = state.items.reduce((accum,curVal)=>{
            let {quantity,price} = curVal;
              let totalAmount = quantity * price;
              accum.totalprice += totalAmount;

              accum.totalItems += quantity;
              return accum;
           },{
            totalItems:0,
            totalprice:0
           });
           return {
             ...state, totalItems,totalprice
           };
          }


      return state;
    }
