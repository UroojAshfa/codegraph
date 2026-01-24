# Call Graph Visualization

```mermaid
graph TD
  authenticate["authenticate"]
  restrict["restrict"]
  format["format"]
  error["error"]
  list["list"]
  loadUser["loadUser"]
  andRestrictToSelf["andRestrictToSelf"]
  andRestrictTo["andRestrictTo"]
  GithubView["GithubView"]
  ferrets["ferrets"]
  count["count"]
  users["users"]
  count2["count2"]
  users2["users2"]
  User["User"]
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
  log["log (external)"]
  fn["fn (external)"]
  hash["hash (external)"]
  next["next (external)"]
  redirect["redirect (external)"]
  require["require (external)"]
  status["status (external)"]
  send["send (external)"]
  join["join (external)"]
  map["map (external)"]
  extname["extname (external)"]
  all["all (external)"]
  filter["filter (external)"]
  get["get (external)"]
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
  debug["debug (external)"]
  lookup["lookup (external)"]
  statSync["statSync (external)"]

  authenticate --> log
  authenticate --> fn
  authenticate --> hash
  authenticate --> fn
  authenticate --> fn
  authenticate --> fn
  restrict --> next
  restrict --> redirect
  format --> require
  format --> format
  error --> error
  error --> status
  error --> send
  list --> join
  list --> map
  loadUser --> next
  loadUser --> next
  andRestrictToSelf --> next
  andRestrictToSelf --> next
  andRestrictTo --> next
  andRestrictTo --> next
  GithubView --> extname
  count --> count
  count --> next
  count --> next
  users --> all
  users --> next
  users --> next
  count2 --> count
  count2 --> next
  count2 --> next
  users2 --> all
  users2 --> next
  users2 --> filter
  users2 --> next
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

View this diagram at: https://mermaid.live
