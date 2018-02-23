require "selenium-webdriver"
driver = Selenium::WebDriver.for :remote,
  url: "http://docker.for.mac.localhost:4444/wd/hub",
  desired_capabilities: :chrome
driver.get("https://google.com")
sleep 30
driver.quit
