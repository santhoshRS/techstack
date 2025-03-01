import { Box, Link, Typography } from "@mui/material";
import React from "react"
import techStackData from "./techStackData.json"
import { dataObject } from "./dataModel";

const DashboardPage: React.FC = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", }}>
            <Box sx={{ mt: 8 }}>

                {
                    techStackData.map((data: dataObject, index: number) => (
                        <Box key={index} sx={{ m: 4, flexDirection: "row", display: "flex" }}>
                            <i className={data.IconName} style={{ fontSize: "70px" }}></i>
                            <Box sx={{ flexDirection: "column", display: "flex", mt: 2 }}>
                                <Typography variant="h6" sx={{ ml: 2, color: "#000", fontSize: 16 }}>{data.Name}</Typography>
                                <Typography variant="h6" sx={{ ml: 2, color: "#000", fontSize: 12, width: "700px" }}>
                                    {data.Description}
                                </Typography>
                            </Box>
                            <Link target="_blank" sx={{ m: 3, cursor: "pointer" }} href={data.WebsiteURL}>Visit Website</Link>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
};

export default DashboardPage;