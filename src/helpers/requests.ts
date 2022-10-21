import axios from 'axios';
import Beer from '../types/Beer';

const API: string = 'https://api.punkapi.com/v2/beers';

const requests = {
    getBeersByPage(page: number) {
        return axios.get<Beer[]>(API + '?page=' + page);
    },
    getBeerById(id: number) {
        return axios.get<Beer[]>(API + '/' + id);
    },
    getBeersByName(name: string) {
        return axios.get<Beer[]>(API + `?beer_name=${name}`);
    }
};

export default requests;

