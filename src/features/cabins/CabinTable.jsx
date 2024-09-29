
import Spinner from "../../ui/Spinner"
import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

// v2
function CabinTable() {

const {isLoading,data:cabin,error} = useQuery({
  queryKey:['cabin'],queryFn:getCabins,
});
if(isLoading)return <Spinner/>
  console.log(cabin);
  console.log(error);
  
 return <div>
  dd
 </div>
 
}
export default CabinTable;
