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
      const photography = new Hobby('Photography', 'Capturing moments and exploring creative compositions', 3);
      const hiking = new Hobby('Hiking', 'Enjoying nature and staying active', 2);
      const gaming = new Hobby('Gaming', 'Competitive and strategic gameplay', 4);

      const python = new ProgrammingLanguage('Python', 'Advanced', 5, ['Data Analysis Tool', 'Machine Learning Model'], 'Experienced with Pandas, Scikit-learn, TensorFlow');
      const javascript = new ProgrammingLanguage('JavaScript', 'Advanced', 5, ['E-commerce Platform', 'Real-time Chat Application'], 'Proficient with React, Node.js, Vue.js');
      const java = new ProgrammingLanguage('Java', 'Intermediate', 3, ['Banking System', 'E-commerce Backend'], 'Good knowledge of Spring Framework and Hibernate');
      const kotlin = new ProgrammingLanguage('Kotlin', 'Intermediate', 2, ['Android Mobile App'], 'Experience with Android development');
      const dart = new ProgrammingLanguage('Dart', 'Advanced', 4, ['Cross-platform Mobile App'], 'Skilled in Flutter framework');

      this.instance = new Profile(
        'Joel Leimbacher',
        'Fullstack Engineer',
        'I am currently working as a Fullstack Engineer with a strong background in application development. My passion for software development was further fueled by the Young Talents Hackathon. I am particularly enthusiastic about web, mobile, and software development. Recently, I completed an online course from Harvard on Dart and Flutter. My current project is a Flutter app that showcases my expertise and creativity. I am looking for new opportunities to apply my skills and learn from industry experts.',
        ['File Management', 'Swing', 'GUI Development', 'Fullstack Development', 'Cloud Computing', 'DevOps'],
        [python, javascript, java, kotlin, dart],
        [photography, hiking, gaming],
        {
          email: 'joelbern006@gmail.com',
          phone: '0787058669',
          website: 'https://joelleimbacher.tech'
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
