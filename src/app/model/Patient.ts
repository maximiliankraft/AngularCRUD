
export interface Identifier {
    id: string;
    use: string;
    type?: any;
    system: string;
    value: string;
    period?: any;
    assigner?: any;
}

export interface HumanName {
    id: string;
    use: string;
    text?: any;
    family: string;
    given: string[];
    prefix: string[];
    suffix: string[];
    period?: any;
}

export interface Period {
    id: string;
    start: Date;
    end: Date;
}

export interface Telecom {
    id: string;
    system: string;
    value: string;
    use: string;
    rank: number;
    period: Period;
}

export interface Period2 {
    id: string;
    start: Date;
    end: Date;
}

export interface Address {
    id: string;
    use: string;
    type: string;
    text?: any;
    line: string[];
    city: string;
    district: string;
    state: string;
    postalcode: string;
    country: string;
    period: Period2;
}

export const GENDER_OPTIONS = ["male" , "female" , "other" , "unknown"];

export interface Patient {
    id: string;
    text?: string;
    identifier: Identifier[];
    active: boolean;
    name: HumanName[];
    telecom: Telecom[];
    gender: "male" | "female" | "other" | "unknown";
    birthDate?: Date;
    deceasedBoolean: boolean;
    deceasedDateTime?: Date;
    address: Address[];
}

