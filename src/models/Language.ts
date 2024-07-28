/**
 * Creates a new instance of the ProgrammingLanguage class.
 * @param name - The name of the programming language.
 * @param proficiency - The proficiency level of the programming language (e.g., "Beginner", "Intermediate", "Advanced").
 * @param experienceYears - The number of years of experience with the programming language.
 * @param relevantProjects - Optional: An array of project names or descriptions that are relevant to the programming language.
 * @param additionalDetails - Optional: Any additional details about the programming language.
 */
export class ProgrammingLanguage {
  constructor(
    private name: string,
    private proficiency: string,
    private experienceYears: number,
    private relevantProjects?: string[],
    private additionalDetails?: string
  ) { }

  /**
   * Gets the name of the programming language.
   * @returns The name of the programming language.
   */
  getName (): string {
    return this.name;
  }

  /**
   * Gets the proficiency level of the programming language.
   * @returns The proficiency level of the programming language.
   */
  getProficiency (): string {
    return this.proficiency;
  }

  /**
   * Gets the number of years of experience with the programming language.
   * @returns The number of years of experience with the programming language.
   */
  getExperienceYears (): number {
    return this.experienceYears;
  }

  /**
   * Gets the relevant projects for the programming language.
   * @returns An array of project names or descriptions that are relevant to the programming language.
   */
  getRelevantProjects (): string[] | undefined {
    return this.relevantProjects;
  }

  /**
   * Gets any additional details about the programming language.
   * @returns Any additional details about the programming language.
   */
  getAdditionalDetails (): string | undefined {
    return this.additionalDetails;
  }
}