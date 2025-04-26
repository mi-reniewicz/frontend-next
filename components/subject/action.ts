import {Subject} from "@/types/Subject";

export interface SubjectsControllerInterface {
    id: string;
    name: string;
    status: boolean;
    teachersNo: number;
    studentsNo: number;
}

//CRUD
export function fetchSubject(id:string) : Promise<SubjectsControllerInterface>
{

}

export function addSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}

export function updateSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}

export function removeSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}