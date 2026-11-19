// src/components/ex3-storefront/ProductCardSolution.tsx
import type { Product } from './product';

interface ProductCardProps {
    product: Product;
    onRemove: (id: number) => void;
}

const ProductCardSolution = ({ product, onRemove }: ProductCardProps) => {
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

                <button
                    className="btn-hide"
                    onClick={() => onRemove(id)}
                >
                    Hide Item
                </button>
            </footer>
        </article>
    );
};

export default ProductCardSolution;