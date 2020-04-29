import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



var data = require('./data.json'); // forward slashes will depend on the file location

for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log("Key: " + obj.Key + ", Name: " + obj.Name);
}



const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(ticker, name, currPrice, sharesHeld, purchPrice, sector, chPercent, markVal, score) {
    return { ticker, name, currPrice, sharesHeld, purchPrice, sector, chPercent, markVal, score };
}

const rows = [
    createData('FB', 'FaceBook Inc', 187.90, 200, 180.00, 'Internet', 0.90, 1.90, 36000.00, 140.89, 0),
    createData('AAPL', 'Apple Inc', 212.08, 100, 190.12, 'Consumer', 1.90, 3.06, 32065.50, 120.89, 1),
    createData('ADBE', 'Adobe Inc', 309.87, 221, 305.55, 'Software', -1.31, -4.76, 32324.00, 130.78, 2),
    createData(' ', 'LKQ Corp', 29.08, 300, 32.00, 'Industrials', -1.6, -1.4, 21313.89, 66.09, 3),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ticker</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Current Price $</TableCell>
                        <TableCell align="right">Shares Held</TableCell>
                        <TableCell align="right">Purchase Price $</TableCell>
                        <TableCell align="right">Sector</TableCell>
                        <TableCell align="right">% Change</TableCell>
                        <TableCell align="right">Market Value $</TableCell>
                        <TableCell align="right">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.ticker}>
                            <TableCell component="th" scope="row">
                                {row.ticker}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.currPrice}</TableCell>
                            <TableCell align="right">{row.sharesHeld}</TableCell>
                            <TableCell align="right">{row.purchPrice}</TableCell>
                            <TableCell align="right">{row.sector}</TableCell>
                            <TableCell align="right">{row.chPercent}</TableCell>
                            <TableCell align="right">{row.markVal}</TableCell>
                            <TableCell align="right">{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}