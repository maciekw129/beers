import axios from 'axios';
import Beer from '../types/Beer';

const API: string = 'https://api.punkapi.com/v2/';

const requests = {
    getBeersByPage(page: number) {
        return axios.get<Beer[]>(API + 'beers?page=' + page);
    },
    getBeerById(id: number) {
        return axios.get<Beer[]>(API + 'beers/' + id);
    }
};

export default requests;

