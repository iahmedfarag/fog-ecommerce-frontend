export interface imageType {
    secure_url: string,
    public_id: string,
}
export interface mainCategoryType {
    _id: string,
    name: string,
    slug: string,
    icon: imageType
}

export interface categoryType {
    _id: string,
    name: string,
    slug: string,
    mainCategory: mainCategoryType
}

export interface subCategoryType {
    _id: string,
    name: string,
    slug: string,
    image: imageType,
    featured?: boolean,
    productsCount: number,
    mainCategory: mainCategoryType,
    category: categoryType
}

export interface productType {
    _id: string,
    name: string,
    slug: string,
    description: string,
    brand: string,
    colors: string[],
    model: string,
    releaseYear: string,
    serial: string,
    price: number,
    priceAfterDiscount: number,
    mainImage: imageType,
    images: imageType[],
    stock: number,
    soldItems: number,
    averageRating?: number,
    bestOffer?: boolean,
    freeShipping?: boolean,
    trendy?: boolean,
    new?: boolean,
    mainCategory: mainCategoryType,
    category: categoryType,
    subCategory: subCategoryType
}
