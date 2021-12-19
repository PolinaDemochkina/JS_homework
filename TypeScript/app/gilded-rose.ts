export class GildedRose {
    items: Array<Product>

    constructor(items = [] as Array<Product>) {
        this.items = items
    }

    public static getProductType (name: string) {
        let loweredName = name.toLowerCase();
    
        if (loweredName.includes('aged brie')) {
            return ProductTypes.AgedBrie;
        } else if (loweredName.includes('sulfuras')) {
            return ProductTypes.Sulfuras;
        } else if (loweredName.includes('backstage pass')) {
            return ProductTypes.BackstagePass;
        } else if (loweredName.includes('conjured')) {
            return ProductTypes.Conjured;
        } else {
            return ProductTypes.Normal;
        }
    }
    
    public static instantiateItem = (name: string, quality: number, sellIn: number): Product => {
        let type = this.getProductType(name);
    
        switch (type) {
    
            case ProductTypes.AgedBrie:
                return new AgedBrie(name, quality, sellIn);
            case ProductTypes.Sulfuras:
                return new Sulfuras(name, quality, sellIn);
            case ProductTypes.BackstagePass:
                return new BackstagePass(name, quality, sellIn);
            case ProductTypes.Conjured:
                return new Conjured(name, quality, sellIn);
            default:
                return new Normal(name, quality, sellIn);
        }
    }

    updateQuality() {
        this.items.forEach((item) => item.tickForward())
    }
}

export enum ProductTypes {

    Normal= 'Normal',
    AgedBrie= 'AgedBrie',
    Sulfuras= 'Sulfuras',
    BackstagePass= 'BackstagePass',
    Conjured = 'Conjured'

}

export class Item {
    name: string;
    quality: number;
    sellIn: number;
	
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
	
    static createItem(name: string, quality: number, sellIn: number) {
        return GildedRose.instantiateItem(name, quality, sellIn);
    }
}

export class Product extends Item {
	tickForward(): void {
		this.sellIn = this.tomorrowSellIn();
		this.quality = Math.max(this.tomorrowQuality(), 0);
		if (GildedRose.getProductType(this.name) != ProductTypes.Sulfuras)
			this.quality = Math.min(this.quality, 50);
	}

	tomorrowSellIn(): number {
		if (this.sellIn > 0)
			return this.sellIn - 1;
		return 0;
	}
	
	tomorrowQuality(): number {
		return 0;
	}
}

export class Normal extends Product{
	tomorrowQuality(): number {
        let outPut: number = this.quality - 1;
        if (this.sellIn == 0) {
            outPut--;
        }

        return outPut;
    }
}

export class AgedBrie extends Product {
    tomorrowQuality(): number {
        return this.quality + 1;
    }
}

export class Sulfuras extends Product {
    tomorrowQuality(): number {
        return 80;
    }

    tomorrowSellIn(): number {
        return this.sellIn;
    }
}

export class BackstagePass extends Product {
    tomorrowQuality(): number {
        if (this.sellIn == 0)
            return 0;

        let output: number = this.quality + 1;

        if (this.sellIn <= 10) {
            output++;
        }

        if (this.sellIn <= 5) {
            output++;
        }

        return output;

    }
}

export class Conjured extends Product {	
    tomorrowQuality(): number {
        let outPut: number = this.quality - 2;

        if (this.sellIn <= 0) {
            outPut-= 2;
        }

        return outPut;

    }
}