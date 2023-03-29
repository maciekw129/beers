import axios from 'axios';
import Beer from '../types/Beer';
import Params from '../types/Params';

const API: string = 'https://api.punkapi.com/v2/beers';

const requests = {
    getBeersByPage(params: Params) {
        //console.log('n' + params.name);
        return axios.get<Beer[]>(`${API}?page=${params.page}${params.name ? '&beer_name=' + params.name : ''}`);
    },
    getBeerById(id: number) {
        return axios.get<Beer[]>(API + '/' + id);
    },
    getBeersByName(name: string) {
        return axios.get<Beer[]>(API + `?beer_name=${name}`);
    }
};

export default requests;

