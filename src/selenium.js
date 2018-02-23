const { Builder, By, Key, until } = require('selenium-webdriver');

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

(async () => {
  const driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  try {
    console.log('before');
    await driver.get('http://google.com');
    await wait(2000);
    console.log('after');
  } finally {
    console.log('done');
    await driver.quit();
  }
})().catch(console.error);
