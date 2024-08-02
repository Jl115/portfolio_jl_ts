// src/models/Hobby.ts

/**
 * Creates a new instance of the Hobby class.
 * @param name - The name of the hobby.
 * @param description - A brief description of the hobby.
 * @param yearsOfExperience - Number of years engaged in the hobby.
**/
export class Hobby {
  constructor(
    private name: string,
    private description: string,
    private yearsOfExperience: number
  ) { }

  /**
   * Gets the name of the hobby.
   * @returns The name of the hobby.
   */
  getName (): string {
    return this.name;
  }

  /**
   * Gets the description of the hobby.
   * @returns A brief description of the hobby.
   */
  getDescription (): string {
    return this.description;
  }

  /**
   * Gets the number of years engaged in the hobby.
   * @returns The number of years engaged in the hobby.
   */
  getYearsOfExperience (): number {
    return this.yearsOfExperience;
  }
}