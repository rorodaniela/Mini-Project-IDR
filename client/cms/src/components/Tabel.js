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
import { useDispatch, useSelector } from "react-redux";
import { getUserByID } from "../store/actions/userAction";
import {useHistory} from 'react-router-dom'
import { getRoleDetail } from "../store/actions/roleAction";
import cekRole from '../assets/helpers/checkRole'
import {cekToken} from '../assets/helpers/jwt'

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
  const checkRole = cekRole
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()

  const {user} = useSelector((state) => state.user)
  const {roleDetails} = useSelector((state) => state.role)

  useEffect(()=> {
    if (localStorage.length > 0) {
      const token = cekToken(localStorage.access_token)
      dispatch(getUserByID(token.id))
      dispatch(getRoleDetail())
    } else {
      history.push("/login");
    }
  }, [props.data])

  const handleEdit = (id) => {
    dispatch(getUserByID(id))
    props.edit(id)
  }

  const handleDelete = (id) => {
    props.delete(id)
  }

  const handleDetail = (id) => {
    history.push(`/role/${id}`)
  }

  const renderTableData = () => {
    let access = {
      edit: false,
      delete: false
    }

    if (props.data.length > 0) {
      return props.data.map((item) => {
        const {id} = item
        if (props.page === 'user') {
          access.edit = checkRole(user, roleDetails, item, 3, 2)
          access.delete = checkRole(user, roleDetails, item, 4, 2)

        } else if (props.page ==='customer') {
          access.edit = checkRole(user, roleDetails, item, 3, 1)
          access.delete = checkRole(user, roleDetails, item, 4, 1)

        } 
        
        return (
            <StyledTableRow key={id}>
              {
                props.page !== 'business' ? <Checkbox></Checkbox> : <></>
              }
              
              {
                Object.values(item.data).map(cell => {
                  return (
                    <>
                      <TableCell align='center'>{cell === true ? 'active' : cell}</TableCell>
                    </>
                  )
                })
              }

              {
                props.page !== 'business' && props.page !== 'role' ? (
                  <TableCell align='center' >
                    {
                      access.edit === true? (
                        <>
                          <Button size='small' className={classes.actionButton} onClick={()=> handleEdit(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                            Edit
                          </Button>

                        </>
                      ) : (
                        <>
                          <Button disabled size='small' className={classes.actionButton} onClick={()=> handleEdit(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                            Edit
                          </Button>
                        </>
                      )
                    }
                    {
                      access.delete? (
                        <Button size='small' className={classes.actionButton} onClick={()=> handleDelete(id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                          Delete
                        </Button>
                      ) : (
                        <Button disabled size='small' className={classes.actionButton} onClick={()=> handleDelete(id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                          Delete
                        </Button>
                      )
                    }
                    
                  </TableCell>
                ) : (<></>)
              }

              {
                props.page === 'role' ? (
                  <TableCell align='center' >
                    <Button size='small' className={classes.actionButton} onClick={()=> handleDetail(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                      Detail
                    </Button>
                  </TableCell>
                ) : (<></>)
              }
            </StyledTableRow>
          )
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
                    <StyledTableCell align='center' >Action</StyledTableCell>
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