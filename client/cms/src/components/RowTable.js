import { Tab, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"

function Row() {
  const data = [
    {
      username: 'Roro',
      company: 'perusahaan A'
    },
    {
      username: 'Rivan',
      company: 'perusahaan B'
    }
  ]

  return (
    <Table>
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map(cell => {
              console.log(cell, "<<< cell dari object keys");
              return (
                <TableCell>{cell}</TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map(item => {
            return (
              <TableRow>
                {
                  Object.values(item).map(cell => {
                    return (
                        <TableCell>{cell}</TableCell>
                    )
                  })

                }
              </TableRow>
            )
          })
        }
        <TableRow>

        </TableRow>
      </TableBody>
    </Table>
  )
}

export default Row