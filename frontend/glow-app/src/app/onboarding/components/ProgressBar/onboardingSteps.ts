export const TOTAL_STEPS = 15;

export const stepMapping: { [key: string]: number } = {
  "/onboarding/welcome": 1,
  "/onboarding/basic-info-section/basic-info": 2,
  "/onboarding/basic-info-section/name": 3,
  "/onboarding/basic-info-section/birthday": 4,
  "/onboarding/basic-info-section/location": 5,
  "/onboarding/basic-info-section/gender": 6,
  "/onboarding/basic-info-section/dating-preferences": 7,
  "/onboarding/core-values-section/core-values": 8,
  "/onboarding/core-values-section/religion": 9,
  "/onboarding/core-values-section/politics": 10,
  "/onboarding/core-values-section/relationship-type": 11,
  "/onboarding/bio-and-pics-section/bio-and-pics": 12,
  "/onboarding/bio-and-pics-section/bio": 13,
  "/onboarding/bio-and-pics-section/pics": 14,
  "/onboarding/done": 15,
};

export function getCurrentStep(pathname: string): number {
  return stepMapping[pathname] || 1;
}
