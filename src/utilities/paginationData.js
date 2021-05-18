import _ from 'lodash'
//(items) lodash convers array to lodash object, .take and .value are lodash methods to help cut array in specific chunk and return the array back in normal form 
export function Paginate(items, pageNumber,pageSize){
let startIndex = (pageNumber-1)*pageSize;
return _(items).slice(startIndex).take(pageSize).value()
}



