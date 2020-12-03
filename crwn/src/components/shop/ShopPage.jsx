import React from 'react'
import ShopData from './ShopData'
import PreviewCollection from '../PreviewCollection/PreviewCollection'
//we will be using class component bcoz we need to store the collection data

class ShopPage extends React.Component{
constructor (props){
    super(props);
    this.state = {
        collections : ShopData
    }
}
render(){
    const {collections} = this.state;
    return(
    <div>
        {
            collections.map(({id,...otherCollectionProps} )=> (
                <PreviewCollection key= {id} {...otherCollectionProps}/>
            ))
        }
    </div>
    )
}
}
export default ShopPage