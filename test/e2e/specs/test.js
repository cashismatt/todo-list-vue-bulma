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
      // .assert.elementPresent('todo-list')
      // .assert.elementPresent('new-todo')
      // .assert.elementCount('img', 1)
      // always call .end() method at end of test to kill the selenium server
      .end()
  }
}
