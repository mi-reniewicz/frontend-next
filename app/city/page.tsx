import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function CityPage() {

    let cities = [
        {
            name: "Łódź",
            status: false,
            teachersNo: 18,
            studentsNo: 68
        },
        {
            name: "Poznań",
            status: false,
            teachersNo: 16,
            studentsNo: 52
        },
        {
            name: "Wyszków",
            status: true,
            teachersNo: 5,
            studentsNo: 29
        },
        {
            name: "Warszawa",
            status: true,
            teachersNo: 23,
            studentsNo: 71.5
        }
]

    return (
        <>
            <Table>
                <TableCaption>Lista miast obsługiwanych przez system.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Liczba Nauczycieli</TableHead>
                        <TableHead className="text-right">Liczba Uczniów</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        cities.map((city, index)=> {
                           return (
                               <TableRow key={index}>
                                   <TableCell className="font-medium">{city.name}</TableCell>
                                   <TableCell>{city.status?"🟢":"🔴"}</TableCell>
                                   <TableCell className="text-right">{city.teachersNo}</TableCell>
                                   <TableCell className="text-right">{city.studentsNo}</TableCell>
                               </TableRow>
                           )
                        })
                    }
                </TableBody>
            </Table>
        </>
    )
}