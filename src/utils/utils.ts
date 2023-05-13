export function notDiscount (price: number, count: number): number {
    const value: number = count * price;
    return Number(value.toFixed(2));
};

export function discount  (price: number, discount: number, count: number): number {
    const formatPrice: number = count * (price * (1 - discount));
    return Number(formatPrice.toFixed(2));
};

export function stockCount  (stock: number, count: number): number {
    return stock - count;
};