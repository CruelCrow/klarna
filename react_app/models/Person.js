import moment from 'moment';
import Address from './Address';

class Person {
    constructor(p = {}) {
        this.id = p._id || null;
        this.name = p.name || null;
        this.phone = p.phone || null;
        this.picture = p.picture || null;
        this.email = p.email || null;
        this.birthday = !!p.birthday ? new Date(parseInt(p.birthday) * 1000) : null;
        this.address = !!p.address ? new Address(p.address) : null;
    }

    get age() {
        return this.birthday ? moment().diff(this.birthday, 'years') : null;
    }
}

export default Person;