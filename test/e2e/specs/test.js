// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'todo list e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // should see todo stats in hero
      .waitForElementVisible('#todoStats', 5000)
      // should see all rendered todo components
      .waitForElementVisible('#todoItem', 5000)
      // should see New Todo Button
      .waitForElementVisible('a.button.is-outlined.is-small', 5000)
      // click button to open new todo form
      // .waitForElementVisible('', 5000)
      // always call .end() method at end of test to kill the selenium server
      .end()
  }
}
