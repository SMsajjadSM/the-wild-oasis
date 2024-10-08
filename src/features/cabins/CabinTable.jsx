import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import styled from "styled-components";
import CabinRow from "./CabinRow";
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
const Table = styled.div`
  border: 1px solid var(--color-gray-200);
  font-size: 1.4rem;
  background-color: var(--color-gray-0);
  border-radius: 7px;
  overflow: hidden;
`;

function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;

  console.log(error);
console.log(cabins);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div> </div>
        <div> cabin</div>
        <div> capacity</div>
        <div> price</div>
        <div> discount</div>
        <div> </div>
        
      </TableHeader>
      {cabins.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
    </Table>
  );
}
export default CabinTable;
