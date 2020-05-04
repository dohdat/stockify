import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(ticker, description, sector, industry) {
    return { ticker, description, sector, industry };
}

const rows = [
    createData('FB', "Facebook is the world's largest online social network, with more than 2 billion monthly active users. Users engage with each others in different ways, exchanging messages and sharing news events, photos, and videos. On the video side, the firm is in the process of building a library of premium content and monetizing it via ads or subscription revenue. Facebook refers to this as Facebook Watch. The firm's ecosystem consists mainly of the Facebook app, Instagram, Messenger, WhatsApp, and many features surrounding these products. Users can access Facebook on mobile devices and desktop. Advertising revenue represents more than 90% of the firm's total revenue, with 50% coming from the U.S. and Canada, and 25% from Europe. With gross margins about 80%, Facebook operates at a 40%-plus margin.", "Technology", "Internet Content & Information"),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width="60%">Business description</TableCell>
                        <TableCell align="right">Sector</TableCell>
                        <TableCell align="right">Industry</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.ticker}>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.sector}</TableCell>
                            <TableCell align="left">{row.industry}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}