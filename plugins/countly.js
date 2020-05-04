export default () => {
  if (process.client) {
    window.Countly = window.Countly || {}
    window.Countly.q = window.Countly.q || []
    window.Countly.consentItems = ['sessions','events','views','crashes']
    window.Countly.app_version = process.env.appVer
  }
}
