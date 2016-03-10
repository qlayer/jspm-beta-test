import $ from 'jquery';
import * as SomeController from './controllers/other-file';
import * as OtherController from 'application1/controllers/some-other-file';

document.querySelector('#myid').innerHTML = `<b>the app 1</b>`;

console.log('Application 1', $, SomeController, OtherController);

export var M = {
    test: 'Exported from app1.'
};