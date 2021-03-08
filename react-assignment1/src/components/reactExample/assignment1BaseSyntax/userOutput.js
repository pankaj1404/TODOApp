function UserOutput(props) {
    const { username } = props;
    console.log(props)
    return (
        <>
       
            <p>Hello {username}</p>
            <p>this is 2nd paragraph</p>
        </>
    );

}
export default UserOutput;