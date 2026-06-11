/**
 * Scripture Quest — single entry point for the module.
 * The app router lazy-loads pages through this file so the whole game ships
 * as one code-split chunk. The design system stylesheet loads with it.
 */
import './styles.css'

export { default as ScriptureQuestLandingPage } from './pages/LandingPage'
export { default as ScriptureQuestHostPage } from './pages/HostPage'
export { default as ScriptureQuestPlayerPage } from './pages/PlayerPage'
export { default as ScriptureQuestResultsPage } from './pages/ResultsPage'
export { default as ScriptureQuestStudyPage } from './pages/StudyPage'
export { default as ScriptureQuestProfilePage } from './pages/QuestProfilePage'
export { default as ScriptureQuestAdminPage } from './pages/AdminQuestPage'

export { TOPICS, getTopicById } from './data/topics'
export { BADGES, ROUND_TYPE_LABELS } from './data/badges'
export { LOCAL_ROUNDS } from './data/questionBank'
export { checkAndAwardBadges } from './utils/awardBadges'
export type * from './types'
