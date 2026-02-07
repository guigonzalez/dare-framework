/**
 * Deterministic wizard evaluation. No AI. Rules from wizard-rules.json.
 */

export type WizardAnswers = Record<string, string>;

export interface WizardRule {
  conditions: Record<string, string>;
  level: number;
  reason: string;
  gates: string[];
  risks: string[];
}

export interface WizardRulesConfig {
  rules: WizardRule[];
  defaultLevel: number;
  defaultReason: string;
  defaultGates: string[];
  defaultRisks: string[];
}

export interface WizardResult {
  level: number;
  reason: string;
  gates: string[];
  risks: string[];
  packId: string;
  matchedRule?: WizardRule;
}

/**
 * Check if all conditions of a rule match the given answers.
 */
function ruleMatches(rule: WizardRule, answers: WizardAnswers): boolean {
  for (const [key, value] of Object.entries(rule.conditions)) {
    if (answers[key] !== value) return false;
  }
  return true;
}

/**
 * Count conditions in a rule (for sorting by specificity).
 */
function ruleSpecificity(rule: WizardRule): number {
  return Object.keys(rule.conditions).length;
}

/**
 * Evaluate wizard answers against rules. Deterministic, conservative.
 * Rules with more conditions take precedence. First match wins.
 * If no match, returns defaultLevel (0).
 */
export function evaluateWizard(
  answers: WizardAnswers,
  config: WizardRulesConfig
): WizardResult {
  const { rules, defaultLevel, defaultReason, defaultGates, defaultRisks } = config;

  // Conservative override: high impact + no explicit rules → force level 0
  if (
    answers.impactOfFailure === "high" &&
    answers.explicitRulesExist === "no"
  ) {
    const overrideRule = rules.find(
      (r) =>
        r.conditions.impactOfFailure === "high" &&
        r.conditions.explicitRulesExist === "no"
    );
    if (overrideRule) {
      return {
        level: overrideRule.level,
        reason: overrideRule.reason,
        gates: overrideRule.gates,
        risks: overrideRule.risks,
        packId: `level-${overrideRule.level}`,
        matchedRule: overrideRule,
      };
    }
  }

  // Sort by specificity descending (more conditions = higher priority)
  const sortedRules = [...rules].sort(
    (a, b) => ruleSpecificity(b) - ruleSpecificity(a)
  );

  for (const rule of sortedRules) {
    if (ruleMatches(rule, answers)) {
      return {
        level: rule.level,
        reason: rule.reason,
        gates: rule.gates,
        risks: rule.risks,
        packId: `level-${rule.level}`,
        matchedRule: rule,
      };
    }
  }

  return {
    level: defaultLevel,
    reason: defaultReason,
    gates: defaultGates,
    risks: defaultRisks,
    packId: `level-${defaultLevel}`,
  };
}
