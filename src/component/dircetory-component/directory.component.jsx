import CategoryItem from '../categories-item/categories-item.component';
import './directory.style.scss';

const Directory = ({Categories}) => {
return (
    <div className='directory-container'>
    { Categories.map((category) => (
     <CategoryItem key={category.id} category={category}/>
    ))}

    </div>
      
)
}

export default Directory;