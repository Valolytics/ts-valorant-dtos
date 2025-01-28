export class ShopData {
    cost: number;
    category: string;
    shopOrderPriority: number;
    categoryText: string;
    gridPosition: GridPosition | null;
    canBeTrashed: boolean;
    image: string | null;
    newImage: string;
    newImage2: string | null;
    assetPath: string;

    constructor(data: any) {
        this.cost = data.cost;
        this.category = data.category;
        this.shopOrderPriority = data.shopOrderPriority;
        this.categoryText = data.categoryText;
        this.gridPosition = data.gridPosition ? new GridPosition(data.gridPosition) : null;
        this.canBeTrashed = data.canBeTrashed;
        this.image = data.image;
        this.newImage = data.newImage;
        this.newImage2 = data.newImage2;
        this.assetPath = data.assetPath;
    }
}

export class GridPosition {
    row: number;
    column: number;

    constructor(data: any) {
        this.row = data.row;
        this.column = data.column;
    }
}