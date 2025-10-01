export type Produto = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    description?: string;
};

export type getMaisVendidos = Produto;

export type MVVItem = {
    id: number;
    title: string;
    text: string;
};