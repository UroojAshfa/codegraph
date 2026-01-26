# Call Graph Visualization

```mermaid
graph TD
  app_init["app.init"]
  app_defaultConfiguration["app.defaultConfiguration"]
  app_handle["app.handle"]
  app_use["app.use"]
  app_route["app.route"]
  app_engine["app.engine"]
  app_param["app.param"]
  app_set["app.set"]
  app_path["app.path"]
  app_enabled["app.enabled"]
  app_disabled["app.disabled"]
  app_enable["app.enable"]
  app_disable["app.disable"]
  app_all["app.all"]
  app_render["app.render"]
  app_listen["app.listen"]
  logerror["logerror"]
  tryRender["tryRender"]
  createApplication["createApplication"]
  req_header["req.header"]
  req_accepts["req.accepts"]
  req_acceptsEncodings["req.acceptsEncodings"]
  req_acceptsCharsets["req.acceptsCharsets"]
  req_acceptsLanguages["req.acceptsLanguages"]
  req_range["req.range"]
  req_is["req.is"]
  defineGetter["defineGetter"]
  res_status["res.status"]
  res_links["res.links"]
  res_send["res.send"]
  res_json["res.json"]
  res_jsonp["res.jsonp"]
  res_sendStatus["res.sendStatus"]
  res_sendFile["res.sendFile"]
  res_download["res.download"]
  res_type["res.type"]
  res_format["res.format"]
  res_attachment["res.attachment"]
  res_append["res.append"]
  res_header["res.header"]
  res_get["res.get"]
  res_clearCookie["res.clearCookie"]
  res_cookie["res.cookie"]
  res_location["res.location"]
  res_redirect["res.redirect"]
  res_vary["res.vary"]
  res_render["res.render"]
  sendfile["sendfile"]
  onaborted["onaborted"]
  ondirectory["ondirectory"]
  onerror["onerror"]
  onend["onend"]
  onfile["onfile"]
  onfinish["onfinish"]
  onstream["onstream"]
  stringify["stringify"]
  exports_normalizeType["exports.normalizeType"]
  exports_normalizeTypes["exports.normalizeTypes"]
  acceptParams["acceptParams"]
  exports_compileETag["exports.compileETag"]
  exports_compileQueryParser["exports.compileQueryParser"]
  exports_compileTrust["exports.compileTrust"]
  exports_setCharset["exports.setCharset"]
  createETagGenerator["createETagGenerator"]
  parseExtendedQueryString["parseExtendedQueryString"]
  View["View"]
  View_prototype_lookup["View.prototype.lookup"]
  View_prototype_render["View.prototype.render"]
  View_prototype_resolve["View.prototype.resolve"]
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

View this diagram at: https://mermaid.live
