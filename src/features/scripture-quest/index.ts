/**
 * Scripture Quest — single entry point for the module.
 * The app router lazy-loads pages through this file so the whole game ships
 * as one code-split chunk.
 */
export { default as ScriptureQuestLandingPage } from './pages/LandingPage'
export { default as ScriptureQuestHostPage } from './pages/HostPage'
export { default as ScriptureQuestPlayerPage } from './pages/PlayerPage'
export { default as ScriptureQuestResultsPage } from './pages/ResultsPage'
export { default as ScriptureQuestStudyPage } from './pages/StudyPage'
export { default as ScriptureQuestProfilePage } from './pages/QuestProfilePage'

export { TOPICS, getTopicById } from './data/topics'
export { BADGES } from './data/badges'
export { checkAndAwardBadges } from './utils/awardBadges'
export type * from './types'
