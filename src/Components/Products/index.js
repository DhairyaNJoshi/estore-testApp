import './_products.scss';

const Products = ()=>{
    const productData = [
        {
            pName: "Jacket",
            Price: 45,
            img: 'shop-1.jpg'
        },
        {
            pName: "Purse",
            Price: 50,
            img: 'shop-2.jpg'
        },
        {
            pName: "Dress",
            Price: 38,
            img: 'shop-3.jpg'
        },
        {
            pName: "Denim",
            Price: 42,
            img: 'shop-4.jpg'
        },
        {
            pName: "Boots",
            Price: 65,
            img: 'shop-5.jpg'
        },
        {
            pName: "Bag",
            Price: 35,
            img: 'shop-6.jpg'
        },
        {
            pName: "Jacket",
            Price: 45,
            img: 'shop-7.jpg'
        },
        {
            pName: "Jacket",
            Price: 45,
            img: 'shop-8.jpg'
        },
        {
            pName: "Jacket",
            Price: 45,
            img: 'shop-9.jpg'
        },
    ]

    return(
        <div className='main-product-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div className='mx-4 p-3   product-card'>
                            <div className='products-image-container'>
                                <img src={require('../../assets/images/shop/'+product.img)}/>
                            </div>
                            <div className='product-info'>
                                <h5> <a href='#'> {product.pName} </a> </h5>
                                <p className='product-price'> ${product.price} </p>
                                <div className='products-rating'> 
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;