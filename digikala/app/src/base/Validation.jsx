const Validation = ({thisVal,thisIsValid,thisValid}) => {
    return (
        <>
            {thisVal ?
                (thisIsValid ?
                    <p className='text-danger'>{thisValid}</p>
                    :
                    <p>{thisValid}</p>
                )
                :
                <p className='d-block'><span className='text-danger'>*</span>&nbsp;لطفا این قسمت را خالی نگذارید.</p>
            }

        </>
    );
}
export default Validation;