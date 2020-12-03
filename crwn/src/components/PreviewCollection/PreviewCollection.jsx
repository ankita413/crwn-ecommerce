import React from 'react'
import CollectionItems from '../CollectionItems/CollectionItem';
import './PreviewCollection.scss'

const PreviewCollection = ({title,items}) =>(
<div className= "preview-collection">
<h1 className = "title">{title.toUpperCase()}</h1>
<div className= 'preview'>
    {items.filter((item,idx) => idx <4).map(({id,...otherItemprops}) => (
        <CollectionItems key = {id} {...otherItemprops}/>
    ))}

</div>
</div>

)
export default PreviewCollection;