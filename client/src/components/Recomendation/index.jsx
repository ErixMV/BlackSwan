import { useEffect, useState } from "react"
import axios from "axios"
import "./recomendation.css"

import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Recomendation = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState(true);
    const [dataBooks, setData] = useState([])

    const getBooks = async () => {
        const { data } = await axios.get("/api/books");
        setData(data.data)
    }

    useEffect(() => {
        getBooks();
    }, []);

    const handleToggle = () => {
        setChecked(!checked);
    };

    const BootstrapButton = withStyles({
        root: {
            backgroundColor: "rgb(226,59,27)",
            fontSize: 16,
            padding: "auto 10px"
        }
    })(Button)

    return (
        <div className="outer-rec">
            <main className="rec">
                <div className="rec-l" style={{ height: checked ? "fit-content" : "auto" }}>
                    <div className="form-title">
                        <span className="f-title">Get recommendations</span>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div className="input-container">
                            {/* <label htmlFor="">Book #1</label> */}
                            <Autocomplete
                                id="combo-box-demo"
                                options={dataBooks}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300, padding: "12px 0px" }}
                                renderInput={(params) => <TextField {...params} label="Book #1" variant="outlined" />}
                            />
                        </div>
                    </form>
                    <div className="btn-s-container">
                        <BootstrapButton className="btn-s" onClick={handleToggle} variant="outlined" disableElevation>
                            Get Result
                        </BootstrapButton>
                    </div>
                </div>
                <div className={checked ? "collapse" : "rec-r"}>
                    <div className="form-title" style={{ overflow: "hidden", minWidth: "200px" }}>
                        <span className="f-title">Nuestras recomendaciones</span>
                    </div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                    <StyledTableCell align="right">Calories</StyledTableCell>
                                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </main>
        </div>
    );
};

export default Recomendation;
