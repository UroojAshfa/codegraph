# Call Graph Visualization

```mermaid
graph TD
  checkDCE["checkDCE"]
  renderToString["renderToString"]
  renderToStaticMarkup["renderToStaticMarkup"]
  renderToReadableStream["renderToReadableStream"]
  resume["resume"]
  renderToPipeableStream["renderToPipeableStream"]
  resumeToPipeableStream["resumeToPipeableStream"]
  Unknown_if["Unknown.if"]
  handleNavigate["handleNavigate"]
  Unknown_handler["Unknown.handler"]
  handleNavigateComplete["handleNavigateComplete"]
  startFakeNavigation["startFakeNavigation"]
  ReactDOMHydrationRoot["ReactDOMHydrationRoot"]
  scheduleHydration["scheduleHydration"]
  warnIfReactDOMContainerInDEV["warnIfReactDOMContainerInDEV"]
  getReactRootElementInContainer["getReactRootElementInContainer"]
  legacyCreateRootFromDOMContainer["legacyCreateRootFromDOMContainer"]
  showErrorDialog["showErrorDialog"]
  requestFormReset["requestFormReset"]
  listener["listener"]
  createDrainHandler["createDrainHandler"]
  createCancelHandler["createCancelHandler"]
  Unknown_end["Unknown.end"]
  Unknown_destroy["Unknown.destroy"]
  Unknown_return["Unknown.return"]
  Unknown_write["Unknown.write"]
  onAllReady["onAllReady"]
  Unknown_read["Unknown.read"]
  onError["onError"]
  renderToStringImpl["renderToStringImpl"]
  Unknown_push["Unknown.push"]
  onShellReady["onShellReady"]
  ensureCorrectIsomorphicReactVersion["ensureCorrectIsomorphicReactVersion"]
  Unknown_React_Portal["Unknown.React$Portal"]
  prefetchDNS["prefetchDNS"]
  preconnect["preconnect"]
  preload["preload"]
  preloadModule["preloadModule"]
  preinit["preinit"]
  preinitModule["preinitModule"]
  getValueDescriptorExpectingObjectForWarning["getValueDescriptorExpectingObjectForWarning"]
  getValueDescriptorExpectingEnumForWarning["getValueDescriptorExpectingEnumForWarning"]
  act["act"]
  prerenderToNodeStream["prerenderToNodeStream"]
  prerender["prerender"]
  resumeAndPrerenderToNodeStream["resumeAndPrerenderToNodeStream"]
  resumeAndPrerender["resumeAndPrerender"]
  error["error (external)"]
  apply["apply (external)"]
  require["require (external)"]
  intercept["intercept (external)"]
  pendingResolve["pendingResolve (external)"]
  setTimeout["setTimeout (external)"]
  navigate["navigate (external)"]
  getState["getState (external)"]
  queueExplicitHydrationTarget["queueExplicitHydrationTarget (external)"]
  isContainerMarkedAsRoot["isContainerMarkedAsRoot (external)"]
  parentComponent["parentComponent (external)"]
  getPublicRootInstance["getPublicRootInstance (external)"]
  call["call (external)"]
  createHydrationContainer["createHydrationContainer (external)"]
  markContainerAsRoot["markContainerAsRoot (external)"]
  listenToAllSupportedEvents["listenToAllSupportedEvents (external)"]
  flushSyncWork["flushSyncWork (external)"]
  abort["abort (external)"]
  removeEventListener["removeEventListener (external)"]
  startFlowing["startFlowing (external)"]
  stopFlowing["stopFlowing (external)"]
  createFakeWritableFromReadable["createFakeWritableFromReadable (external)"]
  getPostponedState["getPostponedState (external)"]
  resolve["resolve (external)"]
  createResumableState["createResumableState (external)"]
  createRequest["createRequest (external)"]
  createRenderState["createRenderState (external)"]
  createRootFormatContext["createRootFormatContext (external)"]
  startWork["startWork (external)"]
  hasOwnProperty["hasOwnProperty (external)"]
  D["D (external)"]
  getCrossOriginString["getCrossOriginString (external)"]
  C["C (external)"]
  getCrossOriginStringAs["getCrossOriginStringAs (external)"]
  L["L (external)"]
  m["m (external)"]
  S["S (external)"]
  X["X (external)"]
  M["M (external)"]
  stringify["stringify (external)"]

  checkDCE --> checkDCE
  checkDCE --> error
  checkDCE --> checkDCE
  checkDCE --> error
  checkDCE --> checkDCE
  checkDCE --> error
  checkDCE --> checkDCE
  checkDCE --> error
  renderToString --> apply
  renderToString --> require
  renderToStaticMarkup --> apply
  renderToStaticMarkup --> require
  renderToReadableStream --> apply
  renderToReadableStream --> require
  resume --> apply
  resume --> require
  renderToReadableStream --> apply
  renderToReadableStream --> require
  renderToString --> apply
  renderToString --> require
  renderToStaticMarkup --> apply
  renderToStaticMarkup --> require
  resume --> apply
  resume --> require
  renderToPipeableStream --> apply
  renderToPipeableStream --> require
  resumeToPipeableStream --> apply
  resumeToPipeableStream --> require
  renderToReadableStream --> apply
  renderToReadableStream --> require
  renderToString --> apply
  renderToString --> require
  renderToStaticMarkup --> apply
  renderToStaticMarkup --> require
  resume --> apply
  resume --> require
  renderToString --> apply
  renderToString --> require
  renderToStaticMarkup --> apply
  renderToStaticMarkup --> require
  renderToPipeableStream --> apply
  renderToPipeableStream --> require
  resumeToPipeableStream --> apply
  resumeToPipeableStream --> require
  renderToReadableStream --> apply
  renderToReadableStream --> require
  resume --> apply
  resume --> require
  handleNavigate --> intercept
  handleNavigateComplete --> pendingResolve
  handleNavigateComplete --> setTimeout
  startFakeNavigation --> navigate
  startFakeNavigation --> getState
  scheduleHydration --> queueExplicitHydrationTarget
  warnIfReactDOMContainerInDEV --> isContainerMarkedAsRoot
  warnIfReactDOMContainerInDEV --> error
  warnIfReactDOMContainerInDEV --> error
  legacyCreateRootFromDOMContainer --> parentComponent
  legacyCreateRootFromDOMContainer --> getPublicRootInstance
  legacyCreateRootFromDOMContainer --> call
  legacyCreateRootFromDOMContainer --> createHydrationContainer
  legacyCreateRootFromDOMContainer --> markContainerAsRoot
  legacyCreateRootFromDOMContainer --> listenToAllSupportedEvents
  legacyCreateRootFromDOMContainer --> flushSyncWork
  legacyCreateRootFromDOMContainer --> getPublicRootInstance
  legacyCreateRootFromDOMContainer --> call
  listener --> abort
  listener --> removeEventListener
  listener --> abort
  listener --> removeEventListener
  listener --> abort
  listener --> removeEventListener
  listener --> abort
  listener --> removeEventListener
  listener --> abort
  listener --> removeEventListener
  createDrainHandler --> startFlowing
  createCancelHandler --> stopFlowing
  createCancelHandler --> abort
  listener --> abort
  listener --> removeEventListener
  listener --> abort
  listener --> removeEventListener
  onAllReady --> startFlowing
  onAllReady --> createFakeWritableFromReadable
  onAllReady --> getPostponedState
  onAllReady --> resolve
  listener --> abort
  listener --> removeEventListener
  onAllReady --> startFlowing
  onAllReady --> createFakeWritableFromReadable
  onAllReady --> getPostponedState
  onAllReady --> resolve
  listener --> abort
  listener --> removeEventListener
  renderToStringImpl --> createResumableState
  renderToStringImpl --> createRequest
  renderToStringImpl --> createRenderState
  renderToStringImpl --> createRootFormatContext
  renderToStringImpl --> startWork
  renderToStringImpl --> abort
  renderToStringImpl --> startFlowing
  prefetchDNS --> error
  prefetchDNS --> getValueDescriptorExpectingObjectForWarning
  prefetchDNS --> hasOwnProperty
  prefetchDNS --> error
  prefetchDNS --> getValueDescriptorExpectingEnumForWarning
  prefetchDNS --> error
  prefetchDNS --> getValueDescriptorExpectingEnumForWarning
  prefetchDNS --> D
  preconnect --> error
  preconnect --> getValueDescriptorExpectingObjectForWarning
  preconnect --> error
  preconnect --> getValueDescriptorExpectingEnumForWarning
  preconnect --> error
  preconnect --> getValueDescriptorExpectingObjectForWarning
  preconnect --> getCrossOriginString
  preconnect --> C
  preload --> getValueDescriptorExpectingObjectForWarning
  preload --> getValueDescriptorExpectingObjectForWarning
  preload --> getValueDescriptorExpectingObjectForWarning
  preload --> error
  preload --> getCrossOriginStringAs
  preload --> L
  preloadModule --> getValueDescriptorExpectingObjectForWarning
  preloadModule --> getValueDescriptorExpectingObjectForWarning
  preloadModule --> getValueDescriptorExpectingObjectForWarning
  preloadModule --> error
  preloadModule --> getCrossOriginStringAs
  preloadModule --> m
  preloadModule --> m
  preinit --> error
  preinit --> getValueDescriptorExpectingObjectForWarning
  preinit --> error
  preinit --> getValueDescriptorExpectingEnumForWarning
  preinit --> error
  preinit --> getValueDescriptorExpectingEnumForWarning
  preinit --> getCrossOriginStringAs
  preinit --> S
  preinit --> X
  preinitModule --> getValueDescriptorExpectingObjectForWarning
  preinitModule --> getValueDescriptorExpectingObjectForWarning
  preinitModule --> getValueDescriptorExpectingEnumForWarning
  preinitModule --> error
  preinitModule --> getValueDescriptorExpectingEnumForWarning
  preinitModule --> error
  preinitModule --> getCrossOriginStringAs
  preinitModule --> M
  preinitModule --> M
  getValueDescriptorExpectingEnumForWarning --> stringify
  act --> error
  act --> act
  prerenderToNodeStream --> apply
  prerenderToNodeStream --> require
  prerender --> apply
  prerender --> require
  resumeAndPrerenderToNodeStream --> apply
  resumeAndPrerenderToNodeStream --> require
  resumeAndPrerender --> apply
  resumeAndPrerender --> require

```

View this diagram at: https://mermaid.live
