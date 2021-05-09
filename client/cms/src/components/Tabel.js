import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button
} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useEffect } from "react";

function Tabel(props) {

  useEffect(()=> {
  }, [props.data])

  const handleEdit = (id) => {
    props.edit(id)
  }

  const handleDelete = (id) => {
    props.delete(id)
  }

  const renderTableData = () => {
    return props.data.map((item, idx) => {
      if (props.page==='user') {
        const {id, username, manager, status} = item
        return (
          <TableRow key={id}>
            <TableCell>{username}</TableCell>
            <TableCell>{manager}</TableCell>
            <TableCell>{status? 'Active' : 'Deactive'}</TableCell>
            <TableCell>
              <Button onClick={()=> handleEdit(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                Edit
              </Button>
              <Button onClick={()=> handleDelete(id)} variant="contained" color="primary" startIcon={<DeleteOutlineIcon />}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        )
      } else if (props.page ==='customer') {
        const { id, name, created_info, modified_info, status } = item;
        return (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>{created_info}</TableCell>
            <TableCell>{modified_info}</TableCell>
            <TableCell>{status ? "Active" : "Deactive"}</TableCell>
            <TableCell>
              <Button onClick={()=> handleEdit(id)} variant="contained" color="primary" startIcon={<CreateIcon />}>
                Edit
              </Button>
              <Button onClick={()=> handleDelete(id)} variant="contained" color="primary" startIcon={<DeleteOutlineIcon />}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      }
    })

  }

  return (
    <>
      <TableContainer style={{ maxHeight: "50vh" }}>
        <Table stickyHeader>
          <TableHead>
            {/* <TableRow> {renderTableHeader()}</TableRow> */}
            <TableRow>
              {
                props.header?.map((item) => {
                  return <TableCell>{item}</TableCell>
                })
              }
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>  
            {renderTableData()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabel