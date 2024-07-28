// src/models/Profile.ts

import { Hobby } from './Hobbys';
import { ProgrammingLanguage } from './Language';

/**
   * Creates a new Profile instance.
   * @param name - The name of the person.
   * @param title - The professional title or role of the person.
   * @param about - A short description about the person.
   * @param skills - An array of key skills of the person.
   * @param hobbies - An array of hobbies of the person.
   * @param contact - The contact information of the person.
   */



export class Profile {
  private static instance: Profile | null = null;

  private constructor(
    private name: string,
    private title: string,
    private about: string,
    private skills: string[],
    private languages: ProgrammingLanguage[],
    private hobbies: Hobby[],
    private contact: {
      email: string;
      phone?: string;
      website?: string;
    }
  ) { }

  // Singleton instance getter
  public static getInstance (): Profile {
    if (this.instance === null) {
      // Initialize the singleton instance here, for example purposes
      const photography = new Hobby('Photography', 'Capturing moments and exploring creative compositions', 3);
      const hiking = new Hobby('Hiking', 'Enjoying nature and staying active', 2);

      const javascript = new ProgrammingLanguage('JavaScript', 'Advanced', 5, ['My Portfolio Website', 'E-commerce Application'], 'Experienced with React, Vue.js, and Node.js');
      const python = new ProgrammingLanguage('Python', 'Intermediate', 2, ['Data Analysis Project'], 'Familiar with Pandas and Scikit-learn');


      this.instance = new Profile(
        'John Doe',
        'Software Engineer',
        'Passionate about creating user-friendly applications...',
        ['JavaScript', 'Vue.js', 'Python'],
        [javascript, python],
        [photography, hiking],
        {
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          website: 'https://johndoe.com'
        }
      );
    }
    return this.instance;
  }

  // Getters for accessing properties
  getName (): string {
    return this.name;
  }

  getTitle (): string {
    return this.title;
  }

  getAbout (): string {
    return this.about;
  }

  getSkills (): string[] {
    return this.skills;
  }

  getLanguages (): ProgrammingLanguage[] {
    return this.languages;
  }

  getHobbies (): Hobby[] {
    return this.hobbies;
  }

  getContact (): { email: string; phone?: string; website?: string } {
    return this.contact;
  }
}