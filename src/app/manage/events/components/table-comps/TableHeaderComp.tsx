import { TableHead, TableHeader, TableRow } from "@/lib/ui/table";
import React from "react";

const TableHeaderComp: React.FC = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px] text-primary font-medium text-left">Banner</TableHead>
                <TableHead className="w-[100px] text-primary font-medium text-left">Event ID</TableHead>
                <TableHead className="w-[175px] text-primary font-medium text-left">Title</TableHead>
                <TableHead className="w-[300px] text-primary font-medium text-justify">Description</TableHead>
                <TableHead className="w-[256px] text-primary font-medium text-left">Event Time</TableHead>
                <TableHead className="w-[200px] text-primary font-medium text-left">Location/Link</TableHead>
                <TableHead className="w-[100px] text-primary font-medium text-left">Status</TableHead>
            </TableRow>
        </TableHeader>
    );
};

export default TableHeaderComp;
