import { useEffect, useState } from "react"
import axios from "axios"
import "./recomendation.css"

import Media from 'react-media';

import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const Recomendation = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState(true);
    const [dataBooks, setData] = useState([])
    const [arrBooks, setArrBooks] = useState([])
    const [rowsRec, setRowsRec] = useState()

    // API: Getting book data
    const getBooks = async () => {
        const { data } = await axios.get("/api/books");
        //For Autocomplete component displaying
        setData(data.data)

        let arrTitles = []
        for (let book in data.data) {
            arrTitles.push(data.data[book].title);
        }
        // For Verify an existent book
        setArrBooks(arrTitles)
    }

    // On render
    useEffect(() => {
        getBooks();
    }, []);

    //
    const getRecomendations = async innerHTML => {
        setRowsRec([])
        setChecked(true);
        const { data } = await axios({
            method: "post",
            url: "/api/recomend",
            data: {
                book: innerHTML
            }
        });
        let rowsD = []
        for (let x in data.data) {
            rowsD.push({ book: data.data[x] })
        }
        setRowsRec(rowsD)
        setChecked(false);

    }

    const changeHandler = async event => {
        const { innerHTML } = event.target;
        if (arrBooks.includes(innerHTML)) {
            await getRecomendations(innerHTML)
        } else {
            setChecked(true)
        }
    }

    return (
        <div className="outer-rec" style={{ marginTop: "50px" }}>
            <main className="rec section">
                <div className="rec-l" style={{ height: checked ? "fit-content" : "auto" }}>
                    <div className="outer-section-title">
                        <h2 className="section-title">Get your own recommendations</h2>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div className="input-container">
                            {/* <label htmlFor="">Book #1</label> */}
                            <Autocomplete
                                name="book"
                                id="combo-box-demo"
                                options={dataBooks}
                                autoComplete
                                autoHighlight
                                clearOnEscape
                                onChange={changeHandler}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300, padding: "12px 0px" }}
                                renderInput={(params) => <TextField name="book"  {...params} label="Select a book..." variant="outlined" />}
                            />
                        </div>
                    </form>
                    <div className="btn-s-container">
                    </div>
                </div>
                {!checked &&
                    <div className={checked ? "collapse" : "rec-r"}>
                        <div className="form-title" style={{ overflow: "hidden", minWidth: "200px" }}>
                            <span className="f-title">Nuestras recomendaciones</span>
                        </div>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Book Title</StyledTableCell>
                                        {/* <StyledTableCell align="right">Calories</StyledTableCell>
                                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsRec.map((row) => (
                                        <StyledTableRow key={row.book}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.book}
                                            </StyledTableCell>
                                            {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                }
            </main>

            

            <div className="block-content"  style={{width: "100%", background: "#F0F1F4", padding: "20px 17.5% 40px", marginTop: "100px"}}>
                <div className="outer-section-title">
                    <h2 className="section-title">Top Rated</h2>
                </div>
                <div className="books-row">
                    <div>
                        <img src="/images/books/thedavincicode.jpg" className="book-cover" alt="" />
                    </div>
                    <div>
                        <img src="/images/books/wildanimus.jpg" className="book-cover" alt="" />
                    </div>

                    <Media query="(max-width:1200px)" render={() => (<div className="break"></div>)} />

                    <div>
                        <img src="/images/books/apaintedhouse.jpg" className="book-cover" alt="" />
                    </div>
                    <div>
                        <img src="/images/books/theredtent.jpg" className="book-cover" alt="" />
                    </div>
                    {/* <img src="/images/books/thelovelybonesanovel.jpg" className="book-cover" alt=""/> */}
                </div>
                <div className="article-footer c-link-rec">
                    {/* <CustomBtn to="/recomendation" className="button2">hola</CustomBtn> */}
                    
                </div>
            </div>

        </div>
    );
};

export default Recomendation;
