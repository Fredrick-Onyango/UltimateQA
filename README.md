# UltimateQA
**Documentation**
**Set up**
1. Set up project $ mkdir webdriverio-test && cd webdriverio-test
2. Configure ‘yes’ Answer to all prompts $ npm init -y
3. Install webdriverIO CLI $ npm i --save-dev @wdio/cli
4. Generate configuration file $ ./node_modules/.bin/wdio config
5. Create Specs files $ mkdir -p ./test/specs
6. Create new file in Specs folder $ touch ./test/specs/fillFormTest.js
7. Open file and add below code:(Open in Visual Studio Code ide or notepad).

 const assert = require('assert');
 
   describe('ultimateqa.com page', () => {
     it('Check for the successful message', () => {
        //Load url
        browser.url('https://www.ultimateqa.com/filling-out-forms/');
        browser.pause('2000');
        //Verify Page Title
        const title = browser.getTitle();
        assert.strictEqual(title, 'Filling Out Forms - Ultimate QA');
        browser.pause('2000');
        //Enter Name
        $('//*[@id="et_pb_contact_name_0"]').addValue('Fredrick');
        //Enter Message
        $('//*[@id="et_pb_contact_message_0"]').addValue('Test UI Automation');
        //Click Submit button
        $('/html/body/div[1]/div/div/article/div/div[1]/div/div/div/div[1]/div/div[2]/form/div/button').click(); 
        browser.pause('2000');
        //Verify success text
        const pass = $("//*[@id='et_pb_contact_form_0']/div/p").getText();
        console.log(pass);
        assert.equal(pass, 'Form filled out successfully');
        browser.pause('2000');
    });
});
8.Execute test runner $ ./node_modules/.bin/wdio wdio.conf.js 

**Push code to git**

1. Navigate to the project directory 
2. Create local git repository $ git init
3. Click on the source Control icon on Visual Studio Code. One should be able to see code ready for commit.
N/B User may get untracked files present error. Add files using : 
$ git add node_modules/
$ git add package-lock.json
$ git add package.json
$ git add test/
$ git add wdio.conf.js
$ git add yarn.loc

4. Run Commit Command $ git commit -m "My First Commit”
5. Go to GitHub account and create new Repository N/B Exclude creating ‘README.md’ & ‘.gitIgnore’ files & License to the repo
6. Copy the on git repository
7. Get back to terminal and add
8. Map remote repo link to local repo $ git remote add origin git://github.com/Fredrick-Onyango/UltimateQA.git/
9. Verify link to remote repo $ git remote -v
10. Push the committed changes into remote repo $ $ git push -u origin master
11. Refresh git repository to confirm if project is pushed to the repository
12. Git Status to verify if branch is upto date.
