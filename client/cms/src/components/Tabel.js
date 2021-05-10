import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  makeStyles,
  Paper,
  withStyles
} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserByID } from "../store/actions/userAction";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const useStyles = makeStyles((theme) => ({
  actionButton:{
    margin: theme.spacing(0.3),
    width: '7vw'
  },
  table: {
    height: '65vh'
  },
  tableHead: {
    backgroundColor: 'black'
  }
}))
function Tabel(props) {
  const dispatch = useDispatch()
  const classes = useStyles()
  useEffect(()=> {
  }, [props.data])
  const handleEdit = (id) => {
    dispatch(getUserByID(id))
    props.edit(id)
  }

  const handleDelete = (id) => {
    props.delete(id)
  }

  const renderTableData = () => {
    if (props.data.length > 0) {
      return props.data.map((item, idx) => {
        if (props.page==='user') {
          const {id, username, manager, status, Company} = item
          return (
            <StyledTableRow key={id}>
              <Checkbox></Checkbox>
              <TableCell align='center' >{username}</TableCell>
              <TableCell align='center' >{Company.name}</TableCell>
              <TableCell align='center' >{manager}</TableCell>
              <TableCell align='center' >{status? 'Active' : 'Deactive'}</TableCell>
              <TableCell align='center' >
                <Button size='small' className={classes.actionButton} onClick={()=> handleEdit(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                  Edit
                </Button>
                <Button size='small' className={classes.actionButton} onClick={()=> handleDelete(id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                  Delete
                </Button>
              </TableCell>
            </StyledTableRow>
          )
        } else if (props.page ==='customer' && item.User) {
          const { id, name, User, created_info, modified_info, status } = item;
          return (
            <StyledTableRow key={id}>
              <Checkbox></Checkbox>
              <TableCell align='center'>{name}</TableCell>
              <TableCell align='center'>{User.username}</TableCell>
              <TableCell align='center'>{User.Company.name}</TableCell>
              <TableCell align='center'>{created_info}</TableCell>
              <TableCell align='center'>{modified_info}</TableCell>
              <TableCell align='center'>
                {status ? "Active" : "Deactive"}
              </TableCell>
              <TableCell align='center'>
                <Button
                  size='small'
                  className={classes.actionButton}
                  onClick={() => handleEdit(id)}
                  variant='contained'
                  color='primary'
                  startIcon={<CreateIcon />}
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  className={classes.actionButton}
                  onClick={() => handleDelete(id)}
                  variant='contained'
                  color='secondary'
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </StyledTableRow>
          );
        } else if (props.page === 'business'){
          const { id, name, parent, createdAt, updatedAt } = item;
          return (
            <StyledTableRow key={id}>
              <TableCell align='center'>{name}</TableCell>
              <TableCell align='center'>{parent}</TableCell>
              <TableCell align='center'>{createdAt}</TableCell>
              <TableCell align='center'>{updatedAt}</TableCell>
            </StyledTableRow>
          );
        }
      })
    } else {
      return (
        <StyledTableRow>
          <TableCell colSpan={6} align='center'>No Data Entries.</TableCell>
        </StyledTableRow>
      )
    }

  }

  return (
    <Paper className={classes.table}>
      <TableContainer style={{ maxHeight: "50vh" }}>
        <Table stickyHeader size='small'>
          <TableHead className={classes.tableHead}>
            <StyledTableRow>
              {
                props.page === 'business' ? (
                  <></>
                  ) : (
                    <StyledTableCell></StyledTableCell>
                )
              }
              {
                props.header?.map((item) => {
                  return <StyledTableCell align='center' >{item}</StyledTableCell>
                })
              }
              {
                props.page === 'business' ? (
                  <></>
                  ) : (
                    <StyledTableCell align='center' >ACTION</StyledTableCell>
                )
              }
            </StyledTableRow>
          </TableHead>
          <TableBody>  
            {renderTableData()}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Tabel