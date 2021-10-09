interface UnallocatedProps {
    unallocated: number;
};

export const Unallocated = (props: UnallocatedProps) => {
    return (
        props.unallocated > 0 
        ?
        <div style={{display:'flex', flexDirection:'row'}}>
            <Tile title={"Others"} value={props.unallocated+""}/>
            <p>You have {props.unallocated} INR not allocated to any category. This amount is shown in Others category.</p>
        </div>
        :
        <></>
    );
}

interface TileProps {
    title: string;
    value: string;
}

const Tile = (props: TileProps) => {
    return(
        <div style={{ backgroundColor:'white',width:'30vw', display:'flex', alignItems:'center', flexDirection:'column', justifyContent: 'center'}}>
            <div style={{fontSize:'5vh'}}>{props.title}</div>
            <div>{props.value}</div>
        </div>
    );
}