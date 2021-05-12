const cekRole = (user, roleDetails, item, action, entity) => {
  let valueRole;
  let company = item.Company;

  if (entity === 1 && item.User) {
    company =  item.User.Company
  }

  roleDetails?.map((role) => {
    if (action === role.ActionId && role.EntityId === entity) {
      valueRole = role.valueRole;
    }
  });

  switch (valueRole) {
    case 4:
      return true;
    case 3:
      if (user.Company.parent === "none") {
        return true;
      } else {
        if (
          company.parent === user.Company.parent ||
          company.name === user.Company.parent ||
          company.parent === user.Company.name
        ) {
          return true;
        }
      }
    case 2:
      if (company.name === user.Company.name) {
        return true;
      }
    case 1:
      if (item.id === user.id) {
        return true;
      }
    default:
      return false;
  }

};

export default cekRole