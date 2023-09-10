
// Component that will return an
// unordered list
function Navmenu(props)
{
    const list = props.menuitems;
 
    const updatedList = list.map((listItems)=>{
        
        return <li>{listItems}</li>;

        // return(
        //     <li key={listItems.toString()}>
        //         {listItems}
        //     </li>
        // );
    });
 
    return(
        <ul>{updatedList}</ul>
    );
}
 
const menuItems = [1,2,3,4,5];
 
export default Navmenu;