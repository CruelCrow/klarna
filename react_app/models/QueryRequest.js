import XRegExp from 'xregexp';

const nameRegex = XRegExp.globalize(XRegExp('((\\p{L}+[\\.\\-\\\']?)*(\\p{L}+)?\\s*)+(\\p{L}+[\\.\\-\\\']?)*(\\p{L}+)?'));

class QueryRequest {
    constructor(q = '') {
        this._parse = this._parse.bind(this);

        this.q = q;
        this.name = null;
        this.age = null;
        this.phone = null;

        this._parse();
    }

    _parse() {
        let names = XRegExp.match(this.q, nameRegex);
        if (!!names) {
            names = names.map((n) => n.trim()).filter((n) => !!n); //remove empty entries
            if (names.length > 0) {
                this.name = names.map((n) => n.trim())[0];
            }
        }

        this.age = this.q.split(' ').filter((s) => /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9][0-9]$)/.test(s))[0];

        this.phone = this.q.split(' ').map((s) => s.replace(/[\-+]/g, '')).filter((s) => /^[0-9]{4,}$/.test(s))[0];
    }
}

export default QueryRequest;