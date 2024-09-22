import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MonthlyReport} from "../services/interfaces.ts";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";

export default function DetailedReport({records}: { records?: MonthlyReport[] | undefined }) {
  const [selectedReport, setSelectedReport] = useState<number | string>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedReport(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth sx={{ marginTop: '20px' }}>
        <InputLabel id="monthly-report-select-label">Monthly Report</InputLabel>
        <Select
          labelId="monthly-report-select-label"
          id="monthly-report-select"
          value={selectedReport as string}
          onChange={handleChange}
          variant="outlined"
          label="Monthly Report"
        >
          {records ? records.map((report, index) => (
            <MenuItem key={index} value={index}>
              {`Year: ${report.year}, Month: ${report.month}, Total: ${report.totalAmount}`}
            </MenuItem>
          )) : null}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="Top 5 PL accounts">
          <TableHead>
            <TableRow>
              <TableCell>Best Practice PL account</TableCell>
              <TableCell align="right">Total amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records && records[selectedReport as number] && records[selectedReport as number]?.plAccounts ? records[selectedReport as number].plAccounts.map((rec) => (
              <TableRow
                key={rec.originalName}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {rec.originalName}
                </TableCell>
                <TableCell align="right">{rec.totalAmount}</TableCell>
              </TableRow>
            )) : <Typography>There are no transactions</Typography>}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}
