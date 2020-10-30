//import {TRwebdriver} from '../../common/webdriver';
//import {executeStatement} from '../../common/sql';
import loginpage from '../pages/login_page'

import {short, medium, long} from '../../common/timeout';

describe('Init', () => {
    //Test Steps/Cases
    /*
    it('Load Example Website', () => {

        browser.url('http://www.example.com')
        browser.pause(short)
        //TRwebdriver.url('https://www.google.com')
        browser.pause(long)
    })
    
    it('Load WebdriverIO website',() => {
        browser.url('https://webdriver.io')
        browser.pause(3000)  //exp wait
        //executeStatement();
    })
    */
    it('checks for wait(s)', () =>{
        try
        {
            //browser.setWindowSize(1980, 1080)
            browser.url('http://www.way2automation.com/angularjs-protractor/banking/#/customer')
            loginpage.userid.isDisplayed()
        }
        finally{
            browser.saveScreenshot('test-data/images/test1.png')
        }
    })
});