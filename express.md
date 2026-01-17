```mermaid
graph TD
  logerror["logerror"]
  tryRender["tryRender"]
  createApplication["createApplication"]
  defineGetter["defineGetter"]
  sendfile["sendfile"]
  onaborted["onaborted"]
  ondirectory["ondirectory"]
  onerror["onerror"]
  onend["onend"]
  onfile["onfile"]
  onfinish["onfinish"]
  onstream["onstream"]
  stringify["stringify"]
  acceptParams["acceptParams"]
  createETagGenerator["createETagGenerator"]
  parseExtendedQueryString["parseExtendedQueryString"]
  View["View"]
  tryStat["tryStat"]
  get["get (external)"]
  error["error (external)"]
  toString["toString (external)"]
  render["render (external)"]
  callback["callback (external)"]
  handle["handle (external)"]
  mixin["mixin (external)"]
  create["create (external)"]
  init["init (external)"]
  defineProperty["defineProperty (external)"]
  setImmediate["setImmediate (external)"]
  on["on (external)"]
  onFinished["onFinished (external)"]
  keys["keys (external)"]
  setHeader["setHeader (external)"]
  pipe["pipe (external)"]
  replace["replace (external)"]
  charCodeAt["charCodeAt (external)"]
  indexOf["indexOf (external)"]
  trim["trim (external)"]
  slice["slice (external)"]
  lastIndexOf["lastIndexOf (external)"]
  parseFloat["parseFloat (external)"]
  isBuffer["isBuffer (external)"]
  from["from (external)"]
  etag["etag (external)"]
  parse["parse (external)"]
  extname["extname (external)"]
  debug["debug (external)"]
  require["require (external)"]
  lookup["lookup (external)"]
  statSync["statSync (external)"]

  logerror --> get
  logerror --> error
  logerror --> toString
  tryRender --> render
  tryRender --> callback
  createApplication --> handle
  createApplication --> mixin
  createApplication --> mixin
  createApplication --> create
  createApplication --> create
  createApplication --> init
  defineGetter --> defineProperty
  onaborted --> callback
  ondirectory --> callback
  onerror --> callback
  onend --> callback
  onfinish --> onaborted
  onfinish --> onerror
  onfinish --> setImmediate
  onfinish --> onaborted
  onfinish --> callback
  sendfile --> on
  sendfile --> on
  sendfile --> on
  sendfile --> on
  sendfile --> on
  sendfile --> onFinished
  sendfile --> on
  sendfile --> keys
  sendfile --> setHeader
  sendfile --> pipe
  stringify --> stringify
  stringify --> stringify
  stringify --> replace
  stringify --> charCodeAt
  acceptParams --> indexOf
  acceptParams --> trim
  acceptParams --> slice
  acceptParams --> indexOf
  acceptParams --> indexOf
  acceptParams --> lastIndexOf
  acceptParams --> trim
  acceptParams --> slice
  acceptParams --> trim
  acceptParams --> slice
  acceptParams --> parseFloat
  createETagGenerator --> isBuffer
  createETagGenerator --> from
  createETagGenerator --> etag
  parseExtendedQueryString --> parse
  View --> extname
  View --> slice
  View --> debug
  View --> require
  View --> lookup
  tryStat --> debug
  tryStat --> statSync
```

View at: https://mermaid.live