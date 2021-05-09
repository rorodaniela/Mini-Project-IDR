import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@material-ui/core";

function Tabel(props) {
  return (
    <>
      <TableContainer style={{ maxHeight: "50vh" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {
                props.header?.map(item => {
                  return (
                    <>
                      <TableCell>{item}</TableCell>
                    </>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>              
            {
              props.data?.map(item => {
                return (
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        color='primary'
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.created_info}</TableCell>
                    <TableCell>{item.modified_info}</TableCell>
                    <TableCell>True</TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabel