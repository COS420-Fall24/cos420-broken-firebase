
export type roleType = "Instructor" | "Student" | "TA";

export interface person {
    fname: string;
    lname: string;
    role: roleType;
}