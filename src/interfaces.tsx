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

export interface filterObj {
    field: string;
    value: string;
}


export interface IdeaGroupDef {
    id: number;
    idea_group_name: string;
    idea_name1: string;
    idea_effect1: string;
    idea_name2: string;
    idea_effect2: string;
    idea_name3: string;
    idea_effect3: string;
    idea_name4: string;
    idea_effect4: string;
    idea_name5: string;
    idea_effect5: string;
    idea_name6: string;
    idea_effect6: string;
    idea_name7: string;
    idea_effect7: string;
    bonus: string;
    idea_mana_type: string;
}