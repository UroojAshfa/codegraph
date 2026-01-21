# Call Graph Visualization

```mermaid
graph TD
  Unknown_if["Unknown.if"]
  getTaskName["getTaskName"]
  getOwner["getOwner"]
  UnknownOwner["UnknownOwner"]
  hasValidRef["hasValidRef"]
  hasValidKey["hasValidKey"]
  defineKeyPropWarningGetter["defineKeyPropWarningGetter"]
  elementRefGetterWithDeprecationWarning["elementRefGetterWithDeprecationWarning"]
  ReactElement["ReactElement"]
  jsxProd["jsxProd"]
  jsxProdSignatureRunningInDevWithDynamicChildren["jsxProdSignatureRunningInDevWithDynamicChildren"]
  jsxProdSignatureRunningInDevWithStaticChildren["jsxProdSignatureRunningInDevWithStaticChildren"]
  jsxDEV["jsxDEV"]
  jsxDEVImpl["jsxDEVImpl"]
  createElement["createElement"]
  cloneAndReplaceKey["cloneAndReplaceKey"]
  cloneElement["cloneElement"]
  validateChildKeys["validateChildKeys"]
  isValidElement["isValidElement"]
  isLazyType["isLazyType"]
  Component["Component"]
  ComponentDummy["ComponentDummy"]
  PureComponent["PureComponent"]
  escape["escape"]
  escapeUserProvidedKey["escapeUserProvidedKey"]
  getElementKey["getElementKey"]
  createRef["createRef"]
  warnNoop["warnNoop"]
  releaseAsyncTransition["releaseAsyncTransition"]
  Unknown_onStartTransitionFinish["Unknown.onStartTransitionFinish"]
  warnAboutTransitionSubscriptions["warnAboutTransitionSubscriptions"]
  getComponentNameFromType["getComponentNameFromType (external)"]
  Error["Error (external)"]
  call["call (external)"]
  getOwnPropertyDescriptor["getOwnPropertyDescriptor (external)"]
  error["error (external)"]
  defineProperty["defineProperty (external)"]
  freeze["freeze (external)"]
  checkKeyStringCoercion["checkKeyStringCoercion (external)"]
  createTask["createTask (external)"]
  isArray["isArray (external)"]
  filter["filter (external)"]
  keys["keys (external)"]
  join["join (external)"]
  warn["warn (external)"]
  Array["Array (external)"]
  assign["assign (external)"]
  replace["replace (external)"]
  toString["toString (external)"]
  seal["seal (external)"]
  clear["clear (external)"]

  getTaskName --> getComponentNameFromType
  getOwner --> getOwner
  UnknownOwner --> Error
  hasValidRef --> call
  hasValidRef --> getOwnPropertyDescriptor
  hasValidKey --> call
  hasValidKey --> getOwnPropertyDescriptor
  defineKeyPropWarningGetter --> error
  defineKeyPropWarningGetter --> defineProperty
  elementRefGetterWithDeprecationWarning --> getComponentNameFromType
  elementRefGetterWithDeprecationWarning --> error
  ReactElement --> defineProperty
  ReactElement --> defineProperty
  ReactElement --> defineProperty
  ReactElement --> defineProperty
  ReactElement --> defineProperty
  ReactElement --> defineProperty
  ReactElement --> freeze
  ReactElement --> freeze
  jsxProd --> checkKeyStringCoercion
  jsxProd --> hasValidKey
  jsxProd --> checkKeyStringCoercion
  jsxProd --> ReactElement
  jsxProd --> getOwner
  jsxProdSignatureRunningInDevWithDynamicChildren --> Error
  jsxProdSignatureRunningInDevWithDynamicChildren --> jsxDEVImpl
  jsxProdSignatureRunningInDevWithDynamicChildren --> createTask
  jsxProdSignatureRunningInDevWithDynamicChildren --> getTaskName
  jsxProdSignatureRunningInDevWithStaticChildren --> Error
  jsxProdSignatureRunningInDevWithStaticChildren --> jsxDEVImpl
  jsxProdSignatureRunningInDevWithStaticChildren --> createTask
  jsxProdSignatureRunningInDevWithStaticChildren --> getTaskName
  jsxDEV --> Error
  jsxDEV --> jsxDEVImpl
  jsxDEV --> createTask
  jsxDEV --> getTaskName
  jsxDEVImpl --> isArray
  jsxDEVImpl --> validateChildKeys
  jsxDEVImpl --> freeze
  jsxDEVImpl --> error
  jsxDEVImpl --> validateChildKeys
  jsxDEVImpl --> call
  jsxDEVImpl --> getComponentNameFromType
  jsxDEVImpl --> filter
  jsxDEVImpl --> keys
  jsxDEVImpl --> join
  jsxDEVImpl --> join
  jsxDEVImpl --> error
  jsxDEVImpl --> checkKeyStringCoercion
  jsxDEVImpl --> hasValidKey
  jsxDEVImpl --> checkKeyStringCoercion
  jsxDEVImpl --> defineKeyPropWarningGetter
  jsxDEVImpl --> ReactElement
  jsxDEVImpl --> getOwner
  createElement --> validateChildKeys
  createElement --> warn
  createElement --> hasValidKey
  createElement --> checkKeyStringCoercion
  createElement --> call
  createElement --> Array
  createElement --> freeze
  createElement --> defineKeyPropWarningGetter
  createElement --> Error
  createElement --> ReactElement
  createElement --> getOwner
  createElement --> createTask
  createElement --> getTaskName
  cloneAndReplaceKey --> ReactElement
  cloneElement --> assign
  cloneElement --> hasValidRef
  cloneElement --> getOwner
  cloneElement --> hasValidKey
  cloneElement --> checkKeyStringCoercion
  cloneElement --> call
  cloneElement --> Array
  cloneElement --> ReactElement
  cloneElement --> validateChildKeys
  validateChildKeys --> isValidElement
  validateChildKeys --> isLazyType
  validateChildKeys --> isValidElement
  escape --> replace
  escapeUserProvidedKey --> replace
  getElementKey --> error
  getElementKey --> toString
  getElementKey --> checkKeyStringCoercion
  getElementKey --> escape
  getElementKey --> toString
  createRef --> seal
  warnNoop --> error
  warnAboutTransitionSubscriptions --> clear
  warnAboutTransitionSubscriptions --> warn

```

View this diagram at: https://mermaid.live
