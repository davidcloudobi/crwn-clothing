import React, {useState} from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

 const ShopPage = () => {
    const [state, setstate] = useState({
      collections: SHOP_DATA
    })
    console.log(state)
    const {collections} = state
    return (
        <div>
            {collections.map(({id, ...rest}) => 
            <CollectionPreview key ={id} {...rest}/>)}
        </div>
    )
}
export default  ShopPage