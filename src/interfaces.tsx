export interface NationDef {
    id: number;
    nation: string;
    tag: string;
    culture: string;
    culture_group: string;
    religion: string;
    tech: string;
    national_idea: string;
}

export interface NationIdea {
    id: number;
    // Tags due to the possibility of shared national ideas. Will be an unspaced comma-separated list (e.g. ONE,TWO,THR,FOU...)
    tags: string;
    title: string;
    traditions: string;
    idea_one_title: string;
    idea_one: string;
    idea_two_title: string;
    idea_two: string;
    idea_three_title: string;
    idea_three: string;
    idea_four_title: string;
    idea_four: string;
    idea_five_title: string;
    idea_five: string;
    idea_six_title: string;
    idea_six: string;
    idea_seven_title: string;
    idea_seven: string;
    ambition: string;
}