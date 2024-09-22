import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {getReport} from "../services/api.ts";
import CustomTable from "./Top5Table.tsx";
import {FinancialReport} from "../services/interfaces.ts";
import DetailedReport from "./DetailedReport.tsx";
import BestPracticeChart from "./BarChart.tsx";

export function DashboardContent({pathname}: { pathname: string }) {
  const [data, setData] = useState<FinancialReport | null>(null);

  useEffect(() => {
    getReport().then((response) => {
      setData(response.data)
    })
  }, []);
  switch (pathname) {
    case "/reports/top5":
      return <CustomTable records={data?.topFive}/>;
    case "/reports/grouped":
      return <DetailedReport records={data?.monthly}/>;
    case "/reports/charts":
      return <BestPracticeChart data={data?.topFive}/>
    case "/dashboard":
      return <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography>Here will be upload csv form</Typography>
      </Box>
    default:
      return <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography>This route is not implemented yet</Typography>
      </Box>
  }

}
