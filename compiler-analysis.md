# Call Graph Visualization

```mermaid
graph TD
  AnnotateReactCodeBabelPlugin["AnnotateReactCodeBabelPlugin"]
  Unknown_Program["Unknown.Program"]
  annotate["annotate"]
  traverseFn["traverseFn"]
  shouldVisit["shouldVisit"]
  buildTypeOfReactForget["buildTypeOfReactForget"]
  isComponentDeclaration["isComponentDeclaration"]
  isComponentOrHookLike["isComponentOrHookLike"]
  isHookName["isHookName"]
  isHook["isHook"]
  isComponentName["isComponentName"]
  isForwardRefCallback["isForwardRefCallback"]
  isMemoCallback["isMemoCallback"]
  isReactAPI["isReactAPI"]
  callsHooksOrCreatesJsx["callsHooksOrCreatesJsx"]
  Unknown_JSX["Unknown.JSX"]
  Unknown_CallExpression["Unknown.CallExpression"]
  getFunctionName["getFunctionName"]
  normalizeIndent["normalizeIndent"]
  createTransformer["createTransformer"]
  BabelPluginReactCompiler["BabelPluginReactCompiler"]
  Unknown_enter["Unknown.enter"]
  Unknown_exit["Unknown.exit"]
  runBabelPluginReactCompiler["runBabelPluginReactCompiler"]
  insertAdditionalFunctionDeclaration["insertAdditionalFunctionDeclaration"]
  insertGatedFunctionDeclaration["insertGatedFunctionDeclaration"]
  buildFunctionExpression["buildFunctionExpression"]
  validateRestrictedImports["validateRestrictedImports"]
  Unknown_ImportDeclaration["Unknown.ImportDeclaration"]
  ProgramContext_constructor["ProgramContext.constructor"]
  ProgramContext_isHookName["ProgramContext.isHookName"]
  ProgramContext_hasReference["ProgramContext.hasReference"]
  ProgramContext_newUid["ProgramContext.newUid"]
  ProgramContext_addMemoCacheImport["ProgramContext.addMemoCacheImport"]
  ProgramContext_addImportSpecifier["ProgramContext.addImportSpecifier"]
  ProgramContext_addNewReference["ProgramContext.addNewReference"]
  ProgramContext_assertGlobalBinding["ProgramContext.assertGlobalBinding"]
  ProgramContext_logEvent["ProgramContext.logEvent"]
  getExistingImports["getExistingImports"]
  addImportsToProgram["addImportsToProgram"]
  isNonNamespacedImport["isNonNamespacedImport"]
  parsePluginOptions["parsePluginOptions"]
  parseTargetConfig["parseTargetConfig"]
  isCompilerFlag["isCompilerFlag"]
  run["run"]
  runWithEnvironment["runWithEnvironment"]
  log["log"]
  compileFn["compileFn"]
  hasModule["hasModule"]
  pipelineUsesReanimatedPlugin["pipelineUsesReanimatedPlugin"]
  injectReanimatedFlag["injectReanimatedFlag"]
  filterSuppressionsThatAffectFunction["filterSuppressionsThatAffectFunction"]
  findProgramSuppressions["findProgramSuppressions"]
  suppressionsToCompilerError["suppressionsToCompilerError"]
  throwInvalidReact["throwInvalidReact"]
  isAutodepsSigil["isAutodepsSigil"]
  assertValidEffectImportReference["assertValidEffectImportReference"]
  assertValidFireImportReference["assertValidFireImportReference"]
  validateNoUntransformedReferences["validateNoUntransformedReferences"]
  validateImportSpecifier["validateImportSpecifier"]
  validateNamespacedImport["validateNamespacedImport"]
  transformProgram["transformProgram"]
  matchCompilerDiagnostic["matchCompilerDiagnostic"]
  unsupportedLanguageFeature["unsupportedLanguageFeature"]
  printUnificationError["printUnificationError"]
  raiseUnificationErrors["raiseUnificationErrors"]
  unresolvableTypeVariable["unresolvableTypeVariable"]
  cannotAddVoid["cannotAddVoid"]
  unsupportedTypeAnnotation["unsupportedTypeAnnotation"]
  checkTypeArgumentArity["checkTypeArgumentArity"]
  notAFunction["notAFunction"]
  notAPolymorphicFunction["notAPolymorphicFunction"]
  makeLinearId["makeLinearId"]
  makeTypeParameterId["makeTypeParameterId"]
  makeNominalId["makeNominalId"]
  makeVariableId["makeVariableId"]
  printConcrete["printConcrete"]
  printType["printType"]
  printResolved["printResolved"]
  convertFlowType["convertFlowType"]
  convertFlowTypeImpl["convertFlowTypeImpl"]
  serializeLoc["serializeLoc"]
  buildTypeEnvironment["buildTypeEnvironment"]
  FlowTypeEnv_init["FlowTypeEnv.init"]
  FlowTypeEnv_setType["FlowTypeEnv.setType"]
  FlowTypeEnv_getType["FlowTypeEnv.getType"]
  FlowTypeEnv_getTypeOrNull["FlowTypeEnv.getTypeOrNull"]
  FlowTypeEnv_getTypeByLoc["FlowTypeEnv.getTypeByLoc"]
  FlowTypeEnv_nextNominalId["FlowTypeEnv.nextNominalId"]
  FlowTypeEnv_nextTypeParameterId["FlowTypeEnv.nextTypeParameterId"]
  FlowTypeEnv_addBinding["FlowTypeEnv.addBinding"]
  FlowTypeEnv_resolveBinding["FlowTypeEnv.resolveBinding"]
  FlowTypeEnv_pushGeneric["FlowTypeEnv.pushGeneric"]
  FlowTypeEnv_popGeneric["FlowTypeEnv.popGeneric"]
  FlowTypeEnv_getGeneric["FlowTypeEnv.getGeneric"]
  Unknown_number["Unknown.number"]
  Unknown_string["Unknown.string"]
  Unknown_boolean["Unknown.boolean"]
  Unknown_void["Unknown.void"]
  Unknown_mixed["Unknown.mixed"]
  Unknown_enum["Unknown.enum"]
  Unknown_todo["Unknown.todo"]
  Unknown_nullable["Unknown.nullable"]
  Unknown_array["Unknown.array"]
  Unknown_set["Unknown.set"]
  Unknown_map["Unknown.map"]
  Unknown_function["Unknown.function"]
  Unknown_component["Unknown.component"]
  Unknown_object["Unknown.object"]
  Unknown_class["Unknown.class"]
  Unknown_tuple["Unknown.tuple"]
  Unknown_generic["Unknown.generic"]
  Unknown_union["Unknown.union"]
  substitute["substitute"]
  substitutionFunction["substitutionFunction"]
  mapType["mapType"]
  diff["diff"]
  filterOptional["filterOptional"]
  assertConsistentIdentifiers["assertConsistentIdentifiers"]
  validate["validate"]
  assertTerminalSuccessorsExist["assertTerminalSuccessorsExist"]
  assertTerminalPredsExist["assertTerminalPredsExist"]
  getScopes["getScopes"]
  visitPlace["visitPlace"]
  rangePreOrderComparator["rangePreOrderComparator"]
  recursivelyTraverseItems["recursivelyTraverseItems"]
  no_op["no_op"]
  assertValidBlockNesting["assertValidBlockNesting"]
  assertValidMutableRanges["assertValidMutableRanges"]
  visit["visit"]
  validateMutableRange["validateMutableRange"]
  buildReactiveScopeTerminalsHIR["buildReactiveScopeTerminalsHIR"]
  pushStartScopeTerminal["pushStartScopeTerminal"]
  pushEndScopeTerminal["pushEndScopeTerminal"]
  handleRewrite["handleRewrite"]
  collectHoistablePropertyLoads["collectHoistablePropertyLoads"]
  collectHoistablePropertyLoadsInInnerFn["collectHoistablePropertyLoadsInInnerFn"]
  collectHoistablePropertyLoadsImpl["collectHoistablePropertyLoadsImpl"]
  keyByScopeId["keyByScopeId"]
  PropertyPathRegistry_getOrCreateIdentifier["PropertyPathRegistry.getOrCreateIdentifier"]
  PropertyPathRegistry_getOrCreatePropertyEntry["PropertyPathRegistry.getOrCreatePropertyEntry"]
  PropertyPathRegistry_getOrCreateProperty["PropertyPathRegistry.getOrCreateProperty"]
  getMaybeNonNullInInstruction["getMaybeNonNullInInstruction"]
  isImmutableAtInstr["isImmutableAtInstr"]
  collectNonNullsInBlocks["collectNonNullsInBlocks"]
  propagateNonNull["propagateNonNull"]
  recursivelyPropagateNonNull["recursivelyPropagateNonNull"]
  assertNonNull["assertNonNull"]
  reduceMaybeOptionalChains["reduceMaybeOptionalChains"]
  getAssumedInvokedFunctions["getAssumedInvokedFunctions"]
  collectOptionalChainSidemap["collectOptionalChainSidemap"]
  traverseFunction["traverseFunction"]
  matchOptionalTestBlock["matchOptionalTestBlock"]
  traverseOptionalBlock["traverseOptionalBlock"]
  computeUnconditionalBlocks["computeUnconditionalBlocks"]
  defaultModuleTypeProvider["defaultModuleTypeProvider"]
  ReactiveScopeDependencyTreeHIR_constructor["ReactiveScopeDependencyTreeHIR.constructor"]
  ReactiveScopeDependencyTreeHIR__getOrCreateRoot["ReactiveScopeDependencyTreeHIR.#getOrCreateRoot"]
  ReactiveScopeDependencyTreeHIR_addDependency["ReactiveScopeDependencyTreeHIR.addDependency"]
  ReactiveScopeDependencyTreeHIR_deriveMinimalDependencies["ReactiveScopeDependencyTreeHIR.deriveMinimalDependencies"]
  ReactiveScopeDependencyTreeHIR_printDeps["ReactiveScopeDependencyTreeHIR.printDeps"]
  ReactiveScopeDependencyTreeHIR_debug["ReactiveScopeDependencyTreeHIR.debug"]
  ReactiveScopeDependencyTreeHIR__debugImpl["ReactiveScopeDependencyTreeHIR.#debugImpl"]
  isOptional["isOptional"]
  isDependency["isDependency"]
  merge["merge"]
  collectMinimalDependenciesInSubtree["collectMinimalDependenciesInSubtree"]
  printSubtree["printSubtree"]
  makeOrMergeProperty["makeOrMergeProperty"]
  computeDominatorTree["computeDominatorTree"]
  computePostDominatorTree["computePostDominatorTree"]
  Dominator_constructor["Dominator.constructor"]
  Dominator_entry["Dominator.entry"]
  Dominator_get["Dominator.get"]
  Dominator_debug["Dominator.debug"]
  PostDominator_constructor["PostDominator.constructor"]
  PostDominator_exit["PostDominator.exit"]
  PostDominator_get["PostDominator.get"]
  PostDominator_debug["PostDominator.debug"]
  computeImmediateDominators["computeImmediateDominators"]
  intersect["intersect"]
  buildGraph["buildGraph"]
  buildReverseGraph["buildReverseGraph"]
  findContextIdentifiers["findContextIdentifiers"]
  Unknown_AssignmentExpression["Unknown.AssignmentExpression"]
  Unknown_UpdateExpression["Unknown.UpdateExpression"]
  Unknown_Identifier["Unknown.Identifier"]
  handleIdentifier["handleIdentifier"]
  handleAssignment["handleAssignment"]
  nonNull["nonNull"]
  installTypeConfig["installTypeConfig"]
  getReanimatedModuleType["getReanimatedModuleType"]
  newBlock["newBlock"]
  HIRBuilder_nextIdentifierId["HIRBuilder.nextIdentifierId"]
  HIRBuilder_context["HIRBuilder.context"]
  HIRBuilder_bindings["HIRBuilder.bindings"]
  HIRBuilder_environment["HIRBuilder.environment"]
  HIRBuilder_constructor["HIRBuilder.constructor"]
  HIRBuilder_currentBlockKind["HIRBuilder.currentBlockKind"]
  HIRBuilder_push["HIRBuilder.push"]
  HIRBuilder_enterTryCatch["HIRBuilder.enterTryCatch"]
  HIRBuilder_resolveThrowHandler["HIRBuilder.resolveThrowHandler"]
  HIRBuilder_makeTemporary["HIRBuilder.makeTemporary"]
  HIRBuilder__resolveBabelBinding["HIRBuilder.#resolveBabelBinding"]
  HIRBuilder_resolveIdentifier["HIRBuilder.resolveIdentifier"]
  HIRBuilder_isContextIdentifier["HIRBuilder.isContextIdentifier"]
  HIRBuilder_resolveBinding["HIRBuilder.resolveBinding"]
  HIRBuilder_build["HIRBuilder.build"]
  HIRBuilder_terminate["HIRBuilder.terminate"]
  HIRBuilder_terminateWithContinuation["HIRBuilder.terminateWithContinuation"]
  HIRBuilder_reserve["HIRBuilder.reserve"]
  HIRBuilder_complete["HIRBuilder.complete"]
  HIRBuilder_enterReserved["HIRBuilder.enterReserved"]
  HIRBuilder_enter["HIRBuilder.enter"]
  HIRBuilder_label["HIRBuilder.label"]
  HIRBuilder_switch["HIRBuilder.switch"]
  HIRBuilder_loop["HIRBuilder.loop"]
  HIRBuilder_lookupBreak["HIRBuilder.lookupBreak"]
  HIRBuilder_lookupContinue["HIRBuilder.lookupContinue"]
  _shrink["_shrink"]
  resolveBlockTarget["resolveBlockTarget"]
  removeUnreachableForUpdates["removeUnreachableForUpdates"]
  removeDeadDoWhileStatements["removeDeadDoWhileStatements"]
  reversePostorderBlocks["reversePostorderBlocks"]
  getReversePostorderedBlocks["getReversePostorderedBlocks"]
  markInstructionIds["markInstructionIds"]
  markPredecessors["markPredecessors"]
  getTargetIfIndirection["getTargetIfIndirection"]
  removeUnnecessaryTryCatch["removeUnnecessaryTryCatch"]
  createTemporaryPlace["createTemporaryPlace"]
  clonePlaceToTemporary["clonePlaceToTemporary"]
  fixScopeAndIdentifierRanges["fixScopeAndIdentifierRanges"]
  mergeConsecutiveBlocks["mergeConsecutiveBlocks"]
  MergedBlocks_merge["MergedBlocks.merge"]
  MergedBlocks_get["MergedBlocks.get"]
  mergeOverlappingReactiveScopesHIR["mergeOverlappingReactiveScopesHIR"]
  collectScopeInfo["collectScopeInfo"]
  collectPlaceScope["collectPlaceScope"]
  visitInstructionId["visitInstructionId"]
  getOverlappingReactiveScopes["getOverlappingReactiveScopes"]
  printFunctionWithOutlined["printFunctionWithOutlined"]
  printFunction["printFunction"]
  printHIR["printHIR"]
  push["push"]
  printMixedHIR["printMixedHIR"]
  printInstruction["printInstruction"]
  printPhi["printPhi"]
  printTerminal["printTerminal"]
  printHole["printHole"]
  printObjectPropertyKey["printObjectPropertyKey"]
  printInstructionValue["printInstructionValue"]
  isMutable["isMutable"]
  printMutableRange["printMutableRange"]
  printLValue["printLValue"]
  printPattern["printPattern"]
  printPlace["printPlace"]
  printIdentifier["printIdentifier"]
  printName["printName"]
  printScope["printScope"]
  printManualMemoDependency["printManualMemoDependency"]
  printSourceLocation["printSourceLocation"]
  printSourceLocationLine["printSourceLocationLine"]
  printAliases["printAliases"]
  printAliasingEffect["printAliasingEffect"]
  printPlaceForAliasEffect["printPlaceForAliasEffect"]
  printAliasingSignature["printAliasingSignature"]
  propagateScopeDependenciesHIR["propagateScopeDependenciesHIR"]
  findTemporariesUsedOutsideDeclaringScope["findTemporariesUsedOutsideDeclaringScope"]
  handlePlace["handlePlace"]
  handleInstruction["handleInstruction"]
  collectTemporariesSidemap["collectTemporariesSidemap"]
  isLoadContextMutable["isLoadContextMutable"]
  collectTemporariesSidemapImpl["collectTemporariesSidemapImpl"]
  getProperty["getProperty"]
  DependencyCollectionContext_constructor["DependencyCollectionContext.constructor"]
  DependencyCollectionContext_enterScope["DependencyCollectionContext.enterScope"]
  DependencyCollectionContext_exitScope["DependencyCollectionContext.exitScope"]
  DependencyCollectionContext_isUsedOutsideDeclaringScope["DependencyCollectionContext.isUsedOutsideDeclaringScope"]
  DependencyCollectionContext_declare["DependencyCollectionContext.declare"]
  DependencyCollectionContext_hasDeclared["DependencyCollectionContext.hasDeclared"]
  DependencyCollectionContext__checkValidDependency["DependencyCollectionContext.#checkValidDependency"]
  DependencyCollectionContext__isScopeActive["DependencyCollectionContext.#isScopeActive"]
  DependencyCollectionContext_currentScope["DependencyCollectionContext.currentScope"]
  DependencyCollectionContext_visitOperand["DependencyCollectionContext.visitOperand"]
  DependencyCollectionContext_visitProperty["DependencyCollectionContext.visitProperty"]
  DependencyCollectionContext_visitDependency["DependencyCollectionContext.visitDependency"]
  DependencyCollectionContext_visitReassignment["DependencyCollectionContext.visitReassignment"]
  DependencyCollectionContext_enterInnerFn["DependencyCollectionContext.enterInnerFn"]
  DependencyCollectionContext_isDeferredDependency["DependencyCollectionContext.isDeferredDependency"]
  collectDependencies["collectDependencies"]
  handleFunction["handleFunction"]
  pruneUnusedLabelsHIR["pruneUnusedLabelsHIR"]
  buildDependencyInstructions["buildDependencyInstructions"]
  writeNonOptionalDependency["writeNonOptionalDependency"]
  writeOptionalDependency["writeOptionalDependency"]
  makeTypeId["makeTypeId"]
  makeType["makeType"]
  duplicateType["duplicateType"]
  typeEquals["typeEquals"]
  typeVarEquals["typeVarEquals"]
  typeKindCheck["typeKindCheck"]
  objectMethodTypeEquals["objectMethodTypeEquals"]
  propTypeEquals["propTypeEquals"]
  primitiveTypeEquals["primitiveTypeEquals"]
  polyTypeEquals["polyTypeEquals"]
  objectTypeEquals["objectTypeEquals"]
  funcTypeEquals["funcTypeEquals"]
  phiTypeEquals["phiTypeEquals"]
  doesPatternContainSpreadElement["doesPatternContainSpreadElement"]
  mapInstructionLValues["mapInstructionLValues"]
  mapInstructionOperands["mapInstructionOperands"]
  mapInstructionValueOperands["mapInstructionValueOperands"]
  mapCallArguments["mapCallArguments"]
  mapPatternOperands["mapPatternOperands"]
  mapTerminalSuccessors["mapTerminalSuccessors"]
  terminalHasFallthrough["terminalHasFallthrough"]
  terminalFallthrough["terminalFallthrough"]
  mapTerminalOperands["mapTerminalOperands"]
  ScopeBlockTraversal_recordScopes["ScopeBlockTraversal.recordScopes"]
  ScopeBlockTraversal_isScopeActive["ScopeBlockTraversal.isScopeActive"]
  ScopeBlockTraversal_currentScope["ScopeBlockTraversal.currentScope"]
  hashEffect["hashEffect"]
  analyseFunctions["analyseFunctions"]
  lowerWithMutationAliasing["lowerWithMutationAliasing"]
  createControlDominators["createControlDominators"]
  isControlledBlock["isControlledBlock"]
  postDominatorFrontier["postDominatorFrontier"]
  postDominatorsOf["postDominatorsOf"]
  collectMaybeMemoDependencies["collectMaybeMemoDependencies"]
  collectTemporaries["collectTemporaries"]
  makeManualMemoizationMarkers["makeManualMemoizationMarkers"]
  getManualMemoizationReplacement["getManualMemoizationReplacement"]
  extractManualMemoizationArgs["extractManualMemoizationArgs"]
  dropManualMemoization["dropManualMemoization"]
  findOptionalPlaces["findOptionalPlaces"]
  inferEffectDependencies["inferEffectDependencies"]
  truncateDepAtCurrent["truncateDepAtCurrent"]
  rewriteSplices["rewriteSplices"]
  inferReactiveIdentifiers["inferReactiveIdentifiers"]
  collectDepUsages["collectDepUsages"]
  inferMinimalDependencies["inferMinimalDependencies"]
  inferDependencies["inferDependencies"]
  inferDependenciesInFn["inferDependenciesInFn"]
  inferMutationAliasingRanges["inferMutationAliasingRanges"]
  appendFunctionErrors["appendFunctionErrors"]
  AliasingState_create["AliasingState.create"]
  AliasingState_createFrom["AliasingState.createFrom"]
  AliasingState_capture["AliasingState.capture"]
  AliasingState_assign["AliasingState.assign"]
  AliasingState_maybeAlias["AliasingState.maybeAlias"]
  AliasingState_render["AliasingState.render"]
  AliasingState_mutate["AliasingState.mutate"]
  StableSidemap_constructor["StableSidemap.constructor"]
  StableSidemap_handleInstruction["StableSidemap.handleInstruction"]
  StableSidemap_isStable["StableSidemap.isStable"]
  inferReactivePlaces["inferReactivePlaces"]
  propagateReactivityToInnerFunctions["propagateReactivityToInnerFunctions"]
  ReactivityMap_constructor["ReactivityMap.constructor"]
  ReactivityMap_isReactive["ReactivityMap.isReactive"]
  ReactivityMap_markReactive["ReactivityMap.markReactive"]
  ReactivityMap_snapshot["ReactivityMap.snapshot"]
  inlineImmediatelyInvokedFunctionExpressions["inlineImmediatelyInvokedFunctionExpressions"]
  hasSingleExitReturnTerminal["hasSingleExitReturnTerminal"]
  rewriteBlock["rewriteBlock"]
  declareTemporary["declareTemporary"]
  constantPropagation["constantPropagation"]
  constantPropagationImpl["constantPropagationImpl"]
  applyConstantPropagation["applyConstantPropagation"]
  evaluatePhi["evaluatePhi"]
  evaluateInstruction["evaluateInstruction"]
  read["read"]
  deadCodeElimination["deadCodeElimination"]
  State_constructor["State.constructor"]
  State_reference["State.reference"]
  State_isIdOrNameUsed["State.isIdOrNameUsed"]
  State_isIdUsed["State.isIdUsed"]
  State_count["State.count"]
  findReferencedIdentifiers["findReferencedIdentifiers"]
  rewriteInstruction["rewriteInstruction"]
  pruneableValue["pruneableValue"]
  hasBackEdge["hasBackEdge"]
  findBlocksWithBackEdges["findBlocksWithBackEdges"]
  inlineJsxTransform["inlineJsxTransform"]
  createSymbolProperty["createSymbolProperty"]
  createTagProperty["createTagProperty"]
  createPropsProperties["createPropsProperties"]
  handlelValue["handlelValue"]
  instructionReordering["instructionReordering"]
  findReferencedRangeOfTemporaries["findReferencedRangeOfTemporaries"]
  reference["reference"]
  reorderBlock["reorderBlock"]
  getDepth["getDepth"]
  print["print"]
  printNode["printNode"]
  emit["emit"]
  getReorderability["getReorderability"]
  lowerContextAccess["lowerContextAccess"]
  emitLoadLoweredContextCallee["emitLoadLoweredContextCallee"]
  getContextKeys["getContextKeys"]
  emitPropertyLoad["emitPropertyLoad"]
  emitSelectorFn["emitSelectorFn"]
  emitArrayInstr["emitArrayInstr"]
  optimizeForSSR["optimizeForSSR"]
  hasKnownNonRenderCall["hasKnownNonRenderCall"]
  isKnownEventHandler["isKnownEventHandler"]
  optimizePropsMethodCalls["optimizePropsMethodCalls"]
  outlineFunctions["outlineFunctions"]
  outlineJSX["outlineJSX"]
  outlineJsxImpl["outlineJsxImpl"]
  processAndOutlineJSX["processAndOutlineJSX"]
  process["process"]
  collectProps["collectProps"]
  generateName["generateName"]
  emitOutlinedJsx["emitOutlinedJsx"]
  emitOutlinedFn["emitOutlinedFn"]
  emitLoadGlobals["emitLoadGlobals"]
  emitUpdatedJsx["emitUpdatedJsx"]
  createOldToNewPropsMapping["createOldToNewPropsMapping"]
  emitDestructureProps["emitDestructureProps"]
  pruneMaybeThrows["pruneMaybeThrows"]
  pruneMaybeThrowsImpl["pruneMaybeThrowsImpl"]
  instructionMayThrow["instructionMayThrow"]
  alignMethodCallScopes["alignMethodCallScopes"]
  findScopesToMerge["findScopesToMerge"]
  alignObjectMethodScopes["alignObjectMethodScopes"]
  alignReactiveScopesToBlockScopesHIR["alignReactiveScopesToBlockScopesHIR"]
  recordPlace["recordPlace"]
  _debug["_debug"]
  _printNode["_printNode"]
  assertScopeInstructionsWithinScopes["assertScopeInstructionsWithinScopes"]
  FindAllScopesVisitor_visitScope["FindAllScopesVisitor.visitScope"]
  CheckInstructionsAgainstScopesVisitor_visitPlace["CheckInstructionsAgainstScopesVisitor.visitPlace"]
  CheckInstructionsAgainstScopesVisitor_visitScope["CheckInstructionsAgainstScopesVisitor.visitScope"]
  assertWellFormedBreakTargets["assertWellFormedBreakTargets"]
  Visitor_visitTerminal["Visitor.visitTerminal"]
  Visitor_visitLValue["Visitor.visitLValue"]
  Visitor_visitPlace["Visitor.visitPlace"]
  Visitor_visitPrunedScope["Visitor.visitPrunedScope"]
  isStableRefType["isStableRefType"]
  collectReactiveIdentifiers["collectReactiveIdentifiers"]
  collectReferencedGlobals["collectReferencedGlobals"]
  Visitor_visitValue["Visitor.visitValue"]
  Visitor_visitReactiveFunctionValue["Visitor.visitReactiveFunctionValue"]
  extractScopeDeclarationsFromDestructuring["extractScopeDeclarationsFromDestructuring"]
  Visitor_visitScope["Visitor.visitScope"]
  Visitor_transformInstruction["Visitor.transformInstruction"]
  transformDestructuring["transformDestructuring"]
  flattenReactiveLoopsHIR["flattenReactiveLoopsHIR"]
  flattenScopesWithHooksOrUseHIR["flattenScopesWithHooksOrUseHIR"]
  inferReactiveScopeVariables["inferReactiveScopeVariables"]
  mergeLocation["mergeLocation"]
  inRange["inRange"]
  mayAllocate["mayAllocate"]
  findDisjointMutableValues["findDisjointMutableValues"]
  declareIdentifier["declareIdentifier"]
  memoizeFbtAndMacroOperandsInSameScope["memoizeFbtAndMacroOperandsInSameScope"]
  populateMacroTags["populateMacroTags"]
  mergeMacroArguments["mergeMacroArguments"]
  expandFbtScopeRange["expandFbtScopeRange"]
  visitOperands["visitOperands"]
  mergeReactiveScopesThatInvalidateTogether["mergeReactiveScopesThatInvalidateTogether"]
  FindLastUsageVisitor_visitPlace["FindLastUsageVisitor.visitPlace"]
  Transform_constructor["Transform.constructor"]
  Transform_transformScope["Transform.transformScope"]
  Transform_visitBlock["Transform.visitBlock"]
  reset["reset"]
  updateScopeDeclarations["updateScopeDeclarations"]
  areLValuesLastUsedByScope["areLValuesLastUsedByScope"]
  canMergeScopes["canMergeScopes"]
  isAlwaysInvalidatingType["isAlwaysInvalidatingType"]
  areEqualDependencies["areEqualDependencies"]
  scopeIsEligibleForMerging["scopeIsEligibleForMerging"]
  printReactiveFunctionWithOutlined["printReactiveFunctionWithOutlined"]
  printReactiveFunction["printReactiveFunction"]
  writeReactiveFunction["writeReactiveFunction"]
  printReactiveScopeSummary["printReactiveScopeSummary"]
  writeReactiveBlock["writeReactiveBlock"]
  writePrunedScope["writePrunedScope"]
  printDependency["printDependency"]
  printReactiveInstructions["printReactiveInstructions"]
  writeReactiveInstructions["writeReactiveInstructions"]
  writeReactiveInstruction["writeReactiveInstruction"]
  printReactiveValue["printReactiveValue"]
  writeReactiveValue["writeReactiveValue"]
  printReactiveTerminal["printReactiveTerminal"]
  writeTerminal["writeTerminal"]
  Writer_constructor["Writer.constructor"]
  Writer_complete["Writer.complete"]
  Writer_append["Writer.append"]
  Writer_newline["Writer.newline"]
  Writer_write["Writer.write"]
  Writer_writeLine["Writer.writeLine"]
  Writer_indented["Writer.indented"]
  PromoteTemporaries_visitScope["PromoteTemporaries.visitScope"]
  PromoteTemporaries_visitPrunedScope["PromoteTemporaries.visitPrunedScope"]
  PromoteTemporaries_visitParam["PromoteTemporaries.visitParam"]
  PromoteTemporaries_visitValue["PromoteTemporaries.visitValue"]
  PromoteTemporaries_visitReactiveFunctionValue["PromoteTemporaries.visitReactiveFunctionValue"]
  PromoteAllInstancedOfPromotedTemporaries_visitPlace["PromoteAllInstancedOfPromotedTemporaries.visitPlace"]
  PromoteAllInstancedOfPromotedTemporaries_visitLValue["PromoteAllInstancedOfPromotedTemporaries.visitLValue"]
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers["PromoteAllInstancedOfPromotedTemporaries.traverseScopeIdentifiers"]
  PromoteAllInstancedOfPromotedTemporaries_visitScope["PromoteAllInstancedOfPromotedTemporaries.visitScope"]
  PromoteAllInstancedOfPromotedTemporaries_visitPrunedScope["PromoteAllInstancedOfPromotedTemporaries.visitPrunedScope"]
  PromoteAllInstancedOfPromotedTemporaries_visitReactiveFunctionValue["PromoteAllInstancedOfPromotedTemporaries.visitReactiveFunctionValue"]
  CollectPromotableTemporaries_visitPlace["CollectPromotableTemporaries.visitPlace"]
  CollectPromotableTemporaries_visitValue["CollectPromotableTemporaries.visitValue"]
  CollectPromotableTemporaries_visitPrunedScope["CollectPromotableTemporaries.visitPrunedScope"]
  CollectPromotableTemporaries_visitScope["CollectPromotableTemporaries.visitScope"]
  PromoteInterposedTemporaries_constructor["PromoteInterposedTemporaries.constructor"]
  PromoteInterposedTemporaries_visitPlace["PromoteInterposedTemporaries.visitPlace"]
  PromoteInterposedTemporaries_visitInstruction["PromoteInterposedTemporaries.visitInstruction"]
  promoteUsedTemporaries["promoteUsedTemporaries"]
  promoteIdentifier["promoteIdentifier"]
  propagateEarlyReturns["propagateEarlyReturns"]
  Transform_visitScope["Transform.visitScope"]
  Transform_transformTerminal["Transform.transformTerminal"]
  pruneAllReactiveScopes["pruneAllReactiveScopes"]
  pruneAlwaysInvalidatingScopes["pruneAlwaysInvalidatingScopes"]
  Transform_transformInstruction["Transform.transformInstruction"]
  pruneHoistedContexts["pruneHoistedContexts"]
  Visitor_constructor["Visitor.constructor"]
  Visitor_join["Visitor.join"]
  join2["join2"]
  Visitor_isCreateOnlyHook["Visitor.isCreateOnlyHook"]
  Visitor_visitBlock["Visitor.visitBlock"]
  Visitor_visitInstruction["Visitor.visitInstruction"]
  visitCallOrMethodNonArgs["visitCallOrMethodNonArgs"]
  pruneInitializationDependencies["pruneInitializationDependencies"]
  update["update"]
  AliasVisitor_visitInstruction["AliasVisitor.visitInstruction"]
  getAliases["getAliases"]
  pruneNonReactiveDependencies["pruneNonReactiveDependencies"]
  pruneUnusedLValues["pruneUnusedLValues"]
  pruneUnusedLabels["pruneUnusedLabels"]
  pruneUnusedScopes["pruneUnusedScopes"]
  Transform_visitTerminal["Transform.visitTerminal"]
  hasOwnDeclaration["hasOwnDeclaration"]
  renameVariables["renameVariables"]
  renameVariablesImpl["renameVariablesImpl"]
  Visitor_visitParam["Visitor.visitParam"]
  Scopes_constructor["Scopes.constructor"]
  Scopes_visit["Scopes.visit"]
  Scopes__lookup["Scopes.#lookup"]
  Scopes_enter["Scopes.enter"]
  stabilizeBlockIds["stabilizeBlockIds"]
  CollectReferencedLabels_visitScope["CollectReferencedLabels.visitScope"]
  CollectReferencedLabels_visitTerminal["CollectReferencedLabels.visitTerminal"]
  RewriteBlockIds_visitScope["RewriteBlockIds.visitScope"]
  RewriteBlockIds_visitTerminal["RewriteBlockIds.visitTerminal"]
  visitReactiveFunction["visitReactiveFunction"]
  ReactiveFunctionVisitor_visitID["ReactiveFunctionVisitor.visitID"]
  ReactiveFunctionVisitor_visitParam["ReactiveFunctionVisitor.visitParam"]
  ReactiveFunctionVisitor_visitLValue["ReactiveFunctionVisitor.visitLValue"]
  ReactiveFunctionVisitor_visitPlace["ReactiveFunctionVisitor.visitPlace"]
  ReactiveFunctionVisitor_visitReactiveFunctionValue["ReactiveFunctionVisitor.visitReactiveFunctionValue"]
  ReactiveFunctionVisitor_visitValue["ReactiveFunctionVisitor.visitValue"]
  ReactiveFunctionVisitor_traverseValue["ReactiveFunctionVisitor.traverseValue"]
  ReactiveFunctionVisitor_visitInstruction["ReactiveFunctionVisitor.visitInstruction"]
  ReactiveFunctionVisitor_traverseInstruction["ReactiveFunctionVisitor.traverseInstruction"]
  ReactiveFunctionVisitor_visitTerminal["ReactiveFunctionVisitor.visitTerminal"]
  ReactiveFunctionVisitor_traverseTerminal["ReactiveFunctionVisitor.traverseTerminal"]
  ReactiveFunctionVisitor_visitScope["ReactiveFunctionVisitor.visitScope"]
  ReactiveFunctionVisitor_traverseScope["ReactiveFunctionVisitor.traverseScope"]
  ReactiveFunctionVisitor_visitPrunedScope["ReactiveFunctionVisitor.visitPrunedScope"]
  ReactiveFunctionVisitor_traversePrunedScope["ReactiveFunctionVisitor.traversePrunedScope"]
  ReactiveFunctionVisitor_visitBlock["ReactiveFunctionVisitor.visitBlock"]
  ReactiveFunctionVisitor_traverseBlock["ReactiveFunctionVisitor.traverseBlock"]
  ReactiveFunctionVisitor_visitHirFunction["ReactiveFunctionVisitor.visitHirFunction"]
  ReactiveFunctionTransform_traverseBlock["ReactiveFunctionTransform.traverseBlock"]
  ReactiveFunctionTransform_transformInstruction["ReactiveFunctionTransform.transformInstruction"]
  ReactiveFunctionTransform_transformTerminal["ReactiveFunctionTransform.transformTerminal"]
  ReactiveFunctionTransform_transformScope["ReactiveFunctionTransform.transformScope"]
  ReactiveFunctionTransform_transformPrunedScope["ReactiveFunctionTransform.transformPrunedScope"]
  ReactiveFunctionTransform_transformValue["ReactiveFunctionTransform.transformValue"]
  ReactiveFunctionTransform_transformReactiveFunctionValue["ReactiveFunctionTransform.transformReactiveFunctionValue"]
  ReactiveFunctionTransform_traverseValue["ReactiveFunctionTransform.traverseValue"]
  ReactiveFunctionTransform_traverseInstruction["ReactiveFunctionTransform.traverseInstruction"]
  ReactiveFunctionTransform_traverseTerminal["ReactiveFunctionTransform.traverseTerminal"]
  mapTerminalBlocks["mapTerminalBlocks"]
  eliminateRedundantPhi["eliminateRedundantPhi"]
  rewritePlace["rewritePlace"]
  SSABuilder_constructor["SSABuilder.constructor"]
  SSABuilder_nextSsaId["SSABuilder.nextSsaId"]
  SSABuilder_defineFunction["SSABuilder.defineFunction"]
  SSABuilder_enter["SSABuilder.enter"]
  SSABuilder_state["SSABuilder.state"]
  SSABuilder_makeId["SSABuilder.makeId"]
  SSABuilder_defineContext["SSABuilder.defineContext"]
  SSABuilder_definePlace["SSABuilder.definePlace"]
  SSABuilder_getPlace["SSABuilder.getPlace"]
  SSABuilder_getIdAt["SSABuilder.getIdAt"]
  SSABuilder_addPhi["SSABuilder.addPhi"]
  SSABuilder_fixIncompletePhis["SSABuilder.fixIncompletePhis"]
  SSABuilder_startBlock["SSABuilder.startBlock"]
  SSABuilder_print["SSABuilder.print"]
  enterSSA["enterSSA"]
  enterSSAImpl["enterSSAImpl"]
  rewriteInstructionKindsBasedOnReassignment["rewriteInstructionKindsBasedOnReassignment"]
  nameAnonymousFunctions["nameAnonymousFunctions"]
  nameAnonymousFunctionsImpl["nameAnonymousFunctionsImpl"]
  transformFire["transformFire"]
  replaceFireFunctions["replaceFireFunctions"]
  visitFunctionExpressionAndPropagateFireDependencies["visitFunctionExpressionAndPropagateFireDependencies"]
  ensureNoRemainingCalleeCaptures["ensureNoRemainingCalleeCaptures"]
  ensureNoMoreFireUses["ensureNoMoreFireUses"]
  makeLoadUseFireInstruction["makeLoadUseFireInstruction"]
  makeLoadFireCalleeInstruction["makeLoadFireCalleeInstruction"]
  makeCallUseFireInstruction["makeCallUseFireInstruction"]
  makeStoreUseFireInstruction["makeStoreUseFireInstruction"]
  Context_constructor["Context.constructor"]
  Context_pushError["Context.pushError"]
  Context_withFunctionScope["Context.withFunctionScope"]
  Context_withUseEffectLambdaScope["Context.withUseEffectLambdaScope"]
  Context_addCallExpression["Context.addCallExpression"]
  Context_getCallExpression["Context.getCallExpression"]
  Context_addLoadLocalInstr["Context.addLoadLocalInstr"]
  Context_getLoadLocalInstr["Context.getLoadLocalInstr"]
  Context_getOrGenerateFireFunctionBinding["Context.getOrGenerateFireFunctionBinding"]
  Context_mergeCalleesFromInnerScope["Context.mergeCalleesFromInnerScope"]
  Context_addCalleeWithInsertedFire["Context.addCalleeWithInsertedFire"]
  Context_hasCalleeWithInsertedFire["Context.hasCalleeWithInsertedFire"]
  Context_inUseEffectLambda["Context.inUseEffectLambda"]
  Context_addFunctionExpression["Context.addFunctionExpression"]
  Context_getFunctionExpression["Context.getFunctionExpression"]
  Context_addLoadGlobalInstrId["Context.addLoadGlobalInstrId"]
  Context_getLoadGlobalInstrId["Context.getLoadGlobalInstrId"]
  Context_addArrayExpression["Context.addArrayExpression"]
  Context_getArrayExpression["Context.getArrayExpression"]
  Context_hasErrors["Context.hasErrors"]
  Context_throwIfErrorsFound["Context.throwIfErrorsFound"]
  deleteInstructions["deleteInstructions"]
  rewriteInstructions["rewriteInstructions"]
  isPrimitiveBinaryOp["isPrimitiveBinaryOp"]
  inferTypes["inferTypes"]
  apply["apply"]
  equation["equation"]
  setName["setName"]
  getName["getName"]
  Unifier_constructor["Unifier.constructor"]
  Unifier_unify["Unifier.unify"]
  Unifier_bindVariableTo["Unifier.bindVariableTo"]
  Unifier_tryResolveType["Unifier.tryResolveType"]
  Unifier_occursCheck["Unifier.occursCheck"]
  Unifier_get["Unifier.get"]
  isRefLikeName["isRefLikeName"]
  tryUnionTypes["tryUnionTypes"]
  parseComponentDeclaration["parseComponentDeclaration"]
  DisjointSet_union["DisjointSet.union"]
  DisjointSet_find["DisjointSet.find"]
  DisjointSet_has["DisjointSet.has"]
  DisjointSet_canonicalize["DisjointSet.canonicalize"]
  DisjointSet_forEach["DisjointSet.forEach"]
  DisjointSet_buildSets["DisjointSet.buildSets"]
  DisjointSet_size["DisjointSet.size"]
  isHookDeclaration["isHookDeclaration"]
  parseHookDeclaration["parseHookDeclaration"]
  isReservedWord["isReservedWord"]
  Ok["Ok"]
  OkImpl_constructor["OkImpl.constructor"]
  OkImpl_map["OkImpl.map"]
  OkImpl_mapErr["OkImpl.mapErr"]
  OkImpl_mapOr["OkImpl.mapOr"]
  OkImpl_mapOrElse["OkImpl.mapOrElse"]
  OkImpl_andThen["OkImpl.andThen"]
  OkImpl_and["OkImpl.and"]
  OkImpl_or["OkImpl.or"]
  OkImpl_orElse["OkImpl.orElse"]
  OkImpl_isOk["OkImpl.isOk"]
  OkImpl_isErr["OkImpl.isErr"]
  OkImpl_expect["OkImpl.expect"]
  OkImpl_expectErr["OkImpl.expectErr"]
  OkImpl_unwrap["OkImpl.unwrap"]
  OkImpl_unwrapOr["OkImpl.unwrapOr"]
  OkImpl_unwrapOrElse["OkImpl.unwrapOrElse"]
  OkImpl_unwrapErr["OkImpl.unwrapErr"]
  Err["Err"]
  ErrImpl_constructor["ErrImpl.constructor"]
  ErrImpl_map["ErrImpl.map"]
  ErrImpl_mapErr["ErrImpl.mapErr"]
  ErrImpl_mapOr["ErrImpl.mapOr"]
  ErrImpl_mapOrElse["ErrImpl.mapOrElse"]
  ErrImpl_andThen["ErrImpl.andThen"]
  ErrImpl_and["ErrImpl.and"]
  ErrImpl_or["ErrImpl.or"]
  ErrImpl_orElse["ErrImpl.orElse"]
  ErrImpl_isOk["ErrImpl.isOk"]
  ErrImpl_isErr["ErrImpl.isErr"]
  ErrImpl_expect["ErrImpl.expect"]
  ErrImpl_expectErr["ErrImpl.expectErr"]
  ErrImpl_unwrap["ErrImpl.unwrap"]
  ErrImpl_unwrapOr["ErrImpl.unwrapOr"]
  ErrImpl_unwrapOrElse["ErrImpl.unwrapOrElse"]
  ErrImpl_unwrapErr["ErrImpl.unwrapErr"]
  _assertStackInterface["_assertStackInterface"]
  create["create"]
  empty["empty"]
  Node_constructor["Node.constructor"]
  Node_push["Node.push"]
  Node_pop["Node.pop"]
  Node_find["Node.find"]
  Node_contains["Node.contains"]
  Node_each["Node.each"]
  Node_value["Node.value"]
  Node_print["Node.print"]
  Empty_push["Empty.push"]
  Empty_pop["Empty.pop"]
  Empty_find["Empty.find"]
  Empty_contains["Empty.contains"]
  Empty_each["Empty.each"]
  Empty_value["Empty.value"]
  Empty_print["Empty.print"]
  tryParseTestPragmaValue["tryParseTestPragmaValue"]
  parseConfigPragmaEnvironmentForTest["parseConfigPragmaEnvironmentForTest"]
  parseConfigPragmaForTests["parseConfigPragmaForTests"]
  todo["todo"]
  todoInvariant["todoInvariant"]
  assertExhaustive["assertExhaustive"]
  retainWhere["retainWhere"]
  retainWhere_Set["retainWhere_Set"]
  getOrInsertWith["getOrInsertWith"]
  getOrInsertDefault["getOrInsertDefault"]
  Set_equal["Set_equal"]
  Set_union["Set_union"]
  Set_intersect["Set_intersect"]
  Set_isSuperset["Set_isSuperset"]
  Iterable_some["Iterable_some"]
  Set_filter["Set_filter"]
  hasNode["hasNode"]
  hasOwnProperty["hasOwnProperty"]
  validateContextVariableLValues["validateContextVariableLValues"]
  validateContextVariableLValuesImpl["validateContextVariableLValuesImpl"]
  joinKinds["joinKinds"]
  validateHooksUsage["validateHooksUsage"]
  recordError["recordError"]
  recordConditionalHookError["recordConditionalHookError"]
  recordInvalidHookUsageError["recordInvalidHookUsageError"]
  recordDynamicHookUsageError["recordDynamicHookUsageError"]
  getKindForPlace["getKindForPlace"]
  setKind["setKind"]
  visitFunctionExpression["visitFunctionExpression"]
  validateLocalsNotReassignedAfterRender["validateLocalsNotReassignedAfterRender"]
  getContextReassignment["getContextReassignment"]
  validateMemoizedEffectDependencies["validateMemoizedEffectDependencies"]
  isUnmemoized["isUnmemoized"]
  isEffectHook["isEffectHook"]
  validateNoCapitalizedCalls["validateNoCapitalizedCalls"]
  isAllowed["isAllowed"]
  validateNoDerivedComputationsInEffects["validateNoDerivedComputationsInEffects"]
  validateEffect["validateEffect"]
  DerivationCache_takeSnapshot["DerivationCache.takeSnapshot"]
  DerivationCache_checkForChanges["DerivationCache.checkForChanges"]
  DerivationCache_snapshot["DerivationCache.snapshot"]
  DerivationCache_addDerivationEntry["DerivationCache.addDerivationEntry"]
  DerivationCache_isDerivationEqual["DerivationCache.isDerivationEqual"]
  isNamedIdentifier["isNamedIdentifier"]
  validateNoDerivedComputationsInEffects_exp["validateNoDerivedComputationsInEffects_exp"]
  recordPhiDerivations["recordPhiDerivations"]
  joinValue["joinValue"]
  getRootSetState["getRootSetState"]
  maybeRecordSetState["maybeRecordSetState"]
  recordInstructionDerivations["recordInstructionDerivations"]
  buildTreeNode["buildTreeNode"]
  renderTree["renderTree"]
  getFnLocalDeps["getFnLocalDeps"]
  validateNoFreezingKnownMutableFunctions["validateNoFreezingKnownMutableFunctions"]
  visitOperand["visitOperand"]
  validateNoImpureFunctionsInRender["validateNoImpureFunctionsInRender"]
  validateNoJSXInTryStatement["validateNoJSXInTryStatement"]
  makeRefId["makeRefId"]
  nextRefId["nextRefId"]
  Env_lookup["Env.lookup"]
  Env_define["Env.define"]
  Env_resetChanged["Env.resetChanged"]
  Env_hasChanged["Env.hasChanged"]
  Env_get["Env.get"]
  Env_set["Env.set"]
  validateNoRefAccessInRender["validateNoRefAccessInRender"]
  refTypeOfType["refTypeOfType"]
  isEventHandlerType["isEventHandlerType"]
  tyEqual["tyEqual"]
  joinRefAccessTypes["joinRefAccessTypes"]
  joinRefAccessRefTypes["joinRefAccessRefTypes"]
  validateNoRefAccessInRenderImpl["validateNoRefAccessInRenderImpl"]
  destructure["destructure"]
  guardCheck["guardCheck"]
  validateNoRefValueAccess["validateNoRefValueAccess"]
  validateNoRefPassedToFunction["validateNoRefPassedToFunction"]
  validateNoRefUpdate["validateNoRefUpdate"]
  validateNoDirectRefValueAccess["validateNoDirectRefValueAccess"]
  validateNoSetStateInEffects["validateNoSetStateInEffects"]
  getSetStateCall["getSetStateCall"]
  isDerivedFromRef["isDerivedFromRef"]
  validateNoSetStateInRender["validateNoSetStateInRender"]
  validateNoSetStateInRenderImpl["validateNoSetStateInRenderImpl"]
  validatePreservedManualMemoization["validatePreservedManualMemoization"]
  prettyPrintScopeDependency["prettyPrintScopeDependency"]
  getCompareDependencyResultDescription["getCompareDependencyResultDescription"]
  compareDeps["compareDeps"]
  validateInferredDep["validateInferredDep"]
  Visitor_recordDepsInValue["Visitor.recordDepsInValue"]
  Visitor_recordTemporaries["Visitor.recordTemporaries"]
  isManualMemoization["isManualMemoization"]
  locationKey["locationKey"]
  validateSourceLocations["validateSourceLocations"]
  collectGeneratedLocations["collectGeneratedLocations"]
  reportMissingLocation["reportMissingLocation"]
  reportWrongNodeType["reportWrongNodeType"]
  validateStaticComponents["validateStaticComponents"]
  validateUseMemo["validateUseMemo"]
  validateNoContextVariableAssignment["validateNoContextVariableAssignment"]
  hasNonVoidReturn["hasNonVoidReturn"]
  skip["skip (external)"]
  isBlockStatement["isBlockStatement (external)"]
  unshift["unshift (external)"]
  traverse["traverse (external)"]
  isFunctionDeclaration["isFunctionDeclaration (external)"]
  expressionStatement["expressionStatement (external)"]
  unaryExpression["unaryExpression (external)"]
  memberExpression["memberExpression (external)"]
  identifier["identifier (external)"]
  callExpression["callExpression (external)"]
  stringLiteral["stringLiteral (external)"]
  call["call (external)"]
  get["get (external)"]
  isFunctionExpression["isFunctionExpression (external)"]
  isArrowFunctionExpression["isArrowFunctionExpression (external)"]
  test["test (external)"]
  isIdentifier["isIdentifier (external)"]
  isMemberExpression["isMemberExpression (external)"]
  isCallExpression["isCallExpression (external)"]
  isExpression["isExpression (external)"]
  isVariableDeclarator["isVariableDeclarator (external)"]
  isAssignmentExpression["isAssignmentExpression (external)"]
  isProperty["isProperty (external)"]
  isLVal["isLVal (external)"]
  isAssignmentPattern["isAssignmentPattern (external)"]
  split["split (external)"]
  match["match (external)"]
  join["join (external)"]
  map["map (external)"]
  slice["slice (external)"]
  mark["mark (external)"]
  compileProgram["compileProgram (external)"]
  withPrintedMessage["withPrintedMessage (external)"]
  measure["measure (external)"]
  logEvent["logEvent (external)"]
  parse["parse (external)"]
  transformFromAstSync["transformFromAstSync (external)"]
  invariant["invariant (external)"]
  newUid["newUid (external)"]
  replaceInline["replaceInline (external)"]
  restElement["restElement (external)"]
  spreadElement["spreadElement (external)"]
  insertAfter["insertAfter (external)"]
  functionDeclaration["functionDeclaration (external)"]
  blockStatement["blockStatement (external)"]
  ifStatement["ifStatement (external)"]
  returnStatement["returnStatement (external)"]
  fn["fn (external)"]
  insertBefore["insertBefore (external)"]
  variableDeclaration["variableDeclaration (external)"]
  variableDeclarator["variableDeclarator (external)"]
  addImportSpecifier["addImportSpecifier (external)"]
  conditionalExpression["conditionalExpression (external)"]
  replaceWith["replaceWith (external)"]
  exportDefaultDeclaration["exportDefaultDeclaration (external)"]
  has["has (external)"]
  hasAnyErrors["hasAnyErrors (external)"]
  getReactCompilerRuntimeModule["getReactCompilerRuntimeModule (external)"]
  exec["exec (external)"]
  hasBinding["hasBinding (external)"]
  hasGlobal["hasGlobal (external)"]
  hasReference["hasReference (external)"]
  add["add (external)"]
  generateUid["generateUid (external)"]
  set["set (external)"]
  getBinding["getBinding (external)"]
  sort["sort (external)"]
  entries["entries (external)"]
  localeCompare["localeCompare (external)"]
  values["values (external)"]
  importSpecifier["importSpecifier (external)"]
  pushContainer["pushContainer (external)"]
  importDeclaration["importDeclaration (external)"]
  objectPattern["objectPattern (external)"]
  objectProperty["objectProperty (external)"]
  unshiftContainer["unshiftContainer (external)"]
  every["every (external)"]
  isImportSpecifier["isImportSpecifier (external)"]
  toLowerCase["toLowerCase (external)"]
  parseEnvironmentConfig["parseEnvironmentConfig (external)"]
  isErr["isErr (external)"]
  throwInvalidConfig["throwInvalidConfig (external)"]
  toString["toString (external)"]
  unwrapErr["unwrapErr (external)"]
  unwrap["unwrap (external)"]
  tryParseExternalFunction["tryParseExternalFunction (external)"]
  safeParse["safeParse (external)"]
  fromZodError["fromZodError (external)"]
  debugLogIRs["debugLogIRs (external)"]
  prettyFormat["prettyFormat (external)"]
  lower["lower (external)"]
  inferMutationAliasingEffects["inferMutationAliasingEffects (external)"]
  logErrors["logErrors (external)"]
  validateExhaustiveDependencies["validateExhaustiveDependencies (external)"]
  buildReactiveFunction["buildReactiveFunction (external)"]
  pruneNonEscapingScopes["pruneNonEscapingScopes (external)"]
  codegenFunction["codegenFunction (external)"]
  resolve["resolve (external)"]
  indexOf["indexOf (external)"]
  isArray["isArray (external)"]
  pushDiagnostic["pushDiagnostic (external)"]
  withDetails["withDetails (external)"]
  trim["trim (external)"]
  throwDiagnostic["throwDiagnostic (external)"]
  some["some (external)"]
  bind["bind (external)"]
  crawl["crawl (external)"]
  checkFn["checkFn (external)"]
  isAncestor["isAncestor (external)"]
  throwInvalidJS["throwInvalidJS (external)"]
  isInteger["isInteger (external)"]
  keys["keys (external)"]
  stringify["stringify (external)"]
  mixed["mixed (external)"]
  enum["enum (external)"]
  class["class (external)"]
  number["number (external)"]
  string["string (external)"]
  boolean["boolean (external)"]
  void["void (external)"]
  array["array (external)"]
  tuple["tuple (external)"]
  object["object (external)"]
  function["function (external)"]
  forEach["forEach (external)"]
  component["component (external)"]
  generic["generic (external)"]
  filter["filter (external)"]
  union["union (external)"]
  flowTypeProvider["flowTypeProvider (external)"]
  splice["splice (external)"]
  f["f (external)"]
  onMismatch["onMismatch (external)"]
  onChildMismatch["onChildMismatch (external)"]
  onChild["onChild (external)"]
  eachInstructionLValue["eachInstructionLValue (external)"]
  eachInstructionValueOperand["eachInstructionValueOperand (external)"]
  eachTerminalOperand["eachTerminalOperand (external)"]
  includes["includes (external)"]
  eachTerminalSuccessor["eachTerminalSuccessor (external)"]
  eachInstructionOperand["eachInstructionOperand (external)"]
  getRange["getRange (external)"]
  exit["exit (external)"]
  enter["enter (external)"]
  pop["pop (external)"]
  reverse["reverse (external)"]
  at["at (external)"]
  delete["delete (external)"]
  concat["concat (external)"]
  getOrCreatePropertyEntry["getOrCreatePropertyEntry (external)"]
  getOrCreateProperty["getOrCreateProperty (external)"]
  getOrCreateIdentifier["getOrCreateIdentifier (external)"]
  from["from (external)"]
  clear["clear (external)"]
  getHookKind["getHookKind (external)"]
  throwTodo["throwTodo (external)"]
  _getOrCreateRoot["#getOrCreateRoot (external)"]
  flat["flat (external)"]
  repeat["repeat (external)"]
  isReferencedIdentifier["isReferencedIdentifier (external)"]
  isObjectProperty["isObjectProperty (external)"]
  isRestElement["isRestElement (external)"]
  addFunction["addFunction (external)"]
  addHook["addHook (external)"]
  addObject["addObject (external)"]
  makeBlockId["makeBlockId (external)"]
  makeInstructionId["makeInstructionId (external)"]
  makeTemporaryIdentifier["makeTemporaryIdentifier (external)"]
  isImportDefaultSpecifier["isImportDefaultSpecifier (external)"]
  isImportNamespaceSpecifier["isImportNamespaceSpecifier (external)"]
  rename["rename (external)"]
  isContextIdentifier["isContextIdentifier (external)"]
  makeDeclarationId["makeDeclarationId (external)"]
  makeIdentifierName["makeIdentifierName (external)"]
  addNewReference["addNewReference (external)"]
  shift["shift (external)"]
  min["min (external)"]
  max["max (external)"]
  find["find (external)"]
  getPlaceScope["getPlaceScope (external)"]
  getOutlinedFunctions["getOutlinedFunctions (external)"]
  String["String (external)"]
  buildSets["buildSets (external)"]
  addDependency["addDependency (external)"]
  deriveMinimalDependencies["deriveMinimalDependencies (external)"]
  areEqualPaths["areEqualPaths (external)"]
  isScopeActive["isScopeActive (external)"]
  recordScopes["recordScopes (external)"]
  isRefValueType["isRefValueType (external)"]
  isObjectMethodType["isObjectMethodType (external)"]
  each["each (external)"]
  isUseRefType["isUseRefType (external)"]
  cb["cb (external)"]
  declare["declare (external)"]
  isDeferredDependency["isDeferredDependency (external)"]
  visitProperty["visitProperty (external)"]
  visitReassignment["visitReassignment (external)"]
  convertHoistedLValueKind["convertHoistedLValueKind (external)"]
  eachPatternOperand["eachPatternOperand (external)"]
  hasDeclared["hasDeclared (external)"]
  enterScope["enterScope (external)"]
  exitScope["exitScope (external)"]
  visitDependency["visitDependency (external)"]
  enterInnerFn["enterInnerFn (external)"]
  terminate["terminate (external)"]
  build["build (external)"]
  reserve["reserve (external)"]
  currentBlockKind["currentBlockKind (external)"]
  lowerValueToTemporary["lowerValueToTemporary (external)"]
  findIndex["findIndex (external)"]
  enterReserved["enterReserved (external)"]
  terminateWithContinuation["terminateWithContinuation (external)"]
  primaryLocation["primaryLocation (external)"]
  isControlVariable["isControlVariable (external)"]
  getGlobalDeclaration["getGlobalDeclaration (external)"]
  getHookKindForType["getHookKindForType (external)"]
  asResult["asResult (external)"]
  isSetStateType["isSetStateType (external)"]
  isFireFunctionType["isFireFunctionType (external)"]
  isEffectEventFunctionType["isEffectEventFunctionType (external)"]
  makeScopeId["makeScopeId (external)"]
  assign["assign (external)"]
  createFrom["createFrom (external)"]
  maybeAlias["maybeAlias (external)"]
  capture["capture (external)"]
  mutate["mutate (external)"]
  render["render (external)"]
  isPrimitiveType["isPrimitiveType (external)"]
  isJsxType["isJsxType (external)"]
  evaluatesToStableTypeOrContainer["evaluatesToStableTypeOrContainer (external)"]
  isStableType["isStableType (external)"]
  isStableTypeContainer["isStableTypeContainer (external)"]
  markReactive["markReactive (external)"]
  isReactive["isReactive (external)"]
  isReactiveControlledBlock["isReactiveControlledBlock (external)"]
  isUseOperator["isUseOperator (external)"]
  isStable["isStable (external)"]
  snapshot["snapshot (external)"]
  isStatementBlockKind["isStatementBlockKind (external)"]
  promoteTemporary["promoteTemporary (external)"]
  isValidIdentifier["isValidIdentifier (external)"]
  makePropertyLiteral["makePropertyLiteral (external)"]
  isIdOrNameUsed["isIdOrNameUsed (external)"]
  isIdUsed["isIdUsed (external)"]
  forkTemporaryIdentifier["forkTemporaryIdentifier (external)"]
  eachInstructionValueLValue["eachInstructionValueLValue (external)"]
  isExpressionBlockKind["isExpressionBlockKind (external)"]
  isUseContextHookType["isUseContextHookType (external)"]
  isPlainObjectType["isPlainObjectType (external)"]
  isArrayType["isArrayType (external)"]
  isStartTransitionType["isStartTransitionType (external)"]
  isPropsType["isPropsType (external)"]
  generateGloballyUniqueIdentifierName["generateGloballyUniqueIdentifierName (external)"]
  outlineFunction["outlineFunction (external)"]
  promoteTemporaryJsxTag["promoteTemporaryJsxTag (external)"]
  canonicalize["canonicalize (external)"]
  FindAllScopesVisitor_traverseScope["FindAllScopesVisitor.traverseScope (external)"]
  CheckInstructionsAgainstScopesVisitor_traverseScope["CheckInstructionsAgainstScopesVisitor.traverseScope (external)"]
  Visitor_traversePrunedScope["Visitor.traversePrunedScope (external)"]
  Visitor_traverseValue["Visitor.traverseValue (external)"]
  Visitor_visitHirFunction["Visitor.visitHirFunction (external)"]
  Visitor_traverseScope["Visitor.traverseScope (external)"]
  eachInstructionLValueWithKind["eachInstructionLValueWithKind (external)"]
  Array["Array (external)"]
  Transform_traverseBlock["Transform.traverseBlock (external)"]
  writeLine["writeLine (external)"]
  complete["complete (external)"]
  indented["indented (external)"]
  write["write (external)"]
  newline["newline (external)"]
  append["append (external)"]
  trimEnd["trimEnd (external)"]
  PromoteTemporaries_traverseScope["PromoteTemporaries.traverseScope (external)"]
  PromoteTemporaries_traversePrunedScope["PromoteTemporaries.traversePrunedScope (external)"]
  PromoteTemporaries_traverseValue["PromoteTemporaries.traverseValue (external)"]
  PromoteTemporaries_visitHirFunction["PromoteTemporaries.visitHirFunction (external)"]
  PromoteAllInstancedOfPromotedTemporaries_traverseScope["PromoteAllInstancedOfPromotedTemporaries.traverseScope (external)"]
  PromoteAllInstancedOfPromotedTemporaries_traversePrunedScope["PromoteAllInstancedOfPromotedTemporaries.traversePrunedScope (external)"]
  CollectPromotableTemporaries_traverseValue["CollectPromotableTemporaries.traverseValue (external)"]
  CollectPromotableTemporaries_visitBlock["CollectPromotableTemporaries.visitBlock (external)"]
  CollectPromotableTemporaries_traverseScope["CollectPromotableTemporaries.traverseScope (external)"]
  visitInstruction["visitInstruction (external)"]
  Transform_traverseScope["Transform.traverseScope (external)"]
  Transform_traverseTerminal["Transform.traverseTerminal (external)"]
  Transform_visitInstruction["Transform.visitInstruction (external)"]
  reduce["reduce (external)"]
  isUseStateType["isUseStateType (external)"]
  visitBlock["visitBlock (external)"]
  eachCallArgument["eachCallArgument (external)"]
  Visitor_traverseInstruction["Visitor.traverseInstruction (external)"]
  visitScope["visitScope (external)"]
  visitTerminal["visitTerminal (external)"]
  Visitor_traverseBlock["Visitor.traverseBlock (external)"]
  isPromotedTemporary["isPromotedTemporary (external)"]
  isPromotedJsxTemporary["isPromotedJsxTemporary (external)"]
  CollectReferencedLabels_traverseScope["CollectReferencedLabels.traverseScope (external)"]
  CollectReferencedLabels_traverseTerminal["CollectReferencedLabels.traverseTerminal (external)"]
  RewriteBlockIds_traverseScope["RewriteBlockIds.traverseScope (external)"]
  RewriteBlockIds_traverseTerminal["RewriteBlockIds.traverseTerminal (external)"]
  ReactiveFunctionTransform_visitInstruction["ReactiveFunctionTransform.visitInstruction (external)"]
  ReactiveFunctionTransform_visitTerminal["ReactiveFunctionTransform.visitTerminal (external)"]
  ReactiveFunctionTransform_visitScope["ReactiveFunctionTransform.visitScope (external)"]
  ReactiveFunctionTransform_visitPrunedScope["ReactiveFunctionTransform.visitPrunedScope (external)"]
  ReactiveFunctionTransform_visitValue["ReactiveFunctionTransform.visitValue (external)"]
  ReactiveFunctionTransform_visitReactiveFunctionValue["ReactiveFunctionTransform.visitReactiveFunctionValue (external)"]
  ReactiveFunctionTransform_visitPlace["ReactiveFunctionTransform.visitPlace (external)"]
  ReactiveFunctionTransform_visitID["ReactiveFunctionTransform.visitID (external)"]
  ReactiveFunctionTransform_visitLValue["ReactiveFunctionTransform.visitLValue (external)"]
  ReactiveFunctionTransform_visitBlock["ReactiveFunctionTransform.visitBlock (external)"]
  startBlock["startBlock (external)"]
  definePlace["definePlace (external)"]
  getPlace["getPlace (external)"]
  defineFunction["defineFunction (external)"]
  fixIncompletePhis["fixIncompletePhis (external)"]
  hasErrors["hasErrors (external)"]
  throwIfErrorsFound["throwIfErrorsFound (external)"]
  isUseEffectHookType["isUseEffectHookType (external)"]
  getFunctionExpression["getFunctionExpression (external)"]
  hasCalleeWithInsertedFire["hasCalleeWithInsertedFire (external)"]
  addCalleeWithInsertedFire["addCalleeWithInsertedFire (external)"]
  getLoadGlobalInstrId["getLoadGlobalInstrId (external)"]
  pushError["pushError (external)"]
  getArrayExpression["getArrayExpression (external)"]
  getLoadLocalInstr["getLoadLocalInstr (external)"]
  inUseEffectLambda["inUseEffectLambda (external)"]
  getCallExpression["getCallExpression (external)"]
  getOrGenerateFireFunctionBinding["getOrGenerateFireFunctionBinding (external)"]
  addCallExpression["addCallExpression (external)"]
  addFunctionExpression["addFunctionExpression (external)"]
  addLoadLocalInstr["addLoadLocalInstr (external)"]
  addLoadGlobalInstrId["addLoadGlobalInstrId (external)"]
  addArrayExpression["addArrayExpression (external)"]
  withScope["withScope (external)"]
  mergeCalleesFromInnerScope["mergeCalleesFromInnerScope (external)"]
  eachReachablePlace["eachReachablePlace (external)"]
  generate["generate (external)"]
  unify["unify (external)"]
  getPropertyType["getPropertyType (external)"]
  getFallthroughPropertyType["getFallthroughPropertyType (external)"]
  fallback["fallback (external)"]
  contains["contains (external)"]
  splitPragma["splitPragma (external)"]
  predicate["predicate (external)"]
  makeDefault["makeDefault (external)"]
  pred["pred (external)"]
  pushErrorDetail["pushErrorDetail (external)"]
  getFunctionCallSignature["getFunctionCallSignature (external)"]
  isUseLayoutEffectHookType["isUseLayoutEffectHookType (external)"]
  isUseInsertionEffectHookType["isUseInsertionEffectHookType (external)"]
  toUpperCase["toUpperCase (external)"]
  takeSnapshot["takeSnapshot (external)"]
  checkForChanges["checkForChanges (external)"]
  addDerivationEntry["addDerivationEntry (external)"]
  isRefOrRefLikeMutableType["isRefOrRefLikeMutableType (external)"]
  lookup["lookup (external)"]
  define["define (external)"]
  hasChanged["hasChanged (external)"]
  resetChanged["resetChanged (external)"]
  isOk["isOk (external)"]
  isUseEffectEventType["isUseEffectEventType (external)"]
  isRefControlledBlock["isRefControlledBlock (external)"]
  isNode["isNode (external)"]

  AnnotateReactCodeBabelPlugin --> annotate
  traverseFn --> shouldVisit
  traverseFn --> skip
  traverseFn --> isBlockStatement
  traverseFn --> unshift
  traverseFn --> buildTypeOfReactForget
  annotate --> traverse
  shouldVisit --> isFunctionDeclaration
  shouldVisit --> isComponentDeclaration
  shouldVisit --> isComponentOrHookLike
  buildTypeOfReactForget --> expressionStatement
  buildTypeOfReactForget --> unaryExpression
  buildTypeOfReactForget --> memberExpression
  buildTypeOfReactForget --> identifier
  buildTypeOfReactForget --> callExpression
  buildTypeOfReactForget --> memberExpression
  buildTypeOfReactForget --> identifier
  buildTypeOfReactForget --> identifier
  buildTypeOfReactForget --> stringLiteral
  isComponentDeclaration --> call
  isComponentOrHookLike --> getFunctionName
  isComponentOrHookLike --> isComponentName
  isComponentOrHookLike --> callsHooksOrCreatesJsx
  isComponentOrHookLike --> get
  isComponentOrHookLike --> isHook
  isComponentOrHookLike --> callsHooksOrCreatesJsx
  isComponentOrHookLike --> isFunctionExpression
  isComponentOrHookLike --> isArrowFunctionExpression
  isComponentOrHookLike --> isForwardRefCallback
  isComponentOrHookLike --> isMemoCallback
  isComponentOrHookLike --> callsHooksOrCreatesJsx
  isHookName --> test
  isHook --> isIdentifier
  isHook --> isHookName
  isHook --> isMemberExpression
  isHook --> isHook
  isHook --> get
  isHook --> get
  isHook --> test
  isComponentName --> isIdentifier
  isComponentName --> test
  isForwardRefCallback --> isCallExpression
  isForwardRefCallback --> isExpression
  isForwardRefCallback --> get
  isForwardRefCallback --> isReactAPI
  isForwardRefCallback --> get
  isMemoCallback --> isCallExpression
  isMemoCallback --> isExpression
  isMemoCallback --> get
  isMemoCallback --> isReactAPI
  isMemoCallback --> get
  callsHooksOrCreatesJsx --> traverse
  callsHooksOrCreatesJsx --> get
  callsHooksOrCreatesJsx --> isExpression
  callsHooksOrCreatesJsx --> isHook
  getFunctionName --> isFunctionDeclaration
  getFunctionName --> get
  getFunctionName --> isIdentifier
  getFunctionName --> isVariableDeclarator
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> isAssignmentExpression
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> isProperty
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> isLVal
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> isAssignmentPattern
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> get
  getFunctionName --> isIdentifier
  getFunctionName --> isMemberExpression
  normalizeIndent --> split
  normalizeIndent --> match
  normalizeIndent --> join
  normalizeIndent --> map
  normalizeIndent --> slice
  createTransformer --> createTransformer
  BabelPluginReactCompiler --> mark
  BabelPluginReactCompiler --> parsePluginOptions
  BabelPluginReactCompiler --> pipelineUsesReanimatedPlugin
  BabelPluginReactCompiler --> injectReanimatedFlag
  BabelPluginReactCompiler --> compileProgram
  BabelPluginReactCompiler --> validateNoUntransformedReferences
  BabelPluginReactCompiler --> mark
  BabelPluginReactCompiler --> withPrintedMessage
  BabelPluginReactCompiler --> measure
  BabelPluginReactCompiler --> logEvent
  runBabelPluginReactCompiler --> parse
  runBabelPluginReactCompiler --> transformFromAstSync
  runBabelPluginReactCompiler --> invariant
  insertAdditionalFunctionDeclaration --> invariant
  insertAdditionalFunctionDeclaration --> invariant
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> newUid
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> newUid
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> newUid
  insertAdditionalFunctionDeclaration --> replaceInline
  insertAdditionalFunctionDeclaration --> get
  insertAdditionalFunctionDeclaration --> push
  insertAdditionalFunctionDeclaration --> restElement
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> push
  insertAdditionalFunctionDeclaration --> spreadElement
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> push
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> push
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> insertAfter
  insertAdditionalFunctionDeclaration --> functionDeclaration
  insertAdditionalFunctionDeclaration --> blockStatement
  insertAdditionalFunctionDeclaration --> ifStatement
  insertAdditionalFunctionDeclaration --> returnStatement
  insertAdditionalFunctionDeclaration --> callExpression
  insertAdditionalFunctionDeclaration --> map
  insertAdditionalFunctionDeclaration --> fn
  insertAdditionalFunctionDeclaration --> returnStatement
  insertAdditionalFunctionDeclaration --> callExpression
  insertAdditionalFunctionDeclaration --> map
  insertAdditionalFunctionDeclaration --> fn
  insertAdditionalFunctionDeclaration --> insertBefore
  insertAdditionalFunctionDeclaration --> variableDeclaration
  insertAdditionalFunctionDeclaration --> variableDeclarator
  insertAdditionalFunctionDeclaration --> callExpression
  insertAdditionalFunctionDeclaration --> identifier
  insertAdditionalFunctionDeclaration --> insertBefore
  insertGatedFunctionDeclaration --> addImportSpecifier
  insertGatedFunctionDeclaration --> isFunctionDeclaration
  insertGatedFunctionDeclaration --> invariant
  insertGatedFunctionDeclaration --> insertAdditionalFunctionDeclaration
  insertGatedFunctionDeclaration --> conditionalExpression
  insertGatedFunctionDeclaration --> callExpression
  insertGatedFunctionDeclaration --> identifier
  insertGatedFunctionDeclaration --> buildFunctionExpression
  insertGatedFunctionDeclaration --> buildFunctionExpression
  insertGatedFunctionDeclaration --> replaceWith
  insertGatedFunctionDeclaration --> variableDeclaration
  insertGatedFunctionDeclaration --> variableDeclarator
  insertGatedFunctionDeclaration --> insertAfter
  insertGatedFunctionDeclaration --> exportDefaultDeclaration
  insertGatedFunctionDeclaration --> identifier
  insertGatedFunctionDeclaration --> replaceWith
  insertGatedFunctionDeclaration --> variableDeclaration
  insertGatedFunctionDeclaration --> variableDeclarator
  insertGatedFunctionDeclaration --> identifier
  insertGatedFunctionDeclaration --> replaceWith
  validateRestrictedImports --> traverse
  validateRestrictedImports --> has
  validateRestrictedImports --> push
  validateRestrictedImports --> hasAnyErrors
  ProgramContext_constructor --> getReactCompilerRuntimeModule
  ProgramContext_isHookName --> isHookName
  ProgramContext_isHookName --> exec
  ProgramContext_isHookName --> isHookName
  ProgramContext_hasReference --> has
  ProgramContext_hasReference --> hasBinding
  ProgramContext_hasReference --> hasGlobal
  ProgramContext_hasReference --> hasReference
  ProgramContext_newUid --> ProgramContext_isHookName
  ProgramContext_newUid --> ProgramContext_hasReference
  ProgramContext_newUid --> add
  ProgramContext_newUid --> ProgramContext_hasReference
  ProgramContext_newUid --> generateUid
  ProgramContext_newUid --> add
  ProgramContext_addMemoCacheImport --> ProgramContext_addImportSpecifier
  ProgramContext_addImportSpecifier --> get
  ProgramContext_addImportSpecifier --> get
  ProgramContext_addImportSpecifier --> ProgramContext_newUid
  ProgramContext_addImportSpecifier --> set
  ProgramContext_addImportSpecifier --> getOrInsertWith
  ProgramContext_addNewReference --> add
  ProgramContext_assertGlobalBinding --> hasReference
  ProgramContext_assertGlobalBinding --> hasBinding
  ProgramContext_assertGlobalBinding --> Ok
  ProgramContext_assertGlobalBinding --> push
  ProgramContext_assertGlobalBinding --> getBinding
  ProgramContext_assertGlobalBinding --> Err
  ProgramContext_logEvent --> logEvent
  getExistingImports --> traverse
  getExistingImports --> isNonNamespacedImport
  getExistingImports --> set
  addImportsToProgram --> getExistingImports
  addImportsToProgram --> sort
  addImportsToProgram --> entries
  addImportsToProgram --> localeCompare
  addImportsToProgram --> invariant
  addImportsToProgram --> getBinding
  addImportsToProgram --> invariant
  addImportsToProgram --> sort
  addImportsToProgram --> values
  addImportsToProgram --> localeCompare
  addImportsToProgram --> map
  addImportsToProgram --> importSpecifier
  addImportsToProgram --> identifier
  addImportsToProgram --> identifier
  addImportsToProgram --> get
  addImportsToProgram --> pushContainer
  addImportsToProgram --> push
  addImportsToProgram --> importDeclaration
  addImportsToProgram --> stringLiteral
  addImportsToProgram --> push
  addImportsToProgram --> variableDeclaration
  addImportsToProgram --> variableDeclarator
  addImportsToProgram --> objectPattern
  addImportsToProgram --> map
  addImportsToProgram --> objectProperty
  addImportsToProgram --> identifier
  addImportsToProgram --> identifier
  addImportsToProgram --> callExpression
  addImportsToProgram --> identifier
  addImportsToProgram --> stringLiteral
  addImportsToProgram --> unshiftContainer
  isNonNamespacedImport --> every
  isNonNamespacedImport --> get
  isNonNamespacedImport --> isImportSpecifier
  parsePluginOptions --> create
  parsePluginOptions --> entries
  parsePluginOptions --> toLowerCase
  parsePluginOptions --> isCompilerFlag
  parsePluginOptions --> parseEnvironmentConfig
  parsePluginOptions --> isErr
  parsePluginOptions --> throwInvalidConfig
  parsePluginOptions --> toString
  parsePluginOptions --> unwrapErr
  parsePluginOptions --> unwrap
  parsePluginOptions --> parseTargetConfig
  parsePluginOptions --> tryParseExternalFunction
  parsePluginOptions --> safeParse
  parsePluginOptions --> throwInvalidConfig
  parsePluginOptions --> fromZodError
  parsePluginOptions --> safeParse
  parsePluginOptions --> throwInvalidConfig
  parsePluginOptions --> fromZodError
  parseTargetConfig --> safeParse
  parseTargetConfig --> throwInvalidConfig
  parseTargetConfig --> fromZodError
  isCompilerFlag --> hasOwnProperty
  run --> findContextIdentifiers
  run --> debugLogIRs
  run --> prettyFormat
  run --> runWithEnvironment
  log --> debugLogIRs
  runWithEnvironment --> unwrap
  runWithEnvironment --> lower
  runWithEnvironment --> log
  runWithEnvironment --> pruneMaybeThrows
  runWithEnvironment --> log
  runWithEnvironment --> validateContextVariableLValues
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateUseMemo
  runWithEnvironment --> unwrap
  runWithEnvironment --> dropManualMemoization
  runWithEnvironment --> log
  runWithEnvironment --> inlineImmediatelyInvokedFunctionExpressions
  runWithEnvironment --> log
  runWithEnvironment --> mergeConsecutiveBlocks
  runWithEnvironment --> log
  runWithEnvironment --> assertConsistentIdentifiers
  runWithEnvironment --> assertTerminalSuccessorsExist
  runWithEnvironment --> enterSSA
  runWithEnvironment --> log
  runWithEnvironment --> eliminateRedundantPhi
  runWithEnvironment --> log
  runWithEnvironment --> assertConsistentIdentifiers
  runWithEnvironment --> constantPropagation
  runWithEnvironment --> log
  runWithEnvironment --> inferTypes
  runWithEnvironment --> log
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateHooksUsage
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateNoCapitalizedCalls
  runWithEnvironment --> transformFire
  runWithEnvironment --> log
  runWithEnvironment --> lowerContextAccess
  runWithEnvironment --> optimizePropsMethodCalls
  runWithEnvironment --> log
  runWithEnvironment --> analyseFunctions
  runWithEnvironment --> log
  runWithEnvironment --> inferMutationAliasingEffects
  runWithEnvironment --> log
  runWithEnvironment --> isErr
  runWithEnvironment --> unwrapErr
  runWithEnvironment --> optimizeForSSR
  runWithEnvironment --> log
  runWithEnvironment --> deadCodeElimination
  runWithEnvironment --> log
  runWithEnvironment --> instructionReordering
  runWithEnvironment --> log
  runWithEnvironment --> pruneMaybeThrows
  runWithEnvironment --> log
  runWithEnvironment --> inferMutationAliasingRanges
  runWithEnvironment --> log
  runWithEnvironment --> isErr
  runWithEnvironment --> unwrapErr
  runWithEnvironment --> validateLocalsNotReassignedAfterRender
  runWithEnvironment --> assertValidMutableRanges
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateNoRefAccessInRender
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateNoSetStateInRender
  runWithEnvironment --> logErrors
  runWithEnvironment --> validateNoDerivedComputationsInEffects_exp
  runWithEnvironment --> validateNoDerivedComputationsInEffects
  runWithEnvironment --> logErrors
  runWithEnvironment --> validateNoSetStateInEffects
  runWithEnvironment --> logErrors
  runWithEnvironment --> validateNoJSXInTryStatement
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateNoImpureFunctionsInRender
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateNoFreezingKnownMutableFunctions
  runWithEnvironment --> inferReactivePlaces
  runWithEnvironment --> log
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateExhaustiveDependencies
  runWithEnvironment --> rewriteInstructionKindsBasedOnReassignment
  runWithEnvironment --> log
  runWithEnvironment --> logErrors
  runWithEnvironment --> validateStaticComponents
  runWithEnvironment --> inferReactiveScopeVariables
  runWithEnvironment --> log
  runWithEnvironment --> memoizeFbtAndMacroOperandsInSameScope
  runWithEnvironment --> log
  runWithEnvironment --> outlineJSX
  runWithEnvironment --> nameAnonymousFunctions
  runWithEnvironment --> log
  runWithEnvironment --> outlineFunctions
  runWithEnvironment --> log
  runWithEnvironment --> alignMethodCallScopes
  runWithEnvironment --> log
  runWithEnvironment --> alignObjectMethodScopes
  runWithEnvironment --> log
  runWithEnvironment --> pruneUnusedLabelsHIR
  runWithEnvironment --> log
  runWithEnvironment --> alignReactiveScopesToBlockScopesHIR
  runWithEnvironment --> log
  runWithEnvironment --> mergeOverlappingReactiveScopesHIR
  runWithEnvironment --> log
  runWithEnvironment --> assertValidBlockNesting
  runWithEnvironment --> buildReactiveScopeTerminalsHIR
  runWithEnvironment --> log
  runWithEnvironment --> assertValidBlockNesting
  runWithEnvironment --> flattenReactiveLoopsHIR
  runWithEnvironment --> log
  runWithEnvironment --> flattenScopesWithHooksOrUseHIR
  runWithEnvironment --> log
  runWithEnvironment --> assertTerminalSuccessorsExist
  runWithEnvironment --> assertTerminalPredsExist
  runWithEnvironment --> propagateScopeDependenciesHIR
  runWithEnvironment --> log
  runWithEnvironment --> inferEffectDependencies
  runWithEnvironment --> log
  runWithEnvironment --> inlineJsxTransform
  runWithEnvironment --> log
  runWithEnvironment --> buildReactiveFunction
  runWithEnvironment --> log
  runWithEnvironment --> assertWellFormedBreakTargets
  runWithEnvironment --> pruneUnusedLabels
  runWithEnvironment --> log
  runWithEnvironment --> assertScopeInstructionsWithinScopes
  runWithEnvironment --> pruneNonEscapingScopes
  runWithEnvironment --> log
  runWithEnvironment --> pruneNonReactiveDependencies
  runWithEnvironment --> log
  runWithEnvironment --> pruneUnusedScopes
  runWithEnvironment --> log
  runWithEnvironment --> mergeReactiveScopesThatInvalidateTogether
  runWithEnvironment --> log
  runWithEnvironment --> pruneAlwaysInvalidatingScopes
  runWithEnvironment --> log
  runWithEnvironment --> pruneInitializationDependencies
  runWithEnvironment --> log
  runWithEnvironment --> propagateEarlyReturns
  runWithEnvironment --> log
  runWithEnvironment --> pruneUnusedLValues
  runWithEnvironment --> log
  runWithEnvironment --> promoteUsedTemporaries
  runWithEnvironment --> log
  runWithEnvironment --> extractScopeDeclarationsFromDestructuring
  runWithEnvironment --> log
  runWithEnvironment --> stabilizeBlockIds
  runWithEnvironment --> log
  runWithEnvironment --> renameVariables
  runWithEnvironment --> log
  runWithEnvironment --> pruneHoistedContexts
  runWithEnvironment --> log
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateMemoizedEffectDependencies
  runWithEnvironment --> unwrap
  runWithEnvironment --> validatePreservedManualMemoization
  runWithEnvironment --> unwrap
  runWithEnvironment --> codegenFunction
  runWithEnvironment --> log
  runWithEnvironment --> log
  runWithEnvironment --> unwrap
  runWithEnvironment --> validateSourceLocations
  compileFn --> run
  hasModule --> resolve
  hasModule --> indexOf
  pipelineUsesReanimatedPlugin --> isArray
  pipelineUsesReanimatedPlugin --> hasOwnProperty
  pipelineUsesReanimatedPlugin --> indexOf
  pipelineUsesReanimatedPlugin --> hasModule
  filterSuppressionsThatAffectFunction --> push
  filterSuppressionsThatAffectFunction --> push
  findProgramSuppressions --> join
  findProgramSuppressions --> test
  findProgramSuppressions --> test
  findProgramSuppressions --> test
  findProgramSuppressions --> test
  findProgramSuppressions --> push
  suppressionsToCompilerError --> invariant
  suppressionsToCompilerError --> assertExhaustive
  suppressionsToCompilerError --> pushDiagnostic
  suppressionsToCompilerError --> withDetails
  suppressionsToCompilerError --> create
  suppressionsToCompilerError --> trim
  throwInvalidReact --> logEvent
  throwInvalidReact --> throwDiagnostic
  isAutodepsSigil --> isIdentifier
  isAutodepsSigil --> getBinding
  isAutodepsSigil --> isImportSpecifier
  isAutodepsSigil --> isMemberExpression
  isAutodepsSigil --> get
  isAutodepsSigil --> get
  isAutodepsSigil --> isIdentifier
  isAutodepsSigil --> isIdentifier
  assertValidEffectImportReference --> isCallExpression
  assertValidEffectImportReference --> get
  assertValidEffectImportReference --> has
  assertValidEffectImportReference --> some
  assertValidEffectImportReference --> matchCompilerDiagnostic
  assertValidEffectImportReference --> throwInvalidReact
  assertValidFireImportReference --> matchCompilerDiagnostic
  assertValidFireImportReference --> throwInvalidReact
  validateNoUntransformedReferences --> getOrInsertWith
  validateNoUntransformedReferences --> set
  validateNoUntransformedReferences --> getOrInsertWith
  validateNoUntransformedReferences --> set
  validateNoUntransformedReferences --> bind
  validateNoUntransformedReferences --> transformProgram
  validateImportSpecifier --> get
  validateImportSpecifier --> get
  validateImportSpecifier --> crawl
  validateImportSpecifier --> get
  validateImportSpecifier --> getBinding
  validateImportSpecifier --> invariant
  validateImportSpecifier --> checkFn
  validateNamespacedImport --> crawl
  validateNamespacedImport --> get
  validateNamespacedImport --> getBinding
  validateNamespacedImport --> get
  validateNamespacedImport --> invariant
  validateNamespacedImport --> push
  validateNamespacedImport --> getOrInsertWith
  validateNamespacedImport --> isMemberExpression
  validateNamespacedImport --> get
  validateNamespacedImport --> get
  validateNamespacedImport --> push
  validateNamespacedImport --> getOrInsertWith
  validateNamespacedImport --> checkFn
  transformProgram --> traverse
  transformProgram --> get
  transformProgram --> get
  transformProgram --> isImportSpecifier
  transformProgram --> validateImportSpecifier
  transformProgram --> validateNamespacedImport
  matchCompilerDiagnostic --> isAncestor
  matchCompilerDiagnostic --> toString
  unsupportedLanguageFeature --> throwInvalidJS
  printUnificationError --> printConcrete
  printUnificationError --> printConcrete
  printUnificationError --> printConcrete
  raiseUnificationErrors --> invariant
  raiseUnificationErrors --> throwInvalidJS
  raiseUnificationErrors --> printUnificationError
  raiseUnificationErrors --> join
  raiseUnificationErrors --> map
  raiseUnificationErrors --> printUnificationError
  raiseUnificationErrors --> throwInvalidJS
  unresolvableTypeVariable --> throwInvalidJS
  cannotAddVoid --> throwInvalidJS
  cannotAddVoid --> throwInvalidJS
  unsupportedTypeAnnotation --> throwInvalidJS
  checkTypeArgumentArity --> throwInvalidJS
  notAFunction --> throwInvalidJS
  notAPolymorphicFunction --> throwInvalidJS
  makeLinearId --> invariant
  makeLinearId --> isInteger
  makeTypeParameterId --> invariant
  makeTypeParameterId --> isInteger
  makeVariableId --> invariant
  makeVariableId --> isInteger
  printConcrete --> printType
  printConcrete --> printType
  printConcrete --> printType
  printConcrete --> printType
  printConcrete --> printType
  printConcrete --> join
  printConcrete --> map
  printConcrete --> join
  printConcrete --> map
  printConcrete --> printType
  printConcrete --> join
  printConcrete --> map
  printConcrete --> entries
  printConcrete --> printType
  printConcrete --> printType
  printConcrete --> join
  printConcrete --> map
  printConcrete --> keys
  printConcrete --> stringify
  printConcrete --> join
  printConcrete --> map
  printConcrete --> assertExhaustive
  printConcrete --> stringify
  printType --> printConcrete
  printType --> assertExhaustive
  printType --> stringify
  printResolved --> printConcrete
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> todo
  convertFlowTypeImpl --> mixed
  convertFlowTypeImpl --> todo
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> todo
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> enum
  convertFlowTypeImpl --> todo
  convertFlowTypeImpl --> set
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> invariant
  convertFlowTypeImpl --> class
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> number
  convertFlowTypeImpl --> string
  convertFlowTypeImpl --> boolean
  convertFlowTypeImpl --> void
  convertFlowTypeImpl --> void
  convertFlowTypeImpl --> mixed
  convertFlowTypeImpl --> array
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> tuple
  convertFlowTypeImpl --> map
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> set
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> invariant
  convertFlowTypeImpl --> object
  convertFlowTypeImpl --> set
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> invariant
  convertFlowTypeImpl --> class
  convertFlowTypeImpl --> invariant
  convertFlowTypeImpl --> function
  convertFlowTypeImpl --> map
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> map
  convertFlowTypeImpl --> makeTypeParameterId
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> set
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> forEach
  convertFlowTypeImpl --> set
  convertFlowTypeImpl --> invariant
  convertFlowTypeImpl --> component
  convertFlowTypeImpl --> todo
  convertFlowTypeImpl --> unsupportedTypeAnnotation
  convertFlowTypeImpl --> get
  convertFlowTypeImpl --> unsupportedTypeAnnotation
  convertFlowTypeImpl --> generic
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> map
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> filter
  convertFlowTypeImpl --> filter
  convertFlowTypeImpl --> union
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> unsupportedTypeAnnotation
  convertFlowTypeImpl --> union
  convertFlowTypeImpl --> convertFlowTypeImpl
  convertFlowTypeImpl --> void
  convertFlowTypeImpl --> unsupportedTypeAnnotation
  convertFlowType --> convertFlowTypeImpl
  buildTypeEnvironment --> set
  buildTypeEnvironment --> serializeLoc
  FlowTypeEnv_init --> invariant
  FlowTypeEnv_init --> flowTypeProvider
  FlowTypeEnv_init --> buildTypeEnvironment
  FlowTypeEnv_init --> set
  FlowTypeEnv_init --> convertFlowType
  FlowTypeEnv_init --> parse
  FlowTypeEnv_setType --> has
  FlowTypeEnv_setType --> serializeLoc
  FlowTypeEnv_setType --> set
  FlowTypeEnv_getType --> FlowTypeEnv_getTypeOrNull
  FlowTypeEnv_getType --> serializeLoc
  FlowTypeEnv_getTypeOrNull --> get
  FlowTypeEnv_getTypeOrNull --> get
  FlowTypeEnv_getTypeOrNull --> serializeLoc
  FlowTypeEnv_getTypeByLoc --> get
  FlowTypeEnv_getTypeByLoc --> serializeLoc
  FlowTypeEnv_nextNominalId --> makeNominalId
  FlowTypeEnv_nextTypeParameterId --> makeTypeParameterId
  FlowTypeEnv_addBinding --> set
  FlowTypeEnv_resolveBinding --> get
  FlowTypeEnv_pushGeneric --> unshift
  FlowTypeEnv_popGeneric --> splice
  substitute --> set
  substitutionFunction --> has
  substitutionFunction --> get
  substitutionFunction --> mapType
  substitute --> mapType
  substitute --> printType
  substitute --> log
  substitute --> printConcrete
  substitute --> printConcrete
  mapType --> f
  mapType --> f
  mapType --> f
  mapType --> f
  mapType --> f
  mapType --> map
  mapType --> f
  mapType --> map
  mapType --> f
  mapType --> f
  mapType --> map
  mapType --> entries
  mapType --> f
  mapType --> f
  mapType --> map
  mapType --> unsupportedLanguageFeature
  mapType --> assertExhaustive
  diff --> onMismatch
  diff --> onChildMismatch
  diff --> onChild
  diff --> onChildMismatch
  diff --> onChild
  diff --> onChildMismatch
  diff --> onChild
  diff --> onChildMismatch
  diff --> onChild
  diff --> onMismatch
  diff --> onMismatch
  diff --> onMismatch
  diff --> onMismatch
  diff --> onChildMismatch
  diff --> onChild
  diff --> onChildMismatch
  diff --> onChild
  diff --> onMismatch
  diff --> onMismatch
  diff --> get
  diff --> onMismatch
  diff --> onChildMismatch
  diff --> onChild
  diff --> onMismatch
  diff --> onMismatch
  diff --> onMismatch
  diff --> onMismatch
  diff --> onChildMismatch
  diff --> onChild
  diff --> unsupportedLanguageFeature
  diff --> assertExhaustive
  assertConsistentIdentifiers --> validate
  assertConsistentIdentifiers --> validate
  assertConsistentIdentifiers --> invariant
  assertConsistentIdentifiers --> invariant
  assertConsistentIdentifiers --> has
  assertConsistentIdentifiers --> printPlace
  assertConsistentIdentifiers --> add
  assertConsistentIdentifiers --> eachInstructionLValue
  assertConsistentIdentifiers --> validate
  assertConsistentIdentifiers --> eachInstructionValueOperand
  assertConsistentIdentifiers --> validate
  assertConsistentIdentifiers --> eachTerminalOperand
  assertConsistentIdentifiers --> validate
  validate --> get
  validate --> set
  validate --> invariant
  assertTerminalSuccessorsExist --> mapTerminalSuccessors
  assertTerminalSuccessorsExist --> invariant
  assertTerminalSuccessorsExist --> has
  assertTerminalSuccessorsExist --> printTerminal
  assertTerminalPredsExist --> get
  assertTerminalPredsExist --> invariant
  assertTerminalPredsExist --> invariant
  assertTerminalPredsExist --> includes
  assertTerminalPredsExist --> eachTerminalSuccessor
  visitPlace --> add
  getScopes --> eachInstructionLValue
  getScopes --> visitPlace
  getScopes --> eachInstructionOperand
  getScopes --> visitPlace
  getScopes --> eachTerminalOperand
  getScopes --> visitPlace
  recursivelyTraverseItems --> sort
  recursivelyTraverseItems --> rangePreOrderComparator
  recursivelyTraverseItems --> getRange
  recursivelyTraverseItems --> getRange
  recursivelyTraverseItems --> map
  recursivelyTraverseItems --> getRange
  recursivelyTraverseItems --> invariant
  recursivelyTraverseItems --> exit
  recursivelyTraverseItems --> enter
  recursivelyTraverseItems --> push
  recursivelyTraverseItems --> pop
  recursivelyTraverseItems --> exit
  recursivelyTraverseItems --> pop
  assertValidBlockNesting --> getScopes
  assertValidBlockNesting --> map
  assertValidBlockNesting --> terminalFallthrough
  assertValidBlockNesting --> get
  assertValidBlockNesting --> push
  assertValidBlockNesting --> recursivelyTraverseItems
  assertValidMutableRanges --> visit
  assertValidMutableRanges --> visit
  assertValidMutableRanges --> eachInstructionLValue
  assertValidMutableRanges --> visit
  assertValidMutableRanges --> eachInstructionOperand
  assertValidMutableRanges --> visit
  assertValidMutableRanges --> eachTerminalOperand
  assertValidMutableRanges --> visit
  visit --> validateMutableRange
  visit --> validateMutableRange
  validateMutableRange --> invariant
  validateMutableRange --> printPlace
  buildReactiveScopeTerminalsHIR --> recursivelyTraverseItems
  buildReactiveScopeTerminalsHIR --> getScopes
  buildReactiveScopeTerminalsHIR --> reverse
  buildReactiveScopeTerminalsHIR --> at
  buildReactiveScopeTerminalsHIR --> handleRewrite
  buildReactiveScopeTerminalsHIR --> pop
  buildReactiveScopeTerminalsHIR --> at
  buildReactiveScopeTerminalsHIR --> slice
  buildReactiveScopeTerminalsHIR --> push
  buildReactiveScopeTerminalsHIR --> set
  buildReactiveScopeTerminalsHIR --> set
  buildReactiveScopeTerminalsHIR --> set
  buildReactiveScopeTerminalsHIR --> get
  buildReactiveScopeTerminalsHIR --> delete
  buildReactiveScopeTerminalsHIR --> set
  buildReactiveScopeTerminalsHIR --> reversePostorderBlocks
  buildReactiveScopeTerminalsHIR --> markPredecessors
  buildReactiveScopeTerminalsHIR --> markInstructionIds
  buildReactiveScopeTerminalsHIR --> fixScopeAndIdentifierRanges
  pushStartScopeTerminal --> push
  pushStartScopeTerminal --> set
  pushEndScopeTerminal --> get
  pushEndScopeTerminal --> invariant
  pushEndScopeTerminal --> push
  handleRewrite --> push
  handleRewrite --> slice
  collectHoistablePropertyLoads --> add
  collectHoistablePropertyLoads --> collectHoistablePropertyLoadsImpl
  collectHoistablePropertyLoads --> getAssumedInvokedFunctions
  collectHoistablePropertyLoadsInInnerFn --> getAssumedInvokedFunctions
  collectHoistablePropertyLoadsInInnerFn --> map
  collectHoistablePropertyLoadsInInnerFn --> filter
  collectHoistablePropertyLoadsInInnerFn --> isImmutableAtInstr
  collectHoistablePropertyLoadsInInnerFn --> collectHoistablePropertyLoadsImpl
  collectHoistablePropertyLoadsImpl --> collectNonNullsInBlocks
  collectHoistablePropertyLoadsImpl --> propagateNonNull
  collectHoistablePropertyLoadsImpl --> log
  collectHoistablePropertyLoadsImpl --> log
  collectHoistablePropertyLoadsImpl --> join
  collectHoistablePropertyLoadsImpl --> map
  collectHoistablePropertyLoadsImpl --> printDependency
  keyByScopeId --> set
  keyByScopeId --> get
  PropertyPathRegistry_getOrCreateIdentifier --> get
  PropertyPathRegistry_getOrCreateIdentifier --> set
  PropertyPathRegistry_getOrCreateIdentifier --> invariant
  PropertyPathRegistry_getOrCreatePropertyEntry --> get
  PropertyPathRegistry_getOrCreatePropertyEntry --> concat
  PropertyPathRegistry_getOrCreatePropertyEntry --> set
  PropertyPathRegistry_getOrCreateProperty --> PropertyPathRegistry_getOrCreateIdentifier
  PropertyPathRegistry_getOrCreateProperty --> getOrCreatePropertyEntry
  PropertyPathRegistry_getOrCreateProperty --> getOrCreatePropertyEntry
  PropertyPathRegistry_getOrCreateProperty --> at
  getMaybeNonNullInInstruction --> get
  getMaybeNonNullInInstruction --> get
  getMaybeNonNullInInstruction --> get
  getMaybeNonNullInInstruction --> getOrCreateProperty
  isImmutableAtInstr --> has
  isImmutableAtInstr --> inRange
  isImmutableAtInstr --> has
  collectNonNullsInBlocks --> add
  collectNonNullsInBlocks --> getOrCreateIdentifier
  collectNonNullsInBlocks --> get
  collectNonNullsInBlocks --> add
  collectNonNullsInBlocks --> getOrCreateProperty
  collectNonNullsInBlocks --> getMaybeNonNullInInstruction
  collectNonNullsInBlocks --> isImmutableAtInstr
  collectNonNullsInBlocks --> add
  collectNonNullsInBlocks --> has
  collectNonNullsInBlocks --> collectHoistablePropertyLoadsImpl
  collectNonNullsInBlocks --> map
  collectNonNullsInBlocks --> filter
  collectNonNullsInBlocks --> isImmutableAtInstr
  collectNonNullsInBlocks --> assertNonNull
  collectNonNullsInBlocks --> get
  collectNonNullsInBlocks --> add
  collectNonNullsInBlocks --> isImmutableAtInstr
  collectNonNullsInBlocks --> getOrCreateProperty
  collectNonNullsInBlocks --> slice
  collectNonNullsInBlocks --> add
  collectNonNullsInBlocks --> set
  propagateNonNull --> add
  propagateNonNull --> getOrInsertDefault
  propagateNonNull --> add
  recursivelyPropagateNonNull --> has
  recursivelyPropagateNonNull --> set
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> invariant
  recursivelyPropagateNonNull --> from
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> has
  recursivelyPropagateNonNull --> recursivelyPropagateNonNull
  recursivelyPropagateNonNull --> Set_intersect
  recursivelyPropagateNonNull --> map
  recursivelyPropagateNonNull --> filter
  recursivelyPropagateNonNull --> from
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> assertNonNull
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> assertNonNull
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> Set_union
  recursivelyPropagateNonNull --> reduceMaybeOptionalChains
  recursivelyPropagateNonNull --> assertNonNull
  recursivelyPropagateNonNull --> get
  recursivelyPropagateNonNull --> set
  recursivelyPropagateNonNull --> Set_equal
  propagateNonNull --> reverse
  propagateNonNull --> invariant
  propagateNonNull --> recursivelyPropagateNonNull
  propagateNonNull --> clear
  propagateNonNull --> recursivelyPropagateNonNull
  propagateNonNull --> clear
  assertNonNull --> invariant
  reduceMaybeOptionalChains --> Set_filter
  reduceMaybeOptionalChains --> getOrCreateIdentifier
  reduceMaybeOptionalChains --> has
  reduceMaybeOptionalChains --> getOrCreatePropertyEntry
  reduceMaybeOptionalChains --> delete
  reduceMaybeOptionalChains --> add
  reduceMaybeOptionalChains --> delete
  reduceMaybeOptionalChains --> add
  getAssumedInvokedFunctions --> values
  getAssumedInvokedFunctions --> set
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> set
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> set
  getAssumedInvokedFunctions --> values
  getAssumedInvokedFunctions --> getHookKind
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> getAssumedInvokedFunctions
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> get
  getAssumedInvokedFunctions --> add
  getAssumedInvokedFunctions --> has
  getAssumedInvokedFunctions --> add
  collectOptionalChainSidemap --> traverseFunction
  traverseFunction --> traverseFunction
  traverseFunction --> has
  traverseFunction --> traverseOptionalBlock
  matchOptionalTestBlock --> assertNonNull
  matchOptionalTestBlock --> get
  matchOptionalTestBlock --> invariant
  matchOptionalTestBlock --> printIdentifier
  matchOptionalTestBlock --> printIdentifier
  matchOptionalTestBlock --> invariant
  matchOptionalTestBlock --> assertNonNull
  matchOptionalTestBlock --> get
  matchOptionalTestBlock --> invariant
  traverseOptionalBlock --> add
  traverseOptionalBlock --> get
  traverseOptionalBlock --> invariant
  traverseOptionalBlock --> push
  traverseOptionalBlock --> invariant
  traverseOptionalBlock --> at
  traverseOptionalBlock --> get
  traverseOptionalBlock --> throwTodo
  traverseOptionalBlock --> traverseOptionalBlock
  traverseOptionalBlock --> set
  traverseOptionalBlock --> assertNonNull
  traverseOptionalBlock --> get
  traverseOptionalBlock --> assertNonNull
  traverseOptionalBlock --> get
  traverseOptionalBlock --> invariant
  traverseOptionalBlock --> matchOptionalTestBlock
  traverseOptionalBlock --> invariant
  traverseOptionalBlock --> add
  traverseOptionalBlock --> add
  traverseOptionalBlock --> set
  traverseOptionalBlock --> set
  computeUnconditionalBlocks --> computePostDominatorTree
  computeUnconditionalBlocks --> invariant
  computeUnconditionalBlocks --> has
  computeUnconditionalBlocks --> add
  computeUnconditionalBlocks --> get
  ReactiveScopeDependencyTreeHIR_constructor --> _getOrCreateRoot
  ReactiveScopeDependencyTreeHIR_constructor --> get
  ReactiveScopeDependencyTreeHIR_constructor --> invariant
  ReactiveScopeDependencyTreeHIR_constructor --> get
  ReactiveScopeDependencyTreeHIR_constructor --> set
  ReactiveScopeDependencyTreeHIR__getOrCreateRoot --> get
  ReactiveScopeDependencyTreeHIR__getOrCreateRoot --> set
  ReactiveScopeDependencyTreeHIR__getOrCreateRoot --> invariant
  ReactiveScopeDependencyTreeHIR__getOrCreateRoot --> printIdentifier
  ReactiveScopeDependencyTreeHIR_addDependency --> _getOrCreateRoot
  ReactiveScopeDependencyTreeHIR_addDependency --> get
  ReactiveScopeDependencyTreeHIR_addDependency --> get
  ReactiveScopeDependencyTreeHIR_addDependency --> makeOrMergeProperty
  ReactiveScopeDependencyTreeHIR_addDependency --> get
  ReactiveScopeDependencyTreeHIR_addDependency --> makeOrMergeProperty
  ReactiveScopeDependencyTreeHIR_addDependency --> merge
  ReactiveScopeDependencyTreeHIR_deriveMinimalDependencies --> entries
  ReactiveScopeDependencyTreeHIR_deriveMinimalDependencies --> collectMinimalDependenciesInSubtree
  ReactiveScopeDependencyTreeHIR_printDeps --> entries
  ReactiveScopeDependencyTreeHIR_printDeps --> map
  ReactiveScopeDependencyTreeHIR_printDeps --> printSubtree
  ReactiveScopeDependencyTreeHIR_printDeps --> printIdentifier
  ReactiveScopeDependencyTreeHIR_printDeps --> push
  ReactiveScopeDependencyTreeHIR_printDeps --> join
  ReactiveScopeDependencyTreeHIR_printDeps --> flat
  ReactiveScopeDependencyTreeHIR_debug --> push
  ReactiveScopeDependencyTreeHIR_debug --> printIdentifier
  ReactiveScopeDependencyTreeHIR_debug --> ReactiveScopeDependencyTreeHIR__debugImpl
  ReactiveScopeDependencyTreeHIR_debug --> push
  ReactiveScopeDependencyTreeHIR_debug --> join
  ReactiveScopeDependencyTreeHIR_debug --> join
  ReactiveScopeDependencyTreeHIR__debugImpl --> push
  ReactiveScopeDependencyTreeHIR__debugImpl --> repeat
  ReactiveScopeDependencyTreeHIR__debugImpl --> ReactiveScopeDependencyTreeHIR__debugImpl
  merge --> isOptional
  merge --> isOptional
  merge --> isDependency
  merge --> isDependency
  collectMinimalDependenciesInSubtree --> isDependency
  collectMinimalDependenciesInSubtree --> add
  collectMinimalDependenciesInSubtree --> collectMinimalDependenciesInSubtree
  collectMinimalDependenciesInSubtree --> isOptional
  printSubtree --> isDependency
  printSubtree --> push
  printSubtree --> printSubtree
  printSubtree --> push
  printSubtree --> map
  makeOrMergeProperty --> get
  makeOrMergeProperty --> set
  makeOrMergeProperty --> merge
  computeDominatorTree --> buildGraph
  computeDominatorTree --> computeImmediateDominators
  computePostDominatorTree --> buildReverseGraph
  computePostDominatorTree --> computeImmediateDominators
  computePostDominatorTree --> has
  computePostDominatorTree --> set
  Dominator_get --> get
  Dominator_get --> invariant
  Dominator_debug --> set
  Dominator_debug --> prettyFormat
  PostDominator_get --> get
  PostDominator_get --> invariant
  PostDominator_debug --> set
  PostDominator_debug --> prettyFormat
  computeImmediateDominators --> set
  computeImmediateDominators --> has
  computeImmediateDominators --> invariant
  computeImmediateDominators --> get
  computeImmediateDominators --> intersect
  computeImmediateDominators --> get
  computeImmediateDominators --> set
  intersect --> get
  intersect --> get
  intersect --> get
  intersect --> get
  intersect --> get
  intersect --> get
  buildGraph --> set
  buildGraph --> eachTerminalSuccessor
  buildReverseGraph --> set
  buildReverseGraph --> eachTerminalSuccessor
  buildReverseGraph --> add
  buildReverseGraph --> add
  buildReverseGraph --> add
  buildReverseGraph --> add
  buildReverseGraph --> set
  visit --> has
  visit --> add
  visit --> get
  visit --> visit
  visit --> push
  buildReverseGraph --> visit
  buildReverseGraph --> reverse
  buildReverseGraph --> get
  buildReverseGraph --> set
  findContextIdentifiers --> traverse
  findContextIdentifiers --> get
  findContextIdentifiers --> isLVal
  findContextIdentifiers --> at
  findContextIdentifiers --> handleAssignment
  findContextIdentifiers --> throwTodo
  findContextIdentifiers --> get
  findContextIdentifiers --> at
  findContextIdentifiers --> isLVal
  findContextIdentifiers --> handleAssignment
  findContextIdentifiers --> at
  findContextIdentifiers --> isReferencedIdentifier
  findContextIdentifiers --> handleIdentifier
  findContextIdentifiers --> entries
  findContextIdentifiers --> add
  findContextIdentifiers --> add
  handleIdentifier --> getBinding
  handleIdentifier --> getOrInsertDefault
  handleIdentifier --> getBinding
  handleAssignment --> getBinding
  handleAssignment --> getOrInsertDefault
  handleAssignment --> getBinding
  handleAssignment --> get
  handleAssignment --> nonNull
  handleAssignment --> handleAssignment
  handleAssignment --> get
  handleAssignment --> isObjectProperty
  handleAssignment --> get
  handleAssignment --> invariant
  handleAssignment --> isLVal
  handleAssignment --> handleAssignment
  handleAssignment --> invariant
  handleAssignment --> isRestElement
  handleAssignment --> handleAssignment
  handleAssignment --> get
  handleAssignment --> handleAssignment
  handleAssignment --> handleAssignment
  handleAssignment --> get
  handleAssignment --> throwTodo
  installTypeConfig --> assertExhaustive
  installTypeConfig --> addFunction
  installTypeConfig --> installTypeConfig
  installTypeConfig --> addHook
  installTypeConfig --> installTypeConfig
  installTypeConfig --> addObject
  installTypeConfig --> map
  installTypeConfig --> entries
  installTypeConfig --> installTypeConfig
  installTypeConfig --> isHookName
  installTypeConfig --> get
  installTypeConfig --> throwInvalidConfig
  installTypeConfig --> assertExhaustive
  getReanimatedModuleType --> push
  getReanimatedModuleType --> addHook
  getReanimatedModuleType --> push
  getReanimatedModuleType --> addHook
  getReanimatedModuleType --> push
  getReanimatedModuleType --> addFunction
  getReanimatedModuleType --> addObject
  HIRBuilder_constructor --> makeBlockId
  HIRBuilder_constructor --> newBlock
  HIRBuilder_push --> push
  HIRBuilder_push --> at
  HIRBuilder_push --> HIRBuilder_reserve
  HIRBuilder_push --> HIRBuilder_currentBlockKind
  HIRBuilder_push --> HIRBuilder_terminateWithContinuation
  HIRBuilder_push --> makeInstructionId
  HIRBuilder_enterTryCatch --> push
  HIRBuilder_enterTryCatch --> fn
  HIRBuilder_enterTryCatch --> pop
  HIRBuilder_resolveThrowHandler --> at
  HIRBuilder_makeTemporary --> makeTemporaryIdentifier
  HIRBuilder__resolveBabelBinding --> getBinding
  HIRBuilder_resolveIdentifier --> HIRBuilder__resolveBabelBinding
  HIRBuilder_resolveIdentifier --> getBinding
  HIRBuilder_resolveIdentifier --> isImportDefaultSpecifier
  HIRBuilder_resolveIdentifier --> isImportSpecifier
  HIRBuilder_resolveIdentifier --> isImportNamespaceSpecifier
  HIRBuilder_resolveIdentifier --> HIRBuilder_resolveBinding
  HIRBuilder_resolveIdentifier --> rename
  HIRBuilder_isContextIdentifier --> HIRBuilder__resolveBabelBinding
  HIRBuilder_isContextIdentifier --> getBinding
  HIRBuilder_isContextIdentifier --> isContextIdentifier
  HIRBuilder_resolveBinding --> throwDiagnostic
  HIRBuilder_resolveBinding --> throwDiagnostic
  HIRBuilder_resolveBinding --> get
  HIRBuilder_resolveBinding --> makeDeclarationId
  HIRBuilder_resolveBinding --> makeIdentifierName
  HIRBuilder_resolveBinding --> makeInstructionId
  HIRBuilder_resolveBinding --> makeInstructionId
  HIRBuilder_resolveBinding --> makeType
  HIRBuilder_resolveBinding --> addNewReference
  HIRBuilder_resolveBinding --> set
  HIRBuilder_build --> getReversePostorderedBlocks
  HIRBuilder_build --> has
  HIRBuilder_build --> some
  HIRBuilder_build --> throwTodo
  HIRBuilder_build --> removeUnreachableForUpdates
  HIRBuilder_build --> removeDeadDoWhileStatements
  HIRBuilder_build --> removeUnnecessaryTryCatch
  HIRBuilder_build --> markInstructionIds
  HIRBuilder_build --> markPredecessors
  HIRBuilder_terminate --> set
  HIRBuilder_terminate --> newBlock
  HIRBuilder_terminateWithContinuation --> set
  HIRBuilder_reserve --> newBlock
  HIRBuilder_reserve --> makeBlockId
  HIRBuilder_complete --> set
  HIRBuilder_enterReserved --> fn
  HIRBuilder_enterReserved --> set
  HIRBuilder_enter --> HIRBuilder_reserve
  HIRBuilder_enter --> HIRBuilder_enterReserved
  HIRBuilder_enter --> fn
  HIRBuilder_label --> push
  HIRBuilder_label --> fn
  HIRBuilder_label --> pop
  HIRBuilder_label --> invariant
  HIRBuilder_switch --> push
  HIRBuilder_switch --> fn
  HIRBuilder_switch --> pop
  HIRBuilder_switch --> invariant
  HIRBuilder_loop --> push
  HIRBuilder_loop --> fn
  HIRBuilder_loop --> pop
  HIRBuilder_loop --> invariant
  HIRBuilder_lookupBreak --> invariant
  HIRBuilder_lookupContinue --> invariant
  HIRBuilder_lookupContinue --> invariant
  resolveBlockTarget --> get
  resolveBlockTarget --> get
  resolveBlockTarget --> invariant
  resolveBlockTarget --> getTargetIfIndirection
  resolveBlockTarget --> resolveBlockTarget
  resolveBlockTarget --> set
  _shrink --> shift
  _shrink --> has
  _shrink --> add
  _shrink --> get
  _shrink --> mapTerminalSuccessors
  _shrink --> resolveBlockTarget
  _shrink --> push
  _shrink --> has
  _shrink --> delete
  removeUnreachableForUpdates --> has
  removeDeadDoWhileStatements --> add
  removeDeadDoWhileStatements --> has
  reversePostorderBlocks --> getReversePostorderedBlocks
  visit --> has
  visit --> has
  visit --> add
  visit --> add
  visit --> get
  visit --> invariant
  visit --> reverse
  visit --> eachTerminalSuccessor
  visit --> terminalFallthrough
  visit --> add
  visit --> visit
  visit --> visit
  visit --> push
  getReversePostorderedBlocks --> visit
  getReversePostorderedBlocks --> reverse
  getReversePostorderedBlocks --> get
  getReversePostorderedBlocks --> has
  getReversePostorderedBlocks --> set
  getReversePostorderedBlocks --> get
  getReversePostorderedBlocks --> has
  getReversePostorderedBlocks --> set
  markInstructionIds --> invariant
  markInstructionIds --> has
  markInstructionIds --> printInstruction
  markInstructionIds --> add
  markInstructionIds --> makeInstructionId
  markInstructionIds --> makeInstructionId
  markPredecessors --> clear
  visit --> get
  visit --> invariant
  visit --> add
  visit --> has
  visit --> add
  visit --> eachTerminalSuccessor
  visit --> visit
  markPredecessors --> visit
  removeUnnecessaryTryCatch --> has
  removeUnnecessaryTryCatch --> get
  removeUnnecessaryTryCatch --> makeInstructionId
  removeUnnecessaryTryCatch --> has
  removeUnnecessaryTryCatch --> delete
  removeUnnecessaryTryCatch --> delete
  createTemporaryPlace --> makeTemporaryIdentifier
  clonePlaceToTemporary --> createTemporaryPlace
  fixScopeAndIdentifierRanges --> get
  mergeConsecutiveBlocks --> terminalFallthrough
  mergeConsecutiveBlocks --> add
  mergeConsecutiveBlocks --> mergeConsecutiveBlocks
  mergeConsecutiveBlocks --> has
  mergeConsecutiveBlocks --> from
  mergeConsecutiveBlocks --> get
  mergeConsecutiveBlocks --> get
  mergeConsecutiveBlocks --> invariant
  mergeConsecutiveBlocks --> invariant
  mergeConsecutiveBlocks --> from
  mergeConsecutiveBlocks --> values
  mergeConsecutiveBlocks --> push
  mergeConsecutiveBlocks --> push
  mergeConsecutiveBlocks --> merge
  mergeConsecutiveBlocks --> delete
  mergeConsecutiveBlocks --> get
  mergeConsecutiveBlocks --> delete
  mergeConsecutiveBlocks --> set
  mergeConsecutiveBlocks --> markPredecessors
  mergeConsecutiveBlocks --> terminalHasFallthrough
  mergeConsecutiveBlocks --> get
  MergedBlocks_merge --> MergedBlocks_get
  MergedBlocks_merge --> set
  MergedBlocks_get --> has
  MergedBlocks_get --> get
  mergeOverlappingReactiveScopesHIR --> collectScopeInfo
  mergeOverlappingReactiveScopesHIR --> getOverlappingReactiveScopes
  mergeOverlappingReactiveScopesHIR --> forEach
  mergeOverlappingReactiveScopesHIR --> makeInstructionId
  mergeOverlappingReactiveScopesHIR --> min
  mergeOverlappingReactiveScopesHIR --> makeInstructionId
  mergeOverlappingReactiveScopesHIR --> max
  mergeOverlappingReactiveScopesHIR --> find
  collectPlaceScope --> set
  collectPlaceScope --> add
  collectPlaceScope --> getOrInsertDefault
  collectPlaceScope --> add
  collectPlaceScope --> getOrInsertDefault
  collectScopeInfo --> eachInstructionLValue
  collectScopeInfo --> collectPlaceScope
  collectScopeInfo --> eachInstructionOperand
  collectScopeInfo --> collectPlaceScope
  collectScopeInfo --> eachTerminalOperand
  collectScopeInfo --> collectPlaceScope
  collectScopeInfo --> sort
  collectScopeInfo --> map
  collectScopeInfo --> entries
  collectScopeInfo --> sort
  collectScopeInfo --> map
  collectScopeInfo --> entries
  visitInstructionId --> at
  visitInstructionId --> pop
  visitInstructionId --> sort
  visitInstructionId --> indexOf
  visitInstructionId --> union
  visitInstructionId --> slice
  visitInstructionId --> splice
  visitInstructionId --> at
  visitInstructionId --> pop
  visitInstructionId --> sort
  visitInstructionId --> push
  visitInstructionId --> union
  visitPlace --> getPlaceScope
  visitPlace --> isMutable
  visitPlace --> indexOf
  visitPlace --> union
  visitPlace --> slice
  getOverlappingReactiveScopes --> visitInstructionId
  getOverlappingReactiveScopes --> eachInstructionOperand
  getOverlappingReactiveScopes --> visitPlace
  getOverlappingReactiveScopes --> eachInstructionLValue
  getOverlappingReactiveScopes --> visitPlace
  getOverlappingReactiveScopes --> visitInstructionId
  getOverlappingReactiveScopes --> eachTerminalOperand
  getOverlappingReactiveScopes --> visitPlace
  printFunctionWithOutlined --> printFunction
  printFunctionWithOutlined --> getOutlinedFunctions
  printFunctionWithOutlined --> push
  printFunctionWithOutlined --> printHIR
  printFunctionWithOutlined --> join
  printFunction --> join
  printFunction --> map
  printFunction --> printPlace
  printFunction --> printPlace
  printFunction --> printPlace
  printFunction --> push
  printFunction --> push
  printFunction --> push
  printFunction --> printHIR
  printFunction --> join
  printHIR --> repeat
  push --> push
  printHIR --> push
  printHIR --> push
  printHIR --> push
  printHIR --> join
  printHIR --> push
  printHIR --> printPhi
  printHIR --> push
  printHIR --> printInstruction
  printHIR --> printTerminal
  printHIR --> isArray
  printHIR --> forEach
  printHIR --> push
  printHIR --> push
  printHIR --> join
  printHIR --> map
  printMixedHIR --> printInstruction
  printMixedHIR --> printTerminal
  printMixedHIR --> isArray
  printMixedHIR --> join
  printMixedHIR --> printInstructionValue
  printInstruction --> printInstructionValue
  printInstruction --> join
  printInstruction --> map
  printInstruction --> printPlace
  printPhi --> push
  printPhi --> printPlace
  printPhi --> push
  printPhi --> printMutableRange
  printPhi --> push
  printPhi --> printType
  printPhi --> push
  printPhi --> push
  printPhi --> printPlace
  printPhi --> push
  printPhi --> join
  printPhi --> push
  printPhi --> join
  printTerminal --> printPlace
  printTerminal --> printPlace
  printTerminal --> printPlace
  printTerminal --> printPlace
  printTerminal --> join
  printTerminal --> map
  printTerminal --> push
  printTerminal --> printPlace
  printTerminal --> forEach
  printTerminal --> push
  printTerminal --> printPlace
  printTerminal --> push
  printTerminal --> push
  printTerminal --> join
  printTerminal --> map
  printTerminal --> printReactiveScopeSummary
  printTerminal --> printReactiveScopeSummary
  printTerminal --> printPlace
  printTerminal --> assertExhaustive
  printObjectPropertyKey --> printPlace
  printObjectPropertyKey --> String
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPlace
  printInstructionValue --> printHole
  printInstructionValue --> printPlace
  printInstructionValue --> push
  printInstructionValue --> printObjectPropertyKey
  printInstructionValue --> printPlace
  printInstructionValue --> push
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPattern
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPattern
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPattern
  printInstructionValue --> stringify
  printInstructionValue --> stringify
  printInstructionValue --> printPlace
  printInstructionValue --> printType
  printInstructionValue --> push
  printInstructionValue --> printPlace
  printInstructionValue --> push
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPattern
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> getFunctionName
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> split
  printInstructionValue --> printFunction
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPlace
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printPlace
  printInstructionValue --> printInstructionValue
  printInstructionValue --> printInstructionValue
  printInstructionValue --> join
  printInstructionValue --> map
  printInstructionValue --> printInstruction
  printInstructionValue --> printInstructionValue
  printInstructionValue --> printInstructionValue
  printInstructionValue --> printInstructionValue
  printInstructionValue --> printInstructionValue
  printInstructionValue --> invariant
  printInstructionValue --> printPlace
  printInstructionValue --> at
  printInstructionValue --> assertExhaustive
  printInstructionValue --> printPlace
  printInstructionValue --> printInstructionValue
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> printPlace
  printInstructionValue --> map
  printInstructionValue --> printManualMemoDependency
  printInstructionValue --> printPlace
  printInstructionValue --> assertExhaustive
  printMutableRange --> isMutable
  printMutableRange --> isMutable
  printLValue --> printPlace
  printLValue --> assertExhaustive
  printPattern --> join
  printPattern --> map
  printPattern --> printPattern
  printPattern --> join
  printPattern --> map
  printPattern --> printObjectPropertyKey
  printPattern --> printPattern
  printPattern --> printPattern
  printPattern --> assertExhaustive
  printPattern --> printPlace
  printPattern --> printPlace
  printPattern --> assertExhaustive
  printPlace --> printIdentifier
  printPlace --> printMutableRange
  printPlace --> printType
  printPlace --> join
  printPlace --> filter
  printIdentifier --> printName
  printIdentifier --> printScope
  printManualMemoDependency --> invariant
  printManualMemoDependency --> printIdentifier
  printManualMemoDependency --> join
  printManualMemoDependency --> map
  printType --> printType
  printAliases --> buildSets
  printAliases --> push
  printAliases --> join
  printAliases --> map
  printAliases --> printIdentifier
  printAliases --> join
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> join
  printAliasingEffect --> map
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> join
  printAliasingEffect --> map
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printAliasingSignature
  printAliasingEffect --> stringify
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> stringify
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> stringify
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> stringify
  printAliasingEffect --> printPlaceForAliasEffect
  printAliasingEffect --> assertExhaustive
  printPlaceForAliasEffect --> printIdentifier
  printAliasingSignature --> push
  printAliasingSignature --> push
  printAliasingSignature --> join
  printAliasingSignature --> map
  printAliasingSignature --> push
  printAliasingSignature --> push
  printAliasingSignature --> push
  printAliasingSignature --> String
  printAliasingSignature --> push
  printAliasingSignature --> String
  printAliasingSignature --> push
  printAliasingSignature --> String
  printAliasingSignature --> push
  printAliasingSignature --> push
  printAliasingSignature --> String
  printAliasingSignature --> push
  printAliasingSignature --> printAliasingEffect
  printAliasingSignature --> join
  propagateScopeDependenciesHIR --> findTemporariesUsedOutsideDeclaringScope
  propagateScopeDependenciesHIR --> collectTemporariesSidemap
  propagateScopeDependenciesHIR --> collectOptionalChainSidemap
  propagateScopeDependenciesHIR --> keyByScopeId
  propagateScopeDependenciesHIR --> collectHoistablePropertyLoads
  propagateScopeDependenciesHIR --> collectDependencies
  propagateScopeDependenciesHIR --> get
  propagateScopeDependenciesHIR --> invariant
  propagateScopeDependenciesHIR --> map
  propagateScopeDependenciesHIR --> addDependency
  propagateScopeDependenciesHIR --> deriveMinimalDependencies
  propagateScopeDependenciesHIR --> Iterable_some
  propagateScopeDependenciesHIR --> areEqualPaths
  propagateScopeDependenciesHIR --> add
  handlePlace --> get
  handlePlace --> isScopeActive
  handlePlace --> has
  handlePlace --> add
  handleInstruction --> has
  handleInstruction --> set
  findTemporariesUsedOutsideDeclaringScope --> recordScopes
  findTemporariesUsedOutsideDeclaringScope --> get
  findTemporariesUsedOutsideDeclaringScope --> add
  findTemporariesUsedOutsideDeclaringScope --> eachInstructionOperand
  findTemporariesUsedOutsideDeclaringScope --> handlePlace
  findTemporariesUsedOutsideDeclaringScope --> handleInstruction
  findTemporariesUsedOutsideDeclaringScope --> eachTerminalOperand
  findTemporariesUsedOutsideDeclaringScope --> handlePlace
  collectTemporariesSidemap --> collectTemporariesSidemapImpl
  collectTemporariesSidemapImpl --> has
  collectTemporariesSidemapImpl --> has
  collectTemporariesSidemapImpl --> getProperty
  collectTemporariesSidemapImpl --> set
  collectTemporariesSidemapImpl --> isLoadContextMutable
  collectTemporariesSidemapImpl --> some
  collectTemporariesSidemapImpl --> set
  collectTemporariesSidemapImpl --> collectTemporariesSidemapImpl
  getProperty --> get
  DependencyCollectionContext_enterScope --> push
  DependencyCollectionContext_enterScope --> push
  DependencyCollectionContext_exitScope --> invariant
  DependencyCollectionContext_exitScope --> pop
  DependencyCollectionContext_exitScope --> pop
  DependencyCollectionContext_exitScope --> DependencyCollectionContext__checkValidDependency
  DependencyCollectionContext_exitScope --> push
  DependencyCollectionContext_exitScope --> set
  DependencyCollectionContext_isUsedOutsideDeclaringScope --> has
  DependencyCollectionContext_declare --> has
  DependencyCollectionContext_declare --> set
  DependencyCollectionContext_declare --> set
  DependencyCollectionContext_hasDeclared --> has
  DependencyCollectionContext__checkValidDependency --> isRefValueType
  DependencyCollectionContext__checkValidDependency --> isObjectMethodType
  DependencyCollectionContext__checkValidDependency --> get
  DependencyCollectionContext__checkValidDependency --> get
  DependencyCollectionContext__isScopeActive --> find
  DependencyCollectionContext_visitOperand --> DependencyCollectionContext_visitDependency
  DependencyCollectionContext_visitOperand --> get
  DependencyCollectionContext_visitProperty --> getProperty
  DependencyCollectionContext_visitProperty --> DependencyCollectionContext_visitDependency
  DependencyCollectionContext_visitDependency --> get
  DependencyCollectionContext_visitDependency --> each
  DependencyCollectionContext_visitDependency --> DependencyCollectionContext__isScopeActive
  DependencyCollectionContext_visitDependency --> Iterable_some
  DependencyCollectionContext_visitDependency --> values
  DependencyCollectionContext_visitDependency --> set
  DependencyCollectionContext_visitDependency --> isUseRefType
  DependencyCollectionContext_visitDependency --> at
  DependencyCollectionContext_visitDependency --> DependencyCollectionContext__checkValidDependency
  DependencyCollectionContext_visitDependency --> push
  DependencyCollectionContext_visitReassignment --> Iterable_some
  DependencyCollectionContext_visitReassignment --> DependencyCollectionContext__checkValidDependency
  DependencyCollectionContext_visitReassignment --> add
  DependencyCollectionContext_enterInnerFn --> cb
  DependencyCollectionContext_isDeferredDependency --> has
  DependencyCollectionContext_isDeferredDependency --> has
  handleInstruction --> declare
  handleInstruction --> isDeferredDependency
  handleInstruction --> visitProperty
  handleInstruction --> visitOperand
  handleInstruction --> visitReassignment
  handleInstruction --> declare
  handleInstruction --> convertHoistedLValueKind
  handleInstruction --> declare
  handleInstruction --> visitOperand
  handleInstruction --> eachPatternOperand
  handleInstruction --> visitReassignment
  handleInstruction --> declare
  handleInstruction --> hasDeclared
  handleInstruction --> declare
  handleInstruction --> eachInstructionValueOperand
  handleInstruction --> visitOperand
  handleInstruction --> eachInstructionValueOperand
  handleInstruction --> visitOperand
  collectDependencies --> declare
  collectDependencies --> makeInstructionId
  collectDependencies --> empty
  collectDependencies --> declare
  collectDependencies --> makeInstructionId
  collectDependencies --> empty
  handleFunction --> recordScopes
  handleFunction --> get
  handleFunction --> enterScope
  handleFunction --> exitScope
  handleFunction --> get
  handleFunction --> visitDependency
  handleFunction --> declare
  handleFunction --> enterInnerFn
  handleFunction --> handleFunction
  handleFunction --> handleInstruction
  handleFunction --> isDeferredDependency
  handleFunction --> eachTerminalOperand
  handleFunction --> visitOperand
  collectDependencies --> handleFunction
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> push
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> invariant
  pruneUnusedLabelsHIR --> invariant
  pruneUnusedLabelsHIR --> has
  pruneUnusedLabelsHIR --> has
  pruneUnusedLabelsHIR --> push
  pruneUnusedLabelsHIR --> delete
  pruneUnusedLabelsHIR --> delete
  pruneUnusedLabelsHIR --> set
  pruneUnusedLabelsHIR --> get
  pruneUnusedLabelsHIR --> delete
  pruneUnusedLabelsHIR --> add
  buildDependencyInstructions --> every
  buildDependencyInstructions --> writeNonOptionalDependency
  buildDependencyInstructions --> writeOptionalDependency
  buildDependencyInstructions --> terminate
  buildDependencyInstructions --> makeInstructionId
  buildDependencyInstructions --> build
  writeNonOptionalDependency --> makeTemporaryIdentifier
  writeNonOptionalDependency --> push
  writeNonOptionalDependency --> makeInstructionId
  writeNonOptionalDependency --> makeTemporaryIdentifier
  writeNonOptionalDependency --> push
  writeNonOptionalDependency --> makeInstructionId
  writeOptionalDependency --> makeTemporaryIdentifier
  writeOptionalDependency --> reserve
  writeOptionalDependency --> currentBlockKind
  writeOptionalDependency --> enter
  writeOptionalDependency --> lowerValueToTemporary
  writeOptionalDependency --> lowerValueToTemporary
  writeOptionalDependency --> makeInstructionId
  writeOptionalDependency --> reserve
  writeOptionalDependency --> enter
  writeOptionalDependency --> slice
  writeOptionalDependency --> findIndex
  writeOptionalDependency --> invariant
  writeOptionalDependency --> writeNonOptionalDependency
  writeOptionalDependency --> writeOptionalDependency
  writeOptionalDependency --> makeInstructionId
  writeOptionalDependency --> enterReserved
  writeOptionalDependency --> invariant
  writeOptionalDependency --> lowerValueToTemporary
  writeOptionalDependency --> lowerValueToTemporary
  writeOptionalDependency --> at
  writeOptionalDependency --> makeInstructionId
  writeOptionalDependency --> terminateWithContinuation
  writeOptionalDependency --> at
  writeOptionalDependency --> makeInstructionId
  makeTypeId --> invariant
  makeTypeId --> isInteger
  makeType --> makeTypeId
  duplicateType --> duplicateType
  duplicateType --> map
  duplicateType --> duplicateType
  duplicateType --> duplicateType
  duplicateType --> makeType
  typeEquals --> typeVarEquals
  typeEquals --> funcTypeEquals
  typeEquals --> objectTypeEquals
  typeEquals --> primitiveTypeEquals
  typeEquals --> polyTypeEquals
  typeEquals --> phiTypeEquals
  typeEquals --> propTypeEquals
  typeEquals --> objectMethodTypeEquals
  objectMethodTypeEquals --> typeKindCheck
  propTypeEquals --> typeEquals
  primitiveTypeEquals --> typeKindCheck
  polyTypeEquals --> typeKindCheck
  funcTypeEquals --> typeEquals
  phiTypeEquals --> has
  doesPatternContainSpreadElement --> assertExhaustive
  mapInstructionLValues --> fn
  mapInstructionLValues --> mapPatternOperands
  mapInstructionLValues --> fn
  mapInstructionLValues --> fn
  mapInstructionOperands --> mapInstructionValueOperands
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> mapCallArguments
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> mapCallArguments
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> assertExhaustive
  mapInstructionValueOperands --> map
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> map
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> map
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> map
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> map
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> fn
  mapInstructionValueOperands --> assertExhaustive
  mapCallArguments --> map
  mapCallArguments --> fn
  mapCallArguments --> fn
  mapPatternOperands --> map
  mapPatternOperands --> fn
  mapPatternOperands --> fn
  mapPatternOperands --> fn
  mapPatternOperands --> assertExhaustive
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> map
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> fn
  mapTerminalSuccessors --> makeInstructionId
  mapTerminalSuccessors --> assertExhaustive
  terminalHasFallthrough --> assertExhaustive
  terminalFallthrough --> terminalHasFallthrough
  mapTerminalOperands --> fn
  mapTerminalOperands --> fn
  mapTerminalOperands --> fn
  mapTerminalOperands --> fn
  mapTerminalOperands --> fn
  mapTerminalOperands --> fn
  mapTerminalOperands --> assertExhaustive
  ScopeBlockTraversal_recordScopes --> get
  ScopeBlockTraversal_recordScopes --> push
  ScopeBlockTraversal_recordScopes --> at
  ScopeBlockTraversal_recordScopes --> invariant
  ScopeBlockTraversal_recordScopes --> pop
  ScopeBlockTraversal_recordScopes --> invariant
  ScopeBlockTraversal_recordScopes --> has
  ScopeBlockTraversal_recordScopes --> has
  ScopeBlockTraversal_recordScopes --> set
  ScopeBlockTraversal_recordScopes --> set
  ScopeBlockTraversal_isScopeActive --> indexOf
  ScopeBlockTraversal_currentScope --> at
  hashEffect --> join
  hashEffect --> join
  hashEffect --> map
  hashEffect --> join
  hashEffect --> join
  hashEffect --> join
  hashEffect --> join
  hashEffect --> join
  hashEffect --> printSourceLocation
  hashEffect --> primaryLocation
  hashEffect --> join
  hashEffect --> join
  hashEffect --> join
  hashEffect --> map
  analyseFunctions --> lowerWithMutationAliasing
  analyseFunctions --> makeInstructionId
  analyseFunctions --> makeInstructionId
  lowerWithMutationAliasing --> analyseFunctions
  lowerWithMutationAliasing --> inferMutationAliasingEffects
  lowerWithMutationAliasing --> deadCodeElimination
  lowerWithMutationAliasing --> unwrap
  lowerWithMutationAliasing --> inferMutationAliasingRanges
  lowerWithMutationAliasing --> rewriteInstructionKindsBasedOnReassignment
  lowerWithMutationAliasing --> inferReactiveScopeVariables
  lowerWithMutationAliasing --> add
  lowerWithMutationAliasing --> invariant
  lowerWithMutationAliasing --> add
  lowerWithMutationAliasing --> assertExhaustive
  lowerWithMutationAliasing --> has
  lowerWithMutationAliasing --> debugLogIRs
  createControlDominators --> computePostDominatorTree
  isControlledBlock --> get
  isControlledBlock --> postDominatorFrontier
  isControlledBlock --> set
  isControlledBlock --> get
  isControlledBlock --> isControlVariable
  isControlledBlock --> isControlVariable
  isControlledBlock --> isControlVariable
  postDominatorFrontier --> postDominatorsOf
  postDominatorFrontier --> has
  postDominatorFrontier --> add
  postDominatorFrontier --> get
  postDominatorFrontier --> has
  postDominatorFrontier --> add
  postDominatorsOf --> shift
  postDominatorsOf --> has
  postDominatorsOf --> add
  postDominatorsOf --> get
  postDominatorsOf --> get
  postDominatorsOf --> has
  postDominatorsOf --> add
  postDominatorsOf --> push
  collectMaybeMemoDependencies --> get
  collectMaybeMemoDependencies --> get
  collectMaybeMemoDependencies --> get
  collectMaybeMemoDependencies --> set
  collectTemporaries --> set
  collectTemporaries --> getGlobalDeclaration
  collectTemporaries --> getHookKindForType
  collectTemporaries --> set
  collectTemporaries --> add
  collectTemporaries --> has
  collectTemporaries --> set
  collectTemporaries --> every
  collectTemporaries --> set
  collectTemporaries --> collectMaybeMemoDependencies
  collectTemporaries --> has
  collectTemporaries --> set
  makeManualMemoizationMarkers --> makeInstructionId
  makeManualMemoizationMarkers --> createTemporaryPlace
  makeManualMemoizationMarkers --> makeInstructionId
  makeManualMemoizationMarkers --> createTemporaryPlace
  extractManualMemoizationArgs --> pushDiagnostic
  extractManualMemoizationArgs --> withDetails
  extractManualMemoizationArgs --> create
  extractManualMemoizationArgs --> get
  extractManualMemoizationArgs --> pushDiagnostic
  extractManualMemoizationArgs --> withDetails
  extractManualMemoizationArgs --> create
  extractManualMemoizationArgs --> get
  extractManualMemoizationArgs --> pushDiagnostic
  extractManualMemoizationArgs --> withDetails
  extractManualMemoizationArgs --> create
  extractManualMemoizationArgs --> push
  dropManualMemoization --> findOptionalPlaces
  dropManualMemoization --> get
  dropManualMemoization --> extractManualMemoizationArgs
  dropManualMemoization --> getManualMemoizationReplacement
  dropManualMemoization --> has
  dropManualMemoization --> pushDiagnostic
  dropManualMemoization --> withDetails
  dropManualMemoization --> create
  dropManualMemoization --> makeManualMemoizationMarkers
  dropManualMemoization --> set
  dropManualMemoization --> set
  dropManualMemoization --> collectTemporaries
  dropManualMemoization --> get
  dropManualMemoization --> slice
  dropManualMemoization --> push
  dropManualMemoization --> push
  dropManualMemoization --> push
  dropManualMemoization --> markInstructionIds
  dropManualMemoization --> asResult
  findOptionalPlaces --> get
  findOptionalPlaces --> get
  findOptionalPlaces --> at
  findOptionalPlaces --> add
  findOptionalPlaces --> get
  findOptionalPlaces --> get
  findOptionalPlaces --> invariant
  inferEffectDependencies --> getOrInsertWith
  inferEffectDependencies --> set
  inferEffectDependencies --> inferReactiveIdentifiers
  inferEffectDependencies --> get
  inferEffectDependencies --> set
  inferEffectDependencies --> set
  inferEffectDependencies --> has
  inferEffectDependencies --> get
  inferEffectDependencies --> get
  inferEffectDependencies --> set
  inferEffectDependencies --> add
  inferEffectDependencies --> get
  inferEffectDependencies --> set
  inferEffectDependencies --> get
  inferEffectDependencies --> get
  inferEffectDependencies --> set
  inferEffectDependencies --> findIndex
  inferEffectDependencies --> get
  inferEffectDependencies --> has
  inferEffectDependencies --> createTemporaryPlace
  inferEffectDependencies --> get
  inferEffectDependencies --> get
  inferEffectDependencies --> inferMinimalDependencies
  inferEffectDependencies --> isUseRefType
  inferEffectDependencies --> isSetStateType
  inferEffectDependencies --> has
  inferEffectDependencies --> isFireFunctionType
  inferEffectDependencies --> isEffectEventFunctionType
  inferEffectDependencies --> truncateDepAtCurrent
  inferEffectDependencies --> buildDependencyInstructions
  inferEffectDependencies --> push
  inferEffectDependencies --> push
  inferEffectDependencies --> push
  inferEffectDependencies --> collectDepUsages
  inferEffectDependencies --> push
  inferEffectDependencies --> logEvent
  inferEffectDependencies --> push
  inferEffectDependencies --> makeInstructionId
  inferEffectDependencies --> add
  inferEffectDependencies --> has
  inferEffectDependencies --> push
  inferEffectDependencies --> makeInstructionId
  inferEffectDependencies --> add
  inferEffectDependencies --> get
  inferEffectDependencies --> logEvent
  inferEffectDependencies --> rewriteSplices
  inferEffectDependencies --> set
  inferEffectDependencies --> reversePostorderBlocks
  inferEffectDependencies --> markPredecessors
  inferEffectDependencies --> markInstructionIds
  inferEffectDependencies --> fixScopeAndIdentifierRanges
  inferEffectDependencies --> deadCodeElimination
  truncateDepAtCurrent --> findIndex
  truncateDepAtCurrent --> slice
  rewriteSplices --> push
  rewriteSplices --> invariant
  rewriteSplices --> push
  rewriteSplices --> invariant
  rewriteSplices --> push
  rewriteSplices --> get
  rewriteSplices --> push
  rewriteSplices --> invariant
  rewriteSplices --> terminalFallthrough
  rewriteSplices --> push
  rewriteSplices --> push
  rewriteSplices --> slice
  inferReactiveIdentifiers --> eachInstructionOperand
  inferReactiveIdentifiers --> add
  inferReactiveIdentifiers --> eachTerminalOperand
  inferReactiveIdentifiers --> add
  collectDepUsages --> set
  collectDepUsages --> has
  collectDepUsages --> add
  collectDepUsages --> eachInstructionOperand
  collectDepUsages --> has
  collectDepUsages --> push
  inferMinimalDependencies --> collectTemporariesSidemap
  inferMinimalDependencies --> collectOptionalChainSidemap
  inferMinimalDependencies --> collectHoistablePropertyLoadsInInnerFn
  inferMinimalDependencies --> get
  inferMinimalDependencies --> invariant
  inferMinimalDependencies --> inferDependencies
  inferMinimalDependencies --> map
  inferMinimalDependencies --> addDependency
  inferMinimalDependencies --> deriveMinimalDependencies
  inferDependencies --> declare
  inferDependencies --> makeInstructionId
  inferDependencies --> empty
  inferDependencies --> makeScopeId
  inferDependencies --> makeInstructionId
  inferDependencies --> enterScope
  inferDependencies --> inferDependenciesInFn
  inferDependencies --> exitScope
  inferDependencies --> get
  inferDependencies --> invariant
  inferDependencies --> map
  inferDependencies --> has
  inferDependencies --> add
  inferDependenciesInFn --> get
  inferDependenciesInFn --> visitDependency
  inferDependenciesInFn --> declare
  inferDependenciesInFn --> enterInnerFn
  inferDependenciesInFn --> inferDependenciesInFn
  inferDependenciesInFn --> handleInstruction
  inferMutationAliasingRanges --> create
  inferMutationAliasingRanges --> values
  inferMutationAliasingRanges --> create
  inferMutationAliasingRanges --> has
  inferMutationAliasingRanges --> getOrInsertWith
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> add
  inferMutationAliasingRanges --> create
  inferMutationAliasingRanges --> create
  inferMutationAliasingRanges --> createFrom
  inferMutationAliasingRanges --> has
  inferMutationAliasingRanges --> create
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> maybeAlias
  inferMutationAliasingRanges --> capture
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> pushDiagnostic
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> get
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> assign
  inferMutationAliasingRanges --> invariant
  inferMutationAliasingRanges --> mutate
  inferMutationAliasingRanges --> makeInstructionId
  inferMutationAliasingRanges --> render
  inferMutationAliasingRanges --> get
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> values
  inferMutationAliasingRanges --> at
  inferMutationAliasingRanges --> values
  inferMutationAliasingRanges --> at
  inferMutationAliasingRanges --> makeInstructionId
  inferMutationAliasingRanges --> eachInstructionLValue
  inferMutationAliasingRanges --> makeInstructionId
  inferMutationAliasingRanges --> max
  inferMutationAliasingRanges --> eachInstructionValueOperand
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> invariant
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> set
  inferMutationAliasingRanges --> assertExhaustive
  inferMutationAliasingRanges --> eachInstructionLValue
  inferMutationAliasingRanges --> get
  inferMutationAliasingRanges --> eachInstructionValueOperand
  inferMutationAliasingRanges --> get
  inferMutationAliasingRanges --> makeInstructionId
  inferMutationAliasingRanges --> eachTerminalOperand
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> isPrimitiveType
  inferMutationAliasingRanges --> isJsxType
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> mutate
  inferMutationAliasingRanges --> get
  inferMutationAliasingRanges --> invariant
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> push
  inferMutationAliasingRanges --> hasAnyErrors
  inferMutationAliasingRanges --> Err
  inferMutationAliasingRanges --> Ok
  appendFunctionErrors --> pushDiagnostic
  AliasingState_create --> set
  AliasingState_createFrom --> AliasingState_create
  AliasingState_createFrom --> get
  AliasingState_createFrom --> get
  AliasingState_createFrom --> push
  AliasingState_createFrom --> has
  AliasingState_createFrom --> set
  AliasingState_capture --> get
  AliasingState_capture --> get
  AliasingState_capture --> push
  AliasingState_capture --> has
  AliasingState_capture --> set
  AliasingState_assign --> get
  AliasingState_assign --> get
  AliasingState_assign --> push
  AliasingState_assign --> has
  AliasingState_assign --> set
  AliasingState_maybeAlias --> get
  AliasingState_maybeAlias --> get
  AliasingState_maybeAlias --> push
  AliasingState_maybeAlias --> has
  AliasingState_maybeAlias --> set
  AliasingState_render --> pop
  AliasingState_render --> has
  AliasingState_render --> add
  AliasingState_render --> get
  AliasingState_render --> appendFunctionErrors
  AliasingState_render --> push
  AliasingState_render --> push
  AliasingState_render --> push
  AliasingState_mutate --> pop
  AliasingState_mutate --> get
  AliasingState_mutate --> set
  AliasingState_mutate --> get
  AliasingState_mutate --> max
  AliasingState_mutate --> makeInstructionId
  AliasingState_mutate --> max
  AliasingState_mutate --> appendFunctionErrors
  AliasingState_mutate --> push
  AliasingState_mutate --> push
  AliasingState_mutate --> push
  AliasingState_mutate --> push
  AliasingState_mutate --> push
  StableSidemap_handleInstruction --> evaluatesToStableTypeOrContainer
  StableSidemap_handleInstruction --> isStableType
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> get
  StableSidemap_handleInstruction --> eachInstructionLValue
  StableSidemap_handleInstruction --> isStableTypeContainer
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> isStableType
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> get
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> set
  StableSidemap_handleInstruction --> get
  StableSidemap_handleInstruction --> set
  StableSidemap_isStable --> get
  inferReactivePlaces --> findDisjointMutableValues
  inferReactivePlaces --> markReactive
  inferReactivePlaces --> createControlDominators
  inferReactivePlaces --> isReactive
  inferReactivePlaces --> isReactiveControlledBlock
  inferReactivePlaces --> isReactive
  inferReactivePlaces --> isReactive
  inferReactivePlaces --> markReactive
  inferReactivePlaces --> isReactiveControlledBlock
  inferReactivePlaces --> markReactive
  inferReactivePlaces --> handleInstruction
  inferReactivePlaces --> eachInstructionValueOperand
  inferReactivePlaces --> isReactive
  inferReactivePlaces --> getHookKind
  inferReactivePlaces --> isUseOperator
  inferReactivePlaces --> getHookKind
  inferReactivePlaces --> isUseOperator
  inferReactivePlaces --> eachInstructionLValue
  inferReactivePlaces --> isStable
  inferReactivePlaces --> markReactive
  inferReactivePlaces --> eachInstructionValueOperand
  inferReactivePlaces --> isMutable
  inferReactivePlaces --> markReactive
  inferReactivePlaces --> invariant
  inferReactivePlaces --> assertExhaustive
  inferReactivePlaces --> eachTerminalOperand
  inferReactivePlaces --> isReactive
  inferReactivePlaces --> snapshot
  propagateReactivityToInnerFunctions --> eachInstructionOperand
  propagateReactivityToInnerFunctions --> isReactive
  propagateReactivityToInnerFunctions --> propagateReactivityToInnerFunctions
  propagateReactivityToInnerFunctions --> eachTerminalOperand
  propagateReactivityToInnerFunctions --> isReactive
  inferReactivePlaces --> propagateReactivityToInnerFunctions
  ReactivityMap_isReactive --> find
  ReactivityMap_isReactive --> has
  ReactivityMap_markReactive --> find
  ReactivityMap_markReactive --> has
  ReactivityMap_markReactive --> add
  inlineImmediatelyInvokedFunctionExpressions --> from
  inlineImmediatelyInvokedFunctionExpressions --> values
  inlineImmediatelyInvokedFunctionExpressions --> isStatementBlockKind
  inlineImmediatelyInvokedFunctionExpressions --> set
  inlineImmediatelyInvokedFunctionExpressions --> get
  inlineImmediatelyInvokedFunctionExpressions --> add
  inlineImmediatelyInvokedFunctionExpressions --> slice
  inlineImmediatelyInvokedFunctionExpressions --> set
  inlineImmediatelyInvokedFunctionExpressions --> hasSingleExitReturnTerminal
  inlineImmediatelyInvokedFunctionExpressions --> values
  inlineImmediatelyInvokedFunctionExpressions --> push
  inlineImmediatelyInvokedFunctionExpressions --> makeInstructionId
  inlineImmediatelyInvokedFunctionExpressions --> clear
  inlineImmediatelyInvokedFunctionExpressions --> set
  inlineImmediatelyInvokedFunctionExpressions --> makeInstructionId
  inlineImmediatelyInvokedFunctionExpressions --> declareTemporary
  inlineImmediatelyInvokedFunctionExpressions --> promoteTemporary
  inlineImmediatelyInvokedFunctionExpressions --> clear
  inlineImmediatelyInvokedFunctionExpressions --> rewriteBlock
  inlineImmediatelyInvokedFunctionExpressions --> set
  inlineImmediatelyInvokedFunctionExpressions --> push
  inlineImmediatelyInvokedFunctionExpressions --> eachInstructionValueOperand
  inlineImmediatelyInvokedFunctionExpressions --> delete
  inlineImmediatelyInvokedFunctionExpressions --> values
  inlineImmediatelyInvokedFunctionExpressions --> retainWhere
  inlineImmediatelyInvokedFunctionExpressions --> has
  inlineImmediatelyInvokedFunctionExpressions --> reversePostorderBlocks
  inlineImmediatelyInvokedFunctionExpressions --> markInstructionIds
  inlineImmediatelyInvokedFunctionExpressions --> markPredecessors
  inlineImmediatelyInvokedFunctionExpressions --> mergeConsecutiveBlocks
  rewriteBlock --> push
  rewriteBlock --> makeInstructionId
  rewriteBlock --> createTemporaryPlace
  rewriteBlock --> makeInstructionId
  declareTemporary --> push
  declareTemporary --> makeInstructionId
  declareTemporary --> createTemporaryPlace
  constantPropagation --> constantPropagationImpl
  constantPropagationImpl --> applyConstantPropagation
  constantPropagationImpl --> reversePostorderBlocks
  constantPropagationImpl --> removeUnreachableForUpdates
  constantPropagationImpl --> removeDeadDoWhileStatements
  constantPropagationImpl --> removeUnnecessaryTryCatch
  constantPropagationImpl --> markInstructionIds
  constantPropagationImpl --> markPredecessors
  constantPropagationImpl --> has
  constantPropagationImpl --> delete
  constantPropagationImpl --> eliminateRedundantPhi
  constantPropagationImpl --> mergeConsecutiveBlocks
  constantPropagationImpl --> assertConsistentIdentifiers
  constantPropagationImpl --> assertTerminalSuccessorsExist
  applyConstantPropagation --> evaluatePhi
  applyConstantPropagation --> set
  applyConstantPropagation --> evaluateInstruction
  applyConstantPropagation --> set
  applyConstantPropagation --> read
  evaluatePhi --> get
  evaluatePhi --> invariant
  evaluatePhi --> invariant
  evaluateInstruction --> read
  evaluateInstruction --> isValidIdentifier
  evaluateInstruction --> makePropertyLiteral
  evaluateInstruction --> read
  evaluateInstruction --> isValidIdentifier
  evaluateInstruction --> makePropertyLiteral
  evaluateInstruction --> read
  evaluateInstruction --> set
  evaluateInstruction --> read
  evaluateInstruction --> set
  evaluateInstruction --> read
  evaluateInstruction --> read
  evaluateInstruction --> read
  evaluateInstruction --> read
  evaluateInstruction --> read
  evaluateInstruction --> join
  evaluateInstruction --> map
  evaluateInstruction --> some
  evaluateInstruction --> read
  evaluateInstruction --> concat
  evaluateInstruction --> read
  evaluateInstruction --> read
  evaluateInstruction --> set
  evaluateInstruction --> constantPropagationImpl
  evaluateInstruction --> read
  read --> get
  deadCodeElimination --> findReferencedIdentifiers
  deadCodeElimination --> isIdOrNameUsed
  deadCodeElimination --> delete
  deadCodeElimination --> retainWhere
  deadCodeElimination --> isIdOrNameUsed
  deadCodeElimination --> rewriteInstruction
  deadCodeElimination --> retainWhere
  deadCodeElimination --> isIdOrNameUsed
  State_reference --> add
  State_reference --> add
  State_isIdOrNameUsed --> has
  State_isIdOrNameUsed --> has
  State_isIdUsed --> has
  findReferencedIdentifiers --> hasBackEdge
  findReferencedIdentifiers --> reverse
  findReferencedIdentifiers --> values
  findReferencedIdentifiers --> eachTerminalOperand
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> eachInstructionValueOperand
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> isIdOrNameUsed
  findReferencedIdentifiers --> pruneableValue
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> isIdUsed
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> eachInstructionValueOperand
  findReferencedIdentifiers --> reference
  findReferencedIdentifiers --> isIdOrNameUsed
  findReferencedIdentifiers --> reference
  rewriteInstruction --> isIdOrNameUsed
  rewriteInstruction --> isIdOrNameUsed
  rewriteInstruction --> isIdOrNameUsed
  rewriteInstruction --> push
  rewriteInstruction --> isIdOrNameUsed
  rewriteInstruction --> assertExhaustive
  rewriteInstruction --> isIdUsed
  pruneableValue --> isIdOrNameUsed
  pruneableValue --> isIdUsed
  pruneableValue --> isIdOrNameUsed
  pruneableValue --> eachPatternOperand
  pruneableValue --> isIdUsed
  pruneableValue --> isIdOrNameUsed
  pruneableValue --> isIdUsed
  pruneableValue --> getHookKind
  pruneableValue --> assertExhaustive
  hasBackEdge --> findBlocksWithBackEdges
  findBlocksWithBackEdges --> has
  findBlocksWithBackEdges --> add
  findBlocksWithBackEdges --> add
  inlineJsxTransform --> logEvent
  inlineJsxTransform --> slice
  inlineJsxTransform --> slice
  inlineJsxTransform --> slice
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> promoteTemporary
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> forkTemporaryIdentifier
  inlineJsxTransform --> forkTemporaryIdentifier
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> push
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> push
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> set
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> push
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> set
  inlineJsxTransform --> createPropsProperties
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> createSymbolProperty
  inlineJsxTransform --> createTagProperty
  inlineJsxTransform --> createSymbolProperty
  inlineJsxTransform --> push
  inlineJsxTransform --> makeInstructionId
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> push
  inlineJsxTransform --> set
  inlineJsxTransform --> set
  inlineJsxTransform --> forkTemporaryIdentifier
  inlineJsxTransform --> createTemporaryPlace
  inlineJsxTransform --> set
  inlineJsxTransform --> set
  inlineJsxTransform --> inlineJsxTransform
  inlineJsxTransform --> mapInstructionOperands
  inlineJsxTransform --> handlePlace
  inlineJsxTransform --> mapInstructionLValues
  inlineJsxTransform --> handlelValue
  inlineJsxTransform --> mapInstructionValueOperands
  inlineJsxTransform --> handlePlace
  inlineJsxTransform --> mapTerminalOperands
  inlineJsxTransform --> handlePlace
  inlineJsxTransform --> handleIdentifier
  inlineJsxTransform --> handleIdentifier
  inlineJsxTransform --> delete
  inlineJsxTransform --> set
  inlineJsxTransform --> reversePostorderBlocks
  inlineJsxTransform --> markPredecessors
  inlineJsxTransform --> markInstructionIds
  inlineJsxTransform --> fixScopeAndIdentifierRanges
  createSymbolProperty --> createTemporaryPlace
  createSymbolProperty --> makeInstructionId
  createSymbolProperty --> push
  createSymbolProperty --> createTemporaryPlace
  createSymbolProperty --> makeInstructionId
  createSymbolProperty --> makePropertyLiteral
  createSymbolProperty --> push
  createSymbolProperty --> createTemporaryPlace
  createSymbolProperty --> makeInstructionId
  createSymbolProperty --> push
  createSymbolProperty --> createTemporaryPlace
  createSymbolProperty --> makeInstructionId
  createSymbolProperty --> push
  createTagProperty --> createTemporaryPlace
  createTagProperty --> makeInstructionId
  createTagProperty --> push
  createPropsProperties --> filter
  createPropsProperties --> filter
  createPropsProperties --> forEach
  createPropsProperties --> push
  createPropsProperties --> push
  createPropsProperties --> push
  createPropsProperties --> createTemporaryPlace
  createPropsProperties --> createTemporaryPlace
  createPropsProperties --> makeInstructionId
  createPropsProperties --> push
  createPropsProperties --> push
  createPropsProperties --> createTemporaryPlace
  createPropsProperties --> makeInstructionId
  createPropsProperties --> push
  createPropsProperties --> createTemporaryPlace
  createPropsProperties --> makeInstructionId
  createPropsProperties --> push
  createPropsProperties --> invariant
  createPropsProperties --> makeInstructionId
  createPropsProperties --> push
  handlePlace --> get
  handlePlace --> has
  handlelValue --> get
  handlelValue --> has
  handleIdentifier --> get
  instructionReordering --> findReferencedRangeOfTemporaries
  instructionReordering --> reorderBlock
  instructionReordering --> invariant
  instructionReordering --> filter
  instructionReordering --> map
  instructionReordering --> values
  instructionReordering --> markInstructionIds
  reference --> get
  reference --> set
  reference --> set
  reference --> makeInstructionId
  reference --> max
  reference --> get
  reference --> set
  findReferencedRangeOfTemporaries --> eachInstructionValueLValue
  findReferencedRangeOfTemporaries --> reference
  findReferencedRangeOfTemporaries --> eachInstructionLValue
  findReferencedRangeOfTemporaries --> reference
  findReferencedRangeOfTemporaries --> eachTerminalOperand
  findReferencedRangeOfTemporaries --> reference
  findReferencedRangeOfTemporaries --> map
  findReferencedRangeOfTemporaries --> filter
  reorderBlock --> getReorderability
  reorderBlock --> getOrInsertWith
  reorderBlock --> add
  reorderBlock --> eachInstructionValueOperand
  reorderBlock --> get
  reorderBlock --> add
  reorderBlock --> set
  reorderBlock --> has
  reorderBlock --> has
  reorderBlock --> add
  reorderBlock --> eachInstructionValueLValue
  reorderBlock --> getOrInsertWith
  reorderBlock --> add
  reorderBlock --> get
  reorderBlock --> add
  reorderBlock --> set
  reorderBlock --> log
  reorderBlock --> isExpressionBlockKind
  reorderBlock --> log
  reorderBlock --> print
  reorderBlock --> emit
  reorderBlock --> log
  reorderBlock --> print
  reorderBlock --> at
  reorderBlock --> emit
  reorderBlock --> at
  reorderBlock --> eachTerminalOperand
  reorderBlock --> log
  reorderBlock --> print
  reorderBlock --> emit
  reorderBlock --> invariant
  reorderBlock --> log
  reorderBlock --> set
  reorderBlock --> eachTerminalOperand
  reorderBlock --> log
  reorderBlock --> print
  reorderBlock --> emit
  reorderBlock --> reverse
  reorderBlock --> from
  reorderBlock --> keys
  reorderBlock --> get
  reorderBlock --> log
  reorderBlock --> set
  reorderBlock --> log
  reorderBlock --> print
  reorderBlock --> emit
  reorderBlock --> log
  getDepth --> get
  getDepth --> getDepth
  print --> has
  print --> log
  print --> repeat
  print --> add
  print --> get
  print --> get
  print --> sort
  print --> getDepth
  print --> getDepth
  print --> print
  print --> log
  print --> repeat
  print --> printNode
  print --> join
  print --> map
  printNode --> printInstruction
  emit --> get
  emit --> get
  emit --> delete
  emit --> delete
  emit --> sort
  emit --> getDepth
  emit --> getDepth
  emit --> emit
  emit --> push
  getReorderability --> get
  getReorderability --> has
  lowerContextAccess --> isUseContextHookType
  lowerContextAccess --> set
  lowerContextAccess --> has
  lowerContextAccess --> getContextKeys
  lowerContextAccess --> has
  lowerContextAccess --> set
  lowerContextAccess --> isUseContextHookType
  lowerContextAccess --> has
  lowerContextAccess --> addImportSpecifier
  lowerContextAccess --> emitLoadLoweredContextCallee
  lowerContextAccess --> slice
  lowerContextAccess --> push
  lowerContextAccess --> get
  lowerContextAccess --> emitSelectorFn
  lowerContextAccess --> push
  lowerContextAccess --> push
  lowerContextAccess --> push
  lowerContextAccess --> markInstructionIds
  lowerContextAccess --> inferTypes
  emitLoadLoweredContextCallee --> makeInstructionId
  emitLoadLoweredContextCallee --> createTemporaryPlace
  getContextKeys --> push
  emitPropertyLoad --> createTemporaryPlace
  emitPropertyLoad --> makeInstructionId
  emitPropertyLoad --> makePropertyLiteral
  emitPropertyLoad --> createTemporaryPlace
  emitPropertyLoad --> makeInstructionId
  emitSelectorFn --> createTemporaryPlace
  emitSelectorFn --> promoteTemporary
  emitSelectorFn --> emitPropertyLoad
  emitSelectorFn --> push
  emitSelectorFn --> push
  emitSelectorFn --> emitArrayInstr
  emitSelectorFn --> push
  emitSelectorFn --> makeBlockId
  emitSelectorFn --> makeInstructionId
  emitSelectorFn --> createTemporaryPlace
  emitSelectorFn --> reversePostorderBlocks
  emitSelectorFn --> markInstructionIds
  emitSelectorFn --> enterSSA
  emitSelectorFn --> inferTypes
  emitSelectorFn --> makeInstructionId
  emitSelectorFn --> createTemporaryPlace
  emitArrayInstr --> createTemporaryPlace
  emitArrayInstr --> makeInstructionId
  optimizeForSSR --> values
  optimizeForSSR --> has
  optimizeForSSR --> getHookKind
  optimizeForSSR --> set
  optimizeForSSR --> set
  optimizeForSSR --> isPrimitiveType
  optimizeForSSR --> isPlainObjectType
  optimizeForSSR --> isArrayType
  optimizeForSSR --> set
  optimizeForSSR --> eachInstructionValueOperand
  optimizeForSSR --> delete
  optimizeForSSR --> eachTerminalOperand
  optimizeForSSR --> delete
  optimizeForSSR --> values
  optimizeForSSR --> hasKnownNonRenderCall
  optimizeForSSR --> indexOf
  optimizeForSSR --> retainWhere
  optimizeForSSR --> isKnownEventHandler
  optimizeForSSR --> has
  optimizeForSSR --> invariant
  optimizeForSSR --> getHookKind
  optimizeForSSR --> get
  hasKnownNonRenderCall --> values
  hasKnownNonRenderCall --> isSetStateType
  hasKnownNonRenderCall --> isStartTransitionType
  isKnownEventHandler --> test
  optimizePropsMethodCalls --> isPropsType
  outlineFunctions --> outlineFunctions
  outlineFunctions --> has
  outlineFunctions --> generateGloballyUniqueIdentifierName
  outlineFunctions --> outlineFunction
  outlineJSX --> outlineJsxImpl
  outlineJSX --> outlineFunction
  processAndOutlineJSX --> process
  processAndOutlineJSX --> sort
  processAndOutlineJSX --> push
  processAndOutlineJSX --> set
  processAndOutlineJSX --> at
  outlineJsxImpl --> set
  outlineJsxImpl --> outlineJsxImpl
  outlineJsxImpl --> has
  outlineJsxImpl --> processAndOutlineJSX
  outlineJsxImpl --> push
  outlineJsxImpl --> add
  outlineJsxImpl --> assertExhaustive
  outlineJsxImpl --> processAndOutlineJSX
  outlineJsxImpl --> has
  outlineJsxImpl --> get
  outlineJsxImpl --> push
  outlineJsxImpl --> push
  outlineJsxImpl --> deadCodeElimination
  process --> collectProps
  process --> generateGloballyUniqueIdentifierName
  process --> emitOutlinedJsx
  process --> emitOutlinedFn
  generateName --> has
  generateName --> add
  generateName --> addNewReference
  collectProps --> map
  collectProps --> generateName
  collectProps --> push
  collectProps --> has
  collectProps --> promoteTemporary
  collectProps --> generateName
  collectProps --> push
  emitOutlinedJsx --> map
  emitOutlinedJsx --> makeInstructionId
  emitOutlinedJsx --> createTemporaryPlace
  emitOutlinedJsx --> promoteTemporaryJsxTag
  emitOutlinedJsx --> makeInstructionId
  emitOutlinedJsx --> at
  emitOutlinedFn --> createOldToNewPropsMapping
  emitOutlinedFn --> createTemporaryPlace
  emitOutlinedFn --> promoteTemporary
  emitOutlinedFn --> emitDestructureProps
  emitOutlinedFn --> push
  emitOutlinedFn --> emitUpdatedJsx
  emitOutlinedFn --> emitLoadGlobals
  emitOutlinedFn --> push
  emitOutlinedFn --> push
  emitOutlinedFn --> makeBlockId
  emitOutlinedFn --> makeInstructionId
  emitOutlinedFn --> at
  emitOutlinedFn --> createTemporaryPlace
  emitLoadGlobals --> get
  emitLoadGlobals --> push
  emitUpdatedJsx --> map
  emitUpdatedJsx --> invariant
  emitUpdatedJsx --> get
  emitUpdatedJsx --> invariant
  emitUpdatedJsx --> printIdentifier
  emitUpdatedJsx --> push
  emitUpdatedJsx --> has
  emitUpdatedJsx --> push
  emitUpdatedJsx --> get
  emitUpdatedJsx --> invariant
  emitUpdatedJsx --> printIdentifier
  emitUpdatedJsx --> push
  emitUpdatedJsx --> push
  createOldToNewPropsMapping --> createTemporaryPlace
  createOldToNewPropsMapping --> makeIdentifierName
  createOldToNewPropsMapping --> set
  emitDestructureProps --> push
  emitDestructureProps --> makeInstructionId
  emitDestructureProps --> createTemporaryPlace
  pruneMaybeThrows --> pruneMaybeThrowsImpl
  pruneMaybeThrows --> reversePostorderBlocks
  pruneMaybeThrows --> removeUnreachableForUpdates
  pruneMaybeThrows --> removeDeadDoWhileStatements
  pruneMaybeThrows --> removeUnnecessaryTryCatch
  pruneMaybeThrows --> markInstructionIds
  pruneMaybeThrows --> mergeConsecutiveBlocks
  pruneMaybeThrows --> has
  pruneMaybeThrows --> get
  pruneMaybeThrows --> invariant
  pruneMaybeThrows --> printPlace
  pruneMaybeThrows --> delete
  pruneMaybeThrows --> set
  pruneMaybeThrows --> assertConsistentIdentifiers
  pruneMaybeThrows --> assertTerminalSuccessorsExist
  pruneMaybeThrowsImpl --> some
  pruneMaybeThrowsImpl --> instructionMayThrow
  pruneMaybeThrowsImpl --> get
  pruneMaybeThrowsImpl --> set
  alignMethodCallScopes --> union
  alignMethodCallScopes --> set
  alignMethodCallScopes --> set
  alignMethodCallScopes --> alignMethodCallScopes
  alignMethodCallScopes --> forEach
  alignMethodCallScopes --> makeInstructionId
  alignMethodCallScopes --> min
  alignMethodCallScopes --> makeInstructionId
  alignMethodCallScopes --> max
  alignMethodCallScopes --> get
  alignMethodCallScopes --> find
  findScopesToMerge --> add
  findScopesToMerge --> eachInstructionValueOperand
  findScopesToMerge --> has
  findScopesToMerge --> invariant
  findScopesToMerge --> union
  alignObjectMethodScopes --> alignObjectMethodScopes
  alignObjectMethodScopes --> canonicalize
  alignObjectMethodScopes --> findScopesToMerge
  alignObjectMethodScopes --> makeInstructionId
  alignObjectMethodScopes --> min
  alignObjectMethodScopes --> makeInstructionId
  alignObjectMethodScopes --> max
  alignObjectMethodScopes --> get
  recordPlace --> set
  recordPlace --> getPlaceScope
  recordPlace --> add
  recordPlace --> push
  recordPlace --> has
  recordPlace --> add
  recordPlace --> makeInstructionId
  recordPlace --> min
  recordPlace --> makeInstructionId
  recordPlace --> max
  alignReactiveScopesToBlockScopesHIR --> retainWhere_Set
  alignReactiveScopesToBlockScopesHIR --> at
  alignReactiveScopesToBlockScopesHIR --> pop
  alignReactiveScopesToBlockScopesHIR --> makeInstructionId
  alignReactiveScopesToBlockScopesHIR --> min
  alignReactiveScopesToBlockScopesHIR --> get
  alignReactiveScopesToBlockScopesHIR --> eachInstructionLValue
  alignReactiveScopesToBlockScopesHIR --> recordPlace
  alignReactiveScopesToBlockScopesHIR --> eachInstructionValueOperand
  alignReactiveScopesToBlockScopesHIR --> recordPlace
  alignReactiveScopesToBlockScopesHIR --> eachTerminalOperand
  alignReactiveScopesToBlockScopesHIR --> recordPlace
  alignReactiveScopesToBlockScopesHIR --> terminalFallthrough
  alignReactiveScopesToBlockScopesHIR --> get
  alignReactiveScopesToBlockScopesHIR --> makeInstructionId
  alignReactiveScopesToBlockScopesHIR --> max
  alignReactiveScopesToBlockScopesHIR --> push
  alignReactiveScopesToBlockScopesHIR --> invariant
  alignReactiveScopesToBlockScopesHIR --> has
  alignReactiveScopesToBlockScopesHIR --> set
  alignReactiveScopesToBlockScopesHIR --> find
  alignReactiveScopesToBlockScopesHIR --> at
  alignReactiveScopesToBlockScopesHIR --> get
  alignReactiveScopesToBlockScopesHIR --> makeInstructionId
  alignReactiveScopesToBlockScopesHIR --> min
  alignReactiveScopesToBlockScopesHIR --> makeInstructionId
  alignReactiveScopesToBlockScopesHIR --> max
  alignReactiveScopesToBlockScopesHIR --> mapTerminalSuccessors
  alignReactiveScopesToBlockScopesHIR --> has
  alignReactiveScopesToBlockScopesHIR --> get
  alignReactiveScopesToBlockScopesHIR --> invariant
  alignReactiveScopesToBlockScopesHIR --> get
  alignReactiveScopesToBlockScopesHIR --> push
  alignReactiveScopesToBlockScopesHIR --> set
  alignReactiveScopesToBlockScopesHIR --> set
  _debug --> _printNode
  _debug --> join
  _printNode --> repeat
  _printNode --> push
  _printNode --> push
  _printNode --> _printNode
  _printNode --> push
  assertScopeInstructionsWithinScopes --> visitReactiveFunction
  assertScopeInstructionsWithinScopes --> visitReactiveFunction
  FindAllScopesVisitor_visitScope --> FindAllScopesVisitor_traverseScope
  FindAllScopesVisitor_visitScope --> add
  CheckInstructionsAgainstScopesVisitor_visitPlace --> getPlaceScope
  CheckInstructionsAgainstScopesVisitor_visitPlace --> has
  CheckInstructionsAgainstScopesVisitor_visitPlace --> has
  CheckInstructionsAgainstScopesVisitor_visitPlace --> invariant
  CheckInstructionsAgainstScopesVisitor_visitScope --> add
  CheckInstructionsAgainstScopesVisitor_visitScope --> CheckInstructionsAgainstScopesVisitor_traverseScope
  CheckInstructionsAgainstScopesVisitor_visitScope --> delete
  assertWellFormedBreakTargets --> visitReactiveFunction
  Visitor_visitTerminal --> add
  Visitor_visitTerminal --> invariant
  Visitor_visitTerminal --> has
  Visitor_visitLValue --> Visitor_visitPlace
  Visitor_visitPlace --> add
  Visitor_visitPrunedScope --> Visitor_traversePrunedScope
  Visitor_visitPrunedScope --> isPrimitiveType
  Visitor_visitPrunedScope --> isStableRefType
  Visitor_visitPrunedScope --> add
  isStableRefType --> isUseRefType
  isStableRefType --> has
  collectReactiveIdentifiers --> visitReactiveFunction
  collectReferencedGlobals --> visitReactiveFunction
  Visitor_visitValue --> Visitor_traverseValue
  Visitor_visitValue --> Visitor_visitHirFunction
  Visitor_visitValue --> add
  Visitor_visitReactiveFunctionValue --> visitReactiveFunction
  extractScopeDeclarationsFromDestructuring --> add
  extractScopeDeclarationsFromDestructuring --> visitReactiveFunction
  Visitor_visitScope --> add
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_transformInstruction --> Visitor_visitInstruction
  Visitor_transformInstruction --> transformDestructuring
  Visitor_transformInstruction --> map
  Visitor_transformInstruction --> eachInstructionLValueWithKind
  Visitor_transformInstruction --> add
  transformDestructuring --> eachPatternOperand
  transformDestructuring --> has
  transformDestructuring --> add
  transformDestructuring --> mapPatternOperands
  transformDestructuring --> has
  transformDestructuring --> clonePlaceToTemporary
  transformDestructuring --> promoteTemporary
  transformDestructuring --> set
  transformDestructuring --> push
  transformDestructuring --> push
  flattenReactiveLoopsHIR --> Array
  flattenReactiveLoopsHIR --> retainWhere
  flattenReactiveLoopsHIR --> push
  flattenReactiveLoopsHIR --> assertExhaustive
  flattenScopesWithHooksOrUseHIR --> retainWhere
  flattenScopesWithHooksOrUseHIR --> getHookKind
  flattenScopesWithHooksOrUseHIR --> isUseOperator
  flattenScopesWithHooksOrUseHIR --> push
  flattenScopesWithHooksOrUseHIR --> map
  flattenScopesWithHooksOrUseHIR --> push
  flattenScopesWithHooksOrUseHIR --> get
  flattenScopesWithHooksOrUseHIR --> invariant
  flattenScopesWithHooksOrUseHIR --> get
  inferReactiveScopeVariables --> findDisjointMutableValues
  inferReactiveScopeVariables --> forEach
  inferReactiveScopeVariables --> get
  inferReactiveScopeVariables --> set
  inferReactiveScopeVariables --> makeInstructionId
  inferReactiveScopeVariables --> min
  inferReactiveScopeVariables --> makeInstructionId
  inferReactiveScopeVariables --> max
  inferReactiveScopeVariables --> mergeLocation
  inferReactiveScopeVariables --> makeInstructionId
  inferReactiveScopeVariables --> max
  inferReactiveScopeVariables --> makeInstructionId
  inferReactiveScopeVariables --> max
  inferReactiveScopeVariables --> debugLogIRs
  inferReactiveScopeVariables --> invariant
  mergeLocation --> min
  mergeLocation --> min
  mergeLocation --> min
  mergeLocation --> max
  mergeLocation --> max
  mergeLocation --> max
  isMutable --> inRange
  mayAllocate --> doesPatternContainSpreadElement
  mayAllocate --> assertExhaustive
  declareIdentifier --> has
  declareIdentifier --> set
  findDisjointMutableValues --> at
  findDisjointMutableValues --> get
  findDisjointMutableValues --> push
  findDisjointMutableValues --> push
  findDisjointMutableValues --> union
  findDisjointMutableValues --> union
  findDisjointMutableValues --> mayAllocate
  findDisjointMutableValues --> push
  findDisjointMutableValues --> declareIdentifier
  findDisjointMutableValues --> declareIdentifier
  findDisjointMutableValues --> push
  findDisjointMutableValues --> isMutable
  findDisjointMutableValues --> push
  findDisjointMutableValues --> eachPatternOperand
  findDisjointMutableValues --> declareIdentifier
  findDisjointMutableValues --> push
  findDisjointMutableValues --> isMutable
  findDisjointMutableValues --> push
  findDisjointMutableValues --> eachInstructionOperand
  findDisjointMutableValues --> isMutable
  findDisjointMutableValues --> push
  findDisjointMutableValues --> push
  findDisjointMutableValues --> eachInstructionOperand
  findDisjointMutableValues --> isMutable
  findDisjointMutableValues --> push
  findDisjointMutableValues --> union
  memoizeFbtAndMacroOperandsInSameScope --> from
  memoizeFbtAndMacroOperandsInSameScope --> entries
  memoizeFbtAndMacroOperandsInSameScope --> map
  memoizeFbtAndMacroOperandsInSameScope --> populateMacroTags
  memoizeFbtAndMacroOperandsInSameScope --> mergeMacroArguments
  populateMacroTags --> values
  populateMacroTags --> get
  populateMacroTags --> set
  populateMacroTags --> get
  populateMacroTags --> set
  populateMacroTags --> get
  populateMacroTags --> get
  populateMacroTags --> get
  populateMacroTags --> set
  mergeMacroArguments --> keys
  mergeMacroArguments --> reverse
  mergeMacroArguments --> from
  mergeMacroArguments --> values
  mergeMacroArguments --> get
  mergeMacroArguments --> get
  mergeMacroArguments --> visitOperands
  mergeMacroArguments --> get
  mergeMacroArguments --> get
  mergeMacroArguments --> get
  mergeMacroArguments --> visitOperands
  mergeMacroArguments --> get
  mergeMacroArguments --> visitOperands
  mergeMacroArguments --> get
  mergeMacroArguments --> add
  mergeMacroArguments --> values
  mergeMacroArguments --> expandFbtScopeRange
  mergeMacroArguments --> set
  mergeMacroArguments --> add
  expandFbtScopeRange --> makeInstructionId
  expandFbtScopeRange --> min
  visitOperands --> add
  visitOperands --> eachInstructionValueOperand
  visitOperands --> expandFbtScopeRange
  visitOperands --> set
  visitOperands --> add
  mergeReactiveScopesThatInvalidateTogether --> visitReactiveFunction
  mergeReactiveScopesThatInvalidateTogether --> visitReactiveFunction
  log --> log
  FindLastUsageVisitor_visitPlace --> get
  FindLastUsageVisitor_visitPlace --> makeInstructionId
  FindLastUsageVisitor_visitPlace --> max
  FindLastUsageVisitor_visitPlace --> set
  Transform_transformScope --> Transform_visitScope
  Transform_transformScope --> areEqualDependencies
  Transform_visitBlock --> Transform_traverseBlock
  reset --> invariant
  reset --> push
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> add
  Transform_visitBlock --> set
  Transform_visitBlock --> eachInstructionLValue
  Transform_visitBlock --> add
  Transform_visitBlock --> set
  Transform_visitBlock --> get
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> canMergeScopes
  Transform_visitBlock --> areLValuesLastUsedByScope
  Transform_visitBlock --> log
  Transform_visitBlock --> makeInstructionId
  Transform_visitBlock --> max
  Transform_visitBlock --> set
  Transform_visitBlock --> updateScopeDeclarations
  Transform_visitBlock --> clear
  Transform_visitBlock --> scopeIsEligibleForMerging
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> log
  Transform_visitBlock --> reset
  Transform_visitBlock --> scopeIsEligibleForMerging
  Transform_visitBlock --> log
  Transform_visitBlock --> assertExhaustive
  Transform_visitBlock --> reset
  Transform_visitBlock --> log
  Transform_visitBlock --> log
  Transform_visitBlock --> printReactiveScopeSummary
  Transform_visitBlock --> push
  Transform_visitBlock --> slice
  Transform_visitBlock --> invariant
  Transform_visitBlock --> push
  Transform_visitBlock --> push
  Transform_visitBlock --> add
  Transform_visitBlock --> push
  Transform_visitBlock --> push
  Transform_visitBlock --> push
  updateScopeDeclarations --> get
  updateScopeDeclarations --> delete
  areLValuesLastUsedByScope --> get
  areLValuesLastUsedByScope --> log
  canMergeScopes --> log
  canMergeScopes --> areEqualDependencies
  canMergeScopes --> log
  canMergeScopes --> areEqualDependencies
  canMergeScopes --> map
  canMergeScopes --> values
  canMergeScopes --> every
  canMergeScopes --> isAlwaysInvalidatingType
  canMergeScopes --> Iterable_some
  canMergeScopes --> values
  canMergeScopes --> get
  canMergeScopes --> log
  canMergeScopes --> log
  canMergeScopes --> log
  canMergeScopes --> printReactiveScopeSummary
  canMergeScopes --> map
  canMergeScopes --> values
  canMergeScopes --> log
  canMergeScopes --> printReactiveScopeSummary
  canMergeScopes --> map
  canMergeScopes --> get
  areEqualDependencies --> areEqualPaths
  scopeIsEligibleForMerging --> some
  scopeIsEligibleForMerging --> isAlwaysInvalidatingType
  printReactiveFunctionWithOutlined --> writeReactiveFunction
  printReactiveFunctionWithOutlined --> getOutlinedFunctions
  printReactiveFunctionWithOutlined --> writeLine
  printReactiveFunctionWithOutlined --> printFunction
  printReactiveFunctionWithOutlined --> complete
  printReactiveFunction --> writeReactiveFunction
  printReactiveFunction --> complete
  writeReactiveFunction --> writeLine
  writeReactiveFunction --> indented
  writeReactiveFunction --> writeLine
  writeReactiveFunction --> printPlace
  writeReactiveFunction --> writeLine
  writeReactiveFunction --> printPlace
  writeReactiveFunction --> writeLine
  writeReactiveFunction --> writeReactiveInstructions
  writeReactiveFunction --> writeLine
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> join
  printReactiveScopeSummary --> map
  printReactiveScopeSummary --> from
  printReactiveScopeSummary --> printDependency
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> join
  printReactiveScopeSummary --> map
  printReactiveScopeSummary --> from
  printReactiveScopeSummary --> printIdentifier
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> map
  printReactiveScopeSummary --> from
  printReactiveScopeSummary --> printIdentifier
  printReactiveScopeSummary --> push
  printReactiveScopeSummary --> printIdentifier
  printReactiveScopeSummary --> join
  writeReactiveBlock --> writeLine
  writeReactiveBlock --> printReactiveScopeSummary
  writeReactiveBlock --> writeReactiveInstructions
  writeReactiveBlock --> writeLine
  writePrunedScope --> writeLine
  writePrunedScope --> printReactiveScopeSummary
  writePrunedScope --> writeReactiveInstructions
  writePrunedScope --> writeLine
  printDependency --> printIdentifier
  printDependency --> printType
  printDependency --> join
  printDependency --> map
  printReactiveInstructions --> writeReactiveInstructions
  printReactiveInstructions --> complete
  writeReactiveInstructions --> indented
  writeReactiveInstructions --> writeReactiveInstruction
  writeReactiveInstruction --> write
  writeReactiveInstruction --> printPlace
  writeReactiveInstruction --> writeReactiveValue
  writeReactiveInstruction --> newline
  writeReactiveInstruction --> write
  writeReactiveInstruction --> writeReactiveValue
  writeReactiveInstruction --> newline
  writeReactiveInstruction --> writeReactiveBlock
  writeReactiveInstruction --> writePrunedScope
  writeReactiveInstruction --> write
  writeReactiveInstruction --> writeTerminal
  writeReactiveInstruction --> assertExhaustive
  printReactiveValue --> writeReactiveValue
  printReactiveValue --> complete
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> newline
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> write
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> newline
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> indented
  writeReactiveValue --> forEach
  writeReactiveValue --> writeReactiveInstruction
  writeReactiveValue --> write
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> newline
  writeReactiveValue --> append
  writeReactiveValue --> newline
  writeReactiveValue --> indented
  writeReactiveValue --> writeReactiveValue
  writeReactiveValue --> newline
  writeReactiveValue --> printInstructionValue
  writeReactiveValue --> split
  writeReactiveValue --> writeLine
  writeReactiveValue --> indented
  writeReactiveValue --> writeLine
  printReactiveTerminal --> writeTerminal
  printReactiveTerminal --> complete
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> printPlace
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> printPlace
  writeTerminal --> indented
  writeTerminal --> printPlace
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> invariant
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> indented
  writeTerminal --> writeReactiveValue
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> printPlace
  writeTerminal --> writeLine
  writeTerminal --> printPlace
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> write
  writeTerminal --> writeLine
  writeTerminal --> printPlace
  writeTerminal --> writeLine
  writeTerminal --> writeReactiveInstructions
  writeTerminal --> writeLine
  writeTerminal --> assertExhaustive
  Writer_constructor --> max
  Writer_complete --> trimEnd
  Writer_complete --> push
  Writer_complete --> join
  Writer_append --> Writer_write
  Writer_newline --> trimEnd
  Writer_newline --> push
  Writer_write --> repeat
  Writer_writeLine --> Writer_write
  Writer_writeLine --> Writer_newline
  Writer_indented --> f
  PromoteTemporaries_visitScope --> promoteIdentifier
  PromoteTemporaries_visitScope --> promoteIdentifier
  PromoteTemporaries_visitScope --> PromoteTemporaries_traverseScope
  PromoteTemporaries_visitPrunedScope --> get
  PromoteTemporaries_visitPrunedScope --> promoteIdentifier
  PromoteTemporaries_visitPrunedScope --> PromoteTemporaries_traversePrunedScope
  PromoteTemporaries_visitParam --> promoteIdentifier
  PromoteTemporaries_visitValue --> PromoteTemporaries_traverseValue
  PromoteTemporaries_visitValue --> PromoteTemporaries_visitHirFunction
  PromoteTemporaries_visitReactiveFunctionValue --> promoteIdentifier
  PromoteTemporaries_visitReactiveFunctionValue --> visitReactiveFunction
  PromoteAllInstancedOfPromotedTemporaries_visitPlace --> has
  PromoteAllInstancedOfPromotedTemporaries_visitPlace --> promoteIdentifier
  PromoteAllInstancedOfPromotedTemporaries_visitLValue --> PromoteAllInstancedOfPromotedTemporaries_visitPlace
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> has
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> promoteIdentifier
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> has
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> promoteIdentifier
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> has
  PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers --> promoteIdentifier
  PromoteAllInstancedOfPromotedTemporaries_visitScope --> PromoteAllInstancedOfPromotedTemporaries_traverseScope
  PromoteAllInstancedOfPromotedTemporaries_visitScope --> PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers
  PromoteAllInstancedOfPromotedTemporaries_visitPrunedScope --> PromoteAllInstancedOfPromotedTemporaries_traversePrunedScope
  PromoteAllInstancedOfPromotedTemporaries_visitPrunedScope --> PromoteAllInstancedOfPromotedTemporaries_traverseScopeIdentifiers
  PromoteAllInstancedOfPromotedTemporaries_visitReactiveFunctionValue --> visitReactiveFunction
  CollectPromotableTemporaries_visitPlace --> has
  CollectPromotableTemporaries_visitPlace --> get
  CollectPromotableTemporaries_visitPlace --> indexOf
  CollectPromotableTemporaries_visitPlace --> at
  CollectPromotableTemporaries_visitValue --> CollectPromotableTemporaries_traverseValue
  CollectPromotableTemporaries_visitValue --> add
  CollectPromotableTemporaries_visitPrunedScope --> set
  CollectPromotableTemporaries_visitPrunedScope --> CollectPromotableTemporaries_visitBlock
  CollectPromotableTemporaries_visitScope --> push
  CollectPromotableTemporaries_visitScope --> CollectPromotableTemporaries_traverseScope
  CollectPromotableTemporaries_visitScope --> pop
  PromoteInterposedTemporaries_constructor --> forEach
  PromoteInterposedTemporaries_constructor --> add
  PromoteInterposedTemporaries_constructor --> add
  PromoteInterposedTemporaries_visitPlace --> get
  PromoteInterposedTemporaries_visitPlace --> has
  PromoteInterposedTemporaries_visitPlace --> promoteIdentifier
  PromoteInterposedTemporaries_visitInstruction --> eachInstructionValueLValue
  PromoteInterposedTemporaries_visitInstruction --> invariant
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> forEach
  PromoteInterposedTemporaries_visitInstruction --> eachPatternOperand
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  PromoteInterposedTemporaries_visitInstruction --> entries
  PromoteInterposedTemporaries_visitInstruction --> set
  PromoteInterposedTemporaries_visitInstruction --> set
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  PromoteInterposedTemporaries_visitInstruction --> has
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> set
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  PromoteInterposedTemporaries_visitInstruction --> has
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> set
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  PromoteInterposedTemporaries_visitInstruction --> add
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  PromoteInterposedTemporaries_visitInstruction --> visitInstruction
  promoteUsedTemporaries --> visitReactiveFunction
  promoteUsedTemporaries --> promoteIdentifier
  promoteUsedTemporaries --> visitReactiveFunction
  promoteUsedTemporaries --> visitReactiveFunction
  promoteUsedTemporaries --> visitReactiveFunction
  promoteIdentifier --> invariant
  promoteIdentifier --> has
  promoteIdentifier --> promoteTemporaryJsxTag
  promoteIdentifier --> promoteTemporary
  promoteIdentifier --> add
  propagateEarlyReturns --> visitReactiveFunction
  Transform_visitScope --> Transform_traverseScope
  Transform_visitScope --> set
  Transform_visitScope --> createTemporaryPlace
  Transform_visitScope --> createTemporaryPlace
  Transform_visitScope --> createTemporaryPlace
  Transform_visitScope --> createTemporaryPlace
  Transform_visitScope --> makeInstructionId
  Transform_visitScope --> makeInstructionId
  Transform_visitScope --> makePropertyLiteral
  Transform_visitScope --> makeInstructionId
  Transform_visitScope --> makeInstructionId
  Transform_visitScope --> makeInstructionId
  Transform_visitScope --> makeInstructionId
  Transform_transformTerminal --> createTemporaryPlace
  Transform_transformTerminal --> promoteTemporary
  Transform_transformTerminal --> makeInstructionId
  Transform_transformTerminal --> makeInstructionId
  Transform_transformTerminal --> Transform_traverseTerminal
  pruneAllReactiveScopes --> visitReactiveFunction
  Transform_transformScope --> Transform_visitScope
  pruneAlwaysInvalidatingScopes --> visitReactiveFunction
  Transform_transformInstruction --> Transform_visitInstruction
  Transform_transformInstruction --> add
  Transform_transformInstruction --> add
  Transform_transformInstruction --> has
  Transform_transformInstruction --> add
  Transform_transformInstruction --> has
  Transform_transformInstruction --> add
  Transform_transformInstruction --> has
  Transform_transformInstruction --> add
  Transform_transformInstruction --> has
  Transform_transformInstruction --> add
  Transform_transformScope --> Transform_visitScope
  Transform_transformScope --> has
  Transform_transformScope --> has
  Transform_transformScope --> add
  Transform_transformScope --> has
  Transform_transformScope --> add
  pruneHoistedContexts --> visitReactiveFunction
  pruneHoistedContexts --> empty
  Visitor_visitScope --> push
  Visitor_visitScope --> keys
  Visitor_visitScope --> values
  Visitor_visitScope --> set
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_visitScope --> pop
  Visitor_visitScope --> values
  Visitor_visitScope --> delete
  Visitor_visitPlace --> get
  Visitor_visitPlace --> throwTodo
  Visitor_transformInstruction --> convertHoistedLValueKind
  Visitor_transformInstruction --> has
  Visitor_transformInstruction --> set
  Visitor_transformInstruction --> find
  Visitor_transformInstruction --> has
  Visitor_transformInstruction --> get
  Visitor_transformInstruction --> invariant
  Visitor_transformInstruction --> delete
  Visitor_transformInstruction --> throwTodo
  Visitor_transformInstruction --> Visitor_visitInstruction
  join2 --> assertExhaustive
  Visitor_join --> reduce
  Visitor_isCreateOnlyHook --> isUseStateType
  Visitor_isCreateOnlyHook --> isUseRefType
  Visitor_visitPlace --> set
  Visitor_visitPlace --> Visitor_join
  Visitor_visitPlace --> get
  Visitor_visitBlock --> visitBlock
  Visitor_visitBlock --> reverse
  Visitor_visitInstruction --> Visitor_join
  Visitor_visitInstruction --> map
  Visitor_visitInstruction --> eachInstructionLValue
  Visitor_visitInstruction --> get
  visitCallOrMethodNonArgs --> Visitor_visitPlace
  visitCallOrMethodNonArgs --> Visitor_visitPlace
  visitCallOrMethodNonArgs --> Visitor_visitPlace
  isHook --> getHookKind
  Visitor_visitInstruction --> Visitor_isCreateOnlyHook
  Visitor_visitInstruction --> forEach
  Visitor_visitInstruction --> eachCallArgument
  Visitor_visitInstruction --> Visitor_visitPlace
  Visitor_visitInstruction --> visitCallOrMethodNonArgs
  Visitor_visitInstruction --> Visitor_traverseInstruction
  Visitor_visitInstruction --> isHook
  Visitor_visitInstruction --> Visitor_traverseInstruction
  Visitor_visitScope --> Visitor_join
  Visitor_visitScope --> map
  Visitor_visitScope --> keys
  Visitor_visitScope --> map
  Visitor_visitScope --> values
  Visitor_visitScope --> get
  Visitor_visitScope --> visitScope
  Visitor_visitScope --> forEach
  Visitor_visitScope --> find
  Visitor_visitScope --> forEach
  Visitor_visitScope --> get
  Visitor_visitScope --> get
  Visitor_visitScope --> get
  Visitor_visitScope --> delete
  Visitor_visitTerminal --> invariant
  Visitor_visitTerminal --> visitTerminal
  Visitor_visitReactiveFunctionValue --> visitReactiveFunction
  pruneInitializationDependencies --> getAliases
  pruneInitializationDependencies --> visitReactiveFunction
  update --> get
  update --> set
  update --> set
  AliasVisitor_visitInstruction --> union
  AliasVisitor_visitInstruction --> union
  AliasVisitor_visitInstruction --> update
  AliasVisitor_visitInstruction --> update
  getAliases --> visitReactiveFunction
  getAliases --> update
  getAliases --> find
  getAliases --> find
  pruneNonReactiveDependencies --> collectReactiveIdentifiers
  pruneNonReactiveDependencies --> visitReactiveFunction
  Visitor_visitInstruction --> Visitor_traverseInstruction
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> eachPatternOperand
  Visitor_visitInstruction --> isStableType
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> isStableType
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> add
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_visitScope --> has
  Visitor_visitScope --> delete
  Visitor_visitScope --> add
  Visitor_visitScope --> add
  pruneUnusedLValues --> visitReactiveFunction
  Visitor_visitPlace --> delete
  Visitor_visitInstruction --> Visitor_traverseInstruction
  Visitor_visitInstruction --> set
  pruneUnusedLabels --> visitReactiveFunction
  Transform_transformTerminal --> Transform_traverseTerminal
  Transform_transformTerminal --> add
  Transform_transformTerminal --> has
  Transform_transformTerminal --> at
  Transform_transformTerminal --> pop
  pruneUnusedScopes --> visitReactiveFunction
  Transform_visitTerminal --> Transform_traverseTerminal
  Transform_transformScope --> Transform_visitScope
  Transform_transformScope --> hasOwnDeclaration
  hasOwnDeclaration --> values
  renameVariables --> collectReferencedGlobals
  renameVariables --> renameVariablesImpl
  renameVariablesImpl --> enter
  renameVariablesImpl --> visit
  renameVariablesImpl --> visit
  renameVariablesImpl --> visitReactiveFunction
  Visitor_visitParam --> visit
  Visitor_visitLValue --> visit
  Visitor_visitPlace --> visit
  Visitor_visitBlock --> enter
  Visitor_visitBlock --> Visitor_traverseBlock
  Visitor_visitPrunedScope --> Visitor_traverseBlock
  Visitor_visitScope --> visit
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_visitValue --> Visitor_traverseValue
  Visitor_visitValue --> Visitor_visitHirFunction
  Visitor_visitReactiveFunctionValue --> renameVariablesImpl
  Scopes_visit --> get
  Scopes_visit --> isPromotedTemporary
  Scopes_visit --> isPromotedJsxTemporary
  Scopes_visit --> Scopes__lookup
  Scopes_visit --> has
  Scopes_visit --> isPromotedTemporary
  Scopes_visit --> isPromotedJsxTemporary
  Scopes_visit --> addNewReference
  Scopes_visit --> makeIdentifierName
  Scopes_visit --> set
  Scopes_visit --> set
  Scopes_visit --> at
  Scopes_visit --> add
  Scopes__lookup --> get
  Scopes_enter --> push
  Scopes_enter --> fn
  Scopes_enter --> pop
  Scopes_enter --> invariant
  stabilizeBlockIds --> visitReactiveFunction
  stabilizeBlockIds --> set
  stabilizeBlockIds --> makeBlockId
  stabilizeBlockIds --> visitReactiveFunction
  CollectReferencedLabels_visitScope --> add
  CollectReferencedLabels_visitScope --> CollectReferencedLabels_traverseScope
  CollectReferencedLabels_visitTerminal --> add
  CollectReferencedLabels_visitTerminal --> CollectReferencedLabels_traverseTerminal
  RewriteBlockIds_visitScope --> getOrInsertDefault
  RewriteBlockIds_visitScope --> makeBlockId
  RewriteBlockIds_visitScope --> RewriteBlockIds_traverseScope
  RewriteBlockIds_visitTerminal --> getOrInsertDefault
  RewriteBlockIds_visitTerminal --> makeBlockId
  RewriteBlockIds_visitTerminal --> getOrInsertDefault
  RewriteBlockIds_visitTerminal --> makeBlockId
  RewriteBlockIds_visitTerminal --> RewriteBlockIds_traverseTerminal
  visitReactiveFunction --> visitBlock
  ReactiveFunctionVisitor_visitValue --> ReactiveFunctionVisitor_traverseValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitInstruction
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseValue --> eachInstructionValueOperand
  ReactiveFunctionVisitor_traverseValue --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_visitInstruction --> ReactiveFunctionVisitor_traverseInstruction
  ReactiveFunctionVisitor_traverseInstruction --> ReactiveFunctionVisitor_visitID
  ReactiveFunctionVisitor_traverseInstruction --> eachInstructionLValue
  ReactiveFunctionVisitor_traverseInstruction --> ReactiveFunctionVisitor_visitLValue
  ReactiveFunctionVisitor_traverseInstruction --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_visitTerminal --> ReactiveFunctionVisitor_traverseTerminal
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitID
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitValue
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_traverseTerminal --> assertExhaustive
  ReactiveFunctionVisitor_visitScope --> ReactiveFunctionVisitor_traverseScope
  ReactiveFunctionVisitor_traverseScope --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_visitPrunedScope --> ReactiveFunctionVisitor_traversePrunedScope
  ReactiveFunctionVisitor_traversePrunedScope --> ReactiveFunctionVisitor_visitBlock
  ReactiveFunctionVisitor_visitBlock --> ReactiveFunctionVisitor_traverseBlock
  ReactiveFunctionVisitor_traverseBlock --> ReactiveFunctionVisitor_visitInstruction
  ReactiveFunctionVisitor_traverseBlock --> ReactiveFunctionVisitor_visitScope
  ReactiveFunctionVisitor_traverseBlock --> ReactiveFunctionVisitor_visitPrunedScope
  ReactiveFunctionVisitor_traverseBlock --> ReactiveFunctionVisitor_visitTerminal
  ReactiveFunctionVisitor_traverseBlock --> assertExhaustive
  ReactiveFunctionVisitor_visitHirFunction --> ReactiveFunctionVisitor_visitParam
  ReactiveFunctionVisitor_visitHirFunction --> ReactiveFunctionVisitor_visitInstruction
  ReactiveFunctionVisitor_visitHirFunction --> ReactiveFunctionVisitor_visitHirFunction
  ReactiveFunctionVisitor_visitHirFunction --> eachTerminalOperand
  ReactiveFunctionVisitor_visitHirFunction --> ReactiveFunctionVisitor_visitPlace
  ReactiveFunctionTransform_traverseBlock --> ReactiveFunctionTransform_transformInstruction
  ReactiveFunctionTransform_traverseBlock --> ReactiveFunctionTransform_transformScope
  ReactiveFunctionTransform_traverseBlock --> ReactiveFunctionTransform_transformPrunedScope
  ReactiveFunctionTransform_traverseBlock --> ReactiveFunctionTransform_transformTerminal
  ReactiveFunctionTransform_traverseBlock --> assertExhaustive
  ReactiveFunctionTransform_traverseBlock --> push
  ReactiveFunctionTransform_traverseBlock --> slice
  ReactiveFunctionTransform_traverseBlock --> slice
  ReactiveFunctionTransform_traverseBlock --> push
  ReactiveFunctionTransform_traverseBlock --> slice
  ReactiveFunctionTransform_traverseBlock --> push
  ReactiveFunctionTransform_traverseBlock --> push
  ReactiveFunctionTransform_transformInstruction --> ReactiveFunctionTransform_visitInstruction
  ReactiveFunctionTransform_transformTerminal --> ReactiveFunctionTransform_visitTerminal
  ReactiveFunctionTransform_transformScope --> ReactiveFunctionTransform_visitScope
  ReactiveFunctionTransform_transformPrunedScope --> ReactiveFunctionTransform_visitPrunedScope
  ReactiveFunctionTransform_transformValue --> ReactiveFunctionTransform_visitValue
  ReactiveFunctionTransform_transformReactiveFunctionValue --> ReactiveFunctionTransform_visitReactiveFunctionValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_visitInstruction
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseValue --> eachInstructionValueOperand
  ReactiveFunctionTransform_traverseValue --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseInstruction --> ReactiveFunctionTransform_visitID
  ReactiveFunctionTransform_traverseInstruction --> eachInstructionLValue
  ReactiveFunctionTransform_traverseInstruction --> ReactiveFunctionTransform_visitLValue
  ReactiveFunctionTransform_traverseInstruction --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitID
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_transformValue
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitPlace
  ReactiveFunctionTransform_traverseTerminal --> ReactiveFunctionTransform_visitBlock
  ReactiveFunctionTransform_traverseTerminal --> assertExhaustive
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> fn
  mapTerminalBlocks --> assertExhaustive
  eliminateRedundantPhi --> has
  eliminateRedundantPhi --> add
  eliminateRedundantPhi --> forEach
  eliminateRedundantPhi --> rewritePlace
  eliminateRedundantPhi --> invariant
  eliminateRedundantPhi --> set
  eliminateRedundantPhi --> delete
  eliminateRedundantPhi --> eachInstructionLValue
  eliminateRedundantPhi --> rewritePlace
  eliminateRedundantPhi --> eachInstructionOperand
  eliminateRedundantPhi --> rewritePlace
  eliminateRedundantPhi --> rewritePlace
  eliminateRedundantPhi --> eliminateRedundantPhi
  eliminateRedundantPhi --> eachTerminalOperand
  eliminateRedundantPhi --> rewritePlace
  eliminateRedundantPhi --> invariant
  eliminateRedundantPhi --> has
  eliminateRedundantPhi --> invariant
  eliminateRedundantPhi --> has
  rewritePlace --> get
  SSABuilder_defineFunction --> set
  SSABuilder_enter --> fn
  SSABuilder_state --> invariant
  SSABuilder_state --> get
  SSABuilder_makeId --> makeInstructionId
  SSABuilder_makeId --> makeInstructionId
  SSABuilder_makeId --> makeType
  SSABuilder_defineContext --> SSABuilder_definePlace
  SSABuilder_defineContext --> add
  SSABuilder_definePlace --> has
  SSABuilder_definePlace --> throwTodo
  SSABuilder_definePlace --> printIdentifier
  SSABuilder_definePlace --> has
  SSABuilder_definePlace --> SSABuilder_getPlace
  SSABuilder_definePlace --> SSABuilder_makeId
  SSABuilder_definePlace --> set
  SSABuilder_definePlace --> SSABuilder_state
  SSABuilder_getPlace --> SSABuilder_getIdAt
  SSABuilder_getIdAt --> get
  SSABuilder_getIdAt --> get
  SSABuilder_getIdAt --> has
  SSABuilder_getIdAt --> get
  SSABuilder_getIdAt --> add
  SSABuilder_getIdAt --> get
  SSABuilder_getIdAt --> SSABuilder_makeId
  SSABuilder_getIdAt --> push
  SSABuilder_getIdAt --> set
  SSABuilder_getIdAt --> SSABuilder_getIdAt
  SSABuilder_getIdAt --> set
  SSABuilder_getIdAt --> SSABuilder_makeId
  SSABuilder_getIdAt --> set
  SSABuilder_getIdAt --> SSABuilder_addPhi
  SSABuilder_addPhi --> SSABuilder_getIdAt
  SSABuilder_addPhi --> set
  SSABuilder_addPhi --> add
  SSABuilder_fixIncompletePhis --> get
  SSABuilder_fixIncompletePhis --> SSABuilder_addPhi
  SSABuilder_startBlock --> set
  SSABuilder_print --> push
  SSABuilder_print --> push
  SSABuilder_print --> printIdentifier
  SSABuilder_print --> printIdentifier
  SSABuilder_print --> push
  SSABuilder_print --> printPlace
  SSABuilder_print --> printPlace
  SSABuilder_print --> push
  SSABuilder_print --> log
  SSABuilder_print --> join
  enterSSA --> enterSSAImpl
  enterSSAImpl --> invariant
  enterSSAImpl --> has
  enterSSAImpl --> add
  enterSSAImpl --> startBlock
  enterSSAImpl --> invariant
  enterSSAImpl --> map
  enterSSAImpl --> definePlace
  enterSSAImpl --> definePlace
  enterSSAImpl --> mapInstructionOperands
  enterSSAImpl --> getPlace
  enterSSAImpl --> mapInstructionLValues
  enterSSAImpl --> definePlace
  enterSSAImpl --> get
  enterSSAImpl --> invariant
  enterSSAImpl --> add
  enterSSAImpl --> defineFunction
  enterSSAImpl --> enter
  enterSSAImpl --> map
  enterSSAImpl --> definePlace
  enterSSAImpl --> definePlace
  enterSSAImpl --> enterSSAImpl
  enterSSAImpl --> clear
  enterSSAImpl --> mapTerminalOperands
  enterSSAImpl --> getPlace
  enterSSAImpl --> eachTerminalSuccessor
  enterSSAImpl --> get
  enterSSAImpl --> has
  enterSSAImpl --> get
  enterSSAImpl --> set
  enterSSAImpl --> has
  enterSSAImpl --> fixIncompletePhis
  rewriteInstructionKindsBasedOnReassignment --> set
  rewriteInstructionKindsBasedOnReassignment --> set
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> has
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  rewriteInstructionKindsBasedOnReassignment --> set
  rewriteInstructionKindsBasedOnReassignment --> get
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> has
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  rewriteInstructionKindsBasedOnReassignment --> set
  rewriteInstructionKindsBasedOnReassignment --> eachPatternOperand
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  rewriteInstructionKindsBasedOnReassignment --> get
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> set
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> get
  rewriteInstructionKindsBasedOnReassignment --> invariant
  rewriteInstructionKindsBasedOnReassignment --> printPlace
  nameAnonymousFunctions --> nameAnonymousFunctionsImpl
  visit --> visit
  nameAnonymousFunctions --> visit
  nameAnonymousFunctionsImpl --> values
  nameAnonymousFunctionsImpl --> set
  nameAnonymousFunctionsImpl --> set
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> set
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> set
  nameAnonymousFunctionsImpl --> String
  nameAnonymousFunctionsImpl --> nameAnonymousFunctionsImpl
  nameAnonymousFunctionsImpl --> push
  nameAnonymousFunctionsImpl --> set
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> delete
  nameAnonymousFunctionsImpl --> getHookKind
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> has
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> delete
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> get
  nameAnonymousFunctionsImpl --> delete
  transformFire --> replaceFireFunctions
  transformFire --> hasErrors
  transformFire --> ensureNoMoreFireUses
  transformFire --> throwIfErrorsFound
  replaceFireFunctions --> isUseEffectHookType
  replaceFireFunctions --> getFunctionExpression
  replaceFireFunctions --> visitFunctionExpressionAndPropagateFireDependencies
  replaceFireFunctions --> entries
  replaceFireFunctions --> hasCalleeWithInsertedFire
  replaceFireFunctions --> addCalleeWithInsertedFire
  replaceFireFunctions --> addImportSpecifier
  replaceFireFunctions --> makeLoadUseFireInstruction
  replaceFireFunctions --> makeLoadFireCalleeInstruction
  replaceFireFunctions --> makeCallUseFireInstruction
  replaceFireFunctions --> makeStoreUseFireInstruction
  replaceFireFunctions --> push
  replaceFireFunctions --> getLoadGlobalInstrId
  replaceFireFunctions --> pushError
  replaceFireFunctions --> set
  replaceFireFunctions --> ensureNoRemainingCalleeCaptures
  replaceFireFunctions --> getArrayExpression
  replaceFireFunctions --> getLoadLocalInstr
  replaceFireFunctions --> get
  replaceFireFunctions --> pushError
  replaceFireFunctions --> pushError
  replaceFireFunctions --> inUseEffectLambda
  replaceFireFunctions --> getCallExpression
  replaceFireFunctions --> getLoadLocalInstr
  replaceFireFunctions --> pushError
  replaceFireFunctions --> getOrGenerateFireFunctionBinding
  replaceFireFunctions --> add
  replaceFireFunctions --> pushError
  replaceFireFunctions --> pushError
  replaceFireFunctions --> addCallExpression
  replaceFireFunctions --> inUseEffectLambda
  replaceFireFunctions --> visitFunctionExpressionAndPropagateFireDependencies
  replaceFireFunctions --> addFunctionExpression
  replaceFireFunctions --> addLoadLocalInstr
  replaceFireFunctions --> inUseEffectLambda
  replaceFireFunctions --> add
  replaceFireFunctions --> addLoadGlobalInstrId
  replaceFireFunctions --> addArrayExpression
  replaceFireFunctions --> rewriteInstructions
  replaceFireFunctions --> deleteInstructions
  replaceFireFunctions --> markInstructionIds
  visitFunctionExpressionAndPropagateFireDependencies --> bind
  visitFunctionExpressionAndPropagateFireDependencies --> bind
  visitFunctionExpressionAndPropagateFireDependencies --> withScope
  visitFunctionExpressionAndPropagateFireDependencies --> replaceFireFunctions
  visitFunctionExpressionAndPropagateFireDependencies --> get
  visitFunctionExpressionAndPropagateFireDependencies --> mergeCalleesFromInnerScope
  ensureNoRemainingCalleeCaptures --> eachReachablePlace
  ensureNoRemainingCalleeCaptures --> get
  ensureNoRemainingCalleeCaptures --> pushError
  ensureNoRemainingCalleeCaptures --> printSourceLocationLine
  ensureNoMoreFireUses --> eachReachablePlace
  ensureNoMoreFireUses --> pushError
  makeLoadUseFireInstruction --> createTemporaryPlace
  makeLoadUseFireInstruction --> makeInstructionId
  makeLoadFireCalleeInstruction --> createTemporaryPlace
  makeLoadFireCalleeInstruction --> makeInstructionId
  makeCallUseFireInstruction --> createTemporaryPlace
  makeCallUseFireInstruction --> makeInstructionId
  makeStoreUseFireInstruction --> promoteTemporary
  makeStoreUseFireInstruction --> createTemporaryPlace
  makeStoreUseFireInstruction --> makeInstructionId
  Context_pushError --> push
  Context_withFunctionScope --> fn
  Context_withUseEffectLambdaScope --> Context_withFunctionScope
  Context_addCallExpression --> set
  Context_getCallExpression --> get
  Context_addLoadLocalInstr --> set
  Context_getLoadLocalInstr --> get
  Context_getOrGenerateFireFunctionBinding --> getOrInsertWith
  Context_getOrGenerateFireFunctionBinding --> createTemporaryPlace
  Context_getOrGenerateFireFunctionBinding --> set
  Context_mergeCalleesFromInnerScope --> entries
  Context_mergeCalleesFromInnerScope --> set
  Context_addCalleeWithInsertedFire --> add
  Context_hasCalleeWithInsertedFire --> has
  Context_addFunctionExpression --> set
  Context_getFunctionExpression --> get
  Context_addLoadGlobalInstrId --> set
  Context_getLoadGlobalInstrId --> get
  Context_addArrayExpression --> set
  Context_getArrayExpression --> get
  Context_hasErrors --> hasAnyErrors
  Context_throwIfErrorsFound --> Context_hasErrors
  deleteInstructions --> filter
  deleteInstructions --> has
  rewriteInstructions --> get
  rewriteInstructions --> push
  rewriteInstructions --> push
  inferTypes --> generate
  inferTypes --> unify
  inferTypes --> apply
  apply --> get
  apply --> eachInstructionLValue
  apply --> get
  apply --> eachInstructionOperand
  apply --> get
  apply --> get
  apply --> apply
  apply --> get
  setName --> set
  getName --> get
  Unifier_unify --> isRefLikeName
  Unifier_unify --> Unifier_unify
  Unifier_unify --> Unifier_unify
  Unifier_unify --> Unifier_get
  Unifier_unify --> getPropertyType
  Unifier_unify --> getFallthroughPropertyType
  Unifier_unify --> Unifier_unify
  Unifier_unify --> typeEquals
  Unifier_unify --> Unifier_bindVariableTo
  Unifier_unify --> Unifier_bindVariableTo
  Unifier_unify --> Unifier_unify
  Unifier_bindVariableTo --> has
  Unifier_bindVariableTo --> Unifier_unify
  Unifier_bindVariableTo --> get
  Unifier_bindVariableTo --> has
  Unifier_bindVariableTo --> Unifier_unify
  Unifier_bindVariableTo --> get
  Unifier_bindVariableTo --> invariant
  Unifier_bindVariableTo --> Unifier_get
  Unifier_bindVariableTo --> typeEquals
  Unifier_bindVariableTo --> tryUnionTypes
  Unifier_bindVariableTo --> Unifier_unify
  Unifier_bindVariableTo --> Unifier_occursCheck
  Unifier_bindVariableTo --> Unifier_tryResolveType
  Unifier_bindVariableTo --> set
  Unifier_bindVariableTo --> set
  Unifier_tryResolveType --> Unifier_tryResolveType
  Unifier_tryResolveType --> push
  Unifier_tryResolveType --> Unifier_get
  Unifier_tryResolveType --> Unifier_tryResolveType
  Unifier_tryResolveType --> set
  Unifier_tryResolveType --> Unifier_tryResolveType
  Unifier_tryResolveType --> Unifier_get
  Unifier_tryResolveType --> Unifier_tryResolveType
  Unifier_tryResolveType --> Unifier_get
  Unifier_tryResolveType --> assertExhaustive
  Unifier_occursCheck --> typeEquals
  Unifier_occursCheck --> has
  Unifier_occursCheck --> Unifier_occursCheck
  Unifier_occursCheck --> get
  Unifier_occursCheck --> some
  Unifier_occursCheck --> Unifier_occursCheck
  Unifier_occursCheck --> Unifier_occursCheck
  Unifier_get --> has
  Unifier_get --> Unifier_get
  Unifier_get --> get
  Unifier_get --> map
  Unifier_get --> Unifier_get
  Unifier_get --> Unifier_get
  isRefLikeName --> test
  isComponentDeclaration --> call
  parseComponentDeclaration --> isComponentDeclaration
  DisjointSet_union --> shift
  DisjointSet_union --> invariant
  DisjointSet_union --> DisjointSet_find
  DisjointSet_union --> set
  DisjointSet_union --> get
  DisjointSet_union --> set
  DisjointSet_union --> set
  DisjointSet_union --> get
  DisjointSet_find --> has
  DisjointSet_find --> get
  DisjointSet_find --> DisjointSet_find
  DisjointSet_find --> set
  DisjointSet_has --> has
  DisjointSet_canonicalize --> keys
  DisjointSet_canonicalize --> DisjointSet_find
  DisjointSet_canonicalize --> set
  DisjointSet_forEach --> keys
  DisjointSet_forEach --> DisjointSet_find
  DisjointSet_forEach --> fn
  DisjointSet_buildSets --> DisjointSet_forEach
  DisjointSet_buildSets --> get
  DisjointSet_buildSets --> set
  DisjointSet_buildSets --> get
  DisjointSet_buildSets --> set
  DisjointSet_buildSets --> add
  DisjointSet_buildSets --> values
  isHookDeclaration --> call
  parseHookDeclaration --> isHookDeclaration
  isReservedWord --> has
  isReservedWord --> has
  isReservedWord --> has
  OkImpl_map --> fn
  OkImpl_mapOr --> fn
  OkImpl_mapOrElse --> fn
  OkImpl_andThen --> fn
  ErrImpl_mapErr --> fn
  ErrImpl_mapOrElse --> fallback
  ErrImpl_orElse --> fn
  ErrImpl_unwrapOrElse --> fallback
  Node_find --> fn
  Node_find --> find
  Node_contains --> contains
  Node_each --> fn
  Node_each --> each
  Node_print --> fn
  Node_print --> print
  tryParseTestPragmaValue --> exec
  tryParseTestPragmaValue --> parse
  tryParseTestPragmaValue --> Ok
  tryParseTestPragmaValue --> Err
  parseConfigPragmaEnvironmentForTest --> parse
  parseConfigPragmaEnvironmentForTest --> splitPragma
  parseConfigPragmaEnvironmentForTest --> hasOwnProperty
  parseConfigPragmaEnvironmentForTest --> unwrap
  parseConfigPragmaEnvironmentForTest --> tryParseTestPragmaValue
  parseConfigPragmaEnvironmentForTest --> split
  parseConfigPragmaEnvironmentForTest --> safeParse
  parseConfigPragmaEnvironmentForTest --> invariant
  parseConfigPragmaEnvironmentForTest --> fromZodError
  parseConfigPragmaForTests --> parseConfigPragmaEnvironmentForTest
  parseConfigPragmaForTests --> splitPragma
  parseConfigPragmaForTests --> hasOwnProperty
  parseConfigPragmaForTests --> unwrap
  parseConfigPragmaForTests --> tryParseTestPragmaValue
  parseConfigPragmaForTests --> parsePluginOptions
  retainWhere --> predicate
  retainWhere_Set --> predicate
  retainWhere_Set --> delete
  getOrInsertWith --> has
  getOrInsertWith --> get
  getOrInsertWith --> makeDefault
  getOrInsertWith --> set
  getOrInsertDefault --> has
  getOrInsertDefault --> get
  getOrInsertDefault --> set
  Set_equal --> has
  Set_union --> add
  Set_intersect --> some
  Set_intersect --> has
  Set_intersect --> add
  Set_isSuperset --> has
  Iterable_some --> pred
  Set_filter --> fn
  Set_filter --> add
  hasOwnProperty --> call
  validateContextVariableLValues --> validateContextVariableLValuesImpl
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> eachPatternOperand
  validateContextVariableLValuesImpl --> visit
  validateContextVariableLValuesImpl --> validateContextVariableLValuesImpl
  validateContextVariableLValuesImpl --> eachInstructionValueLValue
  validateContextVariableLValuesImpl --> throwTodo
  visit --> get
  visit --> throwTodo
  visit --> invariant
  visit --> printPlace
  visit --> set
  validateHooksUsage --> computeUnconditionalBlocks
  recordError --> pushErrorDetail
  recordError --> set
  recordConditionalHookError --> setKind
  recordConditionalHookError --> get
  recordConditionalHookError --> recordError
  recordInvalidHookUsageError --> get
  recordInvalidHookUsageError --> recordError
  recordDynamicHookUsageError --> get
  recordDynamicHookUsageError --> recordError
  getKindForPlace --> get
  getKindForPlace --> isHookName
  getKindForPlace --> joinKinds
  visitPlace --> get
  visitPlace --> recordInvalidHookUsageError
  setKind --> set
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> setKind
  validateHooksUsage --> isHookName
  validateHooksUsage --> get
  validateHooksUsage --> joinKinds
  validateHooksUsage --> set
  validateHooksUsage --> getHookKind
  validateHooksUsage --> setKind
  validateHooksUsage --> setKind
  validateHooksUsage --> visitPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> setKind
  validateHooksUsage --> visitPlace
  validateHooksUsage --> joinKinds
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> setKind
  validateHooksUsage --> setKind
  validateHooksUsage --> visitPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> setKind
  validateHooksUsage --> joinKinds
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> isHookName
  validateHooksUsage --> assertExhaustive
  validateHooksUsage --> setKind
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> has
  validateHooksUsage --> recordConditionalHookError
  validateHooksUsage --> recordDynamicHookUsageError
  validateHooksUsage --> eachInstructionOperand
  validateHooksUsage --> visitPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> has
  validateHooksUsage --> recordConditionalHookError
  validateHooksUsage --> recordDynamicHookUsageError
  validateHooksUsage --> eachInstructionOperand
  validateHooksUsage --> visitPlace
  validateHooksUsage --> visitPlace
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> eachInstructionLValue
  validateHooksUsage --> isHookName
  validateHooksUsage --> assertExhaustive
  validateHooksUsage --> setKind
  validateHooksUsage --> visitFunctionExpression
  validateHooksUsage --> eachInstructionOperand
  validateHooksUsage --> visitPlace
  validateHooksUsage --> eachInstructionLValue
  validateHooksUsage --> getKindForPlace
  validateHooksUsage --> setKind
  validateHooksUsage --> eachTerminalOperand
  validateHooksUsage --> visitPlace
  validateHooksUsage --> pushErrorDetail
  validateHooksUsage --> asResult
  visitFunctionExpression --> visitFunctionExpression
  visitFunctionExpression --> getHookKind
  visitFunctionExpression --> pushErrorDetail
  validateLocalsNotReassignedAfterRender --> getContextReassignment
  validateLocalsNotReassignedAfterRender --> pushDiagnostic
  validateLocalsNotReassignedAfterRender --> withDetails
  validateLocalsNotReassignedAfterRender --> create
  getContextReassignment --> getContextReassignment
  getContextReassignment --> eachInstructionValueOperand
  getContextReassignment --> get
  getContextReassignment --> pushDiagnostic
  getContextReassignment --> withDetails
  getContextReassignment --> create
  getContextReassignment --> set
  getContextReassignment --> get
  getContextReassignment --> set
  getContextReassignment --> set
  getContextReassignment --> get
  getContextReassignment --> set
  getContextReassignment --> add
  getContextReassignment --> has
  getContextReassignment --> add
  getContextReassignment --> get
  getContextReassignment --> set
  getContextReassignment --> set
  getContextReassignment --> eachInstructionValueOperand
  getContextReassignment --> getFunctionCallSignature
  getContextReassignment --> getFunctionCallSignature
  getContextReassignment --> getFunctionCallSignature
  getContextReassignment --> invariant
  getContextReassignment --> get
  getContextReassignment --> eachInstructionLValue
  getContextReassignment --> set
  getContextReassignment --> eachTerminalOperand
  getContextReassignment --> get
  validateMemoizedEffectDependencies --> visitReactiveFunction
  validateMemoizedEffectDependencies --> asResult
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_visitScope --> isUnmemoized
  Visitor_visitScope --> add
  Visitor_visitScope --> add
  Visitor_visitInstruction --> Visitor_traverseInstruction
  Visitor_visitInstruction --> isEffectHook
  Visitor_visitInstruction --> isMutable
  Visitor_visitInstruction --> isUnmemoized
  Visitor_visitInstruction --> push
  isUnmemoized --> has
  isEffectHook --> isUseEffectHookType
  isEffectHook --> isUseLayoutEffectHookType
  isEffectHook --> isUseInsertionEffectHookType
  validateNoCapitalizedCalls --> keys
  isAllowed --> has
  isAllowed --> test
  validateNoCapitalizedCalls --> test
  validateNoCapitalizedCalls --> toUpperCase
  validateNoCapitalizedCalls --> isAllowed
  validateNoCapitalizedCalls --> set
  validateNoCapitalizedCalls --> get
  validateNoCapitalizedCalls --> throwInvalidReact
  validateNoCapitalizedCalls --> test
  validateNoCapitalizedCalls --> set
  validateNoCapitalizedCalls --> get
  validateNoCapitalizedCalls --> push
  validateNoCapitalizedCalls --> asResult
  validateNoDerivedComputationsInEffects --> values
  validateNoDerivedComputationsInEffects --> set
  validateNoDerivedComputationsInEffects --> set
  validateNoDerivedComputationsInEffects --> set
  validateNoDerivedComputationsInEffects --> isUseEffectHookType
  validateNoDerivedComputationsInEffects --> get
  validateNoDerivedComputationsInEffects --> get
  validateNoDerivedComputationsInEffects --> every
  validateNoDerivedComputationsInEffects --> map
  validateNoDerivedComputationsInEffects --> invariant
  validateNoDerivedComputationsInEffects --> get
  validateNoDerivedComputationsInEffects --> validateEffect
  validateNoDerivedComputationsInEffects --> hasAnyErrors
  validateEffect --> isSetStateType
  validateEffect --> find
  validateEffect --> find
  validateEffect --> set
  validateEffect --> values
  validateEffect --> has
  validateEffect --> values
  validateEffect --> get
  validateEffect --> add
  validateEffect --> set
  validateEffect --> from
  validateEffect --> get
  validateEffect --> set
  validateEffect --> eachInstructionValueOperand
  validateEffect --> get
  validateEffect --> add
  validateEffect --> set
  validateEffect --> from
  validateEffect --> isSetStateType
  validateEffect --> get
  validateEffect --> push
  validateEffect --> eachTerminalOperand
  validateEffect --> has
  validateEffect --> add
  validateEffect --> push
  DerivationCache_takeSnapshot --> entries
  DerivationCache_takeSnapshot --> set
  DerivationCache_checkForChanges --> entries
  DerivationCache_checkForChanges --> get
  DerivationCache_checkForChanges --> DerivationCache_isDerivationEqual
  DerivationCache_addDerivationEntry --> get
  DerivationCache_addDerivationEntry --> set
  DerivationCache_isDerivationEqual --> has
  validateNoDerivedComputationsInEffects_exp --> set
  validateNoDerivedComputationsInEffects_exp --> set
  validateNoDerivedComputationsInEffects_exp --> takeSnapshot
  validateNoDerivedComputationsInEffects_exp --> values
  validateNoDerivedComputationsInEffects_exp --> recordPhiDerivations
  validateNoDerivedComputationsInEffects_exp --> recordInstructionDerivations
  validateNoDerivedComputationsInEffects_exp --> checkForChanges
  validateNoDerivedComputationsInEffects_exp --> invariant
  validateNoDerivedComputationsInEffects_exp --> snapshot
  validateNoDerivedComputationsInEffects_exp --> validateEffect
  validateNoDerivedComputationsInEffects_exp --> asResult
  recordPhiDerivations --> values
  recordPhiDerivations --> get
  recordPhiDerivations --> joinValue
  recordPhiDerivations --> add
  recordPhiDerivations --> addDerivationEntry
  getRootSetState --> has
  getRootSetState --> add
  getRootSetState --> get
  getRootSetState --> getRootSetState
  maybeRecordSetState --> eachInstructionLValue
  maybeRecordSetState --> has
  maybeRecordSetState --> set
  maybeRecordSetState --> isSetStateType
  maybeRecordSetState --> set
  maybeRecordSetState --> getRootSetState
  maybeRecordSetState --> get
  maybeRecordSetState --> set
  recordInstructionDerivations --> maybeRecordSetState
  recordInstructionDerivations --> set
  recordInstructionDerivations --> recordPhiDerivations
  recordInstructionDerivations --> recordInstructionDerivations
  recordInstructionDerivations --> isUseEffectHookType
  recordInstructionDerivations --> get
  recordInstructionDerivations --> get
  recordInstructionDerivations --> set
  recordInstructionDerivations --> isUseStateType
  recordInstructionDerivations --> addDerivationEntry
  recordInstructionDerivations --> set
  recordInstructionDerivations --> eachInstructionOperand
  recordInstructionDerivations --> has
  recordInstructionDerivations --> getRootSetState
  recordInstructionDerivations --> add
  recordInstructionDerivations --> get
  recordInstructionDerivations --> get
  recordInstructionDerivations --> joinValue
  recordInstructionDerivations --> add
  recordInstructionDerivations --> eachInstructionLValue
  recordInstructionDerivations --> addDerivationEntry
  recordInstructionDerivations --> eachInstructionOperand
  recordInstructionDerivations --> isMutable
  recordInstructionDerivations --> has
  recordInstructionDerivations --> get
  recordInstructionDerivations --> joinValue
  recordInstructionDerivations --> addDerivationEntry
  recordInstructionDerivations --> invariant
  recordInstructionDerivations --> assertExhaustive
  buildTreeNode --> get
  buildTreeNode --> isNamedIdentifier
  buildTreeNode --> invariant
  buildTreeNode --> buildTreeNode
  buildTreeNode --> isNamedIdentifier
  buildTreeNode --> has
  buildTreeNode --> push
  buildTreeNode --> add
  buildTreeNode --> isNamedIdentifier
  buildTreeNode --> has
  renderTree --> add
  renderTree --> add
  renderTree --> add
  renderTree --> add
  renderTree --> forEach
  renderTree --> renderTree
  getFnLocalDeps --> add
  validateEffect --> getRootSetState
  validateEffect --> set
  validateEffect --> values
  validateEffect --> getFnLocalDeps
  validateEffect --> get
  validateEffect --> has
  validateEffect --> isUseRefType
  validateEffect --> maybeRecordSetState
  validateEffect --> eachInstructionOperand
  validateEffect --> has
  validateEffect --> getRootSetState
  validateEffect --> add
  validateEffect --> get
  validateEffect --> isSetStateType
  validateEffect --> get
  validateEffect --> get
  validateEffect --> push
  validateEffect --> get
  validateEffect --> has
  validateEffect --> add
  validateEffect --> eachInstructionOperand
  validateEffect --> add
  validateEffect --> add
  validateEffect --> getRootSetState
  validateEffect --> has
  validateEffect --> has
  validateEffect --> get
  validateEffect --> get
  validateEffect --> buildTreeNode
  validateEffect --> has
  validateEffect --> set
  validateEffect --> from
  validateEffect --> values
  validateEffect --> map
  validateEffect --> renderTree
  validateEffect --> has
  validateEffect --> from
  validateEffect --> from
  validateEffect --> join
  validateEffect --> join
  validateEffect --> join
  validateEffect --> pushDiagnostic
  validateEffect --> withDetails
  validateEffect --> create
  visitOperand --> get
  visitOperand --> pushDiagnostic
  visitOperand --> withDetails
  visitOperand --> withDetails
  visitOperand --> create
  validateNoFreezingKnownMutableFunctions --> values
  validateNoFreezingKnownMutableFunctions --> get
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> get
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> map
  validateNoFreezingKnownMutableFunctions --> get
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> has
  validateNoFreezingKnownMutableFunctions --> isRefOrRefLikeMutableType
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> get
  validateNoFreezingKnownMutableFunctions --> set
  validateNoFreezingKnownMutableFunctions --> eachInstructionValueOperand
  validateNoFreezingKnownMutableFunctions --> visitOperand
  validateNoFreezingKnownMutableFunctions --> eachTerminalOperand
  validateNoFreezingKnownMutableFunctions --> visitOperand
  validateNoFreezingKnownMutableFunctions --> asResult
  validateNoImpureFunctionsInRender --> getFunctionCallSignature
  validateNoImpureFunctionsInRender --> pushDiagnostic
  validateNoImpureFunctionsInRender --> withDetails
  validateNoImpureFunctionsInRender --> create
  validateNoImpureFunctionsInRender --> asResult
  validateNoJSXInTryStatement --> retainWhere
  validateNoJSXInTryStatement --> pushDiagnostic
  validateNoJSXInTryStatement --> withDetails
  validateNoJSXInTryStatement --> create
  validateNoJSXInTryStatement --> push
  validateNoJSXInTryStatement --> asResult
  makeRefId --> invariant
  makeRefId --> isInteger
  nextRefId --> makeRefId
  Env_lookup --> get
  Env_define --> set
  Env_get --> get
  Env_get --> get
  Env_set --> get
  Env_set --> get
  Env_set --> joinRefAccessTypes
  Env_set --> tyEqual
  Env_set --> set
  validateNoRefAccessInRender --> collectTemporariesSidemap
  validateNoRefAccessInRender --> map
  validateNoRefAccessInRender --> validateNoRefAccessInRenderImpl
  collectTemporariesSidemap --> values
  collectTemporariesSidemap --> lookup
  collectTemporariesSidemap --> define
  collectTemporariesSidemap --> lookup
  collectTemporariesSidemap --> define
  collectTemporariesSidemap --> define
  collectTemporariesSidemap --> isUseRefType
  collectTemporariesSidemap --> lookup
  collectTemporariesSidemap --> define
  refTypeOfType --> isRefValueType
  refTypeOfType --> isUseRefType
  refTypeOfType --> nextRefId
  tyEqual --> invariant
  tyEqual --> invariant
  tyEqual --> invariant
  tyEqual --> tyEqual
  tyEqual --> tyEqual
  joinRefAccessRefTypes --> nextRefId
  joinRefAccessRefTypes --> invariant
  joinRefAccessRefTypes --> joinRefAccessTypes
  joinRefAccessRefTypes --> joinRefAccessRefTypes
  joinRefAccessTypes --> reduce
  joinRefAccessTypes --> joinRefAccessRefTypes
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> values
  validateNoRefAccessInRenderImpl --> add
  validateNoRefAccessInRenderImpl --> hasChanged
  validateNoRefAccessInRenderImpl --> resetChanged
  validateNoRefAccessInRenderImpl --> retainWhere
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> map
  validateNoRefAccessInRenderImpl --> Array
  validateNoRefAccessInRenderImpl --> values
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> eachInstructionValueOperand
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> eachPatternOperand
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> refTypeOfType
  validateNoRefAccessInRenderImpl --> validateNoRefAccessInRenderImpl
  validateNoRefAccessInRenderImpl --> isOk
  validateNoRefAccessInRenderImpl --> unwrap
  validateNoRefAccessInRenderImpl --> isErr
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> getHookKindForType
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> pushDiagnostic
  validateNoRefAccessInRenderImpl --> withDetails
  validateNoRefAccessInRenderImpl --> create
  validateNoRefAccessInRenderImpl --> isUseRefType
  validateNoRefAccessInRenderImpl --> isEventHandlerType
  validateNoRefAccessInRenderImpl --> eachInstructionValueOperand
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> has
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> validateNoRefPassedToFunction
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> eachInstructionValueOperand
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> push
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> find
  validateNoRefAccessInRenderImpl --> retainWhere
  validateNoRefAccessInRenderImpl --> validateNoRefUpdate
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> pushDiagnostic
  validateNoRefAccessInRenderImpl --> withDetails
  validateNoRefAccessInRenderImpl --> withDetails
  validateNoRefAccessInRenderImpl --> create
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> eachInstructionValueOperand
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> eachInstructionValueOperand
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> eachInstructionOperand
  validateNoRefAccessInRenderImpl --> guardCheck
  validateNoRefAccessInRenderImpl --> isUseRefType
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> nextRefId
  validateNoRefAccessInRenderImpl --> isRefValueType
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> set
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> find
  validateNoRefAccessInRenderImpl --> push
  validateNoRefAccessInRenderImpl --> eachTerminalOperand
  validateNoRefAccessInRenderImpl --> validateNoRefValueAccess
  validateNoRefAccessInRenderImpl --> guardCheck
  validateNoRefAccessInRenderImpl --> validateNoDirectRefValueAccess
  validateNoRefAccessInRenderImpl --> guardCheck
  validateNoRefAccessInRenderImpl --> push
  validateNoRefAccessInRenderImpl --> get
  validateNoRefAccessInRenderImpl --> hasAnyErrors
  validateNoRefAccessInRenderImpl --> Err
  validateNoRefAccessInRenderImpl --> invariant
  validateNoRefAccessInRenderImpl --> hasChanged
  validateNoRefAccessInRenderImpl --> Ok
  validateNoRefAccessInRenderImpl --> joinRefAccessTypes
  validateNoRefAccessInRenderImpl --> filter
  destructure --> destructure
  guardCheck --> get
  guardCheck --> pushDiagnostic
  guardCheck --> withDetails
  guardCheck --> create
  validateNoRefValueAccess --> destructure
  validateNoRefValueAccess --> get
  validateNoRefValueAccess --> pushDiagnostic
  validateNoRefValueAccess --> withDetails
  validateNoRefValueAccess --> create
  validateNoRefPassedToFunction --> destructure
  validateNoRefPassedToFunction --> get
  validateNoRefPassedToFunction --> pushDiagnostic
  validateNoRefPassedToFunction --> withDetails
  validateNoRefPassedToFunction --> create
  validateNoRefUpdate --> destructure
  validateNoRefUpdate --> get
  validateNoRefUpdate --> pushDiagnostic
  validateNoRefUpdate --> withDetails
  validateNoRefUpdate --> create
  validateNoDirectRefValueAccess --> destructure
  validateNoDirectRefValueAccess --> get
  validateNoDirectRefValueAccess --> pushDiagnostic
  validateNoDirectRefValueAccess --> withDetails
  validateNoDirectRefValueAccess --> create
  validateNoSetStateInEffects --> has
  validateNoSetStateInEffects --> set
  validateNoSetStateInEffects --> has
  validateNoSetStateInEffects --> set
  validateNoSetStateInEffects --> set
  validateNoSetStateInEffects --> some
  validateNoSetStateInEffects --> eachInstructionValueOperand
  validateNoSetStateInEffects --> isSetStateType
  validateNoSetStateInEffects --> has
  validateNoSetStateInEffects --> getSetStateCall
  validateNoSetStateInEffects --> set
  validateNoSetStateInEffects --> isUseEffectEventType
  validateNoSetStateInEffects --> get
  validateNoSetStateInEffects --> set
  validateNoSetStateInEffects --> isUseEffectHookType
  validateNoSetStateInEffects --> isUseLayoutEffectHookType
  validateNoSetStateInEffects --> isUseInsertionEffectHookType
  validateNoSetStateInEffects --> get
  validateNoSetStateInEffects --> pushDiagnostic
  validateNoSetStateInEffects --> withDetails
  validateNoSetStateInEffects --> create
  validateNoSetStateInEffects --> pushDiagnostic
  validateNoSetStateInEffects --> withDetails
  validateNoSetStateInEffects --> create
  validateNoSetStateInEffects --> asResult
  isDerivedFromRef --> has
  isDerivedFromRef --> isUseRefType
  isDerivedFromRef --> isRefValueType
  getSetStateCall --> createControlDominators
  getSetStateCall --> isDerivedFromRef
  getSetStateCall --> isDerivedFromRef
  getSetStateCall --> isDerivedFromRef
  getSetStateCall --> add
  getSetStateCall --> isRefControlledBlock
  getSetStateCall --> add
  getSetStateCall --> Iterable_some
  getSetStateCall --> eachInstructionValueOperand
  getSetStateCall --> eachInstructionLValue
  getSetStateCall --> add
  getSetStateCall --> eachInstructionValueOperand
  getSetStateCall --> isMutable
  getSetStateCall --> add
  getSetStateCall --> invariant
  getSetStateCall --> assertExhaustive
  getSetStateCall --> isUseRefType
  getSetStateCall --> isRefValueType
  getSetStateCall --> add
  getSetStateCall --> has
  getSetStateCall --> set
  getSetStateCall --> has
  getSetStateCall --> set
  getSetStateCall --> set
  getSetStateCall --> isSetStateType
  getSetStateCall --> has
  getSetStateCall --> at
  getSetStateCall --> has
  getSetStateCall --> isRefControlledBlock
  validateNoSetStateInRender --> validateNoSetStateInRenderImpl
  validateNoSetStateInRenderImpl --> computeUnconditionalBlocks
  validateNoSetStateInRenderImpl --> has
  validateNoSetStateInRenderImpl --> add
  validateNoSetStateInRenderImpl --> has
  validateNoSetStateInRenderImpl --> add
  validateNoSetStateInRenderImpl --> add
  validateNoSetStateInRenderImpl --> some
  validateNoSetStateInRenderImpl --> eachInstructionValueOperand
  validateNoSetStateInRenderImpl --> isSetStateType
  validateNoSetStateInRenderImpl --> has
  validateNoSetStateInRenderImpl --> isErr
  validateNoSetStateInRenderImpl --> validateNoSetStateInRenderImpl
  validateNoSetStateInRenderImpl --> add
  validateNoSetStateInRenderImpl --> invariant
  validateNoSetStateInRenderImpl --> invariant
  validateNoSetStateInRenderImpl --> isSetStateType
  validateNoSetStateInRenderImpl --> has
  validateNoSetStateInRenderImpl --> pushDiagnostic
  validateNoSetStateInRenderImpl --> withDetails
  validateNoSetStateInRenderImpl --> create
  validateNoSetStateInRenderImpl --> has
  validateNoSetStateInRenderImpl --> pushDiagnostic
  validateNoSetStateInRenderImpl --> withDetails
  validateNoSetStateInRenderImpl --> create
  validateNoSetStateInRenderImpl --> pushDiagnostic
  validateNoSetStateInRenderImpl --> withDetails
  validateNoSetStateInRenderImpl --> create
  validateNoSetStateInRenderImpl --> asResult
  validatePreservedManualMemoization --> visitReactiveFunction
  validatePreservedManualMemoization --> asResult
  prettyPrintScopeDependency --> join
  prettyPrintScopeDependency --> map
  merge --> max
  compareDeps --> min
  compareDeps --> some
  compareDeps --> some
  compareDeps --> some
  validateInferredDep --> get
  validateInferredDep --> invariant
  validateInferredDep --> compareDeps
  validateInferredDep --> merge
  validateInferredDep --> pushDiagnostic
  validateInferredDep --> withDetails
  validateInferredDep --> create
  validateInferredDep --> trim
  validateInferredDep --> join
  validateInferredDep --> prettyPrintScopeDependency
  validateInferredDep --> join
  validateInferredDep --> map
  validateInferredDep --> printManualMemoDependency
  validateInferredDep --> getCompareDependencyResultDescription
  Visitor_recordDepsInValue --> Visitor_visitInstruction
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> Visitor_recordDepsInValue
  Visitor_recordDepsInValue --> collectMaybeMemoDependencies
  Visitor_recordDepsInValue --> eachInstructionValueLValue
  Visitor_recordDepsInValue --> add
  Visitor_recordDepsInValue --> set
  Visitor_recordTemporaries --> has
  Visitor_recordTemporaries --> add
  Visitor_recordTemporaries --> Visitor_recordDepsInValue
  Visitor_recordTemporaries --> set
  Visitor_visitScope --> Visitor_traverseScope
  Visitor_visitScope --> validateInferredDep
  Visitor_visitScope --> add
  Visitor_visitScope --> add
  Visitor_visitPrunedScope --> Visitor_traversePrunedScope
  Visitor_visitPrunedScope --> add
  Visitor_visitInstruction --> Visitor_recordTemporaries
  Visitor_visitInstruction --> getOrInsertDefault
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> getOrInsertDefault
  Visitor_visitInstruction --> add
  Visitor_visitInstruction --> invariant
  Visitor_visitInstruction --> eachInstructionValueOperand
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> has
  Visitor_visitInstruction --> pushDiagnostic
  Visitor_visitInstruction --> withDetails
  Visitor_visitInstruction --> create
  Visitor_visitInstruction --> join
  Visitor_visitInstruction --> invariant
  Visitor_visitInstruction --> eachInstructionValueOperand
  Visitor_visitInstruction --> get
  Visitor_visitInstruction --> isUnmemoized
  Visitor_visitInstruction --> pushDiagnostic
  Visitor_visitInstruction --> withDetails
  Visitor_visitInstruction --> create
  Visitor_visitInstruction --> trim
  Visitor_visitInstruction --> join
  Visitor_visitInstruction --> printIdentifier
  isUnmemoized --> has
  isManualMemoization --> isCallExpression
  isManualMemoization --> isIdentifier
  isManualMemoization --> isMemberExpression
  isManualMemoization --> isIdentifier
  isManualMemoization --> isIdentifier
  validateSourceLocations --> traverse
  validateSourceLocations --> has
  validateSourceLocations --> isManualMemoization
  validateSourceLocations --> locationKey
  validateSourceLocations --> get
  validateSourceLocations --> add
  validateSourceLocations --> set
  collectGeneratedLocations --> locationKey
  collectGeneratedLocations --> get
  collectGeneratedLocations --> add
  collectGeneratedLocations --> set
  collectGeneratedLocations --> isArray
  collectGeneratedLocations --> isNode
  collectGeneratedLocations --> collectGeneratedLocations
  collectGeneratedLocations --> isNode
  collectGeneratedLocations --> collectGeneratedLocations
  validateSourceLocations --> collectGeneratedLocations
  validateSourceLocations --> collectGeneratedLocations
  reportMissingLocation --> pushDiagnostic
  reportMissingLocation --> withDetails
  reportMissingLocation --> create
  reportWrongNodeType --> pushDiagnostic
  reportWrongNodeType --> withDetails
  reportWrongNodeType --> create
  reportWrongNodeType --> join
  reportWrongNodeType --> from
  validateSourceLocations --> get
  validateSourceLocations --> reportMissingLocation
  validateSourceLocations --> join
  validateSourceLocations --> from
  validateSourceLocations --> has
  validateSourceLocations --> has
  validateSourceLocations --> some
  validateSourceLocations --> from
  validateSourceLocations --> has
  validateSourceLocations --> reportMissingLocation
  validateSourceLocations --> reportWrongNodeType
  validateSourceLocations --> asResult
  validateStaticComponents --> values
  validateStaticComponents --> values
  validateStaticComponents --> get
  validateStaticComponents --> set
  validateStaticComponents --> set
  validateStaticComponents --> get
  validateStaticComponents --> set
  validateStaticComponents --> get
  validateStaticComponents --> set
  validateStaticComponents --> set
  validateStaticComponents --> get
  validateStaticComponents --> pushDiagnostic
  validateStaticComponents --> withDetails
  validateStaticComponents --> withDetails
  validateStaticComponents --> create
  validateStaticComponents --> asResult
  validateUseMemo --> eachInstructionValueOperand
  validateUseMemo --> delete
  validateUseMemo --> add
  validateUseMemo --> add
  validateUseMemo --> has
  validateUseMemo --> add
  validateUseMemo --> set
  validateUseMemo --> has
  validateUseMemo --> get
  validateUseMemo --> pushDiagnostic
  validateUseMemo --> withDetails
  validateUseMemo --> create
  validateUseMemo --> pushDiagnostic
  validateUseMemo --> withDetails
  validateUseMemo --> create
  validateUseMemo --> validateNoContextVariableAssignment
  validateUseMemo --> hasNonVoidReturn
  validateUseMemo --> pushDiagnostic
  validateUseMemo --> withDetails
  validateUseMemo --> create
  validateUseMemo --> set
  validateUseMemo --> eachTerminalOperand
  validateUseMemo --> delete
  validateUseMemo --> values
  validateUseMemo --> pushDiagnostic
  validateUseMemo --> withDetails
  validateUseMemo --> create
  validateUseMemo --> logErrors
  validateUseMemo --> asResult
  validateUseMemo --> asResult
  validateNoContextVariableAssignment --> map
  validateNoContextVariableAssignment --> values
  validateNoContextVariableAssignment --> has
  validateNoContextVariableAssignment --> pushDiagnostic
  validateNoContextVariableAssignment --> withDetails
  validateNoContextVariableAssignment --> create

```

View this diagram at: https://mermaid.live
