# Call Graph Visualization

```mermaid
graph TD
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
  Unknown_return["Unknown.return"]
  Unknown_if["Unknown.if"]
  error["error (external)"]
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

```

View this diagram at: https://mermaid.live
