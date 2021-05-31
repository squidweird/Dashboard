import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, InvoiceID, paymentMethod, amount, status) {
  return { id, date, InvoiceID, paymentMethod,  amount, status };
}

const rows = [
  createData(0, '31 May, 2021', 'MA7X3479459', 'VISA ⠀•••• 3719', 312.44, 'Success' ),
  createData(1, '31 May, 2021', 'MA7X3479459', 'VISA ⠀•••• 2574', 866.99, 'Success'),
  createData(2, '31 May, 2021', 'MA7X3479459', 'MC ⠀•••• 1253', 100.81, 'Success'),
  createData(3, '31 May, 2021', 'MA7X3479459', 'AMEX ⠀•••• 2000', 654.39, 'Success'),
  createData(4, '31 May, 2021', 'MA7X3479459', 'VISA ⠀•••• 5919', 212.79, 'Success'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2>Recent Transactions</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Invoice ID</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.InvoiceID}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}