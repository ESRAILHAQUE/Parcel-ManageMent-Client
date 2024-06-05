function ParcelTabular({ index, parcel }) {
    const { name, phoneNumber, price, bookingDate, Status, deliveryDate } =
      parcel;
    console.log(parcel)
  return (
    <tr className="hover">
      <th>{index}</th>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{bookingDate}</td>
      <td>{deliveryDate}</td>

          <td>{price}</td>
          <td>{Status}</td>
          <td><button className="btn bg-orange-400">Manage</button></td>
    </tr>
  );
}
export default ParcelTabular