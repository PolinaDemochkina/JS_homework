export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const MAX_QUALITY = 50

export class GildedRose {
    items: Array<Item>

    constructor(items = [] as Array<Item>) {
        this.items = items
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].sellIn > 0)
				this.items[i].sellIn--
			
			if (this.items[i].name.includes('Sulfuras')) {
				this.items[i].sellIn = 0
				this.items[i].quality = 80
			}
			
			else if (this.items[i].name.includes('Aged Brie') && (this.items[i].quality < MAX_QUALITY)) {
				this.items[i].quality++
			}
			
			else if (this.items[i].name.includes('Backstage passes')) {
				if (this.items[i].sellIn == 0) {
					this.items[i].quality = 0
				} else if (this.items[i].quality < MAX_QUALITY) {
					this.items[i].quality++
					if (this.items[i].sellIn <= 10 && this.items[i].quality < MAX_QUALITY)
						this.items[i].quality++
					if (this.items[i].sellIn <= 5 && this.items[i].quality < MAX_QUALITY)
						this.items[i].quality++
				}
			}
			
			else if (this.items[i].name.includes('Conjured')) {
				var minus = 2
				if (this.items[i].sellIn == 0)
					minus *= 2
				if (this.items[i].quality - minus < 0)
					this.items[i].quality = 0
				else
					this.items[i].quality -= minus
			}
			
			else {
				if (this.items[i].sellIn > 0 && this.items[i].quality > 0)
					this.items[i].quality--
				else if (this.items[i].sellIn == 0 && this.items[i].quality - 2 >= 0)
					this.items[i].quality -= 2
				else
					this.items[i].quality = 0
			}
        }

        return this.items;
    }
}