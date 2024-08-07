import http from 'k6/http';
import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import { SharedArray } from 'k6/data';
import { Query} from '../objects/query';


/* @ts-ignore */
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

export let options:Options = {
  vus: 50,
  duration: '5s'
};

export default () => {
  const element:Query = query_data[index];

  const res = http.post('http://localhost:8983/solr/' + 'element.collection_name' + '/select? q=' + element.search_field_name + ':' + element.search_field_value + '&fl=id,title,text&debug=all');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(randomIntBetween(1,5));
};
