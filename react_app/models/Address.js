class Address {
    constructor(a = {}) {
        this.street = a.street || null;
        this.city = a.city || null;
        this.country = a.country || null;
    }

    toString() {
        return `${this.street}${!!this.city ? `, ${this.city}` : ''}${!!this.country ? `, ${this.country}` : ''}`;
    }
}

export default Address;