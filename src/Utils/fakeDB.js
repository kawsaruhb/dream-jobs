const addToDb = jobId => {

    let shoppingCart = {};

    const storedCart = localStorage.getItem('jobId');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    const quantity = shoppingCart[jobId];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[jobId] = newQuantity;
    }
    else{
        shoppingCart[jobId] = 1;
    }

    localStorage.setItem('jobId', JSON.stringify(shoppingCart))

}

const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('jobId');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

export {addToDb, getStoredCart}