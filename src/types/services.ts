export interface ServiceItem {
    id: string;
    name: string;
    price: string;
    highlighted?: boolean;
}

export interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    images: string[];
    services: ServiceItem[];
}

export interface PremiumPackage {
    id: string;
    name: string;
    oldPrice?: string;
    price: string;
    features: string[];
}
