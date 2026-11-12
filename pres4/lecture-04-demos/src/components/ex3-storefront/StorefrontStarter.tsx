// src/components/ex3-storefront/StorefrontStarter.tsx
import { useState, useEffect } from 'react';
import type { Product } from './product';
import ProductCardStarter from './ProductCardStarter';
import './Storefront.css';

// Categories matching https://dummyjson.com/products
const CATEGORIES = ["All", "beauty", "fragrances", "furniture", "groceries"];

const StorefrontStarter = () => {
    // TODO 4: Define the "Golden Triangle" of network states:
    // - products: Product[] (initial: [])
    // - isLoading: boolean (initial: true)
    // - error: string | null (initial: null)

    // TODO 5: Define state for 'selectedCategory' (initial: "All")

    // TODO 6: Use useEffect to fetch products on Mount ([]) from:
    // 'https://dummyjson.com/products'
    // Note: The API returns an object { products: [...] }, so pass data.products to setProducts!
    useEffect(() => {
        // Write async fetchProducts function with try / catch / finally
    }, []);

    // TODO 7: Implement immutable deletion handler using .filter()
    const handleRemoveProduct = (idToRemove: number) => {
        console.log("Remove product ID:", idToRemove);
    };

    // TODO 8: Calculate Derived State 'filteredProducts' based on 'selectedCategory'
    const filteredProducts: Product[] = [];

    return (
        <section className="store-container">
            <header className="store-header">
                <h2>Afeka Virtual Storefront</h2>
                <p className="store-subtitle">
                    Showing <strong>{filteredProducts.length}</strong> items
                </p>

                <nav className="filter-bar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className="filter-btn"
                            // TODO 9: Add 'active' class if selected, and update selectedCategory onClick
                        >
                            {cat}
                        </button>
                    ))}
                </nav>
            </header>

            {/* TODO 10: Render Loading Spinner when isLoading is true */}
            {/* TODO 11: Render Error message when error is not null */}

            {/* TODO 12: Map over filteredProducts and render ProductCardStarter */}
            <div className="products-grid">

            </div>
        </section>
    );
};

export default StorefrontStarter;