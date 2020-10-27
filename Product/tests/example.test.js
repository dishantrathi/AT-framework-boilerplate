//import {TRwebdriver} from '../../common/TRwebdriver';
import {executeStatement} from '../../common/sql';

describe('Init', () => {
    //Test Steps/Cases
    it('Load Example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(3000)
        //TRwebdriver.url('https://www.google.com')
        browser.pause(3000)
        

    })
    it('Load WebdriverIO website',() => {
        browser.url('https://webdriver.io')
        browser.pause(3000)  
        
        console.log(executeStatement)
        browser.pause(300000)
        //executeStatement();

    })
});