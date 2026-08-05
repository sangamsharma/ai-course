// === Content Block Types (discriminated union) ===

export interface TextContent {
  type: "text";
  body: string;
}

export interface ImageContent {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface TipBoxContent {
  type: "tip-box";
  variant: "tip" | "warning" | "important" | "example";
  title: string;
  body: string;
}

export interface CodeExampleContent {
  type: "code-example";
  title?: string;
  code: string;
  language?: string;
}

export interface BulletListContent {
  type: "bullet-list";
  title?: string;
  items: string[];
}

export type LessonContent =
  | TextContent
  | ImageContent
  | TipBoxContent
  | CodeExampleContent
  | BulletListContent;

// === Exercise Types (discriminated union) ===

export interface PromptPlaygroundExercise {
  type: "prompt-playground";
  id: string;
  title: string;
  instruction: string;
  promptHint: string;
  sampleResponse: string;
  improvementTip: string;
}

export interface FillInBlankExercise {
  type: "fill-in-blank";
  id: string;
  title: string;
  instruction: string;
  template: string; // text with {{blank}} markers
  blanks: { key: string; answer: string; hint?: string }[];
}

export interface QuizExercise {
  type: "quiz";
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
  allowRetry?: boolean;
}

export interface BeforeAfterExercise {
  type: "before-after";
  id: string;
  title: string;
  description: string;
  beforeContent: string;
  afterContent: string;
  whatImproved?: string[];
}

export type Exercise =
  | PromptPlaygroundExercise
  | FillInBlankExercise
  | QuizExercise
  | BeforeAfterExercise;

// === Module & Lesson Types ===

export interface Lesson {
  id: string;
  slug: string;
  moduleId: string;
  title: string;
  subtitle: string;
  order: number;
  estimatedMinutes: number;
  content: LessonContent[];
  exercises: Exercise[];
  keyTakeaways: string[];
}

export type ModuleColor = "teal" | "blue" | "emerald" | "violet" | "amber" | "rose";

export interface Module {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // lucide-react icon name
  color: ModuleColor;
  estimatedMinutes: number;
  order: number;
  lessons: Lesson[];
}

// === Tool Types ===

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  provider: "OpenAI" | "Anthropic" | "Google" | "Microsoft";
  description: string;
  freeTier: string;
  paidTier: string | null;
  pros: string[];
  cons: string[];
  bestFor: string[];
  website: string;
  mobileApp: boolean;
  color: string;
}

// === Prompt Template Types ===

export type PromptCategory =
  | "email"
  | "social-media"
  | "writing"
  | "planning"
  | "business"
  | "personal"
  | "summarize"
  | "creative"
  | "other";

export interface PromptTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PromptCategory;
  categoryLabel: string;
  prompt: string;
  usageTip: string;
  moduleRef?: string;
  difficulty: "beginner" | "intermediate";
}

// === Glossary Types ===

export interface GlossaryEntry {
  term: string;
  definition: string;
  analogy?: string;
  seeAlso?: string[];
}

// === Progress Types (localStorage) ===

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  completedExercises: string[];
  lastVisited: string;
}

// === Scenario Types ===

export type ScenarioCategory =
  | "daily-life"
  | "study"
  | "job-search"
  | "business"
  | "workplace"
  | "forms"
  | "translation"
  | "health"
  | "money"
  | "agriculture";

export interface Scenario {
  id: string;
  slug: string;
  title: string;
  category: ScenarioCategory;
  categoryLabel: string;
  problem: string;
  fictionalData: string;
  badPrompt: string;
  betterPrompt: string;
  practiceTask: string;
  verificationChecklist: string[];
  privacyWarning: string;
  reflectionQuestion: string;
  transferTemplate: string;
  difficulty: "beginner" | "intermediate";
}

// === Onboarding Types ===

export type HelpNeeded = "writing" | "planning" | "learning" | "business" | "creative" | "other";
export type ConfidenceLevel = "very-low" | "low" | "medium" | "high";
export type LearningStyle = "reading" | "watching" | "doing" | "mixed";
export type DeviceConstraint = "phone-only" | "tablet" | "desktop" | "any";

export interface OnboardingAnswers {
  helpNeeded: HelpNeeded[];
  confidence: ConfidenceLevel;
  learningStyle: LearningStyle;
  device: DeviceConstraint;
}

export interface OnboardingRoute {
  answers: Partial<OnboardingAnswers>;
  suggestedModuleSlugs: string[];
  suggestedScenarios: string[];
  message: string;
}

// === Prompt Builder Types ===

export interface PromptBuilderField {
  key: string;
  label: string;
  placeholder: string;
  explanation: string;
  type: "text" | "textarea" | "select" | "multi-select";
  options?: { value: string; label: string }[];
}

export interface PromptBuilderResult {
  fields: Record<string, string>;
  compiledPrompt: string;
}

// === Verification Challenge Types ===

export type VerificationIssue =
  | "unsupported-claim"
  | "missing-source"
  | "hallucinated-quote"
  | "unsafe-advice"
  | "privacy-risk"
  | "medical-overreach"
  | "legal-overreach"
  | "too-generic"
  | "inappropriate-tone";

export interface VerificationChallenge {
  id: string;
  aiResponse: string;
  issues: VerificationIssue[];
  correctIssues: VerificationIssue[];
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

// === Tool Chooser Types ===

export interface ToolCategory {
  id: string;
  label: string;
  description: string;
  whatItsGoodFor: string[];
  whatToAvoid: string[];
  exampleTask: string;
  safetyNote: string;
  suggestedTools: string[];
}

// === Badge Types ===

export type BadgeId =
  | "starter"
  | "better-prompter"
  | "privacy-aware"
  | "fact-checker"
  | "work-assistant"
  | "daily-life-assistant"
  | "ready-for-real-use";

export interface Badge {
  id: BadgeId;
  name: string;
  description: string;
  icon: string;
  condition: string;
  requiredActions: string[];
}

// === Extended Progress ===

export interface UserProgressExtended extends UserProgress {
  onboardingCompleted: boolean;
  onboardingAnswers?: OnboardingAnswers;
  earnedBadges: BadgeId[];
  completedScenarios: string[];
  completedChallenges: string[];
  sandboxSessions: number;
  capstoneCompleted: boolean;
  privacyAcknowledged: boolean;
  lowBandwidth: boolean;
}

// === Safety Tip Types ===

export interface SafetyTip {
  id: string;
  icon: string;
  title: string;
  body: string;
  category: "privacy" | "accuracy" | "ethics" | "limitations";
}

// === Corporate / B2B Types ===

export type TrainingFormat = "lunch-learn" | "half-day" | "full-day" | "multi-day" | "online-self-paced";
export type TrainingAudience = "team" | "executive" | "board" | "individual";
export type TrainingTrack =
  | "ai-essentials"
  | "microsoft-copilot"
  | "google-ai"
  | "openai"
  | "marketing"
  | "pr-comms"
  | "journalism"
  | "financial-services"
  | "custom";

export interface PricingTier {
  id: string;
  name: string;
  format: TrainingFormat;
  priceAUD: number;
  priceLabel: string;
  duration: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export interface CorporateService {
  id: string;
  title: string;
  icon: string;
  description: string;
  tracks: { label: string; href?: string }[];
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  quote: { text: string; name: string; role: string };
}

export interface TrainingTrackInfo {
  id: TrainingTrack;
  label: string;
  description: string;
  tools: string[];
  audience: TrainingAudience[];
  durationOptions: TrainingFormat[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: TrainingTrack | "other";
  message: string;
}

export interface EnterpriseToolCriteria {
  soc2: boolean;
  hipaa: boolean;
  gdpr: boolean;
  ssoSAML: boolean;
  adminConsole: boolean;
  apiRateLimits: string;
  dataRetention: string;
  dataSovereignty: string;
  fineTuning: boolean;
}
