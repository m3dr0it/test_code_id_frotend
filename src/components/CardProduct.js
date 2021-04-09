const CardProduct = (props) => {
    const onClickBuy = (e) => {
        console.log(props.product)
        console.log(e.target.value)
        props.setProdToBuy(props.product)
        props.setProdToBuy.qtyToBuy = 1
    }

    return(
      <div class="max-w-xs mx-5 rounded overflow-hidden shadow-lg my-2">
          <img src="https://picsum.photos/200/300" alt="Product"/>
          <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{props.product.product_name}</div>
              <p class="text-grey-darker text-base">
              Price : Rp. {props.product.price}
              </p>
              <p class="text-grey-darker text-base">
              Stok : {props.product.stock}
              </p>
          </div>
          <div className="px-6 py-4">
              {
                  props.product.stock <= 0 ? null :
                  <button value={props.product.id_product} onClick={onClickBuy} class="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600">BUY</button>
              }
          </div>
      </div>
    )
  }
  
  export {CardProduct}