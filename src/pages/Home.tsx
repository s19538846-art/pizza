import { useState, useEffect } from 'react';
import Categories from '../components/Categories.tsx';
import Sort from '../components/Sort.tsx';
import PizzaBlock from '../components/PizzaBlock/index.tsx';
import { Skeleton } from '../components/PizzaBlock/Sceleton.tsx';
import Pagination from '../components/Pagination/index.tsx';


const Home = ({ searchValue, currentPage }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  });
  const search = searchValue ? `&search=${searchValue}` : '';
  const [currentPage,setCurrentPage] = useState(0)

  useEffect(() => {
    setIsLoading(false);
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://6abd88af5121d616d90cefab.mockapi.io/items?page=1&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  // console.log(currentPage,);
  const pizzas = items
    .filter((obj) => {
      if (obj.title.includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  console.log(categoryId, sortType);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(i) => console.log(i)} currentPage={1} />
      </div>
    </>
  );
};

export default Home;
