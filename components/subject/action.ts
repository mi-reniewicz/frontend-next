import {createClient} from "@/utils/supabase/client";
import {Subject} from "@/types/Subject";

export interface SubjectsControllerInterface {
    subjects: Subject[] | null;
    error: Error | null;
}

//CRUD
export async function fetchSubjects(): Promise<SubjectsControllerInterface> {
    const supabase = createClient();

    const query = supabase
        .from('subjects')
        .select('*')

    const {data: subjects, error} = await query;
    return {subjects, error};
}


export function fetchSubject(id:string) : Promise<SubjectsControllerInterface>
{

}

export function addSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}

export function updateSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}

export function removeSubject(subject : Subject) : Promise<SubjectsControllerInterface>
{}