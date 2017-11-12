import Person from './Person';

class SearchResult {
    constructor(r = []) {
        this.persons = [];
        this.add(r);
    }

    add(r = []) {
        this.persons = this.persons.concat(r.map(p => new Person(p)));
    }
}

export default SearchResult;