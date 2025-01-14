export default class POI {

    /**
     * POI class constructor.
     * @param {Object} tags POI tags
     * @param {string} tags.craft
     * @param {string} tags.amenity
     * @param {string} tags.shop
     * @param {string} tags.cuisine
     * @param {string} tags.takeaway
     * @param {string} tags.toilets
     * @param {string} tags.description
     * @param {string} tags.opening_hours
     * @param {string} tags.phone
     * @param {string} tags.website
     * @returns {Object} POI object
     */
    constructor(tags) {
        this.tags = tags;
    }

    /**
     * Check if a tag for a given key and optional subkey has the `yes` or `only` values.
     * @param {string} key
     * @param {string} subkey
     * @return {Boolean}
     */
    isOK(key, subkey) {
        var tag = key;
        if (subkey) {
          tag += ':' + subkey;
        }
        return !!(this.tags[tag] && (this.tags[tag] === 'yes' || this.tags[key] === 'only'));
    }

    /**
     * Check if a tag for a given key and subkey has the `no` value set.
     * @param {string} key
     * @param {string} subkey
     * @return {Boolean}
     */
    isNotOK(key, subkey) {
        var tag = key;
        if (subkey) {
          tag += ':' + subkey;
        }
        return !!(this.tags[key] && this.tags[key] === 'no');
    }

    /**
     * Check if a POI is OK for the specified diet.
     * @param  {string}  diet Diet (vegan, vegetarian)
     * @return {Boolean}
     */
    isDiet(diet) {
        return this.isOK('diet', diet);
    }

    /**
     * Check if a POI is not OK for the specified diet.
     * @param  {string}  diet Diet (vegan, vegetarian)
     * @return {Boolean}
     */
    isNotDiet(diet) {
        return this.isNotOK('diet', diet);
    }

    /**
     * Check if a POI serves only food intended for the specified diet.
     * @param  {string}  diet Diet (vegan, vegetarian)
     * @return {Boolean}
     */
    isOnlyDiet(diet) {
        const key = 'diet:' + diet;
        return !!(this.tags[key] && this.tags[key] === 'only');
    }

    /**
     * Check if a POI is a shop.
     * @return {Boolean}
     */
    isShop() {
        return !!this.tags.shop;
    }

    /**
     * Get the map layer in which a POI should be added.
     * @return {string} Layer name
     */
    getLayer() {
        if (this.isOK('toilets', 'unisex')) {
          return 'vegan';
        }
//        if (this.isOnlyDiet('vegan')) {
//            return 'vegan-only';
//        }
//        if (this.isDiet('vegan')) {
//            return 'vegan';
//        }
//        if (this.isOnlyDiet('vegetarian')) {
//            return 'vegetarian-only';
//        }
//        if (this.isDiet('vegetarian')) {
//            return 'vegetarian';
//        }

        return 'other';
    }

    /**
     * Get the correct color for the marker of a POI.
     * @return {string} Color name
     */
    getColor() {
        if (this.isOK('toilets', 'unisex')) {
            return 'green';
        }
        if (this.isNotOK('toilets', 'unisex')) {
            return 'red';
        }
        return 'gray';
    }

    /**
     * Get the correct icon for the marker of a POI.
     * @return {string} Font Awesome icon name
     */
    getMarkerIcon() {
        if (this.isOK('toilets', 'unisex')) {
            return 'circle';
        }
        if (this.isNotOK('toilets', 'unisex')) {
            return 'ban';
        }
        return 'question';
    }


    /**
     * Get the correct icon for a shop POI.
     * @return {string} Emoji
     */
    getShopIcon() {
        switch (this.tags.shop) {
            case 'bakery':
                return '🥖';
            default:
                return '🛒';
        }
    }

    /**
     * Get the correct icon for a craft POI.
     * @return {string} Emoji
     */
    getCraftIcon() {
        switch (this.tags.craft) {
            case 'caterer':
                return '🍴';
            default:
                return '';
        }
    }

    /**
     * Get the correct icon for an amenity POI.
     * @return {string} Emoji
     */
    getAmenityIcon() {
        switch (this.tags.amenity) {
            case 'fast_food':
                return '🍔';
            case 'restaurant':
                return '🍴';
            case 'cafe':
                return '🍵';
            case 'bar':
                return '🍸';
            case 'pub':
                return '🍺';
            case 'ice_cream':
                return '🍨';
            case 'vending_machine':
                return 'Vending machine';
            default:
                return '';
        }
    }

    /**
     * Get the correct icon for a POI.
     * @return {string} Emoji
     */
    getIcon() {
        if (this.tags.shop) {
            return this.getShopIcon();
        }
        if (this.tags.craft) {
            return this.getCraftIcon();
        }
        if (this.tags.amenity) {
            return this.getAmenityIcon();
        }
        return '';
    }
}
