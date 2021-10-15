// Path: scripts/controllers/manual/webc-component/Controller.test1.js

const { Controller } = WebCardinal.controllers;
const { DataSource } = WebCardinal.dataSources;

class TestDataSource extends DataSource {
    constructor(...props) {
        super(...props);
    }

    /**
     * @override
     */
    async getPageDataAsync(startOffset, dataLengthForCurrentPage) {
        return [...Array(dataLengthForCurrentPage).keys()].map(index => ({
            number: startOffset + index + 1,
            text: `Text ${index}`
        }));
    }
}

export default class extends Controller {
    constructor(...props) {
        super(...props);

        this.model = {
            testDataSource: new TestDataSource()
        }
    }
}