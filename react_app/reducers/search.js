import {Consts} from './../constants';
import {SearchResult} from './../models';
import extend from './../utils/extend';
import KlarnaApiError from './../utils/KlarnaApiError';

const initialState = {
    error: null,
    isLoading: false,

    lastSearchRequestId: null,
    searchResult: new SearchResult(), //[{"id":"82c4066a418b9a25e7314dda532c5713","name":"Prof. Göran Johansson","phone":"8348-16184","picture":"https://robohash.org/82c4066a418b9a25e7314dda532c5713.png?size=400x400\u0026set=set1","email":"jeanette@schroeder.io","birthday":805150800,"address":{"city":"Ekhamn","street":"Lennarts Väg 36","country":"Kristhamn"}},{"id":"27c9af5691628266121c2bb6622eb745","name":"Marie Johansson","phone":"5115-02512","picture":"https://robohash.org/27c9af5691628266121c2bb6622eb745.png?size=400x400\u0026set=set1","email":"daphney.langworth@deckow.com","birthday":94255200,"address":{"city":"Söderborg","street":"Södra Åkergränden 2","country":"Karlfred"}},{"id":"601e01f30777a5db3cbe23e80670b9da","name":"Prof. Karin Johansson","phone":"1728-446154","picture":"https://robohash.org/601e01f30777a5db3cbe23e80670b9da.png?size=400x400\u0026set=set1","email":"joany@reilly.biz","birthday":-210736800,"address":{"city":"Norrköping","street":"Övre Trädgårdgärdet 17","country":"Artuna"}},{"id":"b7bba9bda7596596ddc5f2b1b66a92c6","name":"Hjördis Johansson","phone":"9038-27136","picture":"https://robohash.org/b7bba9bda7596596ddc5f2b1b66a92c6.png?size=400x400\u0026set=set1","email":"ofelia@bins.org","birthday":-259380000,"address":{"city":"Brfred","street":"Stationsallén 92","country":"Avstad"}},{"id":"cc912de85a5739612627c9ac6cd06df4","name":"Johan Änglund","phone":"8904-47261","picture":"https://robohash.org/cc912de85a5739612627c9ac6cd06df4.png?size=400x400\u0026set=set1","email":"zion@prosaccoko.org","birthday":-168919200,"address":{"city":"Arfred","street":"Ängsvägen 8","country":"Köfred"}},{"id":"d8f68423ee95128eb870e6a1eb484001","name":"Prof. Hans Johansson","phone":"9024-76588","picture":"https://robohash.org/d8f68423ee95128eb870e6a1eb484001.png?size=400x400\u0026set=set1","email":"bart@kihnkerluke.biz","birthday":-317527200,"address":{"city":"Nyköping","street":"Östra Ekgatan 14","country":"Alingstad"}},{"id":"ffc2e1ead1d65a8205efa7ddb11ed4a0","name":"Lars Johansson","phone":"1062-429484","picture":"https://robohash.org/ffc2e1ead1d65a8205efa7ddb11ed4a0.png?size=400x400\u0026set=set1","email":"zora.weinat@kautzerharris.io","birthday":794527200,"address":{"city":"Boås","street":"Idrottsallén 48","country":"Köborg"}},{"id":"f5ea79d84cedfbd70e28de22a75a02d7","name":"Dr. Karin Johansson","phone":"3102-467278","picture":"https://robohash.org/f5ea79d84cedfbd70e28de22a75a02d7.png?size=400x400\u0026set=set1","email":"karson@daughertyhoeger.biz","birthday":-420692400,"address":{"city":"Båborg","street":"Östra Fabriksallén 484","country":"Båberg"}},{"id":"65493432637e3b49d7fe2bc20680d135","name":"Dr. Ingegärd Johansson","phone":"1943-18415","picture":"https://robohash.org/65493432637e3b49d7fe2bc20680d135.png?size=400x400\u0026set=set1","email":"conor@moriette.name","birthday":175381200,"address":{"city":"Arås","street":"Änglunds Väg 495","country":"Enås"}},{"id":"68dd32b94bf978565e537ffe7052a6a3","name":"Åsa Johansson","phone":"9895-254917","picture":"https://robohash.org/68dd32b94bf978565e537ffe7052a6a3.png?size=400x400\u0026set=set1","email":"neha@mclaughlin.name","birthday":757461600,"address":{"city":"Göteland","street":"Elisabets Väg 963","country":"Götesås"}},{"id":"ae2ab9ea967c486fb12fb5a51fd39906","name":"PhD. Hans Johansson","phone":"3180-70987","picture":"https://robohash.org/ae2ab9ea967c486fb12fb5a51fd39906.png?size=400x400\u0026set=set1","email":"gaylord@mclaughlindaniel.com","birthday":-386301600,"address":{"city":"Bofred","street":"Övre Idrottsgränden 387","country":"Haborg"}},{"id":"754d2ae37039dc4b4564675bf84b68f1","name":"Prof. Nils Johansson","phone":"8256-45466","picture":"https://robohash.org/754d2ae37039dc4b4564675bf84b68f1.png?size=400x400\u0026set=set1","email":"maximo.boyle@wehnergreenholt.co","birthday":481672800,"address":{"city":"Karlvik","street":"Änglunds Gata 6","country":"Botuna"}},{"id":"3a2db2faa1161196acfdda4d02c45c99","name":"Emil Johansson","phone":"4490-73098","picture":"https://robohash.org/3a2db2faa1161196acfdda4d02c45c99.png?size=400x400\u0026set=set1","email":"emery_mills@kuvalis.org","birthday":180136800,"address":{"city":"Götefred","street":"Ingegärds Gata 97","country":"Alingland"}},{"id":"17beb33254176c6254df61de28548117","name":"PhD. Johan Svensson","phone":"1696-52119","picture":"https://robohash.org/17beb33254176c6254df61de28548117.png?size=400x400\u0026set=set1","email":"miguel_turcotte@hoeger.info","birthday":805323600,"address":{"city":"Eskfred","street":"Änglunds Gata 116","country":"Helsingmora"}},{"id":"d6dae084d4348ef0dc938a34b5f3619a","name":"Dr. Elisabeth Johansson","phone":"2284-28328","picture":"https://robohash.org/d6dae084d4348ef0dc938a34b5f3619a.png?size=400x400\u0026set=set1","email":"tyreek.strosin@price.org","birthday":-243223200,"address":{"city":"Brköping","street":"Maries Gata 61","country":"Eskfred"}},{"id":"2d01ee41f53c1fa019ba2eab04ce4ac9","name":"Dr. Per Johansson","phone":"5657-71629","picture":"https://robohash.org/2d01ee41f53c1fa019ba2eab04ce4ac9.png?size=400x400\u0026set=set1","email":"marjory.schmeler@erdman.com","birthday":-104724000,"address":{"city":"Gävstad","street":"Västra Ringgränden 235","country":"Södertorp"}},{"id":"91804811bf7d36ddf8f005f5bdf1e583","name":"Ingegärd Johansson","phone":"2293-31547","picture":"https://robohash.org/91804811bf7d36ddf8f005f5bdf1e583.png?size=400x400\u0026set=set1","email":"barrett@grimes.biz","birthday":-347421600,"address":{"city":"Båfors","street":"Anderssons Väg 2","country":"Kungby"}},{"id":"64382aaafb7b11c0436faf63d13c1058","name":"Prof. Anders Johansson","phone":"6798-203541","picture":"https://robohash.org/64382aaafb7b11c0436faf63d13c1058.png?size=400x400\u0026set=set1","email":"bernie@kreiger.info","birthday":478389600,"address":{"city":"Österborg","street":"Johanssons Gata 5","country":"Arstad"}},{"id":"31c64753be74d3e3f27ff40e0eff1703","name":"Prof. Anders Johansson","phone":"7440-96589","picture":"https://robohash.org/31c64753be74d3e3f27ff40e0eff1703.png?size=400x400\u0026set=set1","email":"dexter@eichmann.co","birthday":703458000,"address":{"city":"Västhamn","street":"Anderssons Gata 315","country":"Hatuna"}},{"id":"bc17c97c3d897d43b7e07ca0266eafa8","name":"Johan Andersson","phone":"3831-856867","picture":"https://robohash.org/bc17c97c3d897d43b7e07ca0266eafa8.png?size=400x400\u0026set=set1","email":"arthur@kilbackstanton.net","birthday":-357444000,"address":{"city":"Kungmora","street":"Annas Väg 37","country":"Norrmora"}},{"id":"afe13a99a5f787876e1311a87c438683","name":"Johan Åslund","phone":"9938-020888","picture":"https://robohash.org/afe13a99a5f787876e1311a87c438683.png?size=400x400\u0026set=set1","email":"asia@walshstoltenberg.co","birthday":35071200,"address":{"city":"Båfors","street":"Karlssons Gata 386","country":"Båfors"}},{"id":"099fa7f9e8c8330ec386c77d46044ad9","name":"Prof. Karl Johansson","phone":"6329-56536","picture":"https://robohash.org/099fa7f9e8c8330ec386c77d46044ad9.png?size=400x400\u0026set=set1","email":"otha.koepp@beier.co","birthday":-346557600,"address":{"city":"Bofors","street":"Gustafssons Väg 576","country":"Köhamn"}},{"id":"5e6bc2161ee4b93fb05ee0f47db1bd25","name":"PhD. Johan Svensson","phone":"5162-87268","picture":"https://robohash.org/5e6bc2161ee4b93fb05ee0f47db1bd25.png?size=400x400\u0026set=set1","email":"francis@little.io","birthday":9151200,"address":{"city":"Hafred","street":"Nilssons Väg 290","country":"Arvik"}},{"id":"d121762ef8699b52dd34a6bdd72b2deb","name":"Johan Änglund","phone":"1797-818793","picture":"https://robohash.org/d121762ef8699b52dd34a6bdd72b2deb.png?size=400x400\u0026set=set1","email":"kelley@batz.co","birthday":-144813600,"address":{"city":"Norrsås","street":"Stationsvägen 857","country":"Götelöv"}},{"id":"086345c8e3ce157d6f61b0122a40d26c","name":"Prof. Eva Johansson","phone":"4759-85859","picture":"https://robohash.org/086345c8e3ce157d6f61b0122a40d26c.png?size=400x400\u0026set=set1","email":"guiseppe.predovic@pacochabeier.io","birthday":247615200,"address":{"city":"Karlland","street":"Maries Gata 7","country":"Gävborg"}}]
    lastSearchResultTimestamp: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Consts.ACTIONS.SEARCH:
            if (action.error) {
                return extend({}, state, {
                    error: action.payload
                });
            } else {
                let searchResult = state.searchResult;
                if (parseInt(action.payload.data.request_params.page) > 1) {
                    state.searchResult.add(action.payload.data.persons);
                } else {
                    searchResult = new SearchResult(action.payload.data.persons)
                }
                return extend({}, state, {
                    searchResult: searchResult,
                    lastSearchResultTimestamp: new Date(),
                    error: null
                });
            }
            break;
        case Consts.ACTIONS.SEARCH_START_LOADING:
            return extend({}, state, {
                isLoading: true
            });
            break;
        case Consts.ACTIONS.SEARCH_END_LOADING:
            return extend({}, state, {
                isLoading: false
            });
            break;
        case Consts.ACTIONS.CLEAR_SEARCH:
            return extend({}, state, {
                searchResult: new SearchResult()
            });
            break;

        default:
            return state;
    }
}