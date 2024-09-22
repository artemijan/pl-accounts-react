import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TopFiveReport} from "../services/interfaces.ts";
import {Typography} from "@mui/material";

export default function TopFiveTable({records}: { records: TopFiveReport[] | undefined }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="Top 5 PL accounts">
        <TableHead>
          <TableRow>
            <TableCell>Best Practice PL account</TableCell>
            <TableCell align="right">Total amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records ? records.map((rec) => (
            <TableRow
              key={rec.bestPracticeName}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {rec.bestPracticeName}
              </TableCell>
              <TableCell align="right">{rec.totalAmount}</TableCell>
            </TableRow>
          )) : <Typography>There are no transactions</Typography>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
