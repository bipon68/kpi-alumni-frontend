import { TableBody, TableHead, TableRow } from "@/lib/ui/table";
import React from "react";
import { dummyEventData } from "./tableDummyData";

const TableBodyComp: React.FC = () => {
    return (
        <TableBody>
            {dummyEventData.map((event, index) => (
                <TableRow key={index}>
                    <TableHead>img</TableHead>
                    <TableHead>{event.eventId}</TableHead>
                    <TableHead>{event.title}</TableHead>
                    <TableHead>{event.description}</TableHead>
                    <TableHead>{event.eventDateTime}</TableHead>
                    <TableHead>{event.location}</TableHead>
                    <TableHead>{event.eventStatus}</TableHead>
                </TableRow>
            ))
            }
        </TableBody >
    );
};

export default TableBodyComp;
