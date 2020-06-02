import { config, data } from './js/config';
import AppService from './js/app.service';
import './js/logdata';
import './css/main.scss';
import * as $ from 'jquery';

console.log('======== HELLO EVERYONE ==========');
console.log('======== CONFIG ==========', config);
console.log('======== DATA ==========', data);
const appservice = new AppService('This is Text');
appservice.log();

$('.text').html(appservice.text);
