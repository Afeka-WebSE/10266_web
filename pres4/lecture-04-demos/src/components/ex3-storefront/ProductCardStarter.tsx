// src/components/ex3-storefront/ProductCardStarter.tsx
import type { Product } from './product';

// TODO 1: Complete the Props interface
interface ProductCardProps {
    product: Product;
    // Add 'onRemove' callback prop: takes (id: number) and returns void
}

// TODO 2: Destructure 'product' and 'onRemove' from props
const ProductCardStarter = ({ product }: ProductCardProps) => {
    const { id, title, price, category, thumbnail } = product;

    return (
        <article className="product-card">
            <span className="category-badge">{category}</span>

            <figure className="product-img-wrapper">
                <img src={thumbnail} alt={title} className="product-img" />
            </figure>

            <h3 className="product-title" title={title}>{title}</h3>

            <footer className="product-footer">
                <span className="product-price">${price.toFixed(2)}</span>

                {/* TODO 3: Trigger onRemove(id) using an anonymous arrow function on click */}
                <button className="btn-hide">
                    Hide Item
                </button>
            </footer>
        </article>
    );
};

export default ProductCardStarter;