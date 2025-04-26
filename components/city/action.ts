import {City} from "@/types/City";

export interface CitiesControllerInterface {
    id: string;
    name: string;
    status: boolean;
    teachersNo: number;
    studentsNo: number;
}

//CRUD
export function fetchCity(id:string) : Promise<CitiesControllerInterface>
{

}

export function addCity(city : City) : Promise<CitiesControllerInterface>
{

}

export function updateCity(city : City) : Promise<CitiesControllerInterface>
{

}

export function removeCity(city : City) : Promise<CitiesControllerInterface>
{

}