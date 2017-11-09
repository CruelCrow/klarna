import Person from './Person';

class SearchResult {
    constructor(r = []) {
        this.persons = r.map(p => new Person(p));
    }
}

export default SearchResult;