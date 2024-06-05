function TabularUser({ user, index }) {
    const { name, phoneNumber } = user;
    console.log(user)
  return (
    <tr>
      <th>{index}</th>
      <td>{user.name}</td>
      <td>Phone Number</td>
      <td>Blue</td>
    </tr>
  );
}
export default TabularUser