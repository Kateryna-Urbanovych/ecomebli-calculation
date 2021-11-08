import React from "react";
import {Table} from "reactstrap";

export const StyledTable = ({head, rows}) => {
    return(
        <>
            <Table>
                <thead>
                <tr>
                    {
                        Object.keys(head).map((item, key) => <th key={key}>{head[item].name}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </>
    )
}