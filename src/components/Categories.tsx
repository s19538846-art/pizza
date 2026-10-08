
function Categories({value, onChangeCategory}) {
  // console.log(value);
 
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",

  ]
  // console.log(activeIndex);
  // console.log(value);
  // console.log(categoryId, sortType);
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategory(i)} className={value == i ? 'active' : ''}>{categoryName}</li>
        ))}
        
      </ul>
    </div>
  );
}
export default Categories;
