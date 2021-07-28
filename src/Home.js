import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_image" src="https://beyondthekop.com/wp-content/uploads/2020/08/prime.jpg"
            alt=""
            />    
            </div> 

            <div className="home_row">
                <Product 
                id="1"
                title="Asus ROG Phone 5 SD888 5G 256GB 16GB RAM International Version - Phantom Black" 
                price={49999} image="https://images-na.ssl-images-amazon.com/images/I/312-4NvzgeL.jpg" 
                rating={5}
                />

                <Product 
                id="2"
                title="Friends Ceramic Coffee Mug with Keychain and Key Ring Set" 
                price={375} image="https://m.media-amazon.com/images/I/71cO5sRp9fL._AC_UL480_FMwebp_QL65_.jpg" 
                rating={4}
                />
                
            </div>

            <div className="home_row">
                <Product 
                id="3"
                title="PABULUM Compatible with AirPods Pro 2019 Case Protective Cover" 
                price={499} image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRohn6wX0ook7u5SlGi9EbVV3n2MM_AUBkROLJpk5OSN7pud-Iau5kpnymhilj5w1LZ4-HtMjiVMbgo4pUo46QmESiwWRcIjK3AGhHRiPM&usqp=CAc" 
                rating={4}
                />

                <Product 
                id="4"
                title="Limited edition Official Harry Potter Marauder’s Map" 
                price={799} image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQoysSKoJVnepOr9m1E9QOiEoSlZnvG70-OnznP7nzGfZZB4xt9EtqBcL5I2wy6aRY6FQGF3Y41z2RO7vIr7YHPIvA0PQW__6H66Aal-J99mri8AAlMPa4X0g&usqp=CAc" 
                rating={5}
                />

                <Product 
                id="5"
                title="Iron man Bobblehead with Stand and Mobile Holder" 
                price={1125} image="https://m.media-amazon.com/images/I/61zM1TixQLL._AC_UL480_FMwebp_QL65_.jpg" 
                rating={3}
                />
            </div>

            <div className="home_row">
                <Product 
                id="6"
                title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)" 
                price={15999} image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg" 
                rating={4}
                />
            </div>
            
        </div>
    )
}

export default Home;
