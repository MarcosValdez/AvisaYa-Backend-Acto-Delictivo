import userAgentParser from 'ua-parser-js'

const morganJSONFormat = () => JSON.stringify({
  method: ':method',
  url: ':url',
  http_version: ':http-version',
  remote_addr: ':remote-addr',
  response_time: ':response-time',
  status: ':status',
  content_length: ':res[content-length]',
  timestamp: ':date[iso]',
  user_agent: ':user-agent',
})
function parseUserAgent(data) {
  if (data.user_agent) {
    const ua = userAgentParser(data.user_agent)
    if (ua.browser) {
      data.user_agent_browser_name = ua.browser.name
      data.user_agent_browser_version = ua.browser.major || ua.browser.version
    }
    if (ua.os) {
      data.user_agent_os_name = ua.os.name
      data.user_agent_os_version = ua.os.version
    }
  }
}
function sanitizeUrl(data) {
  if (!data.url) {
    return
  }
  const regex = /\/[0-9]+/g
  const urlWithoutParameter = data.url.replace(regex, '/:id')
  data.url_sanitized = urlWithoutParameter
}

export default {
  morganJSONFormat,
  parseUserAgent,
  sanitizeUrl
}