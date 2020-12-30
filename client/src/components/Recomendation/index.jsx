import "./recomendation.sass";

import { useEffect, useState } from "react";

import axios from "axios";
import Media from 'react-media';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { BookCard } from './BookCard';


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

export const Recomendation = () => {

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
        <main id="recomendation">
            <div className="block content w-65 form">
                <div className="section-title-container">
                    <h2 className="section-title">Get your own recommendations</h2>
                </div>
                <div className="form-container">
                    <form noValidate autoComplete="off">
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
                </div>
                {!checked &&
                    <div className={checked ? "collapse" : "black-content rec-r"}>
                        <div className="section-title-container" style={{ overflow: "hidden", minWidth: "200px" }}>
                            <h2 className="section-title">Nuestras recomendaciones</h2>
                        </div>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
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
            </div>

            <div className="block-content w-65 top-rated">

                <div className="section-title-container">
                    <h2 className="section-title">Top Rated</h2>
                </div>

                <div className="flex-books">
                    <BookCard title="The Da Vinci Code" imgName="thedavincicode" />
                    <BookCard title="Wild Animus" imgName="wildanimus" />
                    <Media query="(max-width:1078px)" render={() => (<div className="break"></div>)} />
                    <BookCard title="A Painted House" imgName="apaintedhouse" />
                    <BookCard title="The Red Tent" imgName="theredtent" />
                    {/* <img src="/images/books/thelovelybonesanovel.jpg" className="book-cover" alt=""/> */}
                </div>
            </div>

            <div className="block-content w-65 about-project">
                <div className="section-title-container">
                    <h2 className="section-title">The Black Swan Project</h2>
                </div>
                <div className="project-text">
                    <p>
                        This project is the result of two weeks of hard work by all the members of the team.
                        As a team, we have learned a wide variety of skills, from programming and statistics to time management and work distribution.
                    </p>
                    <p>
                        The Black Swan is presented as a final project for the IA & Machine Learning course
                        directed by Fundación Esplai and financed by the SOC (Servei d'Ocupació de Catalunya) and the European Social Fund.
                    </p>
                    <p>

                        We thank all the institutions and people who have participated
                        in the realization of this course and all the resulting projects.
                    </p>
                </div>
                <div className="flex-orgs">
                    <img src="/images/recomendations/fundacio.png" alt="" />
                    <img src="/images/recomendations/european.png" alt="" />
                    <div className="break"></div>
                    <img src="/images/recomendations/soc.jpg" alt="" />
                </div>
            </div>
        </main>
    );
}