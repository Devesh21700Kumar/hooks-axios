import React from 'react';


function Cake() {
  return (
    <div >
<h2>Its my cake</h2>
<button>Buy Cake</button>
    </div>
  );
}

const mapStateToProps =state=>{
    return{
     numOfCakes: state.numOfCakes   
    }
}

const mapDispatchToPrpps =dispatch=>{
    return{
     buyCake:()=> dispatch(buyCake())   
    }
}

export default Cake;
