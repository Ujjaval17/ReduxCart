import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id : 'p1',
    price : 6,
    title : 'pen',
    desc : 'A new pen'
  },
  {
    id : 'p2',
    price : 8,
    title : 'box',
    desc : 'a new box'
  }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(item => (<ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.desc}
          />
          ))
        
        }
      </ul>
    </section>
  );
};

export default Products;
