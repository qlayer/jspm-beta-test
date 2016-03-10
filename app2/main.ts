import $ from 'jquery';
import * as Application1 from 'application1';

document.querySelector('#myid').innerHTML = `<b>${Application1.M.test}</b>`;

console.log('Application 2', $, Application1);